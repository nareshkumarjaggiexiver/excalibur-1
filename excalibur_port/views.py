from django.shortcuts import render
from django.views import View


class Home(View):
    template_name = 'excalibur-port/files.html'

    def get(self, request):
        return render(request, self.template_name)
