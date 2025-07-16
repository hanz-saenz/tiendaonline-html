# Tienda 🧠 Proyecto Django - Aplicación Web

Este repositorio contiene una aplicación desarrollada con Django, lista para ejecutarse en entorno local y producción. Incluye pasos para levantar el entorno virtual, instalar dependencias, crear superusuario y correr el servidor de desarrollo.

---

## 🛠️ Requisitos previos

- Python 3.10+
- pip
- Git (opcional pero recomendado)
- Virtualenv (opcional pero recomendado)
- Docker (opcional para despliegue en contenedores)

---

## ⚙️ Configuración del entorno local

```bash
# 1. Clonar el repositorio
git clone [https://github.com/tu_usuario/tu_repo.git](https://github.com/hanz-saenz/tiendaonline-html.git)
cd tiendaonline-html

# 2. Crear y activar entorno virtual
python -m venv env
# En Windows
env\Scripts\activate
# En Linux/MacOS
source env/bin/activate

# 3. Instalar dependencias
pip install -r requirements.txt

# 4. Aplicar migraciones iniciales
python manage.py migrate
```

## 👤 Crear superusuario

```bash
python manage.py createsuperuser
# Sigue las instrucciones (usuario, correo, contraseña)
```

## 🚀 Ejecutar servidor de desarrollo

```bash
python manage.py runserver
```

Abre tu navegador en: http://127.0.0.1:8000

---

## 🔐 Acceso al panel de administración

Ir a http://127.0.0.1:8000/admin

Iniciar sesión con las credenciales del superusuario creado.

---

## 📁 Estructura principal

- `manage.py` - Script principal de Django
- `requirements.txt` - Dependencias del proyecto
- `usuario/` - App para gestión de usuarios y perfiles ([usuario/models.py](usuario/models.py))
- `productos/` - App para gestión de productos
- `landing/` - App para landing page
- `templates/` - Archivos HTML de la aplicación
- `static/` - Archivos estáticos (CSS, JS, imágenes)
- `media/` - Archivos subidos por los usuarios

---

## 📸 Gestión de perfiles de usuario

El modelo [`PerfilUsuario`](usuario/models.py) permite asociar foto de perfil, teléfono, dirección y fecha de nacimiento a cada usuario.

---

## 📝 Notas

- Configura las variables de entorno en `.env` si es necesario.
- Para producción, ajusta los parámetros de seguridad y base de datos en `settings.py`.
- Consulta la documentación oficial de Django.
