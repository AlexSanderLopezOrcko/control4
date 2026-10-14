/* =========================================================
   Cuestionario: Criptografía Asimétrica - lógica
   JavaScript vanilla, sin dependencias externas.
   ========================================================= */

/* ---------------------------------------------------------
   1. BANCO DE PREGUNTAS
   "correcta" es el índice (0-3) de la opción correcta en el
   orden ORIGINAL. Al mostrarlas, las opciones se mezclan.
   --------------------------------------------------------- */
const PREGUNTAS = [
  { pregunta: "¿Qué estructura de claves caracteriza a la criptografía asimétrica?", opciones: ["Una clave compartida", "Dos claves relacionadas", "Tres claves independientes", "Cuatro claves rotativas"], correcta: 1 },
  { pregunta: "¿Qué problema matemático fundamenta RSA?", opciones: ["Logaritmo discreto elíptico", "Factorización de enteros", "Sustitución de caracteres", "Permutación de bloques"], correcta: 1 },
  { pregunta: "¿Quiénes desarrollaron RSA en 1977?", opciones: ["Diffie Hellman Elgamal", "Rivest Shamir Adleman", "Koblitz Miller Shor", "Shannon Turing Rivest"], correcta: 1 },
  { pregunta: "¿Qué longitud mínima de clave RSA figura en la tabla comparativa?", opciones: ["1024 bits nominales", "2048 bits recomendados", "512 bits nominales", "256 bits recomendados"], correcta: 1 },
  { pregunta: "¿Cuál es la función principal de Diffie-Hellman?", opciones: ["Firmar documentos digitales", "Intercambiar claves secretas", "Cifrar archivos completos", "Comprimir mensajes cifrados"], correcta: 1 },
  { pregunta: "¿Qué fundamento matemático emplea Diffie-Hellman?", opciones: ["Factorización de enteros", "Logaritmo discreto modular", "Sustitución de bytes", "Mezcla de columnas"], correcta: 1 },
  { pregunta: "¿Qué ventaja ofrece ECC frente a RSA con seguridad comparable?", opciones: ["Claves considerablemente menores", "Bloques considerablemente mayores", "Mensajes considerablemente cortos", "Contraseñas considerablemente largas"], correcta: 0 },
  { pregunta: "¿Qué problema matemático sustenta ECC?", opciones: ["Factorización de enteros", "Logaritmo discreto elíptico", "Análisis de frecuencias", "Transposición de caracteres"], correcta: 1 },
  { pregunta: "¿Qué aplicación asimétrica permite verificar la autoría de mensajes?", opciones: ["Compresión de datos", "Firma digital verificable", "Cifrado de bloques", "Codificación de archivos"], correcta: 1 },
  { pregunta: "¿Qué algoritmo cuántico amenaza la factorización utilizada en RSA?", opciones: ["Algoritmo de Shor", "Algoritmo de Euclides", "Algoritmo de César", "Algoritmo de Vigenère"], correcta: 0 },
  { pregunta: "¿Qué clave utiliza el remitente para generar su firma digital según el capítulo?", opciones: ["Su clave pública", "Su clave privada", "Una clave compartida", "Una clave temporal"], correcta: 1 },
  { pregunta: "¿Qué familia criptográfica resulta adecuada para dispositivos con recursos limitados?", opciones: ["Criptografía de bloques", "Criptografía curva elíptica", "Criptografía de sustitución", "Criptografía de transposición"], correcta: 1 },
  { pregunta: "¿Qué protocolo del capítulo permite establecer una clave compartida?", opciones: ["Protocolo Diffie Hellman", "Protocolo RSA directo", "Protocolo AES simétrico", "Protocolo DES clásico"], correcta: 0 },
  { pregunta: "¿De qué depende fundamentalmente la seguridad de los algoritmos asimétricos?", opciones: ["Problemas matemáticos difíciles", "Mensajes extremadamente largos", "Dispositivos físicamente grandes", "Canales necesariamente privados"], correcta: 0 },
  { pregunta: "¿Qué algoritmo citado depende de la dificultad de factorizar enteros?", opciones: ["Algoritmo ElGamal clásico", "Algoritmo RSA asimétrico", "Algoritmo ECDSA elíptico", "Algoritmo Diffie Hellman"], correcta: 1 },
  { pregunta: "¿Qué problema matemático sustenta ElGamal?", opciones: ["Logaritmo discreto modular", "Factorización de enteros", "Permutación de bits", "Compresión de datos"], correcta: 0 },
  { pregunta: "¿Qué aplicación de RSA complementa el cifrado?", opciones: ["Firmas digitales verificables", "Bloques simétricos independientes", "Contadores cifrados secuenciales", "Compresión de archivos"], correcta: 0 },
  { pregunta: "¿Qué algoritmo basado en curvas elípticas produce firmas digitales?", opciones: ["Algoritmo ECDSA elíptico", "Algoritmo ECDH elíptico", "Algoritmo RSA clásico", "Algoritmo AES simétrico"], correcta: 0 },
  { pregunta: "¿Qué operación matemática utiliza Diffie-Hellman en sus cálculos?", opciones: ["Exponenciación modular repetida", "Factorización entera directa", "Sustitución alfabética fija", "Transposición matricial simple"], correcta: 0 },
  { pregunta: "¿Qué longitud de clave ECC compara el capítulo con RSA de 3072 bits?", opciones: ["128 bits elípticos", "192 bits elípticos", "256 bits elípticos", "512 bits elípticos"], correcta: 2 },
  { pregunta: "¿Qué función diferencia a ElGamal del propósito principal de Diffie-Hellman?", opciones: ["Cifrar mensajes directamente", "Comprimir mensajes digitalmente", "Ordenar mensajes alfabéticamente", "Fragmentar mensajes automáticamente"], correcta: 0 },
  { pregunta: "¿Qué característica de ECC favorece un menor consumo de recursos?", opciones: ["Claves más pequeñas", "Bloques más grandes", "Mensajes más extensos", "Rondas más numerosas"], correcta: 0 },
  { pregunta: "¿Qué algoritmo permite acordar secretos sobre un canal público?", opciones: ["Algoritmo Diffie Hellman", "Algoritmo AES estándar", "Algoritmo DES clásico", "Algoritmo César tradicional"], correcta: 0 },
  { pregunta: "¿Qué operación relaciona los primos p y q con el módulo RSA?", opciones: ["Producto de primos", "Suma de exponentes", "División de claves", "Resta de módulos"], correcta: 0 },
  { pregunta: "¿Qué limitación de RSA y ElGamal destaca el capítulo frente al cifrado simétrico?", opciones: ["Mayor costo computacional", "Menor tamaño obligatorio", "Ausencia de autenticación", "Imposibilidad de cifrado"], correcta: 0 },
  { pregunta: "¿Qué técnica cuántica podría debilitar RSA?", opciones: ["Algoritmo de Shor", "Algoritmo de Euclides", "Algoritmo de Kasiski", "Algoritmo de Shannon"], correcta: 0 },
  { pregunta: "¿Qué procedimiento se emplea normalmente para cifrar grandes volúmenes tras establecer una clave asimétricamente?", opciones: ["Cifrado simétrico AES", "Firma digital ECDSA", "Intercambio Diffie Hellman", "Factorización RSA directa"], correcta: 0 },
  { pregunta: "¿Qué algoritmo asimétrico aparece asociado a cifrado y firma digital?", opciones: ["Algoritmo RSA asimétrico", "Algoritmo AES simétrico", "Algoritmo DES clásico", "Algoritmo RC4 continuo"], correcta: 0 },
  { pregunta: "¿Por qué ECC es atractivo para teléfonos móviles?", opciones: ["Menores recursos requeridos", "Mayores bloques transmitidos", "Más contraseñas compartidas", "Menos firmas verificables"], correcta: 0 },
  { pregunta: "¿Qué separación permite verificar firmas sin revelar el secreto del firmante?", opciones: ["Claves públicas privadas", "Bloques grandes pequeños", "Mensajes claros cifrados", "Contadores pares impares"], correcta: 0 },
  { pregunta: "¿Qué valor se calcula primero tras elegir p y q en RSA?", opciones: ["Módulo n compuesto", "Exponente d privado", "Mensaje C cifrado", "Clave K compartida"], correcta: 0 },
  { pregunta: "¿Qué condición debe cumplir e respecto de φ(n) en RSA?", opciones: ["Ser coprimo relativo", "Ser múltiplo exacto", "Ser divisor común", "Ser idéntico siempre"], correcta: 0 },
  { pregunta: "¿Qué representa d en el sistema RSA?", opciones: ["Exponente privado inverso", "Exponente público compartido", "Módulo público compuesto", "Primo secreto inicial"], correcta: 0 },
  { pregunta: "¿Qué par constituye la clave pública RSA?", opciones: ["Par e n", "Par d n", "Par p q", "Par a b"], correcta: 0 },
  { pregunta: "¿Qué operación permite recuperar M desde C en RSA?", opciones: ["Potenciación modular privada", "Potenciación modular pública", "Sustitución alfabética variable", "Transposición de columnas"], correcta: 0 },
  { pregunta: "¿Qué valores de Diffie-Hellman se acuerdan públicamente al inicio?", opciones: ["Base y primo", "Secretos a b", "Claves privadas individuales", "Firmas digitales verificables"], correcta: 0 },
  { pregunta: "¿Qué información intercambian Alice y Bob en Diffie-Hellman?", opciones: ["Valores públicos calculados", "Exponentes secretos individuales", "Claves privadas completas", "Mensajes originales cifrados"], correcta: 0 },
  { pregunta: "¿Qué resultado comparten ambas partes al terminar Diffie-Hellman?", opciones: ["Una clave común", "Dos firmas distintas", "Un módulo factorizado", "Una contraseña pública"], correcta: 0 },
  { pregunta: "¿Qué algoritmo elíptico se destina específicamente al intercambio de claves?", opciones: ["Algoritmo ECDH elíptico", "Algoritmo ECDSA elíptico", "Algoritmo RSA clásico", "Algoritmo ElGamal tradicional"], correcta: 0 },
  { pregunta: "¿Qué línea de investigación busca resistir amenazas de computación cuántica?", opciones: ["Criptografía post cuántica", "Criptografía mono alfabética", "Criptografía por transposición", "Criptografía simétrica clásica"], correcta: 0 }
];

