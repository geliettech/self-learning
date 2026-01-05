# A class is like a blueprint for creating objects. An object has properties and methods(functions) associated with it. Almost everything in Python is an object

# create class
class User:
    # constructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age

#methods
    def greet(self):
        print(f'Hello, {self.name} and I am {self.age} years old.')

    def has_birthday(self):
        self.age += 1

# Extend class
class Customer(User):
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
        self.balance = 0

    def set_balance(self, balance):
        self.balance = balance

    def greet(self):
        print(f'Hello, {self.name}, I am {self.age} years old, and my balance is {self.balance}.')


# init user object
user1 = User('John Doe', 'johnD@gmail.com', 37)
# init Customer object
customer1 = Customer('Jane Doe', 'Jane@yahoo.com', 27)

print(user1.age)
user1.has_birthday()
print(user1.greet())
customer1.set_balance(500)
print(customer1.greet())