from django.db import models

class Review(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    stars = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return f'Review by {self.name}'