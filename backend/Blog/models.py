from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    account_created = models.DateField()

class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    blog_title = models.CharField(max_length=100)
    blog_description = models.CharField(max_length=200)
    date = models.DateField()