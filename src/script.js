import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import datGuiImage from 'dat.gui.image';
import { Scene, Vector3 } from 'three'










let pathSelected, pathHe, pathCat, pathGears;
//pathsofa = ('./models/Sofaobj.glb');      
//pathroom = ('./models/room.glb');                    
let cost=0
var raycaster = new THREE.Raycaster();
var raycaster1 = new THREE.Raycaster();
const curser = new THREE.Vector2();
var mouse = new THREE.Vector2();
datGuiImage(dat)
/**
 * Base
 */




const textureLoader = new THREE.TextureLoader()
const fl = textureLoader.load('/images/floor.jpg')

const wallPic1 = textureLoader.load('/images/f.jpg')
const wallPic2 = textureLoader.load('/images/w.jpeg')
const wallPic = textureLoader.load('/images/download.jpg')




let objects=[]

// Canvas


// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color("white");
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 30
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(- 5, 5, 0)
scene.add(directionalLight)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 10000)
//camera.position.set( 5.789815168610211,  16.37831942152685, 51.411056034353614)
//camera.position.set(10.6305156444683, 10.60843218625245, 30.53939801597948)
camera.position.set(0,200,400)
//camera.position.set(0,9,20)
 camera.lookAt(0, 55, 0)
// camera.rotation.x=Math.PI*0.5

scene.add(camera)



/*
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)
const BBmap = new Map();


var diningtable = new THREE.Object3D()
let mixer = null







/**
 * Floor
 */
const geometry = new THREE.BoxGeometry(2, 2, 2);

const roof = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 26),
    new THREE.MeshStandardMaterial({
        color: 'green',
        metalness: 0,
        roughness: 0.5,
        map:wallPic1
    })
)
roof.receiveShadow = true
roof.rotation.x = Math.PI * 0.5
roof.position.y = 12
//scene.add(roof)    

const wall1 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 20),
    new THREE.MeshStandardMaterial({
        color: 'blue',
        metalness: 0,
        roughness: 0.5
    })
)
wall1.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
wall1.rotation.y = Math.PI * 0.5
wall1.position.y = 0
//scene.add(wall1)    

const wall2 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: 'blue',
        metalness: 0,
        roughness: 0.5
    })
)
wall2.material.side = THREE.DoubleSide;


const wall3 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: 'red',
        metalness: 0,
        roughness: 0.5
    })
)
wall3.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
wall3.rotation.y = Math.PI * 0.5
wall3.position.y = 6.430330787377428
wall3.position.x = -11.583569647504833
wall3.position.z = 5.357418822368949
wall3.scale.set(1.1554437550962584, 1, 1)
wall3.material.side = THREE.DoubleSide;
//scene.add(wall3)

const r1wall1 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: 'white',
        metalness: 0,
        roughness: 0.5,
        map:wallPic1
    })
)
r1wall1.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
r1wall1.rotation.y = Math.PI * 0.5
r1wall1.position.y = 19.430330787377428
r1wall1.position.x = -64.4
r1wall1.position.z = -1.357418822368949
r1wall1.scale.set(4.8, 3, 5)
//r1wall1.material.side = THREE.DoubleSide;

//scene.add(r1wall1)

const r1wall2 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: '#77e0d6',
        metalness: 0,
        roughness: 0.5,
       map:textureLoader.load('./images/tt.jpeg')
    })
)
r1wall2.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
//wall10.rotation.y = Math.PI * 0.5
r1wall2.position.y = 19.430330787377428
r1wall2.position.x = -4.24068373016143
r1wall2.position.z = -35.809366077455056
r1wall2.scale.set(8, 3, 5)
//r1wall2.material.side = THREE.DoubleSide;

//scene.add(r1wall2)

const r1wall3 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: 'blue',
        metalness: 0,
        roughness: 0.5,
        map:wallPic1
    })
)
r1wall3.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
r1wall3.rotation.y = Math.PI 
r1wall3.position.y = 19.430330787377428
r1wall3.position.x = -4.24068373016143
r1wall3.position.z = 31.809366077455056
r1wall3.scale.set(8, 3, 5)
//r1wall2.material.side = THREE.DoubleSide;

//scene.add(r1wall3)
const r1floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: 'grey',
        metalness: 0,
        roughness: 0.5,
       map:wallPic2
    })
)
r1floor.receiveShadow = true
r1floor.rotation.x = - Math.PI * 0.5
// r1floor.position.x = -4.059453507707129
// r1floor.position.y = 0.01
// r1floor.position.z = -4.421010590882675
r1floor.scale.set(12, 7, 7)
//r1floor.userData.ground = true
console.log(r1floor.geometry.attributes.position.array);

//scene.add(r1floor)





const r2wall1 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: 'yellow',
        metalness: 0,
        roughness: 0.5,
        map:wallPic1,
    })
)
r2wall1.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
r2wall1.rotation.y = -Math.PI * 0.5
r2wall1.position.y = 19.430330787377428
r2wall1.position.x = 55.4
r2wall1.position.z = -1.357418822368949
r2wall1.scale.set(4.8, 3, 5)
//r2wall1.material.side = THREE.DoubleSide;
//scene.add(r2wall1)
const r2wall5 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: 'yellow',
        metalness: 0,
        roughness: 0.5,
        map:textureLoader.load('./images/img.jpg')
    })
)
r2wall5.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
r2wall5.rotation.y = -Math.PI * 0.5
r2wall5.position.y = 19.430330787377428
r2wall5.position.x = 54.4
r2wall5.position.z = -1.357418822368949
r2wall5.scale.set(1, 1, 1)
//r2wall2.material.side = THREE.DoubleSide;

//scene.add(r2wall5)


const r2wall2 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: 'yellow',
        metalness: 0,
        roughness: 0.5,
        map:textureLoader.load('./images/img.jpg')
    })
)
r2wall2.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
r2wall2.rotation.y = Math.PI * 0.5
r2wall2.position.y = 19.430330787377428
r2wall2.position.x = -63.4
r2wall2.position.z = -1.357418822368949
r2wall2.scale.set(1, 1, 1)
//r2wall2.material.side = THREE.DoubleSide;

//scene.add(r2wall2)


