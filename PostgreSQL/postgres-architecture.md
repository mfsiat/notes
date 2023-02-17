# Postgres Architecture

- It is a relational database system that is based on the idea of having multi-version concurrency control by doing an append model.
Where everything is an append. Everything we do in postgres create a new **Tuple**. 

- Like we have row 1 and have another row without updating the previous one we will have same logical level row with multilpe tuples.
This is confusing but can be described.

- Everything is postgres is process based not thread based. This is for stability. Threads cannot ensure stability. Now threads are stable and also lighterwieght.

- In Postgres every connection gets a brand new process. Which is being handled by **max_connection**.

- 




