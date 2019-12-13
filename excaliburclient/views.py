# -*- coding: utf-8 -*-

from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.views import View
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from excaliburclient.metadata import generate_uuid, random_string
from excaliburclient.models import File


class LoginView(View):
    """
    View Used to login to the application
    """
    template_name = 'excaliburclient/login.html'

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated and request.user.is_active:
            return redirect('excaliburclient:home')
        else:
            return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('excaliburclient:home')
        else:
            return redirect('excaliburclient:signup')


class LogoutView(View):

    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect('excaliburclient:login')


class SignUpView(View):
    template_name = 'excaliburclient/signup.html'

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated and request.user.is_active:
            return redirect('excaliburclient:home')
        else:
            return render(request, self.template_name)
        

    def post(self, request, *args, **kwargs):
        first_name = request.POST.get('first_name')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = User.objects.create(first_name=first_name, email=email, username=username)
        user.set_password(password)
        user.save()
        # authenticating the user
        user = authenticate(username=user.username, password=password)
        if user is not None:
            login(request, user)
            return redirect('excaliburclient:home')
        else:
            return  redirect('excaliburclient:signup')


@method_decorator(login_required, name='dispatch')
class Home(View):
    template_name = 'excalibur-port/files.html'

    def get(self, request):
        files = File.objects.all()
        return render(request, self.template_name, context={'files_response': files})

    def post(self, request):
        print(request.FILES)
        pdf_file = request.FILES.get('file')
        file_id = generate_uuid()
        filename = pdf_file.name

        file_object = File(uploaded_file=pdf_file)
        file_object.filename = filename
        file_object.save()
        return redirect("/")

@method_decorator(login_required, name='dispatch')
class Job(View):
    template_name = 'excalibur-port/job.html'

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        pdf = request.FILES.get('file')


@method_decorator(login_required, name='dispatch')
class Jobs(View):
    template_name = 'excalibur-port/jobs.html'

    def get(self, request):
        return render(request, self.template_name)


@method_decorator(login_required, name='dispatch')
class Rules(View):
    template_name = 'excalibur-port/rules.html'

    def get(self, request):
        return render(request, self.template_name)


@method_decorator(login_required, name='dispatch')
class Workspace(View):
    template_name = 'excalibur-port/workspace.html'

    def get(self, request):
        return render(request, self.template_name)
