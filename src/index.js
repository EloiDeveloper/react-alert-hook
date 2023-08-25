import { useState } from "react";
import "./styles.css";

// Define un objeto AlertPositions que contiene las posibles posiciones de las alertas.
const AlertPositions = {
  topRight: "top-right",
  topCenter: "top-center",
  topLeft: "top-left",
  bottomRight: "bottom-right",
  bottomCenter: "bottom-center",
  bottomLeft: "bottom-left",
  center: "center",
};

// Hook llamado `useAlert`.
const useAlert = () => {
  // Estados
  const [alertData, setAlertData] = useState({
    show: false,
    message: "",
    type: "",
    color: "",
    position: AlertPositions.bottomRight, // Posición predeterminada
    timeoutId: null,
  });
  
  // Función para renderizar la alerta
  const showAlertMessage = (mensaje, tipo, posicion, color, tiempo = 1500) => {
    if (!mensaje || !tipo || !posicion || !color) {
      // Mostrar una alerta de error, si no se han recibido todos los parámetros necesarios
      console.error("Faltan parámetros requeridos para mostrar la alerta");
      return;
    }

    // Actualizar los valores de alertData con los recibidos
    setAlertData({
      show: true,
      message: mensaje,
      type: tipo,
      color: color,
      position: AlertPositions[posicion] || AlertPositions.bottomRight,
      timeoutId: setTimeout(() => hideAlert(), tiempo),
    });
  };

  // Oculta la alerta actual
  const hideAlert = () => {
    setAlertData({
      show: false,
      message: "",
      type: "",
      color: "",
      position: AlertPositions.bottomRight,
      timeoutId: null,
    });
  };

  return [
    alertData,
    showAlertMessage,
    hideAlert,
  ];
};

export default useAlert;