$(document).ready(function() {
    console.log("ready!")
    // First set the window dimesions
    var width = window.innerWidth;
    var height = window.innerHeight;
    // Create the renderer from the WebGLRenderer constructor
    // Use the height and width for the renderer
    // Append the renderer to the body element
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
    // Create a new scene from THREE.Scene
    var scene = new THREE.Scene;
    // Create the Geometry, Cube material and the object that you want to render then add the item to the scene.
    var cubeGeometry = new THREE.BoxGeometry(100, 100, 100);
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.y = Math.PI * 45 / 180;
    scene.add(cube);
    //Create a camera, set its coordinates and add the camera to the scene.
    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
    camera.position.y = 160;
    camera.position.z = 400;
    camera.lookAt(cube.position);
    scene.add(camera);
    // Create Geometry and Materieals for the mesh (this allows shadows) and add to the scene
    var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
    var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
    var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

    scene.add(skybox);
    // Create a light source (or two with color and add to the scene)
    var pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 300, 300);

    scene.add(pointLight);
    
    var pointLight2 = new THREE.PointLight(0xff120f);
    pointLight2.position.set(45, 800, 600);

    scene.add(pointLight2);
    // Get and set the clock speed and render the scene in the animation
    var clock = new THREE.Clock;

    function render() {
            requestAnimationFrame(render);

            cube.rotation.y -= clock.getDelta();
            cube.rotation.x += .01

            renderer.render(scene, camera);
    }
 // Call on the renderer to begin the animation and render the object on the screen.  This is recursive.
render();
    
    
    
});