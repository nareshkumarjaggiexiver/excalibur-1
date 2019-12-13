# -*- coding: utf-8 -*-

from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.views import View
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from excaliburclient.metadata import generate_uuid, random_string
from excaliburclient.models import File


class LoginView(View):

    def get(self, request, *args, **kwargs):
        return render(request, 'excaliburclient/base.html')

class LogoutView(View):

    def get(self, request, *args, **kwargs):
        return render(request, 'excaliburclient/base.html')
   
class SignUpView(View):

    def get(self, request, *args, **kwargs):
        return render(request, 'excaliburclient/base.html')


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
