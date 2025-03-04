from django.contrib.auth import get_user_model
from django.contrib.auth.models import update_last_login

from rest_framework import serializers

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings

from abstract.serializers import AbstractSerializer

User = get_user_model()

class UserSerializer(AbstractSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "bio",
            "is_active",
            "created",
            "updated",
        )
        read_only_field = ["is_active", "created", "updated"]


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = serializers.CharField()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields[self.username_field] = serializers.CharField()

    def validate(self, attrs):
        username_field = attrs.get(self.username_field)

        if username_field and '@' in username_field:
            # Try to authenticate with email
            try:
                user = User.objects.get(email=username_field)
                attrs['username'] = user.username  # Use the username for SimpleJWT
            except User.DoesNotExist:
                raise serializers.ValidationError("Invalid email or password")
        else:
            # Use username as is
            attrs['username'] = username_field

        return super().validate(attrs)


class LoginSerializer(CustomTokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data["user"] = UserSerializer(self.user).data
        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


class RegisterSerializer(UserSerializer):
    """
    Registration serializer for requests and user creation
    """
    password = serializers.CharField(
        max_length=128, min_length=8, write_only=True, required=True
    )
    user_type = serializers.ChoiceField(
        choices=User.USER_TYPE_CHOICES,
        default="individual"
    )

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "username",
            "first_name",
            "last_name",
            "primary_first_name",
            "primary_last_name",
            "user_type",
            "policy_number",
            "zip_code",
            "password",
        ]

    def create(self, validated_data):
        # Use the `create_user` method from UserManager to create a new user
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            user_type=validated_data.get("user_type", "individual"),
            first_name=validated_data.get("first_name", ""),
            last_name=validated_data.get("last_name", ""),
            primary_first_name=validated_data.get("primary_first_name", ""),
            primary_last_name=validated_data.get("primary_last_name", ""),
            policy_number=validated_data.get("policy_number", ""),
            zip_code=validated_data.get("zip_code", ""),
        )
        return user
