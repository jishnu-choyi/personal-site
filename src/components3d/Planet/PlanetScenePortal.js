import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./planet.module.scss";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function PlanetScenePortal() {
    const canvasContainerRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const W = canvasContainerRef.current.clientWidth;
        const H = canvasContainerRef.current.clientHeight;
        const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
        camera.position.z = 60;
        camera.position.x = 0;
        camera.position.y = 16.6;

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

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);
        const spotLight1 = new THREE.SpotLight(0xc47f38, 1);
        spotLight1.castShadow = true;
        spotLight1.position.set(20, 20, 20);
        spotLight1.shadow.bias = -0.0005;
        scene.add(spotLight1);
        spotLight1.shadow.mapSize = new THREE.Vector2(2048, 2048);
        spotLight1.name = "spotLight_1";

        const spotLight2 = new THREE.SpotLight(0xffffff, 0.75);
        spotLight2.castShadow = true;
        spotLight2.position.set(-20, 20, -6);
        spotLight2.shadow.bias = -0.0005;
        scene.add(spotLight2);
        spotLight2.shadow.mapSize = new THREE.Vector2(2048, 2048);
        spotLight2.name = "spotLight_2";

        const spotLight3 = new THREE.SpotLight(0xc47f38, 0.5);
        spotLight3.castShadow = true;
        spotLight3.position.set(12, -8, 28);
        spotLight3.shadow.bias = -0.0005;
        scene.add(spotLight3);
        spotLight3.shadow.mapSize = new THREE.Vector2(2048, 2048);
        spotLight3.name = "spotLight_3";

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
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            (error) => {
                console.log(error);
            }
        );
        const animate = () => {
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
            // controls.update();
            rotateObjects.forEach((m) => {
                m.mesh.rotateOnAxis(new THREE.Vector3(0, 0, 1), m.speed);
            });
            spotLight1.intensity += (Math.random() - 0.5) * 0.1;
            spotLight1.intensity = Math.abs(spotLight1.intensity);
            spotLight2.intensity += (Math.random() - 0.5) * 0.05;
            spotLight2.intensity = Math.abs(spotLight2.intensity);
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
