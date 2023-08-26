# React-alert-hook

**react-alert-hook** es un hook para ReactJS el cual te permite usar alertas con temporizador y personalizarlas.

## Instalación

**react-alert-hook** actualmente está en beta.

### Con npm

```bash
npm install react-alert-hook
```

### Con yarn

```bash
yarn add react-alert-hook
```

## Demo

Aquí te dejo una demo, donde puedes probar y personalizar tus alertas de **react-alert-hook** en https://alert-demo.vercel.app/

## Configuración de Alerta

Antes de mostrar una alerta personalizada en tu aplicación, necesitas configurar algunas variables y clases CSS que determinarán cómo se verá la alerta. A continuación, se muestra cómo puedes hacerlo:

```jsx
// Llamamos a useAlert para obtener las variables necesarias
const [alertData, showAlertMessage] = useAlert();

// Desestructuración de la variable alertData para obtener las propiedades necesarias.
const { show, message, type, position, color } = alertData;

// Crear una cadena de clases CSS personalizadas para la alerta
const alertClass = `${type} ${position} ${color}`;
```

## Mostrando la Alerta

Para mostrar una alerta personalizada en tu aplicación, necesitas incorporar el siguiente fragmento de código en tu componente de React:

```jsx
{
  show && (
    <div className={alertClass}>
      <p>{message}</p>
    </div>
  );
}
```

## Ejemplo de cómo usarlo

A continuación, se muestra un ejemplo de cómo puedes usar **react-alert-hook** en tu aplicación React:

```jsx
import React from "react";
import useAlert from "react-alert-hook";

function App() {
  // Llamamos a useAlert para obtener las variables necesarias
  const [alertData, showAlertMessage] = useAlert();

  // Desestructuración de la variable alertData para obtener las propiedades necesarias.
  const { show, message, type, position, color } = alertData;

  // Crear una cadena de clases CSS personalizadas para la alerta
  const alertClass = `${type} ${position} ${color}`;

  // Definir una función que muestra una alerta personalizada al hacer clic en el botón
  const sayHello = (name) => {
    showAlertMessage(`¡Hola, ${name}!`, "alerta5", "topMiddle", "verde", 1500);
  };

  return (
    <div className="App">
      <button onClick={() => sayHello("EloiDev")}>Decir hola</button>
      {show && (
        <div className={alertClass}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
```

En este ejemplo, hemos importado **useAlert** desde **react-alert-hook** y lo hemos utilizado en un componente de React. Cuando el botón "Decir hola" se hace clic, se llama a showAlertMessage para mostrar una alerta personalizada con un mensaje, tipo de alerta, posición, color específicos y tiempo de duración.

## Personalización

Puedes personalizar las alertas en **react-alert-hook** de la siguiente manera:

```jsx
showAlertMessage(mensaje, tipo, posicion, color, tiempo);
```

- `mensaje`: El mensaje que deseas mostrar en la alerta.
- `tipo`: El tipo de alerta, como "alerta1", "alerta2" o "alerta3".
- `posición`: La posición en la que quieres mostrar la alerta, como "topRight", "topMiddle" o "bottomLeft".
- `color`: El color de la alerta, como "verde", "rojo" o "naranja".
- `tiempo` (opcional): El tiempo en milisegundos durante el cual se mostrará la alerta antes de desaparecer. El valor predeterminado es 1500 ms.

### Tipos de Alerta

Puedes usar diferentes tipos de alertas especificando el tipo al llamar a showAlertMessage. Por ejemplo, puedes usar:

- `alerta1`
- `alerta2`
- `alerta3`
- `alerta4`
- `alerta5`

### Posiciones de Alerta

Puedes especificar la posición de la alerta utilizando una de las siguientes opciones:

- `topRight`
- `topMiddle`
- `topLeft`
- `bottomRight`
- `bottomMiddle`
- `bottomLeft`
- `middle`

### Colores de Alerta

Puedes definir colores personalizados para tus alertas utilizando uno de los siguientes colores:

- `verde`
- `rojo`
- `naranja`
- `amarillo`
- `rosa`
- `celeste`
- `azul`
- `gris`

### Tiempo

El tiempo siempre se pone en milisegundos.
En este caso, se ha establecido un tiempo de 1500 milisegundos (1.5 segundos) para que la alerta esté visible antes de desaparecer automáticamente. Puedes ajustar este valor según tus necesidades.

### Contribuciones

¡Contribuciones y sugerencias son bienvenidas! Si tienes ideas para mejorar este paquete, por favor abre un issue o envía un pull request.
