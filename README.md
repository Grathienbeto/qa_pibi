Repositorio de pruebas / automatización (**QA**) para “PIBI”.

## 📌 Descripción

Este proyecto tiene como objetivo automatizar tareas de calidad (QA) para el sistema _PIBI_. Utiliza la herramienta Cypress para ejecutar pruebas end-to-end, basadas en JavaScript.

## 🚀 Tecnologías

- JavaScript (100 %)
- Cypress (configuración incluida: `cypress.config.js`, carpeta `cypress/`)
- Node.js / npm (gestión de dependencias vía `package.json`, `package-lock.json`)
- Estructura de proyecto orientada a pruebas automatizadas

## 🔧 Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Grathienbeto/qa_pibi.git
   cd qa_pibi

   ```

2. Instalar dependencias:

   ```bash
    npm install

   ```

3. Abrir la UI de Cypress:
   ```bash
    npx cypress open
   ```

## 👨‍💻 Diagrama del Proyecto

QA_PiBi/
├── cypress/
│ ├── fixtures/ ← datos de prueba
│ ├── e2e/ ← script de pruebas end-to-end
│ ├── support/ ← comandos personalizados / hooks
│ └── …
├── cypress.config.js
├── package.json
├── package-lock.json
└── .gitignore

✅ Uso

Añadir nuevos tests en cypress/e2e para las diferentes secciones.

Añadir fixtures (datos simulados) en cypress/fixtures.

Añadir comandos personalizados adicionales o hooks en cypress/support.

Utilizar cypress.config.js para parametrizar entorno, evidencias , reportes.

🎯 Buenas prácticas

Utilizar el Patron de Diseño: Page Object Model (POM) para representar las páginas de la aplicación.

Uso de variables de entorno para no tener datos sensibles en el repositorio.

Uso de hooks para realizar acciones antes de cada prueba.

Uso de fixtures para simular datos.

🧾 Licencia

Este proyecto está bajo la licencia del equipo QA de PI Consulting and Strategy.
