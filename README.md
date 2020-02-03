# El-Baraton
E-commerce para productos de la tienda el baraton

## Prueba técnica
Proyecto implementado usando la tecnología reac-native, con la siguiente funcionalidad:
- La tienda debe mostrar categorías las cuales están conformadas por subniveles, éstos subniveles a su vez pueden tener más subniveles anidados, se debe hacer un menú donde aparezcan categorías y subniveles de forma anidada. Ejemplo
* Categoríalicores
  * subnivel vinos:
    * subnivel vinos tintos
    * subnivel vinos blancos
- Los productos tienen un identificador principal y un identificador de subnivel, esto quiere decir que un producto sólo debe ser mostrado en su subnivel correspondiente.
- Los productos deben filtrarse por: disponibilidad, rango de precios, cantidad en stock.
- Los productos deben poder ordenarse por precio, disponibilidad y cantidad.
- Se debe crear un carrito de compras donde los usuarios puedan agregar, editar
cantidad y eliminar un producto.
- Los productos deben permanecer en el carrito si el usuario cierra y abre la página solo
deben ser borrados si el usuario realiza la compra.
- Un subnivel final es aquel que no tiene más subniveles, en éste caso debe aparecer una
caja de texto que permita realizar búsquedas de productos por nombre en dichos
subniveles.
- Además, el ecommerce debe ser responsive.

## Diseño
Para el diseño de la solucion se planteo un wireframes usando la herramienta Adobe XD.
Link con el diseño: https://xd.adobe.com/view/6362b65a-1893-4949-4a9c-9489780dff10-1553/

## Recursos
La imágenes utilizadas para el desarrollo del proyecto fueron tomadas de las siguientes fuentes:
* https://www.freepik.es/
* https://source.unsplash.com/random/200x200/?food  --> Api para la generación aleatoria de imagenes

## Estructura
Para el desarrollo del proyecto se implemento la siguiente estructura código dentro de la carperta "src":
* actions
* assets
* components -> componentes de uso general
* modules-native
* pages
  * home
    * componentes -> Componentes de uso especifico de la página
    * home-layout.js -> Componente de la interfaz de la pagina
    * home.js -> Controlador de la interfaz
  * category
  * cart
* redux
* resources
* styles
* utils

## Arquitectura
El planteamineto de la solución y la implementación de la misma se hizo pensando en el UX, para que fuera responsive,
y la interacciones de la app fueran totalmente dinamicas, aun cuando la fuente de datos era estatica.

Para la arquitectura de la app se uso un flujo parecido al de la arquitetura flux, basado en acciones, en este caso
no se uso ninguna libreria flux para la implementación de esta, si no, que se gestionaron las acciones a travez de 
las librerias de redux, tambien se uso redux-persist para la persistencia de la información y el estado de la app.
Se usó la libreria numeral para dar formato moneda a los numeros.

Para el manejo de rutas y cambios de ventana dentro de la app se uso react-navigation y su stak para la gestion del mismo, 
tambien se uso librerias como react-native-vector-icons para el uso de iconos dentro de la app y @react-native-community/slider
para el componente de Slider Nativo
### Librerias:
   * "@react-native-community/async-storage": "1.7.1",
   * "@react-native-community/masked-view": "0.1.6",
   * "@react-native-community/slider": "2.0.8",
   * "numeral": "2.0.6",
   * "react": "16.9.0",
   * "react-native": "0.61.5",
   * "react-native-gesture-handler": "1.5.3",
   * "react-native-reanimated": "1.7.0",
   * "react-native-safe-area-context": "0.6.4",
   * "react-native-screens": "2.0.0-alpha.32",
   * "react-native-vector-icons": "6.6.0",
   * "react-navigation": "4.1.0",
   * "react-navigation-stack": "2.0.16",
   * "react-redux": "7.1.3",
   * "redux": "4.0.5",
   * "redux-persist": "6.0.0",
