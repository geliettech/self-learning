# Python has functions for creating, reading, updating, and deleting files.
# Open a file
myFile = open('files.txt', 'w')  # 'w' means write mode

# Get some info about the file
print('Name:', myFile.name)
print('Is Closed:', myFile.closed)
print('Opening Mode:', myFile.mode)

# Write to the file
myFile.write('I love Python programming.\n')
myFile.write('This is the second line.\n')
# Close the file
myFile.close()

# Append to the file
myFile = open('files.txt', 'a')  # 'a' means append mode
myFile.write('This line is appended.\n')
myFile.close()

# Read the file
myFile = open('files.txt', 'r')  # 'r' means read mode
content = myFile.read(100)  # read first 100 characters
print(content)