

## Technology stack
- HTML, CSS, VUE.JS
- PHP LARAVEL MVC
- SQLITE DATABASE


# Порядок дій
* Стягнути проект
  
* Встановити в проекті композер
  + ``` composer install ```
* Встановити npm
  + ``` npm install ```
* Налаштувати БД
  + В директорії проекту в папці ```database``` створити файл та назвати його ```database.sqlite ```
  + Справа в верхній частині вікна в php storm натиснути на database-> + -> database from path -> вибрати драйвер sqlite -> вибрати файл створений раніше -> test         connection -> apply
* Налаштування ``` .env``` файлу
  + Скопіювати файл  ```.env.example``` в корневій папці проекту чуєте і створити його клон, при цьому переіменувавши його в ```.env```
  + Встановити значення змінної ```DB_CONNECTION = sqlite```
  + Видалити всі значення від ```DB_HOST по DB_PASSWORD ``` включно
  + запустити міграцію ```php artisan migrate```
* JWT
  + В директорії ```config``` перевірити наявність файлу ```jwt.php```
    - При його відсутності запустити команду ```composer require tymon/jwt-auth```
  + Запустити наступні команди для генерації секретного ключа
    - ```php artisan key:generate ```
    - ```php artisan jwt:secret ```
    - ```php artisan cache:clear ```
    - ```php artisan config:clear ```
* Запустити мікс js та css файлів
  + ``` npm run dev або npm run watch```
* Запустити веб сервер
  + ```php artisan serve```
