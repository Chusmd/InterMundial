(function() {
    console.log('El script de Intermundial se está ejecutando');
  // Configuración del widget

    var dataText = '¡Viaja seguro y con un descuento del 15%. SOLO DEL 9 Al 19 DE AGOSTO!.';
    var dataImageURL = 'https://www.iammsolutions.com/wp-content/uploads/2024/08/Intermundial_loco_rgb.png'; // URL de la imagen
    var dataZIndex = '999999';

    // Crea el contenedor del widget
    var widgetContainer = document.createElement('div');
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.bottom = '10px';
    widgetContainer.style.right = '10px';
    widgetContainer.style.backgroundColor = '#fff';
    widgetContainer.style.border = '1px solid #ddd';
    widgetContainer.style.padding = '10px';
    widgetContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    widgetContainer.style.zIndex = dataZIndex;
    widgetContainer.style.width = '300px'; // Ajustar el ancho según sea necesario
    widgetContainer.style.textAlign = 'center'; // Centrar el contenido

    // Agrega la imagen al widget
    var widgetImage = document.createElement('img');
    widgetImage.src = dataImageURL;
    widgetImage.alt = 'Seguros de Viaje InterMundial';
    widgetImage.style.width = '100%'; // Ajustar el ancho de la imagen al contenedor
    widgetContainer.appendChild(widgetImage);

    // Agrega el texto del widget
    var widgetText = document.createElement('p');
    widgetText.textContent = dataText;
    widgetContainer.appendChild(widgetText);

    // Agrega el contenedor del widget al body
    document.body.appendChild(widgetContainer);
})();
