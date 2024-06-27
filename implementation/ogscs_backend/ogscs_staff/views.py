from django.shortcuts import render
from django.http import HttpResponse

def loginStaff(request):
    return HttpResponse("Welcome to Staff login page")


def registerStaff(request):
    return HttpResponse("Welcome to Staff account creation page")