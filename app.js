import * as THREE from 'three';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the sun (a sphere with yellow color)
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Set camera position
camera.position.z = 10;

// Animate function
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Create planets
const planetGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });
const earth = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(earth);

// Position the earth away from the sun
earth.position.x = 5;

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

const earthTexture = new THREE.TextureLoader().load('assets/earth.jpg');
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
earth.material = earthMaterial;
