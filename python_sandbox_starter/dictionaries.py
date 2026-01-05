# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.
# Read more about dictionaries at https://docs.python.org/3/tutorial/datastructures.html#dictionaries
person = {
    "firstname": "John",
    "lastname": "Doe",
    "age": 30,
}
print(person, type(person))
# Accessing items
print(person["firstname"])
print(person.get("age"))

#adding items
person["city"] = "New York"

print(person)

print(person.keys())  # Get all keys
print(person.values())  # Get all values

# List of dictionaries
person2 = [
    {
    "firstname": "John",
    "lastname": "Doe",
    "age": 30,
}, {
    "firstname": "Jane",
    "lastname": "Doe",
    "age": 25,
}
]

print(person2)