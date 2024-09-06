import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var camera = undefined;
var scene = undefined;
var renderer = undefined;
//var cube = undefined;
var sprite = undefined;
//var decor = undefined; //déclarer variable ici pour que ce soit global et qu'on puisse y travailler sur pls fonctions différentes
setUp();

function render(perso) {
    console.log("position du perso =" + perso.x + "," + perso.y);
    sprite.position.x = perso.x/10;
    console.log(perso.y);
    sprite.position.y = perso.y/5;
    camera.position.x = perso.x/10;
    if (renderer){
        renderer.render(scene, camera);
    }
}

export {render}

function setUp(){
    
    camera = new THREE.PerspectiveCamera(75, 16/9, 0.1, 1000)
    scene = new THREE.Scene()
    renderer = new THREE.WebGLRenderer()

    renderer.setSize (1920, 1080)
    var renderArea = renderer.domElement;
    console.log(renderArea)
    document.body.append(renderArea)

    //add objects
    // var cubeGeometry = new THREE.BoxGeometry(1,1,1);
    // var cubeMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00 });
    // cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // scene.add(cube);
    // cube.position.x = 1.5;
    // cube.position.z = 23;

    camera.position.z = 29;

    const map = new THREE.TextureLoader().load( 'img/magali.png' );
    const material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );

    sprite = new THREE.Sprite( material );
    sprite.scale.set(4, 4, 1)
    sprite.position.x = 1.5;
    sprite.position.z = 23;
    scene.add(sprite);

    //var decorGeometry = new THREE.BoxGeometry(10, 3, 1);
    //var decorMaterial = new THREE.MeshBasicMaterial({color: 0x003300});
    //decor = new THREE.Mesh(decorGeometry, decorMaterial);
    //decor.position.z = -2;
    //scene.add(decor)



    const light = new THREE.AmbientLight(0x404040);//soft white light
    const light4 = new THREE.PointLight(0xf0dc33, 250, 100 );
    const light3 = new THREE.PointLight(0xf0dc33, 250, 100 );
    const light5 = new THREE.PointLight(0xff0000, 1, 100 );
    const light6 = new THREE.PointLight(0xff0000, 1, 100 );

    light.position.set( 50, 50, 50 );
    light3.position.set( -50, 75, 50 );
    light4.position.set( 50, 75, 50 );
    light5.position.set(0, 0, 0 );
    light6.position.set(-10, 0, 0 );

    scene.add(light4);
    scene.add(light3);
    scene.add(light);
    scene.add(light5);
    scene.add(light6);


    //importBG("path", scene) //en invoque le chargement
    importBG("img/Rhodes2.gltf", scene)
    importEN("img/fox3D.gltf", scene)

}

function importBG(path, scene){
        // Instantiate a loader
    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        path,
        // called when the resource is loaded
        function ( gltf ) {
            gltf.scene.position.y = -1.4;
            gltf.scene.rotation.y = 1.5;
            scene.add( gltf.scene );

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object

        },
        // called while loading is progressing
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );

}

function importEN(path, scene){
    // Instantiate a loader
const loader = new GLTFLoader();

// Load a glTF resource
loader.load(
    // resource URL
    path,
    // called when the resource is loaded
    function ( gltf ) {
        gltf.scene.position.y = -1.4;
        gltf.scene.rotation.y = -0.35;
        gltf.scene.position.z = 23;
        gltf.scene.scale.x = 0.3;
        gltf.scene.scale.y = 0.3;
        gltf.scene.scale.z = 0.3;
        scene.add( gltf.scene );

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    },
    // called while loading is progressing
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);

}

