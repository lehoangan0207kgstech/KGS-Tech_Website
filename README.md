KGS_Tech Website

React 18
Laravel 11
PHP 8.2
Composer
Docker

#tạo nodemodule cho frontend
1. cd frontend

2. npm install

3. cd ..

#tạo môi trường cho backend
1. cd backend

2. composer install

3. tạo file .env

4. cd ..

#Chạy 
1. docker-compose up -d

#Truy cap vao container kgs_tech_app-1

2. docker exec -it kgs_tech-app-1 bash

#Tao csdl 

3.php artisan migrate

#Tao key

4.php artisan key:generate
