<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
    -start "
    php artisan serve & service mysql start; php artisan migrate:fresh --seed; npm run watch & redis-server & php artisan queue:work & laravel-echo-server start;
    "
    -stop "
    service mysql stop & npm run dev;
    "
</p>
