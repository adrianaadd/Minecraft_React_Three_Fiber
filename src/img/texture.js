import {
grassImg,
dirtImg,
glassImg,
woodImg,

} from "./img.js";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const groundTexture = new TextureLoader().load(grassImg)

const dirtTexture = new TextureLoader().load(dirtImg)

const glassTexture = new TextureLoader().load(glassImg)

const woodTexture = new TextureLoader().load(woodImg)

const grassTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter

dirtTexture.wrapS = RepeatWrapping
dirtTexture.wrapT = RepeatWrapping
dirtTexture.magFilter = NearestFilter

glassTexture.wrapS = RepeatWrapping
glassTexture.wrapT = RepeatWrapping
glassTexture.magFilter = NearestFilter

woodTexture.wrapS = RepeatWrapping
woodTexture.wrapT = RepeatWrapping
woodTexture.magFilter = NearestFilter

grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping
grassTexture.magFilter = NearestFilter

export {groundTexture,dirtTexture,glassTexture,woodTexture,grassTexture}