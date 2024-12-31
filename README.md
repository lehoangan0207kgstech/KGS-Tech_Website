KGS_Tech Website

React 18
Laravel 11
PHP 8.2
Composer
Docker

# Tao moi truong cho frontend
    cd frontend

    npm install

    cd ..

# Tao moi truong cho backend
    cd backend

    composer install

    tạo file .env

    cd ..

# Chay container 
    docker-compose up -d

# Truy cap vao container kgs_tech_app-1

    docker exec -it kgs-tech_website-app-1  bash

# Tao csdl 

    php artisan migrate

# Tao key

    php artisan key:generate
