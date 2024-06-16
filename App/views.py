
# Create your views here.

from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import GraphicDesignCard, WebDesignCard, DigitalArtCard, Niche

def index(request):
    graphic_design = GraphicDesignCard.objects.all()
    Web_Design =   WebDesignCard.objects.all() 
    Digital_Art =   DigitalArtCard.objects.all()
    Niche_Card =   Niche.objects.all()
    

    # HTML response
    context = {'graphic_design': graphic_design,  'Web_Design': Web_Design, 'Digital_Art': Digital_Art, 'Niche': Niche_Card  }
    
    return render(request, 'index.html', context)


def get_item_details(request, item_id):
    
    
    item = get_object_or_404(GraphicDesignCard, unique_id=item_id)
    item_data = {'Name': item.Name, 'discription': item.discription}
    return JsonResponse([item_data], safe=False) 


