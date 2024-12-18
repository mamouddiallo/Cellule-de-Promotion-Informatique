from django.shortcuts import render, get_object_or_404
from .models import Formation

# Create your views here.

def home(request, *args, **kwargs):
    """
    page accueil 
    """
    formations = Formation.objects.all()
    context={
        'formations':formations
    }
    
    return render(request, 'webapp/index.html', context)

def formations(request, *args, **kwargs):
    formations = Formation.objects.all()
    context={
        'formations':formations
    }
    return render(request, 'webapp/formations.html', context)

def formation_detail(request, id):
    # Récupérer la formation par ID
    formation = get_object_or_404(Formation, id=id)
    return render(request, 'webapp/formation_detail.html', {'formation': formation})

def contact(request, *args, **kwargs):
    context={}
    
    return render(request, 'webapp/contact.html', context)

def apropos(request, *args, **kwargs):
    context={}
    
    return render(request, 'webapp/apropos.html', context)
