from rest_framework import routers

from authentication.viewsets import LoginViewset, RegisterViewSet, RefreshViewSet

router = routers.SimpleRouter()


# ##################################################################### #
# ############################### AUTH ################################ #
# ##################################################################### #

router.register(r"auth/register", RegisterViewSet, basename="auth-register")
router.register(r"auth/login", LoginViewset, basename="auth-login")
router.register(r"auth/refresh", RefreshViewSet, basename="auth-refresh")

urlpatterns = [
    *router.urls,
]