const r2wall3 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: 'grey',
        metalness: 0,
        roughness: 0.5,
        map:textureLoader.load('./images/r.jpeg')
    })
)
r2wall3.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
r2wall3.rotation.y = Math.PI * 0.5
r2wall3.position.y = 19.430330787377428
r2wall3.position.x = 0
r2wall3.position.z = -1.357418822368949
r2wall3.scale.set(4.8, 3, 5)
r2wall3.material.side = THREE.DoubleSide;

//scene.add(r2wall3)




const r2floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: 'pink',
        metalness: 0,
        roughness: 0.5
    })
)
r2floor.receiveShadow = true
r2floor.rotation.x = - Math.PI * 0.5
r2floor.position.x = 20
r2floor.position.y = 0.05
r2floor.position.z = -8.421010590882675
r2floor.scale.set(1.5, 1.5, 1.5)

//scene.add(r2floor)


const r3wall1 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: '#a7afda',
        metalness: 0,
        roughness: 0.5
    })
)
r3wall1.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
r3wall1.rotation.y = -Math.PI * 0.5
r3wall1.position.y = 19.7
r3wall1.position.x = 26.4
r3wall1.position.z = -4.357418822368949
r3wall1.scale.set(1, 1, 1)
r3wall1.material.side = THREE.DoubleSide;
//scene.add(r3wall1)



const r3wall2 = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 13),
    new THREE.MeshStandardMaterial({
        color: "#a7afda",
        metalness: 0,
        roughness: 0.5
    })
)
r2wall2.receiveShadow = true
//roo.rotation.x =  Math.PI * 0.5
//wall10.rotation.y = Math.PI * 0.5
r3wall2.position.y = 19.7
r3wall2.position.x = 19
r3wall2.position.z = -11.809366077455056
r3wall2.scale.set(1, 1, 1)
r3wall2.material.side = THREE.DoubleSide;

//scene.add(r3wall2)




const r3floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: 'pink',
        metalness: 0,
        roughness: 0.5
    })
)
r3floor.receiveShadow = true
r3floor.rotation.x = - Math.PI * 0.5
r3floor.position.x = 18.9
r3floor.position.y = 13.2
r3floor.position.z = -4.421010590882675
r3floor.scale.set(1.5, 1.5, 1.5)

//scene.add(r3floor)


const r4floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: 'pink',
        metalness: 0,
        roughness: 0.5
    })
)
r4floor.receiveShadow = true
r4floor.rotation.x = - Math.PI * 0.5
r4floor.position.x = 4.059453507707129
r4floor.position.y = 13.2
r4floor.position.z = -4.421010590882675

r4floor.scale.set(1.5, 1.5, 1.5)

//scene.add(r4floor)


/**
 * Lights
 */


/**
 * Sizes
*/

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})




/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()

document.querySelector("#scene").appendChild(renderer.domElement);
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
var orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.target.set(0, 0.75, 0)
orbitControls.enableDamping = true
orbitControls.maxPolarAngle=Math.PI/2.7
orbitControls.screenSpacePanning =true
// const transformControls = new TransformControls(camera, renderer.domElement)




var diningtable = new THREE.Object3D()
const diningtableBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const floorBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());


var sofa = new THREE.Object3D()
var tv = new THREE.Object3D()
var table = new THREE.Object3D()
var objectsBB = []
const sofaBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const bedBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const tvBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const tableBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const sofatvBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const selectedBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

const r1wall1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const r1wall2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const r2wall1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
const r2wall2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());

r1wall1BB.setFromObject(r1wall1)
r1wall2BB.setFromObject(r1wall2)
r2wall1BB.setFromObject(r2wall1)
r2wall2BB.setFromObject(r2wall2)
objectsBB.push(r1wall2BB)

objectsBB.push(r1wall1BB)

objectsBB.push(r2wall1BB)
objectsBB.push(r2wall2BB)

var room1 = new THREE.Object3D()

gltfLoader.load(
    '/models/Sofaobj.glb',
    (gltf) => {
        //gltf.scene.scale.set(0.8, 0.6, 0.82)
        gltf.scene.scale.set(30, 30, 30)
        gltf.scene.position.set(430, 0, 0)

        gltf.scene.rotation.x = 0.5 * Math.PI
        gltf.scene.rotation.z = 0.5 * Math.PI
        // sofa.add(gltf.scene.clone())
        // sofaBB.setFromObject(sofa)
        scene.add(gltf.scene)
        gltf.scene.userData.name="sofa"
        gltf.scene.userData.cost="50"
        cost+=parseInt(gltf.scene.userData.cost)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            objectsBB.push(oBB)
            oBB.setFromObject(gltf.scene)
            BBmap.set(gltf.scene,oBB)
        //objectsBB.push(sofaBB)
    }
)
let rr=0,r1=0;
gltfLoader.load(
    '/models/dining_table/scene.gltf',
    (gltf) => {
        //gltf.scene.scale.set(0.8, 0.6, 0.82)
        gltf.scene.scale.set(80, 80, 80)
        gltf.scene.position.set(200, 0, -10)

        gltf.scene.userData.name="table"
        gltf.scene.userData.cost="500"
        cost+=parseInt(gltf.scene.userData.cost)
        scene.add(gltf.scene)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            objectsBB.push(oBB)
            oBB.setFromObject(gltf.scene)
            BBmap.set(gltf.scene,oBB)
            rr=1;
        //objectsBB.push(sofaBB)
    }
)



gltfLoader.load(
    '/models/tv/scene.gltf',
    (gltf) => {
        //gltf.scene.scale.set(0.8, 0.6, 0.82)
        gltf.scene.scale.set(20, 20, 20)
        gltf.scene.position.set(-200, 77, -180)

        // gltf.scene.rotation.x=0.5*Math.PI
        //gltf.scene.rotation.z=0.5*Math.PI
        scene.add(gltf.scene)
        gltf.scene.userData.name="tv"
        gltf.scene.userData.cost="20"
        cost+=parseInt(gltf.scene.userData.cost)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            objectsBB.push(oBB)
            oBB.setFromObject(gltf.scene)
            BBmap.set(gltf.scene,oBB)
    }
)

