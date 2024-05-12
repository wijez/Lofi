import random
import string
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

from django.core.validators import validate_email
from django.core.exceptions import ValidationError

def validate_credentials(username, password, email):
    if not (username and password and email):
        return False
    try:
        validate_email(email)
    except ValidationError:
        return False
    
    return True


def generate_password(length=16):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for i in range(length))
    return password