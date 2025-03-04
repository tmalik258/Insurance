from django.core.exceptions import ObjectDoesNotExist

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken

from .serializers import LoginSerializer, RegisterSerializer

class LoginViewset(ViewSet):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]
    http_method_names = ["post"]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(serializer.validated_data, status=status.HTTP_200_OK)


class RefreshViewSet(ViewSet, TokenRefreshView):
    http_method_names = ["post"]
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(serializer.validated_data, status=status.HTTP_200_OK)


class RegisterViewSet(ViewSet):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
    http_method_names = ["post"]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        res = {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

        # Optional: Send confirmation email (you can implement this if needed)
        # self.send_confirmation_email(user)

        return Response(
            {
                "user": serializer.data,
                "refresh": res["refresh"],
                "access": res["access"],
            },
            status=status.HTTP_201_CREATED,
        )

    # Optional method for email confirmation (if you want to add it)
    # def send_confirmation_email(self, user):
    #     token = PasswordResetTokenGenerator().make_token(user)
    #     uid = urlsafe_base64_encode(force_bytes(user.pk))
    #     confirmation_link = f"http://localhost:3000/confirm-email/{uid}/{token}"
    #     send_mail(
    #         "Confirm Your Email",
    #         f"Click the link to confirm your email: {confirmation_link}",
    #         settings.DEFAULT_FROM_EMAIL,
    #         [user.email],
    #         fail_silently=True,
    #     )


class LogoutView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_200_OK)
        except (ObjectDoesNotExist, TokenError):
            return Response(status=status.HTTP_400_BAD_REQUEST)
