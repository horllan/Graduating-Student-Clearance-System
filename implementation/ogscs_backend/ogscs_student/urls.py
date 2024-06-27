from django.urls import path
from . import views

urlpatterns = [
    path('home-student', views.dashboardStudent),
    path('login-student', views.loginStudent),
    path('register-student', views.registerStudent),
]