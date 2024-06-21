from django.shortcuts import render
from django.http import JsonResponse
from .serializer import UserSerilizer
from .models import User
from rest_framework.decorators import api_view
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def checkUser(request):
    if request.method == "POST":
        request_data = json.loads(request.body)
        name = request_data.get("name")
        password = request_data.get("password")
        if not name or not password:
            return JsonResponse({"error": "Both name and password parameters are required"}, status=400)
        try:
            user = User.objects.get(name=name)
            if user.password == password:
                serializer = UserSerilizer(user)  
                serialized_data = serializer.data
                print(serialized_data)
                print(json.dumps(serialized_data))  
                return JsonResponse({"done":True},safe=False)
            else:
                return JsonResponse({"error": "Incorrect password"}, status=400)
        except User.DoesNotExist:
            return JsonResponse({"error": f"User with name '{name}' does not exist"}, status=404)
    
    else:
        return JsonResponse({"error": "Only POST requests are allowed"}, status=405)