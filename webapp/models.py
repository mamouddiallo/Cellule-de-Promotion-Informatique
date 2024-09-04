from django.db import models

# Create your models here.

class Formation(models.Model):
    name = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=255, null=True)
    image = models.ImageField(upload_to='webapp', null=True, blank=True)
    
    def __str__(self):
        return self.name