gltfLoader.load(
    '/models/table/scene.gltf',
    (gltf) => {
        //gltf.scene.scale.set(0.8, 0.6, 0.82)
        gltf.scene.scale.set(1, 2, 2)
        gltf.scene.position.set(-200, 50, -180)

        // gltf.scene.rotation.x=0.5*Math.PI
        //gltf.scene.rotation.z=0.5*Math.PI
        scene.add(gltf.scene)
        objects.push(gltf.scene)
        gltf.scene.userData.name="tableTv"
        gltf.scene.userData.cost="30"
        cost+=parseInt(gltf.scene.userData.cost)
        let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        objectsBB.push(oBB)
        oBB.setFromObject(gltf.scene)
        BBmap.set(gltf.scene,oBB)
    }
)

var sofatv = new THREE.Object3D()
gltfLoader.load(
    '/models/sofa/scene.gltf',
    (gltf) => {
        //gltf.scene.scale.set(0.8, 0.6, 0.82)
        gltf.scene.scale.set(20, 20, 20)
        gltf.scene.position.set(-200, 34, 100)

       gltf.scene.rotation.y = Math.PI
        //gltf.scene.rotation.z=0.5*Math.PI
        gltf.scene.userData.name="sofaTv"
        gltf.scene.userData.cost="70"
        console.log(cost);
        cost+=parseInt(gltf.scene.userData.cost)
        console.log(  gltf.scene.userData.cost);
        scene.add(gltf.scene)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        objectsBB.push(oBB)
            oBB.setFromObject(gltf.scene)
            BBmap.set(gltf.scene,oBB)
    }
)
//scene.add(sofatv)
let p
function  dragStart( event ) {

    //selected=event.object
 //	console.log("aaaaa");
     // temp.x=event.object.position.x
     // temp.z=event.object.position.z
     //event.object.material.emissive.set( 0xaaaaaa );
     p={
         x:event.object.position.x,
         y:event.object.position.y,
         z:event.object.position.z
     }
   console.log(temp);
    
     console.log("start");
     selected=event.object
     console.log(selected.position);
     sel.positionx=8
     while (selected.parent != null && selected.parent.parent != null) {
        selected = selected.parent
    }
    let k=document.querySelector("#selected")
    k.innerHTML=`<h1>Selected= ${selected.userData.name} ,  Cost=${selected.userData.cost}$</h1>`
     orbitControls.dispose()
     flyControls.dispose()
 }


 function drag( event ){
    //  console.log('drag');
      
      
     // console.log(temp);
      event.object.position.x=p.x
      event.object.position.y=p.y
      event.object.position.z=p.z
      if(selected!=null)
      {
          selected.position.x=temp.x
           selected.position.z=temp.z
      }
      console.log("aaa");
      console.log(p.x+" "+p.z);
   
     }
     function dragEnd( event ) {
        // console.log("bbbbbb");
        orbitControls = new OrbitControls(camera, renderer.domElement)
         orbitControls.target.set(0, 0.75, 0)
         orbitControls.enableDamping = true
         orbitControls.maxPolarAngle=Math.PI/2.7
         orbitControls.screenSpacePanning =true
         orbitControls.maxZoom=6

         const flyControls = new FlyControls(camera, renderer.domElement);

         flyControls.movementSpeed = 19;
         flyControls.domElement = renderer.domElement;
         flyControls.rollSpeed = Math.PI / 24;
         flyControls.autoForward = false;
         flyControls.dragToLook =true;

         event.object.material.emissive.set( 0x000000 );




     console.log("end");
     }
var controls,pa

const con=()=>{
     pa=document.querySelector("#tcost")
console.log(cost);
pa.innerHTML=cost
    console.log(objects);



     controls = new DragControls( objects, camera, renderer.domElement );
    controls.addEventListener( 'dragstart', dragStart );
    
    //console.log(controls.getObjects());
    controls.addEventListener ( 'drag',drag )
    controls.addEventListener( 'dragend',dragEnd  );
}


var bed = new THREE.Object3D()


const obj1 = document.querySelector("#table2")
obj1.addEventListener("click", () => {
    //console.log(aaa);
    cost +=parseInt(obj1.dataset.cost)
    pa.innerHTML=cost
    gltfLoader.load(
        '/models/d2/scene.gltf',
        (gltf) => {
            //gltf.scene.scale.set(0.8, 0.6, 0.82)
            gltf.scene.scale.set(0.6, 0.6, 0.6)
            gltf.scene.position.set(-30, 2, 20)
console.log("111111");
           // gltf.scene.rotation.y = 0.5 * Math.PI
           gltf.scene.userData.name="table2"
           gltf.scene.userData.cost=`${obj1.dataset.cost}`
            scene.add(gltf.scene)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            
            oBB.setFromObject(gltf.scene)
            objectsBB.push(oBB)
            BBmap.set(gltf.scene,oBB)
            controls.removeEventListener('dragstart',dragStart)
            controls.removeEventListener('drag',drag)
            controls.removeEventListener('dragend',dragEnd)
            con()
           
        }
    )
    //scene.add(bed)
})
const obj2 = document.querySelector("#table")

