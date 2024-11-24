---
icon: LiCodeSquare
---
## **Infraestructura**

Esta sección detalla la estructura del proyecto, explicando la finalidad de cada directorio y archivo. La organización está diseñada para facilitar la escalabilidad, el mantenimiento y la claridad en el desarrollo.

---
## **Archivos Raíz**

|Archivo/Directorio|Descripción|
|---|---|
|`.gitignore`|Lista de archivos y carpetas ignorados por Git para evitar incluir datos no deseados en el repositorio.|
|`.yarnrc.yml`|Configuración personalizada para Yarn, el gestor de dependencias.|
|`capacitor.config.ts`|Configuración del framework Capacitor, utilizado para construir aplicaciones móviles multiplataforma.|
|`eslint.config.js`|Configuración de ESLint para asegurar calidad y consistencia en el código.|
|`index.html`|Archivo base del HTML que inicia la aplicación.|
|`package.json`|Especifica dependencias, scripts y metadatos del proyecto.|
|`README.md`|Documentación principal del proyecto.|
|`tsconfig.*.json`|Configuraciones específicas de TypeScript para diferentes entornos (aplicación, nodos, general).|
|`vite.config.ts`|Configuración del bundler Vite, usado para compilar y optimizar la aplicación.|
|`yarn.lock`|Archivo de bloqueo que garantiza versiones consistentes de dependencias.|

---
## **Directorios Principales**

### **`.yarn`**

Contiene configuraciones y binarios relacionados con Yarn.

- `releases/yarn-4.5.2.cjs`: Versión específica de Yarn utilizada en el proyecto.

### **`android`**

Contiene la configuración y los archivos específicos para la construcción de la aplicación en Android.

- **Configuración Base**:
    - Archivos como `build.gradle`, `settings.gradle`, y `gradle-wrapper` aseguran la construcción correcta en entornos Android.
- **Estructura de Código**:
    - `src/main`: Contiene el código fuente y recursos organizados en directorios como:
        - `res`: Recursos visuales (íconos, layouts, etc.).
        - `java`: Código fuente de la aplicación.
        - `AndroidManifest.xml`: Archivo que define la configuración de la aplicación.
    - `test` y `androidTest`: Directorios para pruebas unitarias e instrumentadas.

### **`ios`**

Configuración para construir la aplicación en iOS.

- Contiene archivos como `Podfile` (manejo de dependencias) y `AppDelegate.swift` (punto de entrada de la app en iOS).
- **Recursos Visuales**:
    - `Assets.xcassets`: Íconos y splash screens definidos en el proyecto.

### **`public`**

Archivos estáticos accesibles directamente desde la raíz de la aplicación.

- **Ejemplo**:
    - `LogoPaeria.png` y `LogoPaeria.svg`: Logos utilizados en la aplicación.
    - `vite.svg`: Ícono predeterminado de Vite.

### **`src`**

Directorio principal del código fuente de la aplicación.

#### **Archivos Raíz en `src`**

| Archivo         | Descripción                                                          |
| --------------- | -------------------------------------------------------------------- |
| `App.tsx`       | Componente raíz de la aplicación.                                    |
| `capacitor.ts`  | Configuración de Capacitor para funcionalidades nativas.             |
| `constants.ts`  | Definición de constantes globales.                                   |
| `main.tsx`      | Punto de entrada de la aplicación React.                             |
| `socket.ts`     | Configuración de comunicación en tiempo real a través de WebSockets. |
| `vite-env.d.ts` | Declaraciones de tipos para entornos de Vite.                        |

#### **`assets`**

Recursos estáticos que se utilizan dentro de la aplicación, como imágenes SVG.

#### **`components`**

Componentes React organizados por funcionalidad. Cada componente tiene su propio archivo `.tsx` y un archivo de estilos `.module.scss`.

- **Ejemplo de componentes:**
    - `Charts/BarChart`: Representa gráficos de barras.
    - `Main`: Contiene la lógica principal de visualización (estadísticas y gráficos).
    - `Maps`: Manejo de mapas interactivos con Google Maps.

#### **`store`**

Implementación de la lógica global de la aplicación mediante Redux.

- **Subdirectorios:**
    - `actions`: Define las acciones que disparan cambios en el estado global.
    - `reducers`: Contiene los reductores para manejar las actualizaciones de estado.
    - `selectors`: Funciones para seleccionar datos específicos del estado global.
    - `types`: Tipos TypeScript utilizados en la estructura del estado.

---

## **Tecnologías Utilizadas**

