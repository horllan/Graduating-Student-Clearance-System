from django.shortcuts import render
from django.http import HttpResponse

def loginStudent(request):
    return render(request, 'login.html', {})


def registerStudent(request):
    return render(request, 'register.html', {})


def dashboardStudent(request):
    return render(request, 'home.html', {})