obj2.addEventListener("click", () => {
   
cost +=parseInt(obj2.dataset.cost)
pa.innerHTML=cost
console.log(cost);
    gltfLoader.load(
        '/models/dining_table/scene.gltf',
        (gltf) => {
            //gltf.scene.scale.set(0.8, 0.6, 0.82)
            gltf.scene.scale.set(80, 80, 80)
            gltf.scene.position.set(-40, 2, 0)
console.log("111111");
           // gltf.scene.rotation.y = 0.5 * Math.PI
           gltf.scene.userData.name="table"
           gltf.scene.userData.cost=`${obj2.dataset.cost}`
            scene.add(gltf.scene)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            
            oBB.setFromObject(gltf.scene)
            objectsBB.push(oBB)
            BBmap.set(gltf.scene,oBB)
            controls.removeEventListener('dragstart',dragStart)
            controls.removeEventListener('drag',drag)
            controls.removeEventListener('dragend',dragEnd)
            con()
         
        }
    )
   
})
const obj3 = document.querySelector("#sofa2")
obj3.addEventListener("click", () => {
    cost +=parseInt(obj3.dataset.cost)
    pa.innerHTML=cost
    gltfLoader.load(
        '/models/sofa2/scene.gltf',
        (gltf) => {
            //gltf.scene.scale.set(0.8, 0.6, 0.82)
            gltf.scene.rotation.y=Math.PI*0.5
            gltf.scene.scale.set(0.6, 0.6, 0.6)
            gltf.scene.position.set(-30, 0, 20)
console.log("111111");
           // gltf.scene.rotation.y = 0.5 * Math.PI
           gltf.scene.userData.name="sofa2"
           gltf.scene.userData.cost=`${obj3.dataset.cost}`
            scene.add(gltf.scene)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            
            oBB.setFromObject(gltf.scene)
            objectsBB.push(oBB)
            BBmap.set(gltf.scene,oBB)
            controls.removeEventListener('dragstart',dragStart)
            controls.removeEventListener('drag',drag)
            controls.removeEventListener('dragend',dragEnd)
            con()
          
        }
    )
    //scene.add(bed)
})
const obj4 = document.querySelector("#tvtable")
obj4.addEventListener("click", () => {
    cost +=parseInt(obj4.dataset.cost)
    pa.innerHTML=cost
    gltfLoader.load(
        '/models/table/scene.gltf',
        (gltf) => {
            //gltf.scene.scale.set(0.8, 0.6, 0.82)
            gltf.scene.scale.set(1, 2, 2)
            gltf.scene.position.set(-33.5, 50, 25)
console.log("111111");
           // gltf.scene.rotation.y = 0.5 * Math.PI
           gltf.scene.userData.name="TvTable"
           gltf.scene.userData.cost=`${obj4.dataset.cost}`
            scene.add(gltf.scene)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            
            oBB.setFromObject(gltf.scene)
            objectsBB.push(oBB)
            BBmap.set(gltf.scene,oBB)
            controls.removeEventListener('dragstart',dragStart)
            controls.removeEventListener('drag',drag)
            controls.removeEventListener('dragend',dragEnd)
            con()
         
        }
    )
    //scene.add(bed)
})

const obj5 = document.querySelector("#gaming")
obj5.addEventListener("click", () => {
    cost +=parseInt(obj5.dataset.cost)
    pa.innerHTML=cost
    gltfLoader.load(
        '/models/gaming/scene.gltf',
        (gltf) => {
            //gltf.scene.scale.set(0.8, 0.6, 0.82)
            gltf.scene.scale.set(6, 6, 6)
            gltf.scene.position.set(-33.5, 6, 25)
console.log("111111");
           // gltf.scene.rotation.y = 0.5 * Math.PI
           gltf.scene.userData.name="gaming"
           gltf.scene.userData.cost=`${obj5.dataset.cost}`
            scene.add(gltf.scene)
            objects.push(gltf.scene)
            let oBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            
            oBB.setFromObject(gltf.scene)
            objectsBB.push(oBB)
            BBmap.set(gltf.scene,oBB)
            controls.removeEventListener('dragstart',dragStart)
            controls.removeEventListener('drag',drag)
            controls.removeEventListener('dragend',dragEnd)
            con()
           
        }
    )
    //scene.add(bed)
})



scene.add(diningtable)

var selected = null;
var selectedo = r1floor;




var gui = new dat.GUI();
var guiControls1 = new function () {
    this.color = r1floor.material.color.getStyle();
    this.position = r1floor.position
    console.log(this.poition);
};
 gui
    .addColor(guiControls1, "color")
    .listen()
    .onChange(function (e) {
        console.log(selectedo);
        selectedo.material.color.setStyle(e);
    });



var intersects = [];
var current
// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
// camera.add(listener);

// create a global audio source
const sound = new THREE.Audio(listener);

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load('sounds/collision.mp3', function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(false);
    sound.setVolume(0.1);

});

var prevx = 0, prevy = 0, prevz = 0
const setPrev = () => {
    prevx = 0
    prevy = 0
    prevz = 0
}
const setVisible = () => {
    selected.visible = false
}

let i = 0,t=0
const checkcollision = () => {
    //setPrev()

    
    for (i = 0; i < objectsBB.length; i++) {

        if (!objectsBB[i].equals(selectedBB)) {
            if (selectedBB.intersectsBox(objectsBB[i])) {
                k=1 
                console.log(i);
                console.log("aa");
                sound.play();
                console.log(selected.position.x + " " + selected.position.y + " " + selected.position.z + " " + i);
                selected.position.z = prevz

                selected.position.x = prevx
                selected.position.y = prevy
                console.log(prevx + " " + prevy + " " + prevz + " " + i);
               selected.visible = false
                setTimeout(function () { selected.visible = true }, 150);


            }
            else {

            }
        }


    }
    prevx = selected.position.x
    prevy = selected.position.y
    prevz = selected.position.z

    k=0
}

let radius = 1;
let height = 3
let cylinder = new THREE.Mesh(new THREE.CylinderBufferGeometry(radius, radius, height, 32), new THREE.MeshPhongMaterial({ color: 0x90ee90 }))
cylinder.position.set(100,30,170)
cylinder.scale.set(18,18,18)
cylinder.castShadow = true
cylinder.receiveShadow = true
scene.add(cylinder)

cylinder.userData.draggable = true
cylinder.userData.name = 'CYLINDER'
cylinder.userData.cost = '20'
cost+=parseInt(cylinder.userData.cost)
objects.push(cylinder)
const cylinderBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cylinderBB.setFromObject(cylinder)
objectsBB.push(cylinderBB)


let temp

window.addEventListener('mousemove', (event) => {
    curser.x = (event.clientX / window.innerWidth * 2 - 1);
    curser.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster1.setFromCamera(curser, camera);
    
    let aa = raycaster1.intersectObjects(scene.children);
    if(aa.length>0)
    {
    for (let i = 0; i < aa.length; i++) {
                if (!aa[i].object.userData.ground)
                  continue
                
                  temp=aa[0].point
              }
              //console.log(temp);
            }
  
})
const moveSelected = () => {
    // if(selected!=null&&k==0)
    // {
    //     selected.position.x=curser.x
    // }
}

const dbtn= document.querySelector("#delete_item")

