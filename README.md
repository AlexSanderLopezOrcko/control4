# Cuestionario: Criptografía Asimétrica

Página web de práctica con 40 preguntas sobre criptografía asimétrica (RSA, Diffie-Hellman, ElGamal, ECC, firmas digitales y criptografía post-cuántica).

Hecha con **HTML, CSS y JavaScript vanilla**, sin frameworks ni librerías externas.

## Archivos

| Archivo      | Contenido                                          |
|--------------|----------------------------------------------------|
| `index.html` | Estructura de las tres pantallas                   |
| `style.css`  | Diseño responsive y modo oscuro automático         |
| `script.js`  | Preguntas, lógica, aleatoriedad y puntuación       |

## Cómo usarlo

1. Abre `index.html` en tu navegador (doble clic basta).
2. Elige cuántas preguntas quieres (de 1 a 40) con el deslizador o escribiendo el número. Por defecto son 40.
3. Pulsa **Comenzar**.
4. Responde cada pregunta. Las preguntas y sus opciones salen en orden aleatorio.
   - Si aciertas, la opción se marca en verde.
   - Si fallas, se marca en rojo y se muestra la respuesta correcta.
5. Pulsa **Siguiente**. En la última pregunta el botón dice **Ver resultados**.
6. En la pantalla final verás tus aciertos, fallos y porcentaje. Pulsa **Intentar de nuevo** para volver a empezar.

## Publicarlo con GitHub Pages

1. Entra al repositorio en GitHub y ve a **Settings > Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. En **Branch**, selecciona **main** y la carpeta **/ (root)**. Pulsa **Save**.
4. Espera uno o dos minutos. La URL aparecerá en la misma página, con el formato `https://<usuario>.github.io/control4/`.

## Personalizar las preguntas

Las preguntas están en el arreglo `PREGUNTAS` de `script.js`. Cada una tiene esta forma:

```js
{ pregunta: "¿...?", opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"], correcta: 1 }
```

`correcta` es el índice (0 a 3) de la opción correcta en el orden en que las escribiste.
