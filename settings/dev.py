# -*- coding: utf-8 -*-

from .base import *


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# if you dev want to use postgresql
# he can comment the sqlite3 DATABASES settings above
# and uncomment the settings below


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'excalibur_dev_<DEV_FIRST_NAME>',
#         'USER': 'postgres',
#         'PASSWORD': 'postgres',
#         'HOST': '127.0.0.1',
#         'PORT': '5432',
#     }
# }
