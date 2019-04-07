# Laravel Basics
1. To create a controller syntax:
   > php artisan make:controller "Controller Name"
2. Controllers in laravel access the **http/request** library.

3. All the new controllers extends the Controller class.

4. To return anything from the controller we can use **Route**. 
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

9. Model and Database Migration: Create a controller and to specify the database,
   we need to create a model which will contain the database information. The tables and queries. To work with strings in database we need to import the schema library 
   on AppServiceProviders on the Providers folder. 

10. Migration: to create the schemas of the database we can use, and this code will automatically create the database schemas on the local database.   
```bash
      php artisan migrate
```
   *Laravel uses the **Eloquent** ORM*
   All the standard blog site have following CRUD functionalities:
   >index,create,store,edit,update,show,destroy

11. In modern MVC frameworks we always need to create a route. Route gives the web pages 
   direction and etc. we need to make these web routes. with out routing we can not view 
   the web pages. for normal pages we can create web route normally. but for controllers 
   we can skip all these extra work by just creating a route with its behavior. 

   Example code:
   ```php
   Route::resource('posts', 'PostsController');
   ```
12. To fetch data from the database with eloquent:
   > {{$post->title}}
   > $posts = Post::orderBy('title', 'desc')->get();
   