/* ---------------------------------------------------------
   2. UTILIDADES DE ALEATORIEDAD
   --------------------------------------------------------- */

/**
 * Mezcla un arreglo con el algoritmo Fisher-Yates.
 * Devuelve una copia nueva; el arreglo original no se modifica.
 */
function mezclar(arreglo) {
  const copia = arreglo.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Prepara el cuestionario:
 *  - Elige `cantidad` preguntas distintas al azar (sin repetir).
 *  - Mezcla las opciones de cada pregunta, guardando para cada
 *    una si es la correcta (esCorrecta), así no se pierde la respuesta.
 */
function prepararCuestionario(cantidad) {
  const seleccionadas = mezclar(PREGUNTAS).slice(0, cantidad);

  return seleccionadas.map((p) => ({
    pregunta: p.pregunta,
    opciones: mezclar(
      p.opciones.map((texto, indice) => ({
        texto,
        esCorrecta: indice === p.correcta,
      }))
    ),
  }));
}

/* ---------------------------------------------------------
   Desde aquí todo depende del DOM. Se envuelve en un guard
   para que el archivo también pueda cargarse en Node (pruebas).
   --------------------------------------------------------- */
if (typeof document !== "undefined") {

/* ---------------------------------------------------------
   3. ESTADO DE LA APLICACIÓN
   --------------------------------------------------------- */
const estado = {
  preguntas: [],     // preguntas preparadas para esta ronda
  indice: 0,         // índice de la pregunta actual
  aciertos: 0,
  fallos: 0,
  respondida: false, // evita responder dos veces la misma pregunta
};

/* ---------------------------------------------------------
   4. REFERENCIAS AL DOM
   --------------------------------------------------------- */
const $ = (id) => document.getElementById(id);

const pantallas = {
  inicio: $("pantalla-inicio"),
  quiz: $("pantalla-quiz"),
  resultados: $("pantalla-resultados"),
};

const controles = {
  rango: $("cantidad-rango"),
  numero: $("cantidad-numero"),
  comenzar: $("btn-comenzar"),
  siguiente: $("btn-siguiente"),
  reiniciar: $("btn-reiniciar"),
  indicador: $("indicador-progreso"),
  barra: $("barra-relleno"),
  barraContenedor: document.querySelector(".barra-progreso"),
  pregunta: $("texto-pregunta"),
  opciones: $("contenedor-opciones"),
  retroalimentacion: $("retroalimentacion"),
  resumenAciertos: $("resumen-aciertos"),
  resumenFallos: $("resumen-fallos"),
  resumenTotal: $("resumen-total"),
  resumenPorcentaje: $("resumen-porcentaje"),
};

const MIN_PREGUNTAS = 1;
const MAX_PREGUNTAS = PREGUNTAS.length; // 40

/* ---------------------------------------------------------
   5. NAVEGACIÓN ENTRE PANTALLAS
   --------------------------------------------------------- */

/** Muestra solo la pantalla indicada ("inicio", "quiz" o "resultados"). */
function mostrarPantalla(nombre) {
  Object.values(pantallas).forEach((p) => p.classList.remove("activa"));
  pantallas[nombre].classList.add("activa");
}

/* ---------------------------------------------------------
   6. SELECTOR DE CANTIDAD (rango y número sincronizados)
   --------------------------------------------------------- */

/** Lee la cantidad elegida y la limita al rango válido 1-40. */
function leerCantidad() {
  let valor = parseInt(controles.numero.value, 10);
  if (Number.isNaN(valor)) valor = MAX_PREGUNTAS;
  return Math.min(MAX_PREGUNTAS, Math.max(MIN_PREGUNTAS, valor));
}

/** Pone el mismo valor en el slider y en el input numérico. */
function fijarCantidad(valor) {
  controles.rango.value = valor;
  controles.numero.value = valor;
}

controles.rango.addEventListener("input", () => fijarCantidad(controles.rango.value));

controles.numero.addEventListener("input", () => {
  // Se actualiza el slider solo con números válidos
  const valor = parseInt(controles.numero.value, 10);
  if (!Number.isNaN(valor)) controles.rango.value = Math.min(MAX_PREGUNTAS, Math.max(MIN_PREGUNTAS, valor));
});

// Al salir del campo numérico, corrige valores fuera de rango
controles.numero.addEventListener("change", () => fijarCantidad(leerCantidad()));

/* ---------------------------------------------------------
   7. FLUJO DEL CUESTIONARIO
   --------------------------------------------------------- */

/** Inicia una nueva ronda con la cantidad elegida. */
function comenzar() {
  estado.preguntas = prepararCuestionario(leerCantidad());
  estado.indice = 0;
  estado.aciertos = 0;
  estado.fallos = 0;
  mostrarPantalla("quiz");
  mostrarPreguntaActual();
}

/** Dibuja la pregunta actual, su progreso y sus opciones. */
function mostrarPreguntaActual() {
  const total = estado.preguntas.length;
  const actual = estado.preguntas[estado.indice];
  estado.respondida = false;

  // Indicador y barra de progreso (la barra muestra lo ya completado)
  controles.indicador.textContent = `Pregunta ${estado.indice + 1} de ${total}`;
  const porcentaje = (estado.indice / total) * 100;
  controles.barra.style.width = `${porcentaje}%`;
  controles.barraContenedor.setAttribute("aria-valuenow", Math.round(porcentaje));

  controles.pregunta.textContent = actual.pregunta;
  controles.retroalimentacion.textContent = "";
  controles.retroalimentacion.className = "retroalimentacion";

  // Se crean los botones de opción en el orden ya mezclado
  controles.opciones.innerHTML = "";
  const letras = ["A", "B", "C", "D"];
  actual.opciones.forEach((opcion, i) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "opcion";

    const letra = document.createElement("span");
    letra.className = "letra";
    letra.textContent = letras[i]; // letra según la posición actual

    const texto = document.createElement("span");
    texto.className = "texto";
    texto.textContent = opcion.texto;

    boton.append(letra, texto);
    boton.addEventListener("click", () => responder(boton, opcion));
    controles.opciones.appendChild(boton);
  });

  controles.siguiente.disabled = true;
  controles.siguiente.textContent = estado.indice === total - 1 ? "Ver resultados" : "Siguiente";
}

/**
 * Procesa la respuesta del usuario.
 * @param {HTMLButtonElement} botonElegido - botón que se pulsó
 * @param {{texto: string, esCorrecta: boolean}} opcionElegida
 */
function responder(botonElegido, opcionElegida) {
  if (estado.respondida) return; // seguridad: una sola respuesta por pregunta
  estado.respondida = true;

  const botones = controles.opciones.querySelectorAll(".opcion");
  const opcionesMostradas = estado.preguntas[estado.indice].opciones;

  // Bloquea todas las opciones
  botones.forEach((b) => (b.disabled = true));

  if (opcionElegida.esCorrecta) {
    estado.aciertos++;
    botonElegido.classList.add("correcta");
    controles.retroalimentacion.textContent = "¡Correcto!";
    controles.retroalimentacion.classList.add("ok");
  } else {
    estado.fallos++;
    botonElegido.classList.add("incorrecta");

    // Resalta la opción correcta y muestra su texto
    const indiceCorrecta = opcionesMostradas.findIndex((o) => o.esCorrecta);
    botones[indiceCorrecta].classList.add("correcta");
    controles.retroalimentacion.textContent = `Respuesta correcta: ${opcionesMostradas[indiceCorrecta].texto}`;
    controles.retroalimentacion.classList.add("mal");
  }

  controles.siguiente.disabled = false;
  controles.siguiente.focus(); // facilita avanzar con teclado
}

/** Avanza a la siguiente pregunta o muestra los resultados. */
function siguiente() {
  if (!estado.respondida) return; // el botón está deshabilitado, esto es un respaldo
  estado.indice++;

  if (estado.indice < estado.preguntas.length) {
    mostrarPreguntaActual();
  } else {
    mostrarResultados();
  }
}

/* ---------------------------------------------------------
   8. PANTALLA FINAL
   --------------------------------------------------------- */
function mostrarResultados() {
  const total = estado.preguntas.length;
  const porcentaje = total === 0 ? 0 : Math.round((estado.aciertos / total) * 100);

  controles.resumenAciertos.textContent = `Aciertos: ${estado.aciertos}`;
  controles.resumenFallos.textContent = `Fallos: ${estado.fallos}`;
  controles.resumenTotal.textContent = `Total de preguntas: ${total}`;
  controles.resumenPorcentaje.textContent = `${porcentaje}%`;

  mostrarPantalla("resultados");
}

/** Vuelve a la pantalla inicial para elegir de nuevo la cantidad. */
function reiniciar() {
  estado.preguntas = [];
  estado.indice = 0;
  estado.aciertos = 0;
  estado.fallos = 0;
  mostrarPantalla("inicio");
  controles.comenzar.focus();
}

/* ---------------------------------------------------------
   9. EVENTOS
   --------------------------------------------------------- */
controles.comenzar.addEventListener("click", comenzar);
controles.siguiente.addEventListener("click", siguiente);
controles.reiniciar.addEventListener("click", reiniciar);

} // fin del bloque que requiere el DOM

/* ---------------------------------------------------------
   10. EXPORTACIÓN PARA PRUEBAS (Node.js)
   En el navegador `module` no existe, así que no tiene efecto.
   --------------------------------------------------------- */
if (typeof module !== "undefined") {
  module.exports = { PREGUNTAS, mezclar, prepararCuestionario };
}
