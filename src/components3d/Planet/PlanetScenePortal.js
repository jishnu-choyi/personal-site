import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./planet.module.scss";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import monkeyFilePath from "../../assets/models/monkey.glb";
import * as dat from "dat.gui";

function PlanetScenePortal() {
    const canvasContainerRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        const gui = new dat.GUI();
        const scene = new THREE.Scene();
        // scene.add(new THREE.AxesHelper(10));
        const W = canvasContainerRef.current.clientWidth;
        const H = canvasContainerRef.current.clientHeight;
        const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
        camera.position.z = 60;
        camera.position.x = 0;
        camera.position.y = 16.6;
        gui.add(camera.position, "z")
            .min(0)
            .max(100)
            .step(0.01)
            .name("Camera Z")
            .onChange(() => {
                camera.lookAt(new THREE.Vector3(0, 0, 0));
            });
        gui.add(camera.position, "x")
            .min(-100)
            .max(100)
            .step(0.01)
            .name("Camera X");
        gui.add(camera.position, "y")
            .min(-100)
            .max(100)
            .step(0.01)
            .name("Camera Y");

        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
        });
        renderer.setSize(W, H);
        renderer.setClearAlpha(0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        console.log("color=", THREE.ColorManagement, renderer);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);
        const spotLight1 = new THREE.SpotLight(0xc47f38, 1);
        spotLight1.castShadow = true;
        spotLight1.position.set(20, 20, 20);
        spotLight1.shadow.bias = -0.0005;
        scene.add(spotLight1);
        spotLight1.shadow.mapSize = new THREE.Vector2(2048, 2048);
        spotLight1.name = "spotLight_1";
        // console.log("spotLight1=", spotLight1);

        const spotLight2 = new THREE.SpotLight(0xffffff, 1);
        spotLight2.castShadow = true;
        spotLight2.position.set(-20, 20, -6);
        spotLight2.shadow.bias = -0.0005;
        scene.add(spotLight2);
        spotLight2.shadow.mapSize = new THREE.Vector2(2048, 2048);
        spotLight2.name = "spotLight_2";

        const spotLight3 = new THREE.SpotLight(0xc47f38, 0.25);
        spotLight3.castShadow = true;
        spotLight3.position.set(12, -8, 28);
        spotLight3.shadow.bias = -0.0005;
        scene.add(spotLight3);
        spotLight3.shadow.mapSize = new THREE.Vector2(2048, 2048);
        spotLight3.name = "spotLight_3";
        // const spotLightHelper = new THREE.SpotLightHelper(spotLight3);
        // scene.add(spotLightHelper);

        gui.add(spotLight3.position, "x", -60, 60, 0.01)
            .name("spot1 px")
            .onChange((v) => {
                spotLight3.lookAt(new THREE.Vector3(6, 3, 0));
            });
        gui.add(spotLight3.position, "y", -60, 60, 0.01)
            .name("spot1 py")
            .onChange((v) => {
                spotLight3.lookAt(new THREE.Vector3(6, 3, 0));
            });
        gui.add(spotLight3.position, "z", -60, 60, 0.01)
            .name("spot1 pz")
            .onChange((v) => {
                spotLight3.lookAt(new THREE.Vector3(6, 3, 0));
            });

        // console.log("spotLight2=", spotLight2);

        const stats = new Stats();
        document.body.appendChild(stats.dom);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const loader = new GLTFLoader();

        const rotateObjects = [];
        loader.load(
            "./models/planet-full-scene.glb",
            function (gltf) {
                // console.log("gltf=", gltf.scene.position);
                gltf.scene.traverse(function (child) {
                    // console.log("child", child.isMesh, child.name);
                    if (child.isMesh) {
                        const m = child;
                        m.receiveShadow = true;
                        m.castShadow = true;
                        rotateObjects.push({
                            mesh: m,
                            speed: 0.0005,
                        });
                        // console.log("mesh=", m.name, m.material);
                        if (m.material.map) m.material.map.anisotropy = 16;
                    }
                    if (child.isLight) {
                        const l = child;
                        l.castShadow = true;
                        l.shadow.bias = -0.003;
                        l.shadow.mapSize.width = 2048;
                        l.shadow.mapSize.height = 2048;
                    }
                });
                gltf.scene.position.set(5.93, 3.33, 0);
                scene.add(gltf.scene);
                // gui.add(gltf.scene.scale, "x")
                //     .min(1)
                //     .max(2)
                //     .step(0.001)
                //     .name("Model scale")
                //     .onChange((v) => {
                //         gltf.scene.scale.y = v;
                //         gltf.scene.scale.z = v;
                //     });

                // gui.add(gltf.scene.position, "x")
                //     .min(-20)
                //     .max(20)
                //     .step(0.01)
                //     .name("Model Px");
                // gui.add(gltf.scene.position, "y")
                //     .min(-20)
                //     .max(20)
                //     .step(0.01)
                //     .name("Model Py");
                // gui.add(gltf.scene.position, "z")
                //     .min(-20)
                //     .max(20)
                //     .step(0.01)
                //     .name("Model Pz");

                // gui.add(gltf.scene.rotation, "x")
                //     .min(-3)
                //     .max(3)
                //     .step(0.01)
                //     .name("Model Rx");
                // gui.add(gltf.scene.rotation, "y")
                //     .min(-3)
                //     .max(3)
                //     .step(0.01)
                //     .name("Model Ry");
                // gui.add(gltf.scene.rotation, "z")
                //     .min(-3)
                //     .max(3)
                //     .step(0.01)
                //     .name("Model Rz");
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            (error) => {
                console.log(error);
            }
        );
        let angle = 0;
        const animate = () => {
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
            stats.update();
            controls.update();
            rotateObjects.forEach((m) => {
                // m.mesh.rotation.x += 0.005;
                // m.mesh.rotation.y -= 0.0025;
                // m.mesh.rotation.z += 0.005;
                //m.mesh.rotateOnAxis(new THREE.Vector3(0, 0, 1), 0.01);
                //m.mesh.rotation.z += m.speed;
            });

            // spotLight1.intensity += (Math.random() - 0.5) * 0.15;
            // spotLight1.intensity = Math.abs(spotLight1.intensity);

            // spotLight2.intensity += (Math.random() - 0.5) * 0.05;
            // spotLight2.intensity = Math.abs(spotLight2.intensity);
        };
        animate();
    }, []);

    return ReactDOM.createPortal(
        <div className={styles["container"]} ref={canvasContainerRef}>
            <canvas id="mainCanvas" ref={canvasRef}></canvas>
        </div>,
        document.querySelector(".webgl-container")
    );
}
export default PlanetScenePortal;
