from rest_framework import serializers

from .models import Item
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
