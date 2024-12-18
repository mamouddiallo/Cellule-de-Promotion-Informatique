from django.urls import path
from.import views
app_name = "webapp"

urlpatterns = [
    path('', views.home, name="home"),
    path('formations/', views.formations, name="formations"),
    path('apropos/', views.apropos, name='apropos'),  
    path('contact/', views.contact, name="contact"),
    path('formation/<int:id>/', views.formation_detail, name='formation_detail'),
]

