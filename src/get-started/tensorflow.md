# Tensorflow

## Development dependencies

- Tensorflow
- Python interpreter
- Numpy
- MatplotLib

In deze getting-started guide zullen we het basisproject imiteren van de officiële tensorflow website. In dit project gaan
we een model trainen met data en vervolgens zal het model kunnen raden of het getoonde voorwerp herkend wordt of niet.

Alle acties die ik hieronder zal bespreken zijn gemaakt in Google colab en kan iedereen zelf uitproberen.
[Google colab link](https://colab.research.google.com/drive/1dJa7sRhJjVnsUQWswBncHxmMXvcHw86A?usp=sharing).

# Google colab

Google colab is een goede manier om je bezig te houden met computervisie en andere subdomeinen van artificiële intelligentie.
Het laat ons toe om een externe computer te reserveren die de Python-taal heeft staan en er rechtstreeks code op uit te voeren.
Zo krijgen we voor ons project een computer met 100 GB HDD en 12 GB RAM.

## Hello world

Je eerste taak als een programmeur is kijken of je project correct werkt en alle bibliotheken geïmporteerd zijn. Dit doen we door de volgende code
in een code-blok te schrijven in ons document.

```py
import tensorflow as tf
print(tf.__version__)

# 2.3.0
```

Allereerst importeren we Tensorflow als tf om de klasse aanroeping korter te maken. vervolgens printen we het versienummer.
Als dit een nummer teruggeeft dan weten we dat het project correct werkt.

We kunnen direct de andere hulpbibliotheken importeren en kijken of deze werken.

```py
# Main library
import tensorflow as tf

# Helper libraries
import numpy as np
import matplotlib.pyplot as plt

print(tf.__version__)

# 2.3.0
```

## Keras

In deze tutorial gaan we gebruik maken van Keras. Keras is een API die het ons makkelijker maakt om modellen te trainen en in te stellen.
Vroeger moest je Keras apart installeren, maar tegenwoordig zit dit samen met Tensorflow.

```py
import tensorflow as tf
from tensorflow import keras
```

## Dataset

Zoals ieder Machine-learning algoritme heb je een dataset nodig om mee te starten. Deze dataset bevat meerdere afbeeldingen waarop ons object te vinden is.
voor dit voorbeeld zullen we gebruik maken van de "Fashion MNIST dataset". Deze dataset bevat 70.000 afbeeldingen van kledingstukken die we in
10 rubrieken kunnen plaatsen.

Gelukkig voor ons zit deze dataset al in de Tensorflow bibliotheek.

```py
fashion_mnist = keras.datasets.fashion_mnist

# Deze dataset bevat meerdere elementen, de training's afbeeldingen, de labels met het juiste antwoord,
# de test images voor als het model getrained is en de correctie labels.
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()
```

De labels zijn eigenlijk een array met waardes van 0-9, dus we zullen de labels zelf een naam moeten geven voor we de afbeeldingen analyseren.

```py
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']
```

Alle afbeeldingen hebben een 28x28 pixel formaat, dit aangezien computervisie het best werkt met een kleinere hoeveelheid pixels en nog beter met
enkel grijswaarden.

Zoals het je waarschijnlijk al opgevallen is hebben we ook nog de MatPlotLib bibliotheek geïnstalleerd. Dit zorgt ervoor dat we een visuele representatie 
hebben van ons algoritme.

```py
# Hier plotten we de eerste afbeelding met matplotlib.

plt.figure()
plt.imshow(train_images[0])
plt.colorbar()
plt.grid(False)
plt.show()
```

![Color boot](/color.png)

Kleuren zoals wij ze kennen worden meestal gekenmerkt door RGB of rood groen blauw. Computers gebruiken deze waarden echter niet, binnenin gebruiken ze float waarden van 0 tot 1.
Dus wij moeten deze waarden ook wiskundig omzetten.

```py
train_images = train_images / 255.0
test_images = test_images / 255.0
```

Vervolgens gaan we MatplotLib gebruiken om de data correct weer te geven.

```py
plt.figure(figsize=(10,10))
for i in range(25):
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[train_labels[i]])
plt.show()
```

![Collection](/collection.png)

## Het model bouwen

Om een Tensorflow model te bouwen gaan we opnieuw gebruik maken van Keras en zullen we de data
eerst moeten transformeren om er vervolgens beter mee te werken.

We beginnen met een model te configureren voor het gebruik van onze dataset.

```py
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10)
])
```

De eerste chain zal ons image-array transformeren van 2D naar 1D. De eerste "Dense" methode zal ervoor zorgen
dat het neuraal netwerk 128 neuronen ter beschikking heeft. Deze monden dan uit op 10 resultaten.

```py
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])
```

Vervolgens gaan we het model compileren. De loss-functie zorgt voor de nauwkeurigheid van ons model, de optimizer bepaalt hoe het model
zich zal aanpassen aan de gekregen data. En de metrics zal voor ons het training systeem volgen en de nauwkeurigheid loggen.

```py
model.fit(train_images, train_labels, epochs=10)
```

Vervolgens starten we de training door het model te koppelen aan de afbeeldingen en labels.

# Testen van het model

Nu ons model getraind is moeten we ook testen of het werkt. We kunnen dit doen met de evaluate functie.

```py
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)

print('\nTest accuracy:', test_acc)
```

Nu kunnen we beginnen met het echte werk, we geven het model een afbeelding en dan krijg je een resultaat terug.

```py
probability_model = tf.keras.Sequential([model, 
                                         tf.keras.layers.Softmax()])

predictions = probability_model.predict(test_images)
print(predictions[0])
```

Hier zien we dat we een array terugkrijgen met verschillende waarden. De waarde die het grootst is komt overeen met wat de computer denkt dat de afbeelding voorstelt.

```py
print(np.argmax(predictions[0]))
print(test_labels[0])
```

Als we de grootste waarde printen en deze dan vergelijken met het antwoord dan, zien we dat de computer het correct geraden heeft.

## Visuele presentatie

Vervolgens gaan we 2 functies definiëren die ervoor gaan zorgen dat we de resultaten visueel kunnen zien op ons scherm.

```py
def plot_image(i, predictions_array, true_label, img):
  true_label, img = true_label[i], img[i]
  plt.grid(False)
  plt.xticks([])
  plt.yticks([])

  plt.imshow(img, cmap=plt.cm.binary)

  predicted_label = np.argmax(predictions_array)
  if predicted_label == true_label:
    color = 'blue'
  else:
    color = 'red'

  plt.xlabel("{} {:2.0f}% ({})".format(class_names[predicted_label],
                                100*np.max(predictions_array),
                                class_names[true_label]),
                                color=color)

def plot_value_array(i, predictions_array, true_label):
  true_label = true_label[i]
  plt.grid(False)
  plt.xticks(range(10))
  plt.yticks([])
  thisplot = plt.bar(range(10), predictions_array, color="#777777")
  plt.ylim([0, 1])
  predicted_label = np.argmax(predictions_array)

  thisplot[predicted_label].set_color('red')
  thisplot[true_label].set_color('blue')
```

Nu kunnen we de code even testen of hij werkt.

```py
i = 0
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()
```

![Result](/result.png)

Nu kunnen we meerdere afbeeldingen plotten en de resultaten direct zien.

```py
num_rows = 5
num_cols = 3
num_images = num_rows*num_cols
plt.figure(figsize=(2*2*num_cols, 2*num_rows))
for i in range(num_images):
  plt.subplot(num_rows, 2*num_cols, 2*i+1)
  plot_image(i, predictions[i], test_labels, test_images)
  plt.subplot(num_rows, 2*num_cols, 2*i+2)
  plot_value_array(i, predictions[i], test_labels)
plt.tight_layout()
plt.show()
```

![Result collecion](/result_collection.png)

Nu kunnen we even testen of de code werkt.

Ten slotte kunnen we het model gebruiken en kijken of deze de afbeelding herkent.

```py
img = test_images[1]

# Keras werkt liever met een batch van afbeeldingen, om 1 afbeeldingen te zien moeten
# we deze toevoegen aan een lijst.
img = (np.expand_dims(img,0))
```

```py
predictions_single = probability_model.predict(img)

print(predictions_single)
```

```py
plot_value_array(1, predictions_single[0], test_labels)
_ = plt.xticks(range(10), class_names, rotation=45)

```

## Extra

Voor diegene die zelf dit algoritme willen toepassen heb ik hier een link geplaatst met datasets.

[Datasets](https://github.com/tensorflow/datasets/tree/master/docs/catalog)