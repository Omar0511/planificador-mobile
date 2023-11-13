# App Planificador de Presupuestos

- Creación del proyecto:
    - `npx react-native init MiProyecto --version 0.70`

## Herramientas utilizadas
1. Visual Studio Code 
    - entorno de desarrollo
1. Chocolatey
    - instalar dependencias
1. Node.js
1. JAVA DEVELOPMENT KIT
1. Android Studio
1. Android SDK
1. Emulador Android (AVD) 
    - Una vez creado el Emulador y creado nuestro proyecto, mediante la consola dentro de la carpeta de nuestro proyecto, tenemos que ejecutar el siguiente comando:  `npx react-native run-android`
1. Flipper
    - nos ayuda a debuguear la app


### Tecnologías
1. React Native
1. Stylesheet
1. Sombras
    - ethercreative.github.io/react-native-shadow-generator/
1. Picker
    - `npm install @react-native-picker/picker --save`
    - **Nota**: después de ejcutar el PICKER, tenemos que cerrar y abrir de nuevo el emulador:
        - `npx react-native run-android`
1. 

#### Notas
1. Si te diera ERROR el formato de las cantidades en ANDROID, tenemos que realizar lo siguiente:
1. Dentro de la siguiente ruta:
    - android / app / build.gradle
1. Debemos buscar la línea: 112 o 113 y cambiar la variable o función por la siguiente:
    - `def jscFlavor = 'org.webkit:android-jsc:+'`
1. Cambiarlo por:
    - **`def jscFlavor = 'org.webkit:android-jsc-intl:+'`**