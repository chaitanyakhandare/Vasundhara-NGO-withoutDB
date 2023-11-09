from django.shortcuts import render, HttpResponse
from .forms import ReviewForm
from .models import Review
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
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('reviews')  # Redirect to the same URL after successful submission
    else:
        form = ReviewForm()
    
    reviews = Review.objects.all()

    return render(request, 'reviews.html', {'form': form, 'reviews': reviews})


def donate(request):
    return render(request, 'donate.html')
    




