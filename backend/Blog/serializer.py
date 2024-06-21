from rest_framework import serializers
from .models import User
class UserSerilizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=["name","password"]