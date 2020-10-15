# Teachable machines

## Wat is teachable machines?

Teachable machines is de introductie die google aanbied voor te leren werken met computer visie en machine learning. Wanneer je op de site
aankomt zullen ze je vragen om enkele foto's te uploaden. Vervolgens zal hun algoritme een model trainen en die kan je dan direct gebruiken.

## Afbeeldingen maken.

Eerst zal de website vragen om verschillende afbeeldingen te uploaden van de twee te herkennen objecten. Net zoals bij Tensorflow gelden de volgende regels.

- Hoe kleiner de afbeelding, hoe sneller het trainings process.
- Hoe minder kleur hoe sneller het trainings process.
- Afbeeldingen zullen gecropt worden.

Hier zullen we gebruik maken van 2 objecten. Een blauw switch controller en een rode switch controller.

![switch](/switch.jpg)

## Opsplitsen van de afbeeldingen

Eerst moeten we de afbeeldingen opsplitsen in 2 rubrieken. 

- Rode switch joycon
- Blauwe switch joycon

Dit zorgt ervoor dat het algoritme een onderscheid kan maken tussen de 2 kleuren en zo
een gepast model zal trainen.

![files](/files.png)

## Trainen van het model

Bij het trainen van het model kunnen we prutsen met verschillende settings.
Zo kunnen we de epochs aanpassen.

Een epoch is dat alle afbeeldingen uit onze datasets op zijn minst 1 keer door het algoritme gegaan zijn.
Daaruit kunnen we concluderen dat hoe meer epochs we willen, hoe nauwkeuriger het model zal zijn.

Verder kunnen we ook de batch-size instellen. Dit zorgt ervoor dat onze afbeeldingen er in verschillende groepen doorgestuurd worden. In principe
gaat ons model niet beter worden door dit aan te passen.

Ten slotte hebben we de learning rate. Hoe lager de learning rate hoe accurater het model maar hoe trager de training. Zelf een kleine
aanpassing geeft verschillende resultaten.

![settings](/settings.png)

## Resultaat

Na dat het model getrained is kunnen we het onmiddelijk uittesten dankzij google. 

![red results](/red_result.png)

- Wanneer we de rode joycon voor de camera houden zien we dat het model de voorkeur geeft aan zijn 2de object: de rode joycon.

![blue results](/blue_result.png)

- Wanneer we de blauwe joycon voor de camera houden zien we dat het model de voorkeur geeft aan zijn 1ste object: de blauwe joycon.