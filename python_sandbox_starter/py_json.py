# JSON is commonly used with data APIS. Here how we can parse JSON into a Python dictionary

import json

# Sample JSON
userJSON = '{"name": "John Doe", "age": 30, "city": "New York"}'

# Parse JSON to dictionary
user = json.loads(userJSON)


print(user, type(user))
# Accessing values
print(user['name'])

# Convert dictionary to JSON
userDict = {
    "name": "Jane Doe",
    "age": 25,
    "city": "Los Angeles"
}

userJSON = json.dumps(userDict)
print(userJSON, type(userJSON))