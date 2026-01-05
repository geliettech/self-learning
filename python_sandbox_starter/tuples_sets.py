# A Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
 

 #create tuple
fruits = ("apple", "banana", "cherry", "apple")
fruits2 = ("orange", "kiwi", "melon")

print(fruits)
print(fruits[1])  #accessing tuple item
print(fruits2)



#SETS

# A Set is a collection which is unordered and unindexed. No duplicate members.
#create set
fruits_sets = {"apple", "banana", "cherry", "apple"}

fruits_sets.add("orange")  #adding item to set
fruits_sets.add("banana")  #adding item to set
print(fruits_sets)