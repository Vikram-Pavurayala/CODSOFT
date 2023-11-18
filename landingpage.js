function createScene() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, 1366 / 2 / 574, 0.1, 1000);
  camera.position.set(1, 0, 17); // Adjust the camera position

  var renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(1366 / 4, 574 / 2); // Adjust the renderer size
  document.getElementById('planet-container').appendChild(renderer.domElement);

  var geometry = new THREE.SphereGeometry(10, 64, 64);
  var material = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('https://cdn.glitch.global/12aa8317-29ea-4837-ab2a-415a69a53c38/moon.jpg?v=1694680782341'),
    bumpMap: new THREE.TextureLoader().load('https://cdn.glitch.global/12aa8317-29ea-4837-ab2a-415a69a53c38/moon.jpg?v=1694680782341'),
    bumpScale: 0.05,
  });




  var moon = new THREE.Mesh(geometry, material);
  scene.add(moon);


  var light = new THREE.DirectionalLight(0xFFFFFF, 1);
  light.position.set(1, 0, 15);
  scene.add(light);



  function animate() {
    requestAnimationFrame(animate);
    moon.rotation.y += 0.0025;
    renderer.render(scene, camera);
    light.position.copy(camera.position);
  }
  animate();


  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enablePan = false;
  // Set some initial parameters for the controls
  controls.enableDamping = true; // Add damping for smoother rotation
  controls.dampingFactor = 0.01; // Adjust the damping factor*/
  controls.rotateSpeed = 0.5;


}
createScene();
