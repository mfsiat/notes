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
```php
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
   
13. We can use laravel collective for the Forms. Its no longer available on the 
   website but can be found through the github pages. We can use it to do all things 
   with Form controls. We can fetch the form data or store the form data with array.
   Example: 
   > To store data we use *Method: POST*. 
   > To get or view data we use *Method: GET*.
   ```php
   // To take input 
      $post = new Post;
      $post->title = $request->input('title');
      $post->save();
   ```

14. There is an interactive editor a good one out there for laravel. Its called 
   laravel-ckeditor. We can find it on GitHub. See the git documentation for details.

15. For forms or crud options, we always have to specify a data by it's id. we can use array to 
   fetch the data from the database, the array contains the id. Then we need to specify an action for the observed method. 
   ```php
   // for edit
   {!! Form::open(['action' => ['PostsController@update', $post->id], 'method' => 'POST']) !!}
   // for create 
   {!! Form::open(['action' => 'PostsController@store', 'method' => 'POST']) !!}
   ```

16. Full laravel route list
   ```php
   $ php artisan route:list
    
     Method    | URI               | Name          | Action                                        | Middleware   
    -----------|-------------------|---------------|-----------------------------------------------|--------------
     GET|HEAD  | /                 |               | App\Http\Controllers\PagesController@index    | web          
     GET|HEAD  | about             |               | App\Http\Controllers\PagesController@about    | web          
     GET|HEAD  | api/user          |               | Closure                                       | api,auth:api 
     GET|HEAD  | posts             | posts.index   | App\Http\Controllers\PostsController@index    | web          
     POST      | posts             | posts.store   | App\Http\Controllers\PostsController@store    | web          
     GET|HEAD  | posts/create      | posts.create  | App\Http\Controllers\PostsController@create   | web          
     GET|HEAD  | posts/{post}      | posts.show    | App\Http\Controllers\PostsController@show     | web          
     PUT|PATCH | posts/{post}      | posts.update  | App\Http\Controllers\PostsController@update   | web          
     DELETE    | posts/{post}      | posts.destroy | App\Http\Controllers\PostsController@destroy  | web          
     GET|HEAD  | posts/{post}/edit | posts.edit    | App\Http\Controllers\PostsController@edit     | web          
     GET|HEAD  | services          |               | App\Http\Controllers\PagesController@services | web          
    
    ```

17. Migration: why do we need migration? migration means migrate somehing with something. 
   in our blog we arre going to post out posts under a specific user id. in brief we can say that 
   the posts author should be one specific author and that author will be specified with user id. 
   so we are having migration and we can simply put a command to migrate as we like. it will add on the migration folder.
  
  ```php
  php artisan make:migration add_user_id_to_posts 
  ```
  
   this will somply create the migration file in which we can find **public up** and **public down** function in which we need to write the codes.
   to add user_id 
  
  ```php
      public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->integer('user_id');
        });
    }
  ```
   to drop the column or user id 
  ```php
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
    }
}
  ```

   after that we need to make another command that will complete the migration 
  ```
  php artisan migrate
  ```

   the main soul purpose of the migration is to migrate the main table with wnother data property or in simple words to add another column we 
   can use migration. 

18. How do we use authentication in laravel? How it works? 
```php 
public function __construct()
{
  $this->middleware('auth');
}
```
  this is a constructor function on the dashboard controller. Here a middleware has been included which blocks everything from going to the dashboard if the user or anything that is not authenticated. 

```php
        // Check for correct user
        if(auth()->user()->id !== $post->user_id){
            return redirect('/posts')->with('error', 'Unauthorized Page');
        }
```
* To give post edit and delete option to the authorized user for his or her post only 
```php
    {{-- if the user is not authenticated then the default edit and delete option will not show --}}
    @if (!Auth::guest()) 
        @if (Auth::user()->id == $post->user_id)
            <a href="/posts/{{$post->id}}/edit" class="btn btn-primary">Edit</a>
            
            {!!Form::open(['action' => ['PostsController@destroy', $post->id], 'method' => 'POST', 'class' => 'pull-right'])!!}
                {{Form::hidden('_method', 'DELETE')}}
                {{Form::submit('Delete', ['class' => 'btn btn-danger'])}}
            {!!Form::close()!!}        
        @endif
    @endif
```

