from django.urls import path
from excalibur import views


urlpatterns = [
    path('', views.Home.as_view(), name='home'),
    path('job', views.Job.as_view(), name='job'),
    path('jobs', views.Jobs.as_view(), name='jobs'),
    path('workspace', views.Workspace.as_view(), name='workspace'),
]
