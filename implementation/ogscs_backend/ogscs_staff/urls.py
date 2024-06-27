from django.urls import path
from . import views

urlpatterns = [
    path('login-staff', views.loginStaff),
    path('register-staff', views.registerStaff),
]