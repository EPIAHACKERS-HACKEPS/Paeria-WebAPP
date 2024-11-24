---
icon: LiFileCog
---
### Sistema de Gestión de Parking

---
### Easy Setup

Execute `AgentEasySetup.sh`:
```bash
sudo sh AgentEasySetup.sh 2> errors.log 1> Run.log
```
---

#### **Descripción General**

Este proyecto implementa un sistema de gestión de parking basado en sensores y comunicación cliente-servidor, diseñado para ser fácilmente desplegado en dispositivos como Raspberry Pi o PCs estándar. Incluye autenticación mediante HMAC, gestión de ocupación en tiempo real y una conexión robusta con un backend remoto a través de WebSocket.

---

### **Estructura de Archivos**

#### **1. `.gitignore`**

Archivo que define las rutas y archivos que deben ser ignorados por el sistema de control de versiones (`git`). Esto garantiza que no se incluyan archivos sensibles o específicos del entorno en el repositorio.  
**Ejemplo de entradas:**

- `venv/`: Directorio del entorno virtual.
- `*.pyc`: Archivos compilados de Python.
- `__pycache__/`: Directorio de caché de Python.

---

#### **2. `AgentEasySetup.sh`**

Script de configuración y despliegue automatizado para simplificar la instalación y ejecución del sistema. Diseñado para ser compatible tanto con sistemas operativos Linux como con Raspberry Pi.  
**Flujo de Operaciones:**

1. **Creación del entorno virtual:** Utiliza `venv` para aislar las dependencias del proyecto.
2. **Instalación de dependencias:** Descarga e instala las bibliotecas especificadas en `requirements.txt`.
3. **Ejecución del script principal:** Inicia `parking.py` en segundo plano.

**Instrucciones de Uso:**

1. Asegurarse de que el archivo sea ejecutable:
    
    ```bash
    chmod +x AgentEasySetup.sh
    ```
    
2. Ejecutar el script:
    
    ```bash
    ./AgentEasySetup.sh
    ```
    

**Nota:** El script valida cada paso y muestra mensajes de error si algo falla.

---

#### **3. `conf.yaml`**

Archivo de configuración principal del sistema. Contiene los parámetros esenciales para la autenticación y conexión del sistema de parking con el backend remoto.  
**Parámetros clave:**

- `parkingId`: Identificador único del estacionamiento.
- `secret`: Clave secreta utilizada para firmar solicitudes HMAC.
- `host`: Dirección del backend remoto (por defecto, `hackeps.ddns.net/backend`).
- `https`: Booleano para habilitar o deshabilitar HTTPS (por defecto, `true`).
- `size`: Capacidad máxima del estacionamiento.

**Nota:** Este archivo debe ser configurado antes de la primera ejecución del sistema.

---

#### **4. `conf.yaml.template`**

Plantilla para el archivo de configuración. Sirve como guía inicial para el usuario, quien deberá rellenar los campos necesarios antes de renombrarlo a `conf.yaml`.

**Ejemplo de contenido:**

```yaml
parkingId: parking-id
secret: secret
```

---

#### **5. `parking.py`**

El núcleo del sistema de gestión de parking. Implementa las siguientes funcionalidades principales:

##### **a) Gestión de Ocupación**

- Utiliza sensores (en Raspberry Pi) o teclas simuladas (en PC) para detectar la entrada y salida de vehículos.
- Actualiza en tiempo real el nivel de ocupación, respetando la capacidad máxima configurada.

##### **b) Comunicación con el [[Server API|Backend]]**

- Autenticación segura mediante HMAC, generando firmas basadas en un `secret`, `parkingId` y datos transmitidos.
- Conexión robusta a través de WebSocket para enviar y recibir eventos relacionados con el estado del estacionamiento.

##### **c) Integración con Sensores**

- En Raspberry Pi, utiliza GPIO para interactuar con sensores físicos (haz infrarrojo).
- En entornos de simulación, permite usar teclas para representar eventos de entrada y salida.

**Estructura Clave:**

- **`ParkingSocket`**: Maneja la comunicación con el servidor mediante `socketio`.
- **`Parking`**: Gestiona la lógica del sistema, incluyendo lectura de configuraciones y actualización de ocupación.

**Puntos Técnicos Destacados:**

- Mecanismo de reintento automático en caso de pérdida de conexión.
- Interrupciones GPIO para mejorar la eficiencia en Raspberry Pi.
- Diseño multihilo para mantener la conexión y la lógica de sensores simultáneamente.

**Ejecución Manual:**

```bash
python parking.py
```

---

#### **6. `requirements.txt`**

Lista de dependencias necesarias para ejecutar el proyecto. Incluye:

- `pyyaml`: Para gestionar archivos YAML.
- `requests`: Para realizar solicitudes HTTP.
- `python-socketio`: Para la comunicación WebSocket.
- `websocket-client`: Cliente subyacente para WebSocket.

**Instalación de dependencias:**

```bash
pip install -r requirements.txt
```

---

### **Instrucciones de Despliegue**

1. **Configurar el entorno:**
    
    - Editar `conf.yaml.template` con los valores correspondientes y renombrarlo como `conf.yaml`.
2. **Ejecutar el script de configuración:**
    
    ```bash
    ./AgentEasySetup.sh
    ```
    
3. **Monitoreo:**
    
    - Verificar los mensajes en la terminal para confirmar que el sistema se conecta al backend y comienza a enviar eventos.

---

### **Consideraciones Técnicas**

- **Compatibilidad:** Diseñado para correr en Raspberry Pi y sistemas basados en Linux. Puede simularse en un entorno de escritorio estándar.
- **Seguridad:** La autenticación mediante HMAC asegura que las comunicaciones sean verificables y no manipulables.
- **Escalabilidad:** Puede adaptarse a múltiples estacionamientos con configuraciones independientes.

>[!TIP] **Código Auditado con Snyk**  
>Se ha realizado una auditoría de seguridad sobre las dependencias del proyecto utilizando [Snyk](https://snyk.io), una herramienta de análisis de seguridad que verifica vulnerabilidades en las bibliotecas y dependencias. A continuación, se detallan los controles realizados:
>
>- **Comprobación de dependencias:** Se verificaron las dependencias listadas en `requirements.txt` para detectar vulnerabilidades conocidas.
>- **Recomendaciones de actualización:** En caso de que se detecten versiones inseguras, Snyk ofrece recomendaciones sobre la actualización a versiones seguras.
>- **Análisis de código fuente:** Snyk también puede analizar el código fuente para identificar prácticas de codificación inseguras o vulnerabilidades específicas.
>- **Alertas de seguridad:** El sistema generará alertas automáticas si se detectan vulnerabilidades críticas en las dependencias.

