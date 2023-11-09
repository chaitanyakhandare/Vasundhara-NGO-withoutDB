from django.shortcuts import render, HttpResponse
from django.shortcuts import redirect


# Create your views here.
def index(request):
    return render(request, 'index.html')

    
def about(request):
    return render(request, 'about.html')
    

def services(request):
    return render(request, 'services.html')


def contact(request):
    return render(request, 'contact.html')
    


def reviews(request):
    if request.method == 'POST':
        name = request.POST.get('user-name')
        email = request.POST.get('user-email')
        stars = request.POST.get('user-stars')
        description = request.POST.get('user-description')
        print(name, email, stars, description)
        return render(request, 'reviews.html')
    else:
        return render(request, 'reviews.html')


def donate(request):
    return render(request, 'donate.html')
    




