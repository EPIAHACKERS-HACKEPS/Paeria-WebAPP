---
icon: LiClipboardSignature
---
# TODO List: Monitorització de Places Lliures en un Aparcament

## Preparació del Kit
- [ ] Assegurar que el kit conté tots els elements necessaris:
  - [ ] Raspberry Pi 4 Model B de 4 GB.
  - [ ] Font d'alimentació USB-C de 5V 3 A.
  - [ ] Carcassa per a Raspberry Pi 4.
  - [ ] Cable micro HDMI.
  - [ ] Targeta MicroSD de 128 GB.
  - [ ] Adafruit Sensor de feix de trencament IR - LED de 3 mm [ADA2167].

## Desenvolupament del Projecte
### Funcionalitats Bàsiques
1. **API de Monitorització**
   - [x] Desenvolupar una API que permeti consultar la quantitat de places lliures.
   - [x] Crear endpoints per consultar l'estat de l'aparcament i retornar:
     - [x] Quantitat de places ocupades.
     - [x] Quantitat de places lliures.

2. **Pàgina Web de Visualització**
   - [x] Implementar una pàgina web per mostrar:
     - [x] La ubicació fictícia de l'aparcament.
     - [x] La quantitat de places lliures en temps real.
   - [ ] Assegurar que la pàgina sigui intuïtiva i visualment clara.

3. **Aplicació Mòbil**
   - [x] Desenvolupar una app per consultar:
     - [x] Ubicació de l'aparcament.
     - [x] Places disponibles en temps real.
   - [ ] Optimitzar l'experiència d'usuari de l'aplicació.

### Funcionalitats Addicionals (Opcional)
4. **Notificacions en Temps Real**
   - [x] Implementar notificacions push per avisar sobre:
     - [x] Noves places disponibles.
     - [x] Aparcament complet.

5. **Historial i Estadístiques d'Ocupació**
   - [x] Registrar dades d'ocupació al llarg del temps.
   - [x] Generar estadístiques sobre horaris de major i menor ocupació.

6. **Predicció de Places Disponibles**
   - [x] Desenvolupar un model bàsic de predicció utilitzant dades històriques.

7. **Integració amb Serveis de Mapes**
   - [x] Integrar la ubicació de l'aparcament amb:
     - [x] Google Maps.
     - [ ] OpenStreetMap.

8. **Gestió de Múltiples Aparcaments**
   - [x] Ampliar l'API i la web per suportar:
     - [x] Monitorització de diversos aparcaments.
     - [x] Llistat amb estats d'ocupació de cada aparcament.

## Avaluació del Projecte
- [ ] Enfocar-se en la creativitat i qualitat de les funcionalitats implementades.
- [x] Prioritzar l'estabilitat i l'experiència d'usuari.
- [x] Assegurar l'ús de tots els components del kit.
- [ ] Complir amb el termini establert per l'organització.

## Premi
- [ ] Rebre 4 iPads si es guanya el repte.
