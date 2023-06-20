import React, { useEffect, useRef } from "react";
import styles from "./planet.module.scss";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import monkeyFilePath from "../../assets/models/monkey.glb";

function PlanetScene() {
    const canvasContainerRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.add(new THREE.AxesHelper(5));
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
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);
        const spotLight = new THREE.SpotLight(0xffffff, 0.5);
        spotLight.castShadow = true;
        spotLight.position.set(0, 16, 8);
        scene.add(spotLight);

        const stats = new Stats();
        document.body.appendChild(stats.dom);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const loader = new GLTFLoader();

        const rotateObjects = [];

        console.log("loader=", loader);
        loader.load(
            "./models/planet-full-scene.glb",
            function (gltf) {
                console.log("gltf=", gltf);
                gltf.scene.traverse(function (child) {
                    console.log("child", child.isMesh, child.name);
                    if (child.isMesh) {
                        const m = child;
                        m.receiveShadow = true;
                        m.castShadow = true;
                        rotateObjects.push(m);
                    }
                    if (child.isLight) {
                        const l = child;
                        l.castShadow = true;
                        l.shadow.bias = -0.003;
                        l.shadow.mapSize.width = 2048;
                        l.shadow.mapSize.height = 2048;
                    }
                });
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
            stats.update();
            controls.update();
            rotateObjects.forEach((m) => {
                m.rotation.z += 0.001;
            });
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
