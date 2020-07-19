# React Notes

> notes on react framework

## States

Why do we use states? States are used to store encapsulated data. 

## useEffect 
 - It's one of the lifecycle method on JavaScript. 
 - We use it to fetch data, store something as array etc. 
 - For making any request **useEffect** is being used and after making request we can store something as _array_.
 ```js
 useEffect (() => {
 	// effect geoes here or request code. 
 }, [array]); // here inside [] we store our things.

 // So whenever we make a request we need to make sure the request goes once. 
 // on the 2nd aurgument the [] creates epmty set of arrays to store something. 
 // the 2nd aurgument ensures that the useEffect should run once. 
 ```