# Laravel Basics
1. To create a controller syntax:
   > php artisan make:controller "Controller Name"
2. Controllers in laravel access the **http/request** library.
3. All the new controllers extends the Controller class.
4. To return anything from the controller we can use route. 
```php
	Route::get('/', 'ControllerName@Method_Name');
```
5. we can also return views by using the controllers. For returning the views from the 
   the controller we need to create function on the controller and we need to call the method 
   from the route. Example:
```php
   		public function index(){
   			return view('pages.index');
   		}
```
6. we can use **@yeild('content')** and some other commands like **@include()** to add 
   themes from other places. we can add difrent things etc. After inserting a theme in the 
   different folder we can extend the layout from that file to our other files or blade 
   templates. The following code does that. 
```php
   		@extends('layouts.app')
		@section('content')
    		<h1>Hello there!!</h1>
		@endsection
```

7. Passing variables into a blade template. Inside the function
```php
		$variable = 'String goes here';
		return view('folderName.PageName')->with('variable', $variable);

		// on the blade template codes goes like this
		<h1>{{$variable}}</h1>
```
8. Assests and CSS 