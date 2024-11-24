## Integración de Herramientas como Snyk
Snyk es una plataforma de seguridad centrada en la protección de aplicaciones y su infraestructura en la nube. Está diseñada para ayudar a los desarrolladores a identificar y solucionar vulnerabilidades de seguridad en el código, las dependencias de software y los contenedores, entre otros. Snyk proporciona herramientas que permiten a los equipos de desarrollo integrar la seguridad directamente en su flujo de trabajo, detectando vulnerabilidades en las bibliotecas y dependencias de código abierto, así como configuraciones inseguras en la infraestructura.

Entre sus características destacadas se incluyen:

1. **Escaneo de código y dependencias**: Snyk analiza el código fuente, las dependencias y las imágenes de contenedores para encontrar vulnerabilidades conocidas.
2. **Fix automático**: Ofrece soluciones automáticas para corregir vulnerabilidades, ya sea actualizando dependencias o modificando configuraciones inseguras.
3. **Integración CI/CD**: Snyk se integra fácilmente con pipelines de integración continua y despliegue continuo (CI/CD), lo que permite detectar y solucionar vulnerabilidades durante el desarrollo.
4. **Soporte para múltiples lenguajes y plataformas**: Snyk es compatible con una amplia variedad de lenguajes de programación (como JavaScript, Python, Java, Go, entre otros) y entornos como Kubernetes y Docker.

La plataforma ayuda a reducir los riesgos de seguridad sin interrumpir el flujo de trabajo de desarrollo.

![[Pasted image 20241124104123.png]]

![[Pasted image 20241124104135.png]]

![[Pasted image 20241124104146.png]]

![[Pasted image 20241124104425.png]]

En el análisis de seguridad realizado con **Snyk**, se encontraron dos vulnerabilidades relevantes:

1. **Vulnerabilidad en `urllib3` - Eliminación Incorrecta de Información Sensible Antes de Almacenarla o Transferirla**
    - **CVE**: CVE-2024-37891
    - **Impacto**: Esta vulnerabilidad podría permitir que información sensible se maneje de manera incorrecta, lo que podría dar lugar a filtraciones no deseadas de datos.
    - **Se introdujo a través de**: `requests@2.31.0`
    - **Arreglado en**: `urllib3@1.26.19`, `urllib3@2.2.2`
    - **CVSS**: 6.0 (medio)
    - **Exploit Maturity**: No se conoce ningún exploit en activo.
2. **Vulnerabilidad en `requests` - Implementación Incorrecta del Flujo de Control**
    - **CVE**: CVE-2024-35195
    - **Impacto**: Esta vulnerabilidad afecta a las solicitudes realizadas con el parámetro `verify=False`, lo que puede generar comportamientos inesperados o inseguros en la gestión de la verificación de certificados SSL/TLS.
    - **Se introdujo a través de**: `requests@2.31.0`
    - **Arreglado en**: `requests@2.32.2`
    - **CVSS**: 5.6 (medio)
    - **Exploit Maturity**: No se conoce ningún exploit en activo.

### **Impacto de implementar Snyk**

Implementando **Snyk**, hemos podido identificar estas vulnerabilidades y aplicar las actualizaciones necesarias (`urllib3@1.26.19`, `urllib3@2.2.2`, `requests@2.32.2`). Esto ayuda a corregir las posibles brechas de seguridad que podrían haber afectado a la integridad y confidencialidad de los datos, así como a prevenir futuros riesgos de explotación.

Gracias a las herramientas de Snyk, se pueden corregir vulnerabilidades de forma proactiva, integrando estas soluciones dentro del ciclo de desarrollo sin comprometer la calidad del software, asegurando un entorno más seguro.