from rest_framework import serializers
from .models import User

class UserBase(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ( 'username' , 'email', 'password', 'created_at')