import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

const geoTor1 = new THREE.TorusGeometry(10,3,16,30);
const material1 = new THREE.MeshStandardMaterial({color: 0xFF6347, wireframe:true });
const torus = new THREE.Mesh(geoTor1,material1);
const torus2 = new THREE.Mesh(geoTor1,material1);
scene.add(torus);
scene.add(torus2);

torus2.rotation.x =3.1415/2
//torus2.scale.x = 1.5;torus2.scale.y = 1.5;torus2.scale.z = 1.5;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(15,17,20);
pointLight.decay = 0.01;

scene.add(pointLight);

function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  torus2.rotation.x += 0.005;
  torus2.rotation.y += 0.0025;
  torus2.rotation.z += 0.005;

  renderer.render(scene,camera);
}

animate()

const message = 'This is a Test' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