### **Frontend**

- **Framework Principal:** React con TypeScript
    
    - **Ventajas:**
        - Componentización modular.
        - Tipado fuerte con TypeScript para mejorar la robustez y reducir errores.
    - **Arquitectura de Estilos:**
        - **SASS (SCSS):**
            - Permite anidado en estilos.
            - Uso de **Sass Modules** para vincular cada componente a su propio archivo de estilos (`.module.scss`), facilitando la modularidad y evitando colisiones de clases.
- **Bibliotecas clave:**
    
    1. **Chart.js**  
        Usada para la representación gráfica de estadísticas y predicciones de ocupación.
    2. **React Table Library**  
        Implementada para mostrar tablas dinámicas, como el historial de entradas y salidas.
- **Gestión de Estado:**
    
    - **React-Redux:**  
        Se utiliza como una máquina de estados para gestionar los datos globales de la aplicación, asegurando una comunicación eficiente entre componentes.

---

### **Estructura de Componentes**

La aplicación está estructurada de manera jerárquica y organizada para mejorar la mantenibilidad.

- **Archivo Principal:** `App.tsx`  
    Define los componentes principales que componen la interfaz de usuario:
    
    1. **Navegación:** Menú para acceder a las diferentes secciones de la aplicación.
    2. **Main:** Contiene las estadísticas, gráficas, y geolocalización.
    3. **Maps:** Visualización interactiva de la ubicación del parking.
    4. **Prediction:** Representación de predicciones de ocupación basadas en tendencias.
    5. **Historial:** Registro de entradas y salidas.
- **Carpetas por Componente:** Cada componente tiene su propia carpeta dentro de `src/componentes/`, que incluye:
    
    - **`<Componente>.tsx`:** Código principal del componente.
    - **`<Componente>.module.scss`:** Estilos encapsulados del componente.

---

## **Detalle de los Componentes**

### **Main**

El componente **Main** es el núcleo de la interfaz, presentando información clave para el usuario. Se divide en las siguientes secciones:

1. **Estadísticas:**
    
    - **Plazas libres:** Muestra el número actual de plazas disponibles.
    - **Plazas ocupadas:** Indica el número de plazas ocupadas en tiempo real.
    - **Plazas totales:** Capacidad total del parking.
    - **Gráficos de ocupación:**
        - **Gráfico Circular:** Representa el porcentaje de ocupación.
        - **Gráfico de Barra:** Muestra los valores numéricos.
2. **Geolocalización:**
    
    - Integra la API de Google Maps para visualizar la ubicación del parking.
    - La visualización se realiza mediante un iframe interactivo, permitiendo al usuario explorar la ubicación en tiempo real.

1. **Gráfico de Predicciones:**
    
    - Representa las tendencias de ocupación basadas en datos históricos de los últimos 30 días.
    - Incluye gráficos interactivos para mostrar la disponibilidad proyectada a lo largo del día.
4. **Historial:**
    
    - Muestra un registro detallado de entradas y salidas de vehículos.
    - Implementado con **React Table Library** para tablas dinámicas.

---

## **Peticiones a la API del Servidor**

El sistema interactúa con una API del servidor para obtener y enviar datos.  
**Peticiones principales:**

- **GET `/api/v1/parking/{parkingId}`:**  
    Obtiene información del estacionamiento, incluyendo tamaño, ocupación actual y configuración.
- **POST `/api/v1/parking/status`:**  
    Envía actualizaciones de estado del parking (por ejemplo, cambios en la ocupación).
- **GET `/api/v1/parking/predictions`:**  
    Recupera los datos de predicción basados en tendencias históricas.
- **GET `/api/v1/parking/history`:**  
    Devuelve el historial de movimientos (entradas y salidas).

---

## **Experiencia de Usuario (UX/UI)**

### **Principios Clave:**

1. **Interfaz Intuitiva:**
    
    - Diseño minimalista con navegación clara para facilitar el acceso a las funciones principales.
    - Uso de colores diferenciados para destacar plazas libres, ocupadas y totales.
2. **Interactividad:**
    
    - Gráficos y mapas interactivos para una experiencia visual atractiva.
    - Tablas dinámicas que permiten ordenar y filtrar datos del historial.
3. **Rendimiento:**
    
    - Carga asíncrona de datos para evitar bloqueos en la interfaz.
    - Optimización del rendering mediante el uso de técnicas como **memoization** en React.

---

## **Máquina de Estados (Redux)**

