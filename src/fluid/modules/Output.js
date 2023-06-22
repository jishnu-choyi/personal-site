import Common from "./Common";
import * as THREE from "three";

import Simulation from "./Simulation";
import face_vert from "./glsl/sim/face.vert";
//import face_vert from "./glsl/sim/face.vert";
import color_frag from "./glsl/sim/color.frag";

export default class Output {
    constructor() {
        this.init();
    }

    init() {
        this.simulation = new Simulation();

        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();
        const material = new THREE.RawShaderMaterial({
            vertexShader: face_vert,
            fragmentShader: color_frag,
            uniforms: {
                velocity: {
                    value: this.simulation.fbos.vel_0.texture,
                },
                boundarySpace: {
                    value: new THREE.Vector2(),
                },
            },
        });
        const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        this.output = new THREE.Mesh(
            // new THREE.PlaneBufferGeometry(2, 2),
            new THREE.PlaneGeometry(2, 2),
            material2
        );
        console.log("face_vert", face_vert);
        console.log("color_frag", color_frag);
        console.log("tex", this.simulation.fbos.vel_0.texture);

        this.scene.add(this.output);
    }
    addScene(mesh) {
        this.scene.add(mesh);
    }

    resize() {
        this.simulation.resize();
    }

    render() {
        Common.renderer.setRenderTarget(null);
        Common.renderer.render(this.scene, this.camera);
    }

    update() {
        //this.simulation.update();
        this.render();
    }
}
