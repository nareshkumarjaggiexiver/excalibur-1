# Generated by Django 3.0 on 2019-12-13 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('excalibur', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='job_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]