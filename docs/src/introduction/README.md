# Introduction

## What is computer vision?

Computer vision is the programmatic term that is used for a sub-domain of Artificial Intelligence.
It is commonly used to identify people or objects in an image or video footage, whether this is live 
or stored on a hard disk.

## How does computer vision work?

Computer vision or C.V. will receive a significant amount of sample data before being put to work,
the data it receives can be categorized in 2 different sets.

- Positive images
    
    The positive images will contain the object for what the computer is looking for. For example:
    Say that we want to identify a Ferrari we would feed it images where ferrari's are present.


- Negative images

    The negative images will NOT contain the object for what the computer is looking for. In the example above we
    will feed it any car which is not a Ferrari. Commonly programmers will include more negative than positive images. 


The computer will then proceed to generate what is known to be a model, this model is usually in a xml format and
is will be used by the computer to analyse the image and determine whether there the object or person is present in that frame.

## Sources

- https://www.mathworks.com/solutions/image-video-processing/object-recognition.html
- https://en.wikipedia.org/wiki/Visual_odometry#Egomotion
- https://medium.com/visionwizard/object-tracking-675d7a33e687
- https://nanonets.com/blog/optical-flow/
- https://en.wikipedia.org/wiki/Image_restoration