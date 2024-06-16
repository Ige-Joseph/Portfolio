from django.contrib import admin
from .models import GraphicDesignCard, WebDesignCard, DigitalArtCard, Niche
# Register your models here.


admin.site.register(GraphicDesignCard)
admin.site.register(WebDesignCard)
admin.site.register(DigitalArtCard)
admin.site.register(Niche)