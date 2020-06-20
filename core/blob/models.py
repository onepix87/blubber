import json

from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
from django.db import models
from account.models import Profile
import datetime as dt


class Item(models.Model):
    name = models.CharField(max_length=255, default='Default')
    images = models.ImageField(upload_to='media/')
    description = models.TextField(default='some description')
    categories = models.TextField()
    likes_count = models.IntegerField(default=10)
    dislikes_count = models.IntegerField(default=0)
    author = models.ForeignKey(Profile, on_delete=models.DO_NOTHING)
    dayOfCreation = models.DateField(default=dt.datetime.today())
    dayOfEnding = models.DateField(default=dt.datetime.today())
    threshold_of_success = models.IntegerField(default=50)
    is_passed = models.BooleanField(default=None)
    status = models.IntegerField(default=-1)
    achievements = JSONField(default=json.dumps({'achievements': [
        {
            'id': 0,
            'title': "Создание",
            'description': "Вы разместили свою идею на портале!"
        },
        {
            'id': 1,
            'title': "Первый лайк",
            'description': "Ого, первый заинтересовавшийся! Дальше - больше!"
        },
        {
            'id': 2,
            'title': "Первый комментарий",
            'description': "У кого-то появились мысли по поводу вашей идеи, читайте скорее!"
        },
        {
            'id': 3,
            'title': "10 лайков",
            'description': "Разгоняемся!"
        }
    ]}))
    team = JSONField(default=json.dumps({'team': [1, 2, 3]}))


class Likes(models.Model):
    record = models.ForeignKey(Item, on_delete=models.CASCADE)
    profile = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    status = models.IntegerField()


class Comment(models.Model):
    record = models.OneToOneField(Item, on_delete=models.DO_NOTHING)
    comment = models.TextField()
    comment_author = models.OneToOneField(Profile, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.comment[0:20]
