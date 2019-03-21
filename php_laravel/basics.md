# Laravel Basics
1. To create a controller syntax:
   > php artisan make:controller "Controller Name"
2. Controllers in laravel access the **http/request** library.
3. All the new controllers extends the Controller class.
4. To return anything from the controller we can use route. 


	Route::get('/', 'ControllerName@Method_Name');


5. we can also return views by using the controllers.