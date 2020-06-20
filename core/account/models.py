from django.contrib.auth.models import User
from django.db import models
from django.conf import settings
from django.db.models.signals import post_save


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING)
    building_num = models.IntegerField(default=0)
    department_num = models.IntegerField(default=5)

    def __str__(self):
        return 'id' + str(self.user_id)

    def create(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    post_save.connect(create, sender=User)
