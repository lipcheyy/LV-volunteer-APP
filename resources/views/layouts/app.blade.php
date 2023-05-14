<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="https://kit.fontawesome.com/b1158b9f9c.js" crossorigin="anonymous" defer></script>
    <title>Homepage</title>
</head>
<body>
<header></header>
<div id="app" >
    @yield('content')
</div>
</body>
</html>
<style>
</style>

