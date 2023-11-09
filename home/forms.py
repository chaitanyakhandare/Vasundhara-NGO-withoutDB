from django import forms
from .models import Review

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['name', 'email', 'stars', 'text']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Enter Full Name'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Enter Email Address'}),
            'stars': forms.NumberInput(attrs={'placeholder': 'No of Stars', 'min': 1, 'max': 5}),
            'text': forms.TextInput(attrs={'placeholder': 'Describe your experience'}),
        }