from django.shortcuts import render

# Create your views here.

def home(request, *args, **kwargs):
    """
    page accueil 
    """
    context={}
    
    return render(request, 'webapp/index.html', context)

def formations(request, *args, **kwargs):
    context={}
    
    return render(request, 'webapp/formations.html', context)

def contact(request, *args, **kwargs):
    context={}
    
    return render(request, 'webapp/contact.html', context)

def apropos(request, *args, **kwargs):
    context={}
    
    return render(request, 'webapp/contact.html', context)
