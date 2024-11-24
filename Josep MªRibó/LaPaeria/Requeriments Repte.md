---
icon: LiFileText
---
Enunciat del Repte: Monitorització de Places Lliures en un Aparcament  
  
Descripció:  
L'objectiu d'aquest repte és desenvolupar un sistema per monitoritzar i gestionar la  
disponibilitat de places d'un aparcament a l'aire lliure. Cada equip rebrà un kit compost  
pels següents elements:  
  
- 1 [[Raspberry Agent|Raspberry Pi 4 Model B de 4 GB]].  
- 1 Font d'alimentació USB-C de 5V 3 A.  
- 1 Carcassa per a Raspberry Pi 4.  
- 1 Cable micro HDMI.  
- 1 Targeta MicroSD de 128 GB.  
- 1 Adafruit Sensor de feix de trencament IR - LED de 3 mm [ADA2167].  
  
Desafiament:  
La idea principal és utilitzar els sensors i la Raspberry Pi per detectar l'ocupació de places  
en un aparcament, de manera que es pugui saber en temps real la quantitat de places  
lliures. A partir d'aquesta informació, s'han de desenvolupar una sèrie de funcionalitats  
descrites a continuació:  
  
Funcionalitats a Implementar:  
  
1. API de Monitorització:  
- Desenvolupar una API que permeti, a través d'un servei web, consultar la quantitat de  
places lliures en l'aparcament.  
- L'API haurà d'oferir endpoints per cchaonsultar l'estat actual de l'aparcament i retornar la  
quantitat de places ocupades i lliures.  
  
2. [[Client WebAPP|Pàgina Web de Visualització]]:  
- Implementar una pàgina web que mostri la ubicació de l'aparcament (es pot escollir  
qualsevol ubicació fictícia) i que actualitzi en temps real la quantitat de places lliures.  
- La pàgina ha de ser intuïtiva, fàcil d'usar i oferir una visualització clara de l'ocupació de  
l'aparcament.

  
3. [[Client WebAPP|Aplicació Mòbil]]:  
- Desenvolupar una aplicació mòbil que permeti als usuaris veure la ubicació de  
l'aparcament i la quantitat de places disponibles en temps real.  
- L'app hauria de permetre la consulta de disponibilitat i oferir una experiència amigable  
per a l'usuari.  
  
Funcionalitats Addicionals (Opcional):  
  
4. Notificacions en Temps Real:  
- Implementar un sistema de notificacions push per a l'aplicació mòbil que avisi els  
usuaris quan hi hagi noves places disponibles o quan l'aparcament estigui complet.  
  
5. Historial i Estadístiques d'Ocupació:  
- Incloure una funcionalitat que registri les dades d'ocupació de l'aparcament al llarg del  
temps i generi estadístiques sobre els horaris de major i menor ocupació.  
  
6. Predicció de Places Disponibles:  
- Integrar un model bàsic de predicció utilitzant les dades històriques per estimar la  
disponibilitat de places en determinats moments del dia.  
  
7. Integració amb Serveis de Mapes:  
- Integrar la ubicació de l'aparcament amb serveis de mapes com Google Maps o  
OpenStreetMap per proporcionar indicacions precises fins a l'aparcament.  
  
8. Gestió de Múltiples Aparcaments:  
- Ampliar l'API i la web per a suportar la monitorització de més d'un aparcament alhora,  
proporcionant un llistat de diversos aparcaments i els seus estats d'ocupació.  
  
  
Avaluació:  
Es valorarà la creativitat i la qualitat de la implementació de les funcionalitats  
proposades, així com l'estabilitat i l'experiència d'usuari de la solució final. No és  
necessari implementar totes les funcionalitats; es puntuarà millor el projecte que  
implementi les funcionalitats de manera més robusta i amb major valor afegit.

  
Premi:  
L'equip guanyador rebrà 4 iPad com a recompensa pel seu treball i la qualitat del seu  
projecte.  
  
Notes:  
- L'ús de cada component del kit és obligatori per a la monitorització de l'ocupació de  
l'aparcament.  
- Els participants són lliures d'escollir l'arquitectura del sistema, sempre que compleixi  
amb els requisits establerts.  
- El projecte s'ha de lliurar dins del termini establert per l'organització de la hackathon.