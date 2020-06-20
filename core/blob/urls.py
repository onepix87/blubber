from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, re_path
from . import views
from .views import ItemView, Index, CommentView

urlpatterns = [
    path('', Index.as_view()),
    path('api/records/', ItemView.as_view()),
    path('api/records/action', views.act),
    path('api/comments/', CommentView.as_view()),
]
