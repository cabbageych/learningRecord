import React from 'react';
import * as THREE from 'three';
import './background.css';

export default class background extends React.Component {
    mount: any;
    scene: any;
    camera: any;
    renderer: any;
    mesh: any;
    //颜色数组
    Colors: any = {
        red: 0xf25346,
        white: 0xd8d0d1,
        pink: 0xF5986E,
        brown: 0x59332e,
        brownDark: 0x23190f,
        blue: 0x68c3c0,
    };
    //screen height,width
    vh: number = 0;
    vw: number = 0;
    //鼠标位置
    mousePos: { x: number; y: number } = {
        x: 0,
        y: 0
    };
    //飞机
    airPlane: {
        mesh: any;
        name: any;
        propeller: any;
    } = {mesh: undefined, name: undefined, propeller:undefined}; 
    //天空
    sky: {
        mesh: any;
        name: any;
        nClouds: any;
        clouds: any;
    } = {mesh: undefined, name: undefined, nClouds: undefined, clouds: undefined}; ; 
    //大海
    sea: {
        mesh: any;
        name: any;
        moveWaves: any;
    } = {mesh: undefined, name: undefined, moveWaves: undefined}; ; 


    init = () => {
        document.addEventListener('mousemove', this.handleMouseMove, false);
        //创建场景，相机和渲染器
        this.createScene();
        //添加光源
        this.createLights();
        //添加对象 
        this.createPlane();
        this.createSea();
        this.createSky();

        this.animate(); //loop
    }

    handleMouseMove = (event: any) => {
        let tx = -1 + (event.clientX / this.vw) * 2;
        let ty = 1 - (event.clientY / this.vh) * 2;
        this.mousePos = {
            x: tx,
            y: ty
        }
    }

    createScene = () => {
        this.vh = window.innerHeight;
        this.vw = window.innerWidth;

        //创建场景
        this.scene = new THREE.Scene();
        //雾化
        this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

        //相机
        this.camera = new THREE.PerspectiveCamera(60, this.vw / this.vh, 0.1, 10000);
        this.camera.position.set(0, 100, 200);

        //渲染器
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(this.vw, this.vh);
        //打开渲染器的阴影地图
        this.renderer.shadowMap.enabled = true;
        this.mount.append(this.renderer.domElement);

        //添加onresize监听
        window.addEventListener('resize', this.handleWindowResize, false);
    }

    handleWindowResize = () => {
        this.vh = window.innerHeight;
        this.vw = window.innerWidth;
        this.renderer.setSize(this.vw, this.vh);
        this.camera.aspect = this.vw / this.vh;
        this.camera.updateProjectionMatrix();
    }

    createLights = () => {
        // 半球光即渐变光，无阴影，光源从场景上方照射到场景下方，无需指定位置
        // 第一个参数是天空的颜色，第二个参数是地上的颜色，第三个参数是光源的强度
        let hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
        let ambientLight = new THREE.AmbientLight(0xdc8874, .5);
        let shadowLight = new THREE.DirectionalLight(0xffffff, .9);
        shadowLight.position.set(150, 350, 350);
        // 开启光源投影 
        shadowLight.castShadow = true;
        // 定义可见域的投射阴影
        shadowLight.shadow.camera.left = -400;
        shadowLight.shadow.camera.right = 400;
        shadowLight.shadow.camera.top = 400;
        shadowLight.shadow.camera.bottom = -400;
        shadowLight.shadow.camera.near = 1;
        shadowLight.shadow.camera.far = 1000;
        // 定义阴影的分辨率(越高分辨率需要消耗更多的性能)
        shadowLight.shadow.mapSize.width = 2048;
        shadowLight.shadow.mapSize.height = 2048;

        this.scene.add(hemisphereLight);
        this.scene.add(ambientLight);
        this.scene.add(shadowLight);
    }

    createPlane = () => {
        this.objAirPlane();
        this.airPlane.mesh.scale.set(.25, .25, .25);
        this.airPlane.mesh.position.y = 100;
        this.scene.add(this.airPlane.mesh);
    }

    createSea = () => {
        this.objSea();
        this.sea.mesh.position.y = -600;
        this.scene.add(this.sea.mesh);
    }

    createSky = () => {
        this.objSky();
        this.sky.mesh.position.y = -600;
        this.scene.add(this.sky.mesh);
    }
    
    objAirPlane = () => {
        this.airPlane.mesh = new THREE.Object3D();
        this.airPlane.mesh.name = 'airPlane';

        // Cockpit

        var geomCockpit = new THREE.BoxGeometry(80, 50, 50, 1, 1, 1);
        var matCockpit = new THREE.MeshPhongMaterial({ color: this.Colors.red });  //?????????

        geomCockpit.vertices[4].y -= 10;
        geomCockpit.vertices[4].z += 20;
        geomCockpit.vertices[5].y -= 10;
        geomCockpit.vertices[5].z -= 20;
        geomCockpit.vertices[6].y += 30;
        geomCockpit.vertices[6].z += 20;
        geomCockpit.vertices[7].y += 30;
        geomCockpit.vertices[7].z -= 20;

        var cockpit = new THREE.Mesh(geomCockpit, matCockpit);
        cockpit.castShadow = true;
        cockpit.receiveShadow = true;
        this.airPlane.mesh.add(cockpit);

        // Engine

        var geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);
        var matEngine = new THREE.MeshPhongMaterial({ color: this.Colors.white }); ///?????????????
        var engine = new THREE.Mesh(geomEngine, matEngine);
        engine.position.x = 50;
        engine.castShadow = true;
        engine.receiveShadow = true;
        this.airPlane.mesh.add(engine);

