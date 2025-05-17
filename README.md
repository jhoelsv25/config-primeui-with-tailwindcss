# 💰 Savings Circle

> Aplicación Angular para gestionar grupos de ahorro colaborativo, también conocidos como "juntas" o "cadenas de ahorro".

---

## 🚀 Funcionalidades

- **Registro de participantes y sus aportes**: Lleva un control detallado de los miembros y sus contribuciones.
- **Gestión de turnos o ciclos de cobro**: Organiza y administra los ciclos de pago de manera eficiente.
- **Validación de código automática**: Configuración con Prettier, ESLint y Husky para mantener un código limpio y consistente.
- **Preparado para producción**: Optimizado para colaboración en equipo y despliegue en entornos productivos.

---

## 🧱 Instalación del proyecto

### Requisitos previos

Asegúrate de tener instalados los siguientes programas:

- **Node.js** v20 o superior
- **Angular CLI** v18 o superior
- **Git**

### Clonar e instalar dependencias

Sigue estos pasos para configurar el proyecto en tu máquina local:

```bash
git clone https://github.com/jhoelsv25/savings-circle.git
cd savings-circle
npm install
```

### Levantar el proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run start
```

---

## 🛠️ Husky (hook pre-commit)

Este proyecto utiliza **Husky** para ejecutar automáticamente **lint** y **prettier** antes de cada commit, asegurando la calidad del código.

### Activar Husky (una vez después de clonar)

Ejecuta el siguiente comando para habilitar Husky:

```bash
npm run prepare
```

---

## 📂 Estructura del proyecto (base)

La estructura principal del proyecto es la siguiente:

```
src/
├── app/
│   ├── components/   # Componentes reutilizables de la aplicación
│   ├── services/     # Servicios para lógica de negocio y API
│   └── models/       # Modelos de datos
├── assets/           # Recursos estáticos como imágenes y estilos
└── environments/     # Configuraciones de entorno
```

---

## 🧑‍💻 Autor

**Jhoel Silvestre**

- **GitHub**: [jhoelsv25](https://github.com/jhoelsv25)
- **Sitio web**: [jhoel.silvestre.web.app](https://jhoel.silvestre.web.app)

---
