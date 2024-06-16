from django.db import models
import uuid

# Create your models here.


class GraphicDesignCard(models.Model):
        unique_id = models.UUIDField(default=uuid.uuid4)
        Name = models.CharField(max_length=100)
        discription = models.TextField()
        Date = models.DateField()
        image_cover = models.ImageField(upload_to='media/')
        views = models.IntegerField(default=0)
        url_link = models.URLField(default='')
        
        
        def __str__(self):
            return self.Name
        
        
        
        
        
class WebDesignCard(models.Model):
        unique_id = models.UUIDField(default=uuid.uuid4)
        Name = models.CharField(max_length=100)
        discription = models.TextField()
        Date = models.DateField()
        Image_cover = models.ImageField(upload_to='media/')
        views = models.IntegerField(default=0)
        url_link = models.URLField(default='')
        
        def __str__(self):
            return self.Name
        
        

class DigitalArtCard(models.Model):
        unique_id = models.UUIDField(default=uuid.uuid4)
        Name = models.CharField(max_length=100)
        discription = models.TextField()
        Date = models.DateTimeField()
        Image_cover = models.ImageField(upload_to='media/')
        url_link = models.URLField(default='')
        
        def __str__ (self):
            return self.Name
        
        
        
class Niche(models.Model):
      unique_id = models.UUIDField(default=uuid.uuid4)
      Name = models.CharField(max_length=100)
      discription = models.TextField()
      Date = models.DateTimeField()
      Image_cover = models.ImageField(upload_to='media')
      url_link = models.URLField(default='')
      
      def __str__ (self):
          return self.Name

     