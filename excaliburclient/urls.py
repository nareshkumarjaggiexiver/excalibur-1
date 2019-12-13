from django.urls import path
from excaliburclient import views


urlpatterns = [
    path('signup/', views.SignUpView.as_view(), name="signup"),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name="logout"),
    path('job', views.Job.as_view(), name='job'),
    path('jobs', views.Jobs.as_view(), name='jobs'),
    path('workspace', views.Workspace.as_view(), name='workspace'),
    path('', views.Home.as_view(), name='home'),
]
