from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index),
    path('about', views.about),
    path('register', views.register),
    path('login', views.login),
]