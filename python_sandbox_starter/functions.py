# A function is a block of code which only runs when it is called. In Python, we do not use parentheses and curly brackets, we use indentation with tabs or spaces


#creating a function
def greet(name):
    print(f'Hello, {name}!')
greet('Alice')

# Return values
def add(a, b):
    return a + b
result = add(5, 3)
print(f'The sum is: {result}')

# A lambda function is a small anonymous function.
# A lambda function can take any number of arguments, but can only have one expression. Very similar to JS arrow functions

sum = lambda a, b: a + b
result = sum(5, 8)
print(f'The sum is: {result}')