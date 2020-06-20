from django.core.serializers import json
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ItemSerializer

from .models import Item


class Index(TemplateView):
    template_name = 'index.html'


class ItemView(APIView):
    def get(self, request):
        records = Item.objects.all()
        data = ItemSerializer(records, many=True).data
        return Response(data)

    def post(self, request):
        name = request.POST['name']
        description = request.POST['description']
        threshold_of_success = request.POST['threshold_of_success']
        cat = request.POST['categories']
        img = request.FILES.get('images[]')
        item = Item(name=name,
                    description=description,
                    threshold_of_success=threshold_of_success,
                    images=img,
                    is_passed=False,
                    author_id=1,
                    categories=cat)
        item.save()
        return redirect('/')