dbtn.addEventListener('click',()=>{
    //objects.remove(selected)
    console.log(objects.length);
   
    
       objects=objects.filter((item)=>{
           if(item==selected)
           {
            cost=cost-parseInt(selected.userData.cost)
            pa.innerHTML=cost
           }
           return item!=selected
       })
       console.log(objects.length);
       console.log(objectsBB.length);
       objectsBB=objectsBB.filter((item)=>item!=BBmap.get(selected))


       console.log(objectsBB.length);

        //objectsBB.remove(selected)
            BBmap.delete(selected)
            scene.remove(selected)
})


let k, ob

let sel 
if(selected==null)
{
    sel = {
        positionx: 0,
        positiony: 0,
        positionz: 0,
        rotationx: 0,
        rotationy: 0,
        rotationz: 0,
        scalex:0 ,
        scaley: 0,
        scalez:0,
    
    }
}
else
{
sel = {
    positionx: selected.position.x,
    positiony: selected.position.y,
    positionz: selected.position.z,
    rotationx: selected.rotation.x,
    rotationy: selected.rotation.y,
    rotationz: selected.rotation.z,
    scalex: selected.scale.x,
    scaley: selected.scale.y,
    scalez: selected.scale.z,

}
}


sel.delete=()=>{
    scene.remove(selected)
}


gui
    .add(sel, "positionx", -10, 10, 0.01)
    .onChange(function (e) {

        selected.position.x = e
        console.log(e);
    })

gui
    .add(sel, "positiony", -10, 10, 0.01)
    .onChange(function (e) {

        selected.position.y = e
        console.log(e);
    })
gui
    .add(sel, "positionz", -10, 10, 0.01)
    .onChange(function (e) {

        selected.position.z = e
        console.log(e);
    })
gui
    .add(sel, "rotationx", 0, 2 * Math.PI, 0.25 * Math.PI)
    .onChange(function (e) {

        selected.rotation.x = e
        console.log(e);
    })
gui
    .add(sel, "rotationy", 0, 2 * Math.PI, 0.25 * Math.PI)
    .onChange(function (e) {

        selected.rotation.y = e
        console.log(e);
    })
gui
    .add(sel, "rotationz", 0, 2 * Math.PI, 0.25 * Math.PI)
    .onChange(function (e) {

        selected.rotation.z = e
        console.log(e);
    })
gui
    .add(sel, "scalex", 0.01, 5, 0.5)
    .onChange(function (e) {

        selected.scale.x = e
        console.log(e);
    })
gui
    .add(sel, "scaley", 0.01, 5, 0.5)
    .onChange(function (e) {

        selected.scale.y = e
        console.log(e);
    })
gui
    .add(sel, "scalez", 0.01, 5, 0.5)
    .onChange(function (e) {

        selected.scale.z = e
        console.log(e);
    })
    gui.close()
const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: "red" }));
object.position.x = 0;
object.position.y = 0;
object.position.z = 0;

const flyControls = new FlyControls(camera, renderer.domElement);

flyControls.movementSpeed = 19;
flyControls.domElement = renderer.domElement;
flyControls.rollSpeed = Math.PI / 24;
flyControls.autoForward = false;
flyControls.dragToLook =true;


gui.add(sel,'delete')


window.addEventListener("deviceorientation", ()=>{
    console.log("ddddddddddddddddd");
    cylinder.visible=false
}, true);


//floor plan start
const sfactory=12,sfactorz=6,sfactorx=6



var renderfloor=false
console.log(renderfloor);
var fscene = new THREE.Scene();
fscene.background = new THREE.Color( 0xf0f0f0 );
var fcamera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
var fobjects = [];

var frenderer = new THREE.WebGLRenderer();
frenderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( frenderer.domElement );

fcamera.position.z = 400;

var startColor;


	fscene.add( new THREE.AmbientLight( 0x0f0f0f ) );

	var light = new THREE.SpotLight( 0xffffff, 1.5 );
	light.position.set( 0, 500, 2000 );

	fscene.add(light);

	var Spheregeometry = new THREE.SphereGeometry( 5, 5, 5 );

    var object1 = new THREE.Mesh( Spheregeometry, new THREE.MeshLambertMaterial( { color: 'blue' } ) );
    object1.position.x = -80;
	object1.position.y = -40;
    fscene.add( object1 );
    fobjects.push( object1 );
    var object2 = new THREE.Mesh( Spheregeometry, new THREE.MeshLambertMaterial( { color: 'blue' } ) );
    object2.position.x = 80;
	object2.position.y = -40;
    fscene.add( object2 );
    fobjects.push( object2 );
    var object3 = new THREE.Mesh( Spheregeometry, new THREE.MeshLambertMaterial( { color: 'blue' } ) );
    object3.position.x = 80;
	object3.position.y = 40;
    fscene.add( object3 );
    fobjects.push( object3 );
    var object4 = new THREE.Mesh( Spheregeometry, new THREE.MeshLambertMaterial( { color: 'blue' } ) );
    object4.position.x = -80;
	object4.position.y = 40;
    fscene.add( object4 );
    fobjects.push( object4 );

  const material = new THREE.LineBasicMaterial({
	color: 0x0000ff
});

const lpoints = [];
const initialpts=[]
object1.userData.ind=0
object2.userData.ind=1
object3.userData.ind=2   
object4.userData.ind=3


lpoints.push( object1 );
lpoints.push( object2);
lpoints.push( object3);
lpoints.push( object4);
for (let i = 0; i < lpoints.length; i++) {
    let t={
        x:0,y:0,z:0}
    
    t.x=lpoints[i].position.x
    t.y=lpoints[i].position.y
    t.z=lpoints[i].position.z
   initialpts.push(new THREE.Vector3(t.x,t.y,t.z))
    
}

