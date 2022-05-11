

start:
	php artisan serve & service mysql start; php artisan migrate:fresh --seed; npm run watch & redis-server & php artisan queue:work & laravel-echo-server start;

stop:
	service mysql stop & npm run dev;