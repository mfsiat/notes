# JavaScript Basics

- ECMAScript standards, it stands for the European Computer Manufacturers Association (ECMA). Which gives standards to JS.
- Variables
  > Primitives are single self related like numbers, boolean, strings etc 
  > Compounds data are held as **arrays** **objects**
- We use let and const to declare variables 

- Arrays 
> const arr = [1,2,3]
> console.log(arr[0])

- Objects (also known dictionaries in other languages)
```js
const obj = {
  name: "Siat",
  email: "siat@ymail.com"
}
console.log(obj.name)
```

### DOM (Document object model)
- It's the JS representation of the structure of HTML and is present in the variable document when we load the page 
> document 
> {} like querySelector()
> element
> {} {} {} like .addEventListener().style.color
- All this is possible with the set of methods called the **Browser API**

### Other 
- Its a C like language, meaning it's most of the syntax came from C 
- It contains **if, while, for and more**

### Loop 
- we use **for in** loop to iterate object 
example
```js 
const obj = {
  name: "siat",
  age: 26
}
for(let key in obj) {
  console.log(key.obj[key]);
}
```
> Sample Output 
> 
