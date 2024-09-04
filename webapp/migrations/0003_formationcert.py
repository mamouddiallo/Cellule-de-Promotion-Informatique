# Generated by Django 4.2.7 on 2024-08-28 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0002_alter_formation_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Formationcert',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('description', models.CharField(max_length=255, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='webapp')),
            ],
        ),
    ]
