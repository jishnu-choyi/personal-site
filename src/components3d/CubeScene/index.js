import React, { useEffect, useRef } from "react";
import styles from "./cubeScene.module.scss";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

function CubeScene() {
    const canvasContainerRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const W = canvasContainerRef.current.clientWidth;
        const H = canvasContainerRef.current.clientHeight;
        const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
        camera.position.z = 2;
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
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        const stats = new Stats();
        document.body.appendChild(stats.dom);
        const animate = () => {
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            stats.update();
        };
        animate();
    }, []);

    return (
        <div className={styles["cube-container"]} ref={canvasContainerRef}>
            <canvas id="mainCanvas" ref={canvasRef}></canvas>
        </div>
    );
}
export default CubeScene;