let group = new THREE.Group();
const updateLines=()=>{
    fscene.remove(group)
    group=new THREE.Group();
    const lines=[]
for (let i = 0; i < lpoints.length-1; i++) {
    const lgeometry = new THREE.BufferGeometry().setFromPoints( [lpoints[i].position,lpoints[i+1].position] );

const line = new THREE.Line( lgeometry, material );
line.userData.ind=i
let t={
    x:0,y:0,z:0}

line.userData.a=i
t.x=lpoints[i].position.x
t.y=lpoints[i].position.y
t.z=lpoints[i].position.z
line.userData.aposition=new THREE.Vector3(t.x,t.y,t.z)
t.x=lpoints[i+1].position.x
t.y=lpoints[i+1].position.y
t.z=lpoints[i+1].position.z
line.userData.b=i+1
line.userData.bposition=new THREE.Vector3(t.x,t.y,t.z)
line.userData.isLine=true

lpoints[i].userData.l1=i
lpoints[i+1].userData.l2=i


lines.push(line)
group.add( line );
fobjects.push(line);   
}
const lgeometry1 = new THREE.BufferGeometry().setFromPoints( [lpoints[lpoints.length-1].position,lpoints[0].position] );

const line1 = new THREE.Line( lgeometry1, material );

let tr={
    x:0,y:0,z:0}

tr.x=lpoints[lpoints.length-1].position.x
tr.y=lpoints[lpoints.length-1].position.y
tr.z=lpoints[lpoints.length-1].position.z
line1.userData.ind=lpoints.length-1
line1.userData.a=lpoints.length-1
line1.userData.aposition=new THREE.Vector3(tr.x,tr.y,tr.z)
tr.x=lpoints[0].position.x
tr.y=lpoints[0].position.y
tr.z=lpoints[0].position.z
line1.userData.b=0
line1.userData.bposition=new THREE.Vector3(tr.x,tr.y,tr.z)
line1.userData.isLine=true
lpoints[lpoints.length-1].userData.l1=lpoints.length-1
lpoints[0].userData.l2=lpoints.length-1
lines.push(line1)
group.add( line1 );
fobjects.push(line1)


fscene.add(group)


}

updateLines()

	var controls = new DragControls( fobjects, fcamera, frenderer.domElement );
	controls.addEventListener( 'dragstart', dragStartCallback );
	controls.addEventListener( 'drag', dragCallback );
	controls.addEventListener( 'dragend', dragendCallback );

let pt1=-1,pt2=-1
let line1a=new THREE.Vector3(),line1b=new THREE.Vector3()
let prevposition=[]
let tr={ax:0,ay:0,bx:0,by:0}
var dir01= new THREE.Vector3();
var dir01a= new THREE.Vector3();
var dir12= new THREE.Vector3();
var dir12a= new THREE.Vector3();
var dir23= new THREE.Vector3();
var dir23a= new THREE.Vector3();
var dir30= new THREE.Vector3();
var dir30a= new THREE.Vector3(); 
var angle0=0
var angle1=0
var angle2=0
var angle3=0
var isLine=false
    dir01.subVectors( lpoints[0].position, lpoints[1].position ) ;
    dir12.subVectors( lpoints[1].position, lpoints[2].position ) ;
    dir23.subVectors( lpoints[2].position, lpoints[3].position ) ;
    dir30.subVectors( lpoints[3].position, lpoints[0].position ) ;
    var lx,ly
    function dragStartCallback(event) {
        prevposition=[]
        startColor = event.object.material.color.getHex();
        event.object.material.color.setHex(0x000000);
       
        lpoints.forEach(element => {
            let g=new THREE.Vector3(element.position.x,element.position.y,element.position.z)
            prevposition.push(g)
        });
        console.log(prevposition);
         console.log(event.object.userData);
    //console.log(lines[event.object.userData.ind].position);
    if(event.object.userData.isLine)
    {
        lx=event.object.position.x
        ly=event.object.position.y
    
        isLine=true
        pt1=event.object.userData.a
        pt2=event.object.userData.b
        if(event.object.userData.ind%2==1)
        {
        tr.ax=event.object.userData.aposition.x
        tr.ay=prevposition[event.object.userData.a].y
        tr.bx=event.object.userData.bposition.x
        tr.by=prevposition[event.object.userData.b].y
        }else{
    tr.ax=prevposition[event.object.userData.a].x
    tr.ay=event.object.userData.aposition.y
    tr.bx=prevposition[event.object.userData.b].x
    tr.by=event.object.userData.bposition.y
        }
    }
    else
    {
        isLine=false
        
    
    }

    }
    function dragCallback(event) {
        if(event.object.userData.isLine)
        {
            if(event.object.userData.ind%2==0)
           event.object.position.x=lx 
           else
           event.object.position.y=ly 
    
     
            lpoints[event.object.userData.a].position.x=tr.ax+event.object.position.x
            lpoints[event.object.userData.a].position.y=tr.ay +event.object.position.y
            lpoints[event.object.userData.b].position.x=tr.bx+event.object.position.x
            lpoints[event.object.userData.b].position.y=tr.by+event.object.position.y
      
        }
     
    }
    function dragendCallback(event) {
        event.object.material.color.setHex(startColor);
    
    updateLines()
    dir01a.subVectors( lpoints[0].position, lpoints[1].position ).normalize() ;
    dir12a.subVectors( lpoints[1].position, lpoints[2].position ).normalize() ;
    dir23a.subVectors( lpoints[2].position, lpoints[3].position ).normalize() ;
    dir30a.subVectors( lpoints[3].position, lpoints[0].position ).normalize() ;
    
    //console.log(dir01a);
    console.log(dir01.angleTo(dir01a));
    console.log(dir23.angleTo(dir23a));
    
    
    angle0=dir01a.angleTo(dir01)
    
    angle1=dir12a.angleTo(dir12)
    
    //angle1=event.object.userData.ind!=1?-angle1:angle1
    angle2=dir23a.angleTo(dir23)
   
    
    angle3=dir30a.angleTo(dir30)
    
    
    }





/**
 * Floor
 */
const tttgeometry = new THREE.BoxGeometry(2, 2, 2);







/**
 * Lights
 */
 const ambientLight2 = new THREE.AmbientLight(0xffffff, 0.8)
 fscene.add(ambientLight2)




/**
 * Sizes
 */

const map=new Map()

const floorbtn=document.querySelector("#floorPlanbtn")
floorbtn.addEventListener("click",()=>{
    console.log("sdjfjasdskjdjhd");
    renderfloor=true
})

