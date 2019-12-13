from django.db import models



class File(models.Model):
    file_id = models.CharField(max_length=255)
    uploaded_file = models.FileField(upload_to='uploaded_files')
    filename = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now=True)
    job_id = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "{} - {}".format(self.filename, self.uploaded_at)

    class Meta:
        verbose_name = "File"
        verbose_name_plural = "Files"
