from django.db import models
from account.models import Profile
import datetime as dt


class Item(models.Model):
    name = models.CharField(max_length=255, default='Default')
    images = models.ImageField(upload_to='media/')
    description = models.TextField(default='some description')
    categories = models.TextField()
    likes_count = models.IntegerField(default=0)
    dislikes_count = models.IntegerField(default=0)
    author = models.ForeignKey(Profile, on_delete=models.DO_NOTHING)
    threshold_of_success = models.IntegerField(default=50)
    is_passed = models.BooleanField(default=None)
    status = models.IntegerField(default=-1)


class Likes(models.Model):
    record = models.OneToOneField(Item, on_delete=models.CASCADE)
    profile = models.OneToOneField(Profile, on_delete=models.DO_NOTHING)
    status = models.BooleanField()
