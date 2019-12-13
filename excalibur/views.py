from django.shortcuts import render, redirect
from django.views import View
from excalibur.metadata import generate_uuid, random_string
from excalibur.models import File


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


class Job(View):
    template_name = 'excalibur-port/job.html'

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        pdf = request.FILES.get('file')

class Jobs(View):
    template_name = 'excalibur-port/jobs.html'

    def get(self, request):
        return render(request, self.template_name)


class Rules(View):
    template_name = 'excalibur-port/rules.html'

    def get(self, request):
        return render(request, self.template_name)


class Workspace(View):
    template_name = 'excalibur-port/workspace.html'

    def get(self, request):
        return render(request, self.template_name)
