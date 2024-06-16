from django.urls import path
from . import views

urlpatterns =[
    path('', views.index, name='index'),
    path('api/items/<uuid:item_id>/', views.get_item_details, name='get_item_details'),
    
     
]