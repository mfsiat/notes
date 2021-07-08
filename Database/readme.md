# Database Basics

> Some notes on Database

## Database Aggregation

> What is DB aggregation?

- DBMS ( Database management system) consists of entities whose data can be stored. They can be people, things, objects or places.Two or more entities are joined through a relationship, that is simply a way of connecting data sets. Some entities in a DBMS may have little value, which makes it difficult to use them for certain operations.

- In such situations, we can combine these entities with other entities to form a complex one that makes sense. We can do this operation through a process called **`aggregation`**.

- Aggregation in DBMS link's trivial entities through relationships to ensure that the entire system functions well.

- Aggregation refers to the process by which entities are combined to form a single meaning ful entity. The specific entities are combined because the do not make sense on their own. To establish a single entity, aggregation creates a relationship that combines these entities. The resulting entity makes sense because it enables the system to function well.

- When using data in the form of numerical values, the following operations can be used to perform DBMS aggregation.

```
Count()
Sum()
Avg()
Min()
Max()
```

- There are some reasons behind the use of aggregation in DBMS. Some of them are

  - Many trivial entities
  - One trivial entity
  - Inapplicable entity-model relationship

- Relationships
  - 1 to 1
  - 1 to many
  - Many to 1
  - Many to many
