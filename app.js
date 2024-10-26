import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Load texture for Earth and create the Earth mesh
const earthTexture = new THREE.TextureLoader().load('assets/earth.jpg');
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// Position the Earth away from the sun
earth.position.x = 5;

// Animate function
function animate() {
  requestAnimationFrame(animate);

  // Rotate the Earth
  earth.rotation.y += 0.01;

  // Update controls
  controls.update();

  // Render the scene
  renderer.render(scene, camera);
}
animate();

// Adjust the scene when the window is resized
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