const desifnbtn=document.querySelector("#designn")
desifnbtn.addEventListener("click",()=>{
    while(scene.children.length>3)
    {
        scene.remove(scene.children[scene.children.length-1])
    }
    objects.forEach(element => {
        scene.add(element)
    });
    let l=lpoints.length-1
    const floor = new THREE.Shape()
    floor.moveTo(lpoints[l].position.x,lpoints[l].position.y)
    lpoints.forEach(element => {
        floor.lineTo(element.position.x,element.position.y) 
    });
    let changeX=0,changeY=0
    console.log(pt1);
   // if(pt1!=-1)
    {
    changeX= (initialpts[1].x-lpoints[1].position.x)+(initialpts[3].x-lpoints[3].position.x)
    changeY=initialpts[1].y-lpoints[1].position.y+ initialpts[3].y-lpoints[3].position.y
    }
    
  
console.log(changeX+" "+changeY);
if(isLine==false)
{
    console.log("11111111111111111111111");
    changeX=0
    changeY=0
}


    
 const fl= addShape( floor, extrudeSettings,'light brown', sfactorz/2*changeX,0, 20-sfactory*changeY/4,-Math.PI*0.5, 0, 0, 6 );
 //const fll= addShape( floor, extrudeSettings,0x0040f0, 0, 0, 20,0, 0, 0, 6 );
fl.userData.ground=true
// scene.add(fl)
let radius = 1;
let height = 3
    let cylinder = new THREE.Mesh(new THREE.CylinderBufferGeometry(radius, radius, height, 32), new THREE.MeshPhongMaterial({ color: 0x90ee90 }))
cylinder.position.set(0,400,0)
cylinder.scale.set(50,50,50)
cylinder.castShadow = true
cylinder.receiveShadow = true
//console.log(fl.position);
//scene.add(cylinder)

map.set(floor,fl)
 
lpoints.forEach(element => {
    console.log(element.position);
});
  //console.log(initialpts);
console.log(angle1);
for (let i = 0; i <lpoints.length; i++) {
    let l=lpoints.length
    let k
    const wall=new THREE.Shape()
    if(i%2==0)
    {
        
        let zz=0
        if(isLine==false)
       zz=-sfactorz*(lpoints[i%l].position.x+lpoints[(i+1)%l].position.x)/2
        let x=Math.sqrt(Math.pow(lpoints[(i+1)%l].position.x-lpoints[(i)%l].position.x,2)+Math.pow(lpoints[(i+1)%l].position.y-lpoints[(i)%l].position.y,2))/2
        let h=20
        wall.moveTo(-x,-h)
    .lineTo(x,-h)
    .lineTo(x,h)
    .lineTo(-x,h)
    .lineTo(-x,-h)
    //if(i==0)
    console.log((lpoints[(i+1)%l].position.x+lpoints[(i)%l].position.x)/2);
 
    if(i==0)
    {
        if(lpoints[0].position.y>lpoints[1].position.y)
        angle0=-angle0
    
    k=  addShape( wall, extrudeSettings,'white',-zz,sfactory*h/2,-(sfactorz*(lpoints[(i+1)%l].position.y+lpoints[(i)%l].position.y)/2-(20-sfactory*changeY/4)) ,0,angle0+Math.PI, 0, 6 );
    k.material.map=wallPic1
    }
    else
    {
        if(lpoints[2].position.y<lpoints[3].position.y)
        angle2=-angle2
  
    k=  addShape( wall, extrudeSettings,'white',-zz,sfactory*h/2,-(sfactorz*(lpoints[(i+1)%l].position.y+lpoints[(i)%l].position.y)/2-(20-sfactory*changeY/4)) ,0,angle2, 0, 6 );
    k.material.map=wallPic1
    }


    }
    else
    {
      //  console.log(lpoints[(i+1)%l].position.x+ "  "+lpoints[(i)%l].position.x);
      let zz=0
      if(isLine==false)
     zz=-sfactorz*(lpoints[i%l].position.y+lpoints[(i+1)%l].position.y)/2
    
        let y=Math.sqrt(Math.pow(lpoints[(i+1)%l].position.x-lpoints[(i)%l].position.x,2)+Math.pow(lpoints[(i+1)%l].position.y-lpoints[(i)%l].position.y,2))/2
        let ll=20
        wall.moveTo(-l,-y)
    .lineTo(ll,-y)
    .lineTo(ll,y)
    .lineTo(-ll,y)
    .lineTo(-ll,-y)
   // k=  addShape( wall, extrudeSettings,'red', sfactorz*(lpoints[(i+1)%l].position.x+lpoints[(i)%l].position.x)/2+sfactorz/2*changeX,sfactory*y/4,0 ,0, Math.PI*0.5, Math.PI*0.5, 6 );
   if(i==1)
   {
    if(lpoints[1].position.x<lpoints[2].position.x)
        angle1=-angle1
   k=  addShape( wall, extrudeSettings,'white', sfactorz*(lpoints[(i+1)%l].position.x+lpoints[(i)%l].position.x)/2+sfactorz/2*changeX,sfactory*ll/2, zz+20,0, Math.PI*0.5+angle1+Math.PI, Math.PI*0.5, 6 );
   }
   else
   {
    if(lpoints[3].position.x>lpoints[0].position.x)
    angle3=-angle3
   k=  addShape( wall, extrudeSettings,'white', sfactorz*(lpoints[(i+1)%l].position.x+lpoints[(i)%l].position.x)/2+sfactorz/2*changeX,sfactory*ll/2,zz+20  ,0, Math.PI*0.5+angle3, Math.PI*0.5, 6 );
   }

 
    }
    console.log(k.position); 
 
    map.set(wall,k)
   // console.log(wall.extractPoints());
}
   
   var dir = new THREE.Vector3(lpoints[0].position.x-lpoints[1].position.x,lpoints[0].position.y-lpoints[1].position.y,lpoints[0].position.z-lpoints[1].position.z); 

    renderfloor=false
    changeX=0,changeY=0
})
const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
function addShape( shape, extrudeSettings, color, x, y, z, rx, ry, rz, s ) {
    // extruded shape

  //const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
  const geometry = new THREE.ShapeGeometry( shape);

    const mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: color ,side:THREE.FrontSide,map:wallPic} ) );
    //mesh.material.side= THREE.DoubleSide
    console.log(mesh);
    mesh.position.set( x, y, z );
   mesh.rotation.set( rx, ry, rz );

    mesh.scale.set( s, s, s );

   scene.add( mesh );
return mesh


}
///floor plan end


