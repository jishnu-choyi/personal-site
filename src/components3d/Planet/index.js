import React, { useEffect, useRef } from "react";
import styles from "./planet.module.scss";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import monkeyFilePath from "../../assets/models/monkey.glb";
import * as dat from "dat.gui";

function PlanetScene() {
    const canvasContainerRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        const gui = new dat.GUI();
        const scene = new THREE.Scene();
        scene.add(new THREE.AxesHelper(10));
        const W = canvasContainerRef.current.clientWidth;
        const H = canvasContainerRef.current.clientHeight;
        const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
        camera.position.z = 20;
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

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const spotLight1 = new THREE.SpotLight(0xffffff, 1);
        spotLight1.castShadow = true;
        spotLight1.position.set(0, 16, 8);
        spotLight1.shadow.bias = -0.0001;
        scene.add(spotLight1);
        spotLight1.shadow.mapSize = new THREE.Vector2(2048, 2048);
        spotLight1.name = "spotLight_1";

        // console.log("spotLight1=", spotLight1);

        const spotLight2 = new THREE.SpotLight(0xff0000, 1);
        spotLight2.castShadow = true;
        spotLight2.position.set(0, -16, -8);
        spotLight2.shadow.bias = -0.0001;
        scene.add(spotLight2);
        spotLight2.shadow.mapSize = new THREE.Vector2(2048, 2048);
        spotLight2.name = "spotLight_2";
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
                        rotateObjects.push(m);
                        // console.log("mesh=", m.name, m.material);
                        if (m.material.map) m.material.map.anisotropy = 16;
                    }
                    if (child.isLight) {
                        const l = child;
                        // l.castShadow = true;
                        l.shadow.bias = -0.003;
                        l.shadow.mapSize.width = 2048;
                        l.shadow.mapSize.height = 2048;
                    }
                });
                scene.add(gltf.scene);
                gui.add(gltf.scene.rotation, "y")
                    .min(-Math.PI)
                    .max(Math.PI)
                    .step(0.001)
                    .name("Model rotation");
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
            stats.update();
            controls.update();
            // rotateObjects.forEach((m) => {
            //     m.rotation.z += 0.001;
            // });

            spotLight1.intensity += (Math.random() - 0.5) * 0.15;
            spotLight1.intensity = Math.abs(spotLight1.intensity);

            spotLight2.intensity += (Math.random() - 0.5) * 0.05;
            spotLight2.intensity = Math.abs(spotLight2.intensity);
        };
        animate();
    }, []);

    return (
        <div className={styles["container"]} ref={canvasContainerRef}>
            <canvas id="mainCanvas" ref={canvasRef}></canvas>
        </div>
    );
}
export default PlanetScene;
