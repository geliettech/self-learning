# A module is basically a file containing a set of functions to include in your application. There are core python modules, modules you can install using the pip package manager (including Django) as well as custom modules


# core modules
# import datetime
from datetime import date
# import time
from time import time


# today = datetime.date.today()
today = date.today()
print(f'Today is: {today}')


timestamp = time()
# timestamp = time.time()
print(f'Timestamp is: {timestamp}')





# pip modules
from camelcase import CamelCase

c = CamelCase()
print(c.hump('hello world from python'))




# custom module
from validator import validate_email
email = "test@test.com"
if validate_email(email):
    print(f'{email} is valid')
else:
    print(f'{email} is not valid')