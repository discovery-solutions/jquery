# Behind The Code - jQuery

Esse repositório é um exemplo de como é possível recriar funcionalidades de uma biblioteca famosa como jQuery, com apenas poucas linhas de código.

As funcionalidades recriadas nesse exemplo são:

* Element Query

```js
$("button"); // Retorna o elemento da query
```

* Event Handling

```js
$("button").on("click", myFunction);
$("button").click(myFunction);
$("button").blur(myFunction);
```

* HTML Manipulations

```js
$("button").html("Label do meu botão");
```

* jQuery.ready

```js
$.ready(myFunction);
$(document).ready(myFunction);
```

* CSS

```js
$("button").addClass("active");
$("button").removeClass("active");
$("button").toggleClass("active");
$("button").hasClass("active"); // Retorna um booleano
$("button").css("background", "green"); // Muda o background
```
