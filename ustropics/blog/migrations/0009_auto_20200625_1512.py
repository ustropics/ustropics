# Generated by Django 3.0.7 on 2020-06-25 15:12

from django.db import migrations
import django_bleach.models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_auto_20200624_0820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='content',
            field=django_bleach.models.BleachField(blank=True, null=True),
        ),
    ]