const squareShape = new THREE.Shape()
        .moveTo( object1.position.x,object1.position.y )
        .lineTo( 80, -40 )
        .lineTo( 80, 40 )
        .lineTo( -80, 40 )
         .lineTo( -80, -40 );
         squareShape.userData="square"

         console.log( squareShape.userData);
      //  const extrudeSettings = { depth: 5,bevelEnabled: true, bevelSegments: 5, steps: 5, bevelSize: 10, bevelThickness: 10  };
        

        const extrudeSettingsWall = { depth: 80, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
     let r=   addShape( squareShape, extrudeSettings,'white', 0,0, 20,-Math.PI*0.5, 0, 0, 6 );
     r.userData.ground=true
     //r.material.map=fl
     //cobjects.push(r)
        //addShape( squareShape, extrudeSettings, 0x0040f0, 0, 0, 0,Math.PI*0.5, 0, 0, 6 );
    //  addShape( squareShape, extrudeSettings, 0x0040f0, 0, 0, 0,0, 0, 0, 6 );
   
      for (let i = 0; i <lpoints.length; i++) {
        let l=lpoints.length
        let k
        const wall=new THREE.Shape()
        if(i%2==0)
        {
            
            let zz=0
            if(isLine==false)
           zz=-sfactorz*(lpoints[i%l].position.x+lpoints[(i+1)%l].position.x)/2
            let x=Math.sqrt(Math.pow(lpoints[(i+1)%l].position.x-lpoints[(i)%l].position.x,2)+Math.pow(lpoints[(i+1)%l].position.y-lpoints[(i)%l].position.y,2))/2
            let h=20
            wall.moveTo(-x,-h)
        .lineTo(x,-h)
        .lineTo(x,h)
        .lineTo(-x,h)
        .lineTo(-x,-h)
        //if(i==0)
        console.log((lpoints[(i+1)%l].position.x+lpoints[(i)%l].position.x)/2);
     
        if(i==0)
        {
            if(initialpts[0].y<lpoints[0].position.y)
            angle0=-angle0
        k=  addShape( wall, extrudeSettings,'white',-zz,sfactory*h/2,-(-20+sfactorz*(lpoints[(i+1)%l].position.y+lpoints[(i)%l].position.y)/2),0,angle0+Math.PI, 0, 6 );
        k.material.map=wallPic1
        }
        else
        {
            if(initialpts[1].y<lpoints[1].position.y)
            {
                console.log("jhgjhkjhkjhkjh");
            angle0=-angle0
            }
        k=  addShape( wall, extrudeSettings,'white',-zz,sfactory*h/2,-(-20+sfactorz*(lpoints[(i+1)%l].position.y+lpoints[(i)%l].position.y)/2) ,0,angle2, 0, 6 );
        k.material.map=wallPic1
        }

       
        }
        else
        {
          //  console.log(lpoints[(i+1)%l].position.x+ "  "+lpoints[(i)%l].position.x);
          let zz=0
          if(isLine==false)
         zz=-sfactorz*(lpoints[i%l].position.y+lpoints[(i+1)%l].position.y)/2
        
            let y=Math.sqrt(Math.pow(lpoints[(i+1)%l].position.x-lpoints[(i)%l].position.x,2)+Math.pow(lpoints[(i+1)%l].position.y-lpoints[(i)%l].position.y,2))/2
            let ll=20
            wall.moveTo(-l,-y)
        .lineTo(ll,-y)
        .lineTo(ll,y)
        .lineTo(-ll,y)
        .lineTo(-ll,-y)
       // k=  addShape( wall, extrudeSettings,'red', sfactorz*(lpoints[(i+1)%l].position.x+lpoints[(i)%l].position.x)/2+sfactorz/2*changeX,sfactory*y/4,0 ,0, Math.PI*0.5, Math.PI*0.5, 6 );
       if(i==1)
       k=  addShape( wall, extrudeSettings,'white', sfactorz*(lpoints[(i+1)%l].position.x+lpoints[(i)%l].position.x)/2,sfactory*ll/2, zz+20,0, Math.PI*0.5+angle1+Math.PI, Math.PI*0.5, 6 );
       else
       k=  addShape( wall, extrudeSettings,'white', sfactorz*(lpoints[(i+1)%l].position.x+lpoints[(i)%l].position.x)/2,sfactory*ll/2,zz+20  ,0, Math.PI*0.5+angle3, Math.PI*0.5, 6 );

        }
        console.log(k.position); 
        
        map.set(wall,k)
      
    }
    
    var guiControls = new function () {
        this.color = r.material.color.getStyle();
        this.position = r.position
        console.log(r.material.color);
    };
    let cobjects=[]
    window.addEventListener('click', (event) => {
        console.log("9999999999999999999999999999");
    cobjects=[...objects]
    
    
        mouse.x = event.clientX / window.innerWidth * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        intersects = raycaster.intersectObjects(scene.children,true);
    console.log(intersects.length);
        if (intersects.length > 0) {
            
            selectedo = intersects[0].object;
            guiControls1.color = selectedo.material.color.getStyle();
            
        
            console.log("1111111111111111sadsadasdasdasdasds");
    console.log(selectedo.position);
    
  

    //     console.log(curser.x+" "+curser.y);
     console.log(temp);

           // selected.material.wireframe=true
           console.log("sdfsadffsdf98098098098898");
            
          
    
    
        }
    
    })
    



 

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0
BBmap.set(cylinder,cylinderBB)
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    moveSelected()
    // Model animation
    if (mixer) {
        mixer.update(deltaTime)
    }
    if(rr==1&&r1==0)
    {
        r1=1;
        con()
    }
    if(selected!=null)
    {
    selectedBB.setFromObject(selected)
    // Update controls
    //orbitControls.update()
  //  if (diningtable.children.length != 0 && selected != r1floor) {
        BBmap.forEach (function(value, key) {
         value.setFromObject(key)
          })
       

        checkcollision()

    //}
    }
//console.log(camera.position);

    flyControls.update(deltaTime);
    // Render
    if(!renderfloor)     
    {
       
    renderer.render(scene, camera)
    }
    else
    {
        //console.log("11111111111");
       updateLines()
    frenderer.render(fscene, fcamera);
    }
   // renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()