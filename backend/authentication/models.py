from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

from abstract.models import AbstractManager, AbstractModel


class UserManager(BaseUserManager, AbstractManager):
	"""
	Methods to create a user and a superuser
	"""
	def create_user(self, username, email, password=None, **kwargs):
		"""
		Create and return a `User` with an email, username and password.
		"""
		if username is None:
			raise TypeError('User must have a username.')
		if email is None:
			raise TypeError('User must have an email.')
		if password is None:
			raise TypeError('User must have a password.')

		user = self.model(username=username, email=self.normalize_email(email), **kwargs)
		user.set_password(password)
		user.save(using=self._db)

		return user
	
	def create_superuser(self, username, email, password=None, **kwargs):
		"""
		Create and return a `User` with superuser (admin) permissions.
		"""
		if password is None:
			raise TypeError('SuperUser must have a password.')
		if email is None:
			raise TypeError('SuperUser must have an email.')
		if username is None:
			raise TypeError('SuperUser must have a username.')
		
		user = self.create_user(username, email, password, **kwargs)
		user.is_superuser = True
		user.is_staff = True
		user.save(using=self._db)

		return user



class User(AbstractModel, AbstractBaseUser, PermissionsMixin):
	"""
	Custom User Model to include custom fields for individual and business users
	"""
	USER_TYPE_CHOICES = (
		("individual", "Individual"),
		("business", "Business"),
	)

	username = models.CharField(db_index=True, max_length=255, unique=True)
	first_name = models.CharField(max_length=255, blank=True, null=True)  # Optional for business
	last_name = models.CharField(max_length=255, blank=True, null=True)   # Optional for business
	primary_first_name = models.CharField(max_length=255)  # For both
	primary_last_name = models.CharField(max_length=255)   # For both
	email = models.EmailField(db_index=True, unique=True)
	user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default="individual")
	policy_number = models.PositiveIntegerField(max_length=20)
	zip_code = models.CharField(max_length=10)  # Use CharField for ZIP codes to handle formatting
	is_active = models.BooleanField(default=True)
	is_superuser = models.BooleanField(default=False)

	USERNAME_FIELD = "username"
	EMAIL_FIELD = "email"

	objects = UserManager()

	def __str__(self) -> str:
		return self.email

	@property
	def name(self):
		if self.user_type == "individual":
			return f"{self.primary_first_name} {self.primary_last_name}"
		return f"{self.first_name} {self.last_name}" if self.first_name and self.last_name else self.username
