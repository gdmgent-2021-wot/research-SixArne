# Movement analysis

## Egomotion

Egomotion is defined as the 3D motion of a camera within an environment.
In the field of computer vision, egomotion refers to estimating a camera's 
motion relative to a rigid scene.
 
An example of egomotion estimation would be estimating a car's moving position 
relative to lines on the road or street signs being observed from the car itself.
The estimation of egomotion is important in autonomous robot navigation applications. 

## Tracking

Tracking is a computer vision technique that will track moving objects or individuals inside a scene.
This is commonly used in the security business and has 2 forms of tracking:

- Single Object Tracking

- Multiple Object Tracking

Tracking a single object can be relative simple, that is until the object disappears behind another object
only to reappear a few seconds later.

## Optical flow

Optical flow is a solution for the tracking problem. Originally C.V. techniques only keep track of the
X and Y value on a screen. But Optical flow wil introduce a third variable to that mix, Time.

Optical flow will keep track of an object's position and calculate the movement relative to the time passed.
This is mostly used for speed checks on the main roads.