        // Tail Plane

        var geomTailPlane = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1);
        var matTailPlane = new THREE.MeshPhongMaterial({ color: this.Colors.red }); //?????????????
        var tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
        tailPlane.position.set(-40, 20, 0);
        tailPlane.castShadow = true;
        tailPlane.receiveShadow = true;
        this.airPlane.mesh.add(tailPlane);

        // Wings

        var geomSideWing = new THREE.BoxGeometry(30, 5, 120, 1, 1, 1);
        var matSideWing = new THREE.MeshPhongMaterial({ color: this.Colors.red }); //??????????
        var sideWing = new THREE.Mesh(geomSideWing, matSideWing);
        sideWing.position.set(0, 15, 0);
        sideWing.castShadow = true;
        sideWing.receiveShadow = true;
        this.airPlane.mesh.add(sideWing);

        var geomWindshield = new THREE.BoxGeometry(3, 15, 20, 1, 1, 1);
        var matWindshield = new THREE.MeshPhongMaterial({ color: this.Colors.white, transparent: true, opacity: .3 }); //????????????
        var windshield = new THREE.Mesh(geomWindshield, matWindshield);
        windshield.position.set(5, 27, 0);

        windshield.castShadow = true;
        windshield.receiveShadow = true;

        this.airPlane.mesh.add(windshield);

        var geomPropeller = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1);
        geomPropeller.vertices[4].y -= 5;
        geomPropeller.vertices[4].z += 5;
        geomPropeller.vertices[5].y -= 5;
        geomPropeller.vertices[5].z -= 5;
        geomPropeller.vertices[6].y += 5;
        geomPropeller.vertices[6].z += 5;
        geomPropeller.vertices[7].y += 5;
        geomPropeller.vertices[7].z -= 5;
        var matPropeller = new THREE.MeshPhongMaterial({ color: this.Colors.brown }); //???????????
        this.airPlane.propeller = new THREE.Mesh(geomPropeller, matPropeller);

        this.airPlane.propeller.castShadow = true;
        this.airPlane.propeller.receiveShadow = true;

        var geomBlade = new THREE.BoxGeometry(1, 80, 10, 1, 1, 1);
        var matBlade = new THREE.MeshPhongMaterial({ color: this.Colors.brownDark, }); //???????????
        var blade1 = new THREE.Mesh(geomBlade, matBlade);
        blade1.position.set(8, 0, 0);

        blade1.castShadow = true;
        blade1.receiveShadow = true;

        var blade2 = blade1.clone();
        blade2.rotation.x = Math.PI / 2;

        blade2.castShadow = true;
        blade2.receiveShadow = true;

        this.airPlane.propeller.add(blade1);
        this.airPlane.propeller.add(blade2);
        this.airPlane.propeller.position.set(60, 0, 0);
        this.airPlane.mesh.add(this.airPlane.propeller);

        var wheelProtecGeom = new THREE.BoxGeometry(30, 15, 10, 1, 1, 1);
        var wheelProtecMat = new THREE.MeshPhongMaterial({ color: this.Colors.red }); //???????????
        var wheelProtecR = new THREE.Mesh(wheelProtecGeom, wheelProtecMat);
        wheelProtecR.position.set(25, -20, 25);
        this.airPlane.mesh.add(wheelProtecR);

        var wheelTireGeom = new THREE.BoxGeometry(24, 24, 4);
        var wheelTireMat = new THREE.MeshPhongMaterial({ color: this.Colors.brownDark }); //??????????
        var wheelTireR = new THREE.Mesh(wheelTireGeom, wheelTireMat);
        wheelTireR.position.set(25, -28, 25);

        var wheelAxisGeom = new THREE.BoxGeometry(10, 10, 6);
        var wheelAxisMat = new THREE.MeshPhongMaterial({ color: this.Colors.brown, }); //???????????
        var wheelAxis = new THREE.Mesh(wheelAxisGeom, wheelAxisMat);
        wheelTireR.add(wheelAxis);

        this.airPlane.mesh.add(wheelTireR);

        var wheelProtecL = wheelProtecR.clone();
        wheelProtecL.position.z = -wheelProtecR.position.z;
        this.airPlane.mesh.add(wheelProtecL);

        var wheelTireL = wheelTireR.clone();
        wheelTireL.position.z = -wheelTireR.position.z;
        this.airPlane.mesh.add(wheelTireL);

        var wheelTireB = wheelTireR.clone();
        wheelTireB.scale.set(.5, .5, .5);
        wheelTireB.position.set(-35, -5, 0);
        this.airPlane.mesh.add(wheelTireB);

        var suspensionGeom = new THREE.BoxGeometry(4, 20, 4);
        suspensionGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 10, 0))
        var suspensionMat = new THREE.MeshPhongMaterial({ color: this.Colors.red });  //????????
        var suspension = new THREE.Mesh(suspensionGeom, suspensionMat);
        suspension.position.set(-35, -5, 0);
        suspension.rotation.z = -.3;
        this.airPlane.mesh.add(suspension);

        this.airPlane.mesh.castShadow = true;
        this.airPlane.mesh.receiveShadow = true;
    }

    waves: any[] = [];
    objSea = () => {
        var geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
        geom.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
        geom.mergeVertices();
        var l = geom.vertices.length;

        this.waves = [];

        for (var i = 0; i < l; i++) {
            var v = geom.vertices[i];
            this.waves.push({
                y: v.y,
                x: v.x,
                z: v.z,
                ang: Math.random() * Math.PI * 2,
                amp: 5 + Math.random() * 15,
                speed: 0.016 + Math.random() * 0.032
            });
        };
        var mat = new THREE.MeshPhongMaterial({
            color: this.Colors.blue,
            transparent: true,
            opacity: .8,
            //????????????????
        });

        this.sea.mesh = new THREE.Mesh(geom, mat);
        this.sea.mesh.receiveShadow = true;
        this.sea.moveWaves = this.moveWaves;
    }

    moveWaves = () => {
        var verts = this.sea.mesh.geometry.vertices;
        var l = verts.length;
        for (var i = 0; i < l; i++) {
            var v = verts[i];
            var vprops = this.waves[i];
            v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
            v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp;
            vprops.ang += vprops.speed;
        }
        this.sea.mesh.geometry.verticesNeedUpdate = true;
        this.sea.mesh.rotation.z += .005;
    }

    objSky = () => {
        this.sky.mesh = new THREE.Object3D();
        this.sky.nClouds = 20;
        this.sky.clouds = [];
        var stepAngle = Math.PI * 2 / this.sky.nClouds;
        for (var i = 0; i < this.sky.nClouds; i++) {
            var c = this.objCloud();
            this.sky.clouds.push(c);
            var a = stepAngle * i;
            var h = 750 + Math.random() * 200;
            c.position.y = Math.sin(a) * h;
            c.position.x = Math.cos(a) * h;
            c.position.z = -400 - Math.random() * 400;
            c.rotation.z = a + Math.PI / 2;
            var s = 1 + Math.random() * 2;
            c.scale.set(s, s, s);
            this.sky.mesh.add(c);
        }
    }

    objCloud = () => {
        let mesh: any = new THREE.Object3D();
        mesh.name = "cloud";
        var geom = new THREE.BoxGeometry(20, 20, 20);
        var mat = new THREE.MeshPhongMaterial({
            color: this.Colors.white,
        });

        var nBlocs = 3 + Math.floor(Math.random() * 3);
        for (var i = 0; i < nBlocs; i++) {
            var m = new THREE.Mesh(geom.clone(), mat);
            m.position.x = i * 15;
            m.position.y = Math.random() * 10;
            m.position.z = Math.random() * 10;
            m.rotation.z = Math.random() * Math.PI * 2;
            m.rotation.y = Math.random() * Math.PI * 2;
            var s = .1 + Math.random() * .9;
            m.scale.set(s, s, s);
            m.castShadow = true;
            m.receiveShadow = true;
            mesh.add(m);
        }

        return mesh;
    }

    animate = () => {
        this.updatePlane();
        this.updateCameraFov();
        this.sea.moveWaves();
        this.sky.mesh.rotation.z += .01;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate);
    }

    updatePlane = () => {
        var targetY = this.normalize(this.mousePos.y, -.75, .75, 25, 175);
        var targetX = this.normalize(this.mousePos.x, -.75, .75, -100, 100);
        this.airPlane.mesh.position.y += (targetY - this.airPlane.mesh.position.y) * 0.1;
        this.airPlane.mesh.rotation.z = (targetY - this.airPlane.mesh.position.y) * 0.0128;
        this.airPlane.mesh.rotation.x = (this.airPlane.mesh.position.y - targetY) * 0.0064;
        this.airPlane.propeller.rotation.x += 0.3;
    }

    updateCameraFov = () => {
        this.camera.fov = this.normalize(this.mousePos.x, -1, 1, 40, 80);
        this.camera.updateProjectionMatrix();
    }

    normalize = (v: number, vmin: number, vmax: number, tmin: number, tmax: number) => {
        var nv = Math.max(Math.min(v, vmax), vmin);
        var dv = vmax - vmin;
        var pc = (nv - vmin) / dv;
        var dt = tmax - tmin;
        var tv = tmin + (pc * dt);
        return tv;
    }

    componentDidMount() {
        window.addEventListener('load', this.init, false);
    }

    render() {
        return (
            <div className="background" id="background" ref={r => this.mount = r}></div>
        )
    }
}