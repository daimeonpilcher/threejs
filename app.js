$(document).ready(function() {
    console.log("ready!")
    var width = window.innerWidth;
    var height = window.innerHeight;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var cubeGeometry = new THREE.BoxGeometry(100, 100, 100);
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.rotation.y = Math.PI * 45 / 180;
    scene.add(cube);

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
    camera.position.y = 160;
    camera.position.z = 400;
    camera.lookAt(cube.position);

    scene.add(camera);

    var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
    var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
    var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

    scene.add(skybox);

    var pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 300, 300);

    scene.add(pointLight);
    
    var pointLight2 = new THREE.PointLight(0xff120f);
    pointLight2.position.set(45, 800, 600);

    scene.add(pointLight2);

    var clock = new THREE.Clock;

    function render() {
            requestAnimationFrame(render);

            cube.rotation.y -= clock.getDelta();
            cube.rotation.x += .01

            renderer.render(scene, camera);
    }

render();
    
    
    
});