# Data Structures

> notes on data structures

## Study

- Logical View.

- Operations.

- Cost of Operations.

- Implementation.

## Deffinition

A Data Structure is a way to store and organize data in a computer, so that it can be used efficiently.

- We talk about Mathmatical/Logical models.

- We mainly work with searching and sorting algorithms.

- Abstract Data Type.

## Abstract Data Type (ADT)

- Store a given number of elements of any type.

- Read elements by position.

- Modify element at a position.

- Define data and operations but no implementation.

- We can implement this with linked list.

## Arrays (Concrete Implementation)

-

## List as Abstract Data Type

It's a simple data structure. Common real world entity. **It's a collection of object of same type** we can have it as name, numbers etc. We want a list that has such properties.

- Empty list has size 0.

- insert

- remove

- Read/modify element at a position

- specify data-type

We can declare such list with **Array**. So think that we want a array with data-type integer. So to declare an array we need to specify the **size** and the **end-point** of the array. Whenever we insert data into a list the data goes towards the end of the list.

```bash

A = [ '2', '4', '6', '7', '9']

int a[MAXSIZE]
int end = -1

# Insert option
insert(2)
insert(4)
insert(6)
insert(7)
insert(9)
insert(5, 2)

# Remove
remove(2)
insert(4)
insert(6)

# By this we can remove.
```

When array is full, create a new larger array. Copy the contents into the new array. Free the memory for the previous array.

### Analysing the Cost of the operation.

- To access: accessing through index will take **constant time** because it's an array. In array elements are arranged in one contigous block of memory, using the **start** and the **position** of the element we can access them So time complexity `bigOh(1)`.

- To Insert: `T proportional to n` or `bigOh(n)`.

- To Remove: same as Inserting.

- Adding an element: `bigOh(n)`

### Good Thing with List

- We can access in constant time

- But for remove it's costly, if the list grows than it will be also costly. Sometimes a lot of the array are unused. Its not efficient in terms of memory.

- To utilise list as efficient and good memory usage we need to use **Linked List**.
