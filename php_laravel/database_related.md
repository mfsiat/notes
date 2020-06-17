# Things related to database or data
> Main topic on handling data and model


## Factories and Seeders

- Whenever we are generating something we should be working soome dummy data for our database.

- So that we can start our app without building the actual app. 

- We can make a factory with the artisan command, the factory needs to be named after our app.

- **Factory and Seeder** both are used for generating test data for the application. 

- **In short: we define data in factory and use the factory with seeder**.


## Database Seeder 

- It is used to populate tables with data. 

- To generate the data's inside the factory we use seeder. 

- we use artisan command to create the seeder. 

- 


## Model Factories 

- It is a convenient centralized place to define how your models should be populated with fake data. 

- By using factories we can easily test data for our app based on the model. In factory we can use another class like **Faker** to generate fake data. 

- We can also say that we define the data that needs to be created for database testing on factories.


## Migrate and Seed

- we can use migration and seed together. 

- just add the --seed flag after the migration. 
