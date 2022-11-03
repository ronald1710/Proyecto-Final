> Warning: your data will be lost

1. Delete the entire migrations folder.
2. Delete de database `mysql -u root -e "DROP DATABASE example";`
3. Create de database again `mysql -u root -e "CREATE DATABASE example";`
4. Initiallize the migrations again: `pipenv run init`
5. Create the migration files again: `pipenv run migrate`
6. Apply the migration files into your database `pipenv run upgrade`