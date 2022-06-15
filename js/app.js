let container;
let camera;
let controls;
let renderer;
let scene;
let mesh;


function init() {

    container = document.querySelector('#scene-container');

    // create a Scene
    scene = new THREE.Scene();

    // Set the background color
    scene.background = new THREE.Color("rgb(233, 233, 233)");

    //helper functions
    createCamera();
    createControls();
    createLights();
    createMeshes();
    createRenderer();

    // start the animation loop
    renderer.setAnimationLoop(() => {

        update();
        render();

    });
}


function createCamera() {

    camera = new THREE.PerspectiveCamera(
        35, // FOV
        container.clientWidth / container.clientHeight, // aspect

        0.1, // near clipping plane
        100, // far clipping plane
    );

    camera.position.set(-4, 20, 10);


}

function createControls() {

  controls = new THREE.OrbitControls( camera, container );

}

function createLights() {

    const ambientLight = new THREE.HemisphereLight(
        0xddeeff, 
        0x200020, 
        3, 
    );

    scene.add(ambientLight);

}

function createMeshes() {
    const geometry = new THREE.SphereGeometry(2, 20, 20);
    const material = new THREE.MeshStandardMaterial({ color: 0x80f880 });

    const count = 200;
	const scale = 8;

	for ( let i = 0; i < count; i ++ ) {

		const r = Math.random() * 1.0 * Math.PI;
		const z = ( Math.random() * 10 ) - 1.0;
		const zScale = Math.sqrt( 5.0 - z * z ) * scale;

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set(
			Math.cos( r ) * zScale,
			Math.sin( r ) * zScale,
			z * scale
		);
		mesh.rotation.set( Math.random(), Math.random(), Math.random() );
		scene.add( mesh );
    }
}

function createRenderer() {

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.gammaFactor = 2.2;
    renderer.gammaOutput = true;

    renderer.physicallyCorrectLights = true;

    container.appendChild(renderer.domElement);

}

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

    // increase the mesh's rotation each frame
    mesh.rotation.z += 0.01;
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

}
// render, or 'draw a still image', of the scene
function render() {

    renderer.render(scene, camera);

}

function onWindowResize() {

    console.log('You resized the browser window!');
    // set the aspect ratio to match the new browser window aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);

init();
