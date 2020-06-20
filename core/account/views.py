from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response

from .models import Profile
from .serializers import UserSerializer
from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')


@csrf_exempt
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        try:
            user = User.objects.get(username=username)
            pwd_valid = check_password(password, user.password)
            if pwd_valid:
                pr = Profile.objects.get(user=user)
                d = {'username': user.username,
                     'id': user.id,
                     'first_name': user.first_name,
                     'last_name': user.last_name,
                     'email': user.email,
                     'buildings_num': pr.building_num,
                     'department_num': pr.department_num}
                return JsonResponse(d)
            else:
                return HttpResponseNotFound('Password is not valid')

        except User.DoesNotExist:
            return HttpResponseNotFound('Login is not valid')
