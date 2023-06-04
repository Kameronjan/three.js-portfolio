import './style.css';

import * as THREE from 'three';

const scene = new THREE.scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRation);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render (scene,camera);