---
title: "Markdown referencia básica"
description: "Aquí hay una muestra de la sintaxis básica de Markdown que se puede usar al escribir contenido."
pubDate: "02/28/2023"
updatedDate: "19/03/2023"
heroImage: "/writer.svg"
heroImageDesc: "avatar inicial de usuario"
layout: "../../layouts/BlogPost.astro"
---

Lo primero que hice fue aprender de manera básica la sintaxis de `MarkDown` para poder escribir de una manera más cómoda este blog, este artículo es un compilado de las etiquetas que he usado hasta el momento, la idea es actualizarlo cuando aprenda la utilización de nuevas etiquetas.

Pero primero que todo, Markdown es un lenguaje de marcado de texto que permite renderizar texto plano como etiquetas de HTML facilitando el estilado de texto y la creación de contenido, para esto utiliza una serie de etiquetas predeterminadas, por ejemplo:

## Párrafos

texto plano sin ninguna etiqueta se renderiza en una etiqueta `<p>`

```md
texto de prueba para renderizar un parrafo
```

Ejemplo renderizado:

texto de prueba para renderizar un párrafo

## Títulos

Los títulos se traducen en 6 niveles de la misma forma que en HTML `<h1>`-`<h6>` y se marcan con el símbolo `#` al inicio del texto

```md
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

Ejemplo renderizado:

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Imágenes

Para marcar una imagen se debe utilizar la siguiente sintaxis, el texto entre llaves cuadradas `[]` se renderiza como el alt de la etiqueta `<img>` y el link entre paréntesis `()` será el `src`

```md
![Alt de la imagen](/programming.svg)
```

Ejemplo renderizado:

![Alt de la imagen](/programming.svg)

## Bloques de código

Sirven para formatear código de más de una línea, se utilizan tres acentos fuertes ( ` ) después de los primeros acentos se puede especificar el lenguaje con el fin de que se muestre el código con los colores correspondientes a la sintaxis

```md
  ```html
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <title>documento ejemplo</title>
      </head>
      <body>
        <p>Test</p>
      </body>
    </html>
```

Ejemplo renderizado:

```html
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <title>documento ejemplo</title>
      </head>
      <body>
        <p>Test</p>
      </body>
    </html>
```

## Tipos de listas

### Lista ordenada

Si se inicia la lista con números se renderizará como una lista ordenada de HTML `<ol>` y los demás elementos que componen la lista como tags `<li>`

```md
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

Ejemplo renderizado:

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Lista no ordenada

si los componentes de la lista se inician con un guion, se renderizará como una lista ordenada de HTML `<ul>` y los demás elementos que componen la lista como tags `<li>`

```md
- Primer elemento
- Segundo elemento
- Tercer elemento
```

Ejemplo renderizado:

- Primer elemento
- Segundo elemento
- Tercer elemento

## Links

Para referencia el link a otro sitio se realiza un marcado muy parecido al de la imagen de la siguiente forma, solo que quitando el signo de exclamación inicial `!`.

El texto entre llaves cuadradas `[]` se renderiza como el texto interno de la etiqueta `<a>` y el link entre paréntesis `()` será el `href`

```md
[click aquí](https://github.com/david-viuche)
```

Ejemplo renderizado:

[click aquí](https://github.com/david-viuche)

Por ahora eso es todo, espero verte en una próxima oportunidad :)
