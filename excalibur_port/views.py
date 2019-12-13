from django.shortcuts import render
from django.views import View


class Home(View):
    template_name = 'excalibur-port/files.html'

    def get(self, request):
        return render(request, self.template_name)


class Job(View):
    template_name = 'excalibur-port/job.html'

    def get(self, request):
        return render(request, self.template_name)


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
