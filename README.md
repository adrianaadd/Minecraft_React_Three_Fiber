# Minecraft_React_Three_Fiber

# MAIN FEATURES

With this React project, we will learn how to create basic 3d shapes and textures. We will learn how to use Zustand, a powerful library to manage states in the application. In addition, we will explore the integration of various 3D models and how to interact with them. All this will be possible thanks to Fiber, which will optimize the management of the user interface and on the other hand, Three Cannon, which will simplify the use of Three.js by facilitating the implementation of physics, planes, collisions and more in an intuitive way. Very useful for creating more attractive and interactive web pages.
<hr>

## Tabla de Contenidos

- [DEMO](#demo)
- [TECHNOLOGIES](#Technologies)
- [DOCUMENTATION](#Documentation)
- [FUTURE_IMPLEMENTATIONS](#FUTURE_IMPLEMENTATIONS)
- [FILE_OVERVIEW](#FILE_OVERVIEW)
- [Folder_Img](#Folder_Img)
- [Folder_Hooks](#Folder_Hooks)
- [Folder_Components](#Folder_Components)
<hr>

# DEMO

Para iniciar la demo del proyecto utilizaremos npx vite 

## Controllers

| **Actions**       | **KeyBoard Controllers**|    
|----------------|----------------------------------------------------------------------------|
| *Click*        | Add cube| 
| *Alt + Click*  | Remove cube| 
| *Ctrl + Click* | default: cube turns trampoline, Cube Dinamyc: cube rises | 
| *1,2,3,4*      | change cube texture |
| *w,a,s,d*      | move character |
| *Space*        | Jump |
<hr>

# TECHNOLOGIES

![Vite](https://img.shields.io/badge/Vite-purple?style=plastic&logo=Vite&labelColor=black)
![React](https://img.shields.io/badge/three_Cannon,Three_Fiber,three_Drei-green?style=plastic&logo=Vue.js&labelColor=black)
![Static Badge](https://img.shields.io/badge/Three_Cannon%2CThree_Fiber%2CThree_Drei-yellow?style=plastic&logo=Three.js&labelColor=black)
![Zustand](https://img.shields.io/badge/Zustand-blue?style=plastic&logo=Zustand&labelColor=black)
![Pipeline](https://img.shields.io/badge/Pipeline-pink?style=plastic&logo=GLTFPipeline&labelColor=black)

<hr>

## Documentation
[Three Cannon](https://www.npmjs.com/package/@react-three/cannon?activeTab=readme)

[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

[Three Drei](https://github.com/pmndrs/drei#readme)

[Zustand](https://zustand-demo.pmnd.rs/)

<hr>

## FUTURE_IMPLEMENTATIONS
Add T-rex animation

<hr>

## FILE_OVERVIEW

## App.jsx

It is the file where we import all the components, in it we import our canvas and we add the things we want to incorporate into the game, I encourage you to play removing, introducing and moving elements in place. 

## Folder_Img

In this file we will save the images of textures and of the files that are in charge of exporting and loading the textures with three.js.

## Folder_Hooks

In this folder we will have the useStore that will be in charge of providing the data and functions of the cubes to all the components.
Also we have the file useKeyboard, it is the one that listener the keysUps and key downs and depending on it activate an action. 

## Folder_Components

## FPV.jsx

Adds a camera and pointercontrols that will allow us to move the camera with the mouse

## Ground.jsx

Add the plane in which the objects will stay, give it a rotation, the texture ground and add the function addCube when we click on it.

## Player.jsx

### Components Used:
- **useSphere**: Imported from `@react-three/cannon`. It's used to create a physics-enabled sphere representing the player character.
- **useFrame**: Imported from `@react-three/fiber`. It's used to perform actions on each frame of the animation loop,much better than the set intervals.
- **useEffect**:It's used for handling side effects like subscribing (Check new position) to position and velocity changes of the player character.
- **Vector3**: Imported from `three`. It's used to represent 3D vectors for various calculations.

### Functionality:
- **Movement**: The player character's movement is controlled by keyboard inputs for moving forward, backward, left, and right.
- **Camera**: The camera is attached to the player character's position, allowing the view to follow the character.
- **Physics**: Physics simulation is applied to the player character using the `useSphere` hook from `@react-three/cannon`. This includes defining the mass, type, position, and velocity of the player character.

## Cubes.jsx
Map all cubes from the store

## TextureSelected.jsx

Change the default skin of the cubes you set by sending it to the store and also make the skin menu visible or not. 

## Cube.jsx

## Functionality

- **Hovering**: The cube changes color when hovered over.
- **Adding and Removing Cubes**: Clicking on a cube with different keyboard combinations (e.g., altKey) allows adding or removing cubes from the scene.
- **Physics Simulation**: Physics simulation is applied to the cube using the `useBox` hook from `@react-three/cannon`. The type of physics simulation (static or dynamic) can be controlled using the `type` parameter.

## Components Used

- **useBox**: Imported from `@react-three/cannon`. Like sphere it's used to create a physics-enabled box representing the cube.
- **useState**: Imported from React. It's used to manage the state of whether the cube is hovered or not.
- **useStore**: Used to access and modify global state related to cubes.







