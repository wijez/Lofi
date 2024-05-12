from django.db import models
from .utils import generate_password, validate_credentials


  
# Create your models here.
class User(models.Model):
  id = models.AutoField(primary_key=True)
  username = models.CharField(max_length=16, unique=True)
  email = models.EmailField(unique=True)
  password = models.CharField(max_length=30, default=generate_password)
  created_at = models.DateField(auto_now_add=True)
  updated_at = models.DateField(auto_now_add=True)
  
  
  