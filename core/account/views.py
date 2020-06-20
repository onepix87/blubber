from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.response import Response

from .serializers import UserSerializer
from django.shortcuts import render


# Create your views here.
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        try:
            user = User.objects.get(username=username)
            pwd_valid = check_password(password, user.password)
            if pwd_valid:
                data = UserSerializer(user).data
                return Response(data)
            else:
                return HttpResponse('Password is not valid')

        except User.DoesNotExist:
            return HttpResponse('Login is not valid')
