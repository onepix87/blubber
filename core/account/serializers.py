from rest_framework import serializers

from django.contrib.auth.models import User
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
