# Convertidor de Datos a Binario

Un convertidor de datos a binario construido con React que permite convertir texto, audio y documentos a su representación binaria. El proyecto utiliza una interfaz moderna y profesional, implementada con Tailwind CSS a través de CDN.

![image](https://github.com/user-attachments/assets/47b191d1-1e12-4eb7-984f-e436986921a6)


## 🚀 Características

- Conversión de texto a binario con visualización de proceso ASCII
- Grabación y conversión de audio a binario (3 segundos de grabación)
- Conversión de documentos a binario con soporte para cualquier tipo de archivo
- Interfaz de usuario moderna y responsive
- Explicaciones detalladas del proceso de conversión
- No requiere configuración de dependencias (uso de CDN)

## 📋 Prerrequisitos

- Node.js (versión 14.0.0 o superior)
- npm (viene incluido con Node.js)
- Navegador web moderno con soporte para ES6

## 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/binary-converter.git
cd binary-converter
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 💻 Uso

### Conversión de Texto

1. Haz clic en el botón "Texto a Binario"
2. Ingresa el texto que deseas convertir en el prompt
3. La conversión mostrará el resultado y una explicación del proceso

### Conversión de Audio

1. Haz clic en el botón "Audio a Binario"
2. Permite el acceso al micrófono cuando se solicite
3. Habla durante 3 segundos
4. La grabación se detendrá automáticamente y mostrará la conversión

### Conversión de Documentos

1. Haz clic en el botón "Documento a Binario"
2. Selecciona el archivo que deseas convertir
3. Se mostrará la conversión de los primeros bytes del archivo

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/) - Framework de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS (vía CDN)
- Web APIs:
  - MediaRecorder API para grabación de audio
  - File API para manejo de documentos

## 📁 Estructura del Proyecto

```
binary-converter/
│
├── public/
│   ├── index.html      # HTML principal con CDNs
│   └── ...
│
├── src/
│   ├── App.js          # Componente principal
│   ├── index.js        # Punto de entrada
│   └── ...
│
└── README.md
```

## ⚙️ Configuración

El proyecto usa Tailwind CSS a través de CDN, por lo que no requiere configuración adicional. Sin embargo, si deseas personalizar los estilos, puedes modificar las clases de Tailwind en `App.js`.

### Personalización de Estilos

Los colores principales del tema se pueden modificar cambiando las clases de Tailwind:

- Botón de Texto: `bg-blue-600`
- Botón de Audio: `bg-green-600`
- Botón de Documento: `bg-purple-600`

## 🔍 Funcionamiento Interno

### Conversión de Texto

- Cada carácter se convierte a su código ASCII
- El código ASCII se convierte a representación binaria de 8 bits
- Los bytes se concatenan con espacios para mejor legibilidad

### Conversión de Audio

- El audio se captura usando la MediaRecorder API
- Los datos de audio se convierten a ArrayBuffer
- Se muestran los primeros 8 bytes en formato binario

### Conversión de Documentos

- El archivo se lee como ArrayBuffer
- Se convierte a Uint8Array para procesar los bytes
- Se muestran los primeros 8 bytes en formato binario

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Realiza commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## ✨ Agradecimientos

- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📞 Contacto

Tu Nombre - [@tutwitter](https://twitter.com/tutwitter) - email@ejemplo.com

Link del proyecto: [https://github.com/tuusuario/binary-converter](https://github.com/tuusuario/binary-converter)
git ad
