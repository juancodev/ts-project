# 👨‍💻 Fundamentals of TypeScript

## 🤔 ¿Por qué usar TypeScript?

- Es uno de los lenguajes de programación más queridos por la comunidad.
- Alta adopción.
- Podemos prevenir muchos errores de JS.
- Mejor experiencia de desarrollo.
- Menor cantidad de bugs.

## 🥊TypeScript vs 🥊JavaScript

En JavaScript te das cuenta de los errores del código una vez que lo estés ejecutando. En TypeScript con el análisis estático de código nos damos cuenta de los errores en el editor o a la hora de transpilar, por lo que evitamos que los errores lleguen a la ejecución.

Un programador de TS es distinto a uno de JS. El programador de TypeScript añade una capa de análisis de código estático a Javascript.

## 🪲 ¿Como se pueden encontrar errores?

En el libro **Software Engineering at Google** lo dividen en distintas etapas:

### Static analysis (Acá es donde TS cumple su rol)

- Corre en el editor.
- Puede encontrar typos, llamados incorrectos a funciones.
- Nos permite autocompletar código.

### Unit Tests

- En pocos segundos nos permiten verificar si nuestro código hace lo que pensamos que hace.

### Integration tests

- Toma unos minutos validar si nuestro sistema funciona.
- Podemos encontrar distintos casos límite.

### Code review

- Toma algunas horas validar que estamos siguiendo las prácticas y normas de nuestro equipo.

## ¿Qué es el tipado en TypeScript?

Si bien Javascript tiene tipos, es un lenguaje débilmente tipado, por lo que no se realiza una comprobación de los tipos.

Al hacerlo tipado con TypeScript, evitamos errores ya que el analizador comprueba que no cambiemos los tipos a lo largo del tiempo

A la hora de declarar variables en javascript lo hacemos de la siguiente forma:

```jsx
const productPrice = 12;
```

Mientras que en TypeScript tenemos que especificar los tipos:

```tsx
const productPrice: number = 12;
```

La parte del tipado, la llamamos **Type Annotation.**

## ⚙ Tipos Inferidos

El motor de TypeScript nos permite tanto darle el tipo de datos de forma explícita o los puede inferir por si mismo sin que lo tengamos que hacer de forma explicita.

```tsx
let myProductName = "Product"; //Nos dice que el tipo es string
let myProductPrice = 123; //Nos dice que el tipo es number
```

En caso de querer cambiar los tipos, nos va a advertir que estamos cambiando de tipos y lo va a marcar como un error.

A su vez, al usar TS tenemos los métodos usados para cada tipo de datos, así en el caso de una variable de tipo string podemos acceder al método `.toLowerCase` de manera mas rapida, ya que el editor solo nos va a mostrar los métodos del tipo que estemos usando.

Al declarar una constante, el tipo lo infiere como constante, ya que no se puede cambiar.

---

Al no tener el entorno de TypeScript configurado ni delimitado el alcance de las funciones, al hacer una declaración en un archivo distinto con el mismo nombre, nos va a arrojar error. Para delimitarlo, podemos hacer una función anónima autoejecutada y encerrar nuestro código ahí y que su scope este limitado a esa función.

## 📖 More information about of typescript:

[Documentation of typescript](https://www.typescriptlang.org/docs/)

[Course of fundamentals of TypeScript at Platzi](https://www.notion.so/Curso-de-Fundamentos-de-TypeScript-30ed370135f049a1bd6786302bea9e81)

---

## ✌️ Follow me in my social networks:

- [Linkedin](https://www.linkedin.com/in/juancodev/)
- [Twitter](https://twitter.com/juancodev_)
- [Facebook](https://www.facebook.com/juancodev)
- [Instagram](https://www.instagram.com/juancodev/)
- [My Web site](https://juancodev.github.io/Portfolio/)

  <img src="https://res.cloudinary.com/juancms98/image/upload/v1630885661/juancms98_yzbssj.png" width="400" heigth="400">