El sistema utiliza **React-Redux** como una máquina de estados centralizada para manejar las interacciones entre los componentes.

### **Estructura del Estado:**

- **Parking State:**
    
    - `parkingId`: Identificador único del parking.
    - `occupation`: Número de plazas ocupadas.
    - `size`: Capacidad total.
    - `history`: Registro de movimientos.
- **Predictions State:**
    
    - `trend`: Datos de tendencia para predicciones.
    - `last30Days`: Datos históricos utilizados en los cálculos.

### **Flujo de Estados:**

Aquí tienes el contenido actualizado con la sección sobre **TypeScript: Type Guards y Assertions**, integrada después de "Flujo de Estados":

1. **Acciones (Actions):**  
    Eventos disparados por componentes (por ejemplo, actualización de ocupación o solicitud de predicciones).
    
2. **Reductores (Reducers):**  
    Actualizan el estado global según las acciones.
    
3. **Middleware:**  
    Maneja operaciones asíncronas, como llamadas a la API del servidor.
    


## **TypeScript: Type Guards y Assertions**

En este proyecto, se emplean **Type Guards** y **Assertions** para asegurar que el código maneje tipos correctamente, mejorando la robustez y reduciendo errores.

### **Type Guards**

Los **Type Guards** son funciones que verifican el tipo de una variable en tiempo de ejecución. Esto permite a TypeScript comprender qué tipo de dato está siendo manipulado.

#### Ejemplo Básico: Type Guard

```typescript
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

const example: unknown = "Hola, TypeScript";

if (isString(example)) {
    console.log(example.toUpperCase()); // TypeScript sabe que `example` es string aquí.
}
```

#### Uso en el Proyecto

1. Validación de tipos en datos provenientes de APIs (por ejemplo, respuestas de endpoints).
2. Verificación en el manejo de eventos y mensajes de WebSocket para asegurar que los datos sean del tipo esperado.

---

### **Type Assertions**

Las **Type Assertions** le dicen a TypeScript cómo tratar un valor específico. Esto es útil cuando el desarrollador tiene certeza del tipo, pero TypeScript no puede inferirlo automáticamente.

#### Ejemplo Básico: Type Assertion

```typescript
const input = document.getElementById('username') as HTMLInputElement;
input.value = "TypeScript es genial";
```

#### Precaución

Las Type Assertions deben usarse con cuidado, ya que pueden llevar a errores en tiempo de ejecución si el tipo real no coincide con el esperado.

---

### **Type Guards vs Assertions**

|Aspecto|Type Guard|Type Assertion|
|---|---|---|
|**Propósito**|Verifica dinámicamente el tipo.|Fuerza un tipo específico.|
|**Seguridad**|Aumenta la seguridad al validar el tipo.|Riesgoso si el tipo es incorrecto.|
|**Ejemplo**|`typeof value === 'string'`|`value as string`|

---

### **Type Guards Personalizados en el Proyecto**

En el proyecto, se utilizan para validar datos en componentes como los gráficos o las tablas dinámicas. Un ejemplo práctico es el manejo de predicciones.

#### Ejemplo de Type Guard en Predicciones

```typescript
interface Prediction {
    date: string;
    occupancy: number;
}

function isPrediction(data: any): data is Prediction {
    return (
        data &&
        typeof data.date === 'string' &&
        typeof data.occupancy === 'number'
    );
}

const apiResponse = { date: "2024-11-24", occupancy: 85 };

if (isPrediction(apiResponse)) {
    console.log(`Predicción válida: ${apiResponse.occupancy}% de ocupación`);
} else {
    console.error("La respuesta de la API no tiene el formato esperado");
}
```

>[!TIP] **Código Auditado con Snyk**
>Se ha realizado una auditoría de seguridad sobre las dependencias del proyecto utilizando [Snyk](https://snyk.io), una herramienta de análisis de seguridad que verifica vulnerabilidades en las bibliotecas y dependencias. A continuación, se detallan los controles realizados:
>
>- **Comprobación de dependencias:** Se verificaron las dependencias listadas en `requirements.txt` para detectar vulnerabilidades conocidas.
>- **Recomendaciones de actualización:** En caso de que se detecten versiones inseguras, Snyk ofrece recomendaciones sobre la actualización a versiones seguras.
>- **Análisis de código fuente:** Snyk también puede analizar el código fuente para identificar prácticas de codificación inseguras o vulnerabilidades específicas.
>- **Alertas de seguridad:** El sistema generará alertas automáticas si se detectan vulnerabilidades críticas en las dependencias.