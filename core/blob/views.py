from django.contrib.auth.models import User
from django.core.serializers import json
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ItemSerializer, CommentSerializer

from .models import Item, Comment, Likes

import json

@csrf_exempt
def act(request):
    data = json.loads(request.body.decode('utf8'))
    item = Item.objects.get(pk=data.get('idea_id'))
    user = User.objects.get(pk=data.get('userid'))
    if data.get('type') == 1:
        item.likes_count += 1
    elif data.get('type') == 1:
        item.dislikes_count += 1
    like = Likes(record=item, profile=user, status=data.get('type'))
    like.save()
    item.save()
    return redirect('/')


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
        author = request.POST['author']
        profile = User.objects.get(pk=author)
        img = request.FILES.get('images[]')
        item = Item(name=name,
                    description=description,
                    threshold_of_success=threshold_of_success,
                    images=img,
                    is_passed=False,
                    author_id=profile.id,
                    categories=cat)
        item.save()
        return redirect('/')


class CommentView(APIView):
    def get(self, request):
        comments = Comment.objects.all()
        data = CommentSerializer(comments, many=True).data
        return Response(data)

    def post(self, request):
        j = json.loads(request.body.decode('utf-8'))
        com = Comment(record=j.get('record'), comment=j.get('text'), comment_author=j.get('author'))
        com.save()
        return redirect('/')
