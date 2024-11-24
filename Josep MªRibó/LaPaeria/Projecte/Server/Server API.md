---
icon: LiFileCog
---
# Servidor API de Parkings y Su Gestión

## **Introducción**

Este proyecto es una aplicación diseñada para gestionar recursos, implementar seguridad mediante HMAC, manejar conexiones en tiempo real y administrar datos utilizando bases de datos relacionales y Redis. El sistema está desarrollado en Python, utilizando Flask como framework principal.

### Infraestructura de la API

```json
├── EasyServerSetup.sh
├── app.py
├── controller
│   ├── BaseController.py
│   ├── Database
│   │   ├── DatabaseController.py
│   │   ├── GoogleMapController.py
│   │   └── RedisController.py
│   ├── Security
│   │   └── HmacAuthController.py
│   └── Socket
│       └── SocketController.py
├── docker
│   ├── docker-compose.yml
│   └── dockerfile
├── errors
│   ├── security
│   │   ├── AuthHeaderMissingException.py
│   │   ├── HmacAuth
│   │   │   ├── InvalidSignatureException.py
│   │   │   └── OutsideTimestampException.py
│   │   └── InvalidAuthHeaderException.py
│   └── socket
│       └── ParkingNotFoundException.py
├── globals.py
├── models
│   ├── History.py
│   ├── Parking.py
│   └── __init__.py
├── requirements.txt
├── resources
│   ├── api
│   │   ├── history.py
│   │   ├── parking.py
│   │   └── statistics.py
│   └── socket
│       └── SocketMiddleware.py
└── schemas.py
```

## EasyServerSetup.sh
```bash
bash EasyServerSetup.sh 2> /dev/null 1> Run.log
```
## **Archivos Principales**

### **`app.py`**

Archivo principal de la aplicación que inicializa el servidor Flask, configura rutas y controla el ciclo de vida de la aplicación.

### **`globals.py`**

Contiene variables globales, como claves secretas y configuraciones comunes usadas en todo el proyecto.

### **`requirements.txt`**

Lista de dependencias necesarias para ejecutar la aplicación. Utiliza `pip` para instalarlas.

### **`schemas.py`**

Define esquemas de validación para los datos de entrada y salida, asegurando consistencia y robustez.

---

## **Directorios Clave**

### **1. `controller`**

Este directorio contiene controladores que gestionan la lógica de la aplicación:

- **`BaseController.py`**: Clase base para los controladores, proporciona funcionalidades comunes.
- **`Database`**:
    - `DatabaseController.py`: Manejo de operaciones CRUD con SQLAlchemy.
    - `GoogleMapController.py`: Generación de URLs para Google Maps.
    - `RedisController.py`: Gestión de almacenamiento en caché utilizando Redis.
- **`Security`**:
    - `HmacAuthController.py`: Implementa autenticación basada en HMAC.
- **`Socket`**:
    - `SocketController.py`: Maneja la conexión de sockets.

### **2. `docker`**

Contiene configuraciones para la implementación con Docker:

- **`.env.example`**: Archivo de ejemplo para variables de entorno.
- **`docker-compose.yml`**: Configuración para iniciar múltiples contenedores.
- **`dockerfile`**: Configuración de construcción del contenedor Docker.

### **3. `errors`**

Define excepciones personalizadas para diferentes módulos:

- **`security`**:
    - `AuthHeaderMissingException.py`: Excepción para encabezados faltantes.
    - `InvalidAuthHeaderException.py`: Excepción para encabezados inválidos.
    - `HmacAuth`:
        - `InvalidSignatureException.py`: Excepción para firmas HMAC inválidas.
        - `OutsideTimestampException.py`: Excepción por marcas de tiempo fuera del rango permitido.
- **`socket`**:
    - `ParkingNotFoundException.py`: Excepción para errores relacionados con el módulo de estacionamiento.

### **4. `models`**

Define modelos de datos utilizando SQLAlchemy:

- **`History.py`**: Modelo para almacenar el historial.
- **`Parking.py`**: Modelo para la administración de estacionamientos.

### **5. `resources`**

Contiene recursos de la API y middlewares para sockets:

- **`api`**:
    - `history.py`: Endpoints relacionados con el historial.
    - `parking.py`: Endpoints relacionados con estacionamientos.
    - `statistics.py`: Endpoints para estadísticas.
- **`socket`**:
    - `SocketMiddleware.py`: Middleware para gestionar interacciones con sockets.

---

## **Requisitos**

1. **Dependencias**:
    
    - Flask
    - Flask-SQLAlchemy
    - Redis
    - Docker
    - Otros (ver `requirements.txt`).
2. **Configuración Inicial**:
    
    - Copiar `.env.example` a `.env` y completar las variables necesarias.
    - Ejecutar `EasyServerSetup.sh` para configurar el entorno automáticamente.
3. **Comandos de Configuración**:
    
    - **Construir contenedores**:
        
        ```bash
        docker-compose build
        ```
        
    - **Iniciar el sistema**:
        
        ```bash
        docker-compose up
        ```
        

---

## **Flujo Principal**

1. **Autenticación (HMAC)**:
    
    - El cliente genera un encabezado de autorización siguiendo el esquema `HMAC client_id:signature:timestamp`.
    - El servidor valida la firma y el timestamp mediante `HmacAuthController`.
2. **Gestión de Datos**:
    
    - CRUD en la base de datos utilizando `DatabaseController`.
    - Cacheo y recuperación rápida mediante Redis (`RedisController`).
3. **Conexiones en Tiempo Real**:
    
    - Soporte para sockets implementado con middlewares en `SocketMiddleware.py` y lógica de control en `SocketController.py`.
4. **Integraciones de Terceros**:
    
    - URLs personalizadas de Google Maps generadas con `GoogleMapController`.
5. **Integración de ChatBot**:
    
	- Integración de chatbot `Raspi` con inteligencia artificial usando Microsoft Teams.

---

## **Mejoras Futuras**

- Implementación de pruebas unitarias y de integración.
- Configuración avanzada de escalabilidad con Docker Swarm o Kubernetes.
- Optimización de consultas en `DatabaseController` con filtros y paginación.
- Soporte para más servicios de Google Maps.

>[!TIP] **Código Auditado con Snyk**
>Se ha realizado una auditoría de seguridad sobre las dependencias del proyecto utilizando [Snyk](https://snyk.io), una herramienta de análisis de seguridad que verifica vulnerabilidades en las bibliotecas y dependencias. A continuación, se detallan los controles realizados:
>
>- **Comprobación de dependencias:** Se verificaron las dependencias listadas en `requirements.txt` para detectar vulnerabilidades conocidas.
>- **Recomendaciones de actualización:** En caso de que se detecten versiones inseguras, Snyk ofrece recomendaciones sobre la actualización a versiones seguras.
>- **Análisis de código fuente:** Snyk también puede analizar el código fuente para identificar prácticas de codificación inseguras o vulnerabilidades específicas.
>- **Alertas de seguridad:** El sistema generará alertas automáticas si se detectan vulnerabilidades críticas en las dependencias.

