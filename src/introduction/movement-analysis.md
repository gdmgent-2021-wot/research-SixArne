# Movement analysis

## Egomotion

Egomotion wordt gedefinieerd als de 3D-beweging van een camera binnen een omgeving.
Op het gebied van computervisie verwijst egomotion naar het schatten van een camera. 
beweging ten opzichte van een starre scène.
 
Een voorbeeld van een egomotion inschatting is het inschatten van de bewegende positie van een auto. 
ten opzichte van de lijnen op de weg of de verkeersborden die vanuit de auto zelf worden geobserveerd.
Het inschatten van egomotion is belangrijk bij autonome robotnavigatietoepassingen. 

## Tracking

Tracking is een computer vision-techniek die bewegende objecten of personen in een scène opspoort.
Dit wordt vaak gebruikt in de beveiligingsbranche en heeft 2 vormen van tracking:

- Single Object Tracking

- Multiple Object Tracking

Het volgen van een enkel object kan relatief eenvoudig zijn, totdat het object achter een ander object 
verdwijnt om een paar seconden later weer te verschijnen.

## Optical flow

Optische flow is een oplossing voor het trackingprobleem. Oorspronkelijk houden C.V. technieken alleen maar rekening met de
X- en Y-waarde op een scherm. Maar Optische flow zal een derde variabele aan die mix toevoegen, Tijd.

Optische flow houdt de positie van een object bij en berekent de beweging ten opzichte van de verstreken tijd.
Dit wordt meestal gebruikt voor snelheidscontroles op de hoofdwegen.