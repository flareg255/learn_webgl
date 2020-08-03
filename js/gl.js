import {initBuffers, drawScene} from './inits.js'
import { vsSource, fsSource } from './shader_src.js';
import { initShaderProgram } from './load_shader.js';


// const main = () => {
//     const canvas = document.querySelector("#glCanvas");
//     const gl = canvas.getContext("webgl");


//     let viewWidth = canvas.style.width = window.innerWidth;
//     let viewHeight = canvas.style.height = window.innerHeight;

//     if (gl === null) {
//         alert("WebGL を初期化できません。ブラウザーまたはマシンがサポートしていない可能性があります。");
//         return;
//     }

//     gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
//     gl.clearColor(0.0, 0.0, 0.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);

//     window.onresize = () => { resizeEvent(viewWidth, viewHeight, canvas, gl); };
// }

const main = () => {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        },
    };

    const buffer = initBuffers(gl);
    drawScene(gl, programInfo, buffer);
}

const resizeEvent = (width, height, canvas, gl) => {
    width = canvas.style.width = window.innerWidth;
    height = canvas.style.width = window.innerHeight;

    const red = randCreate(0, 1.0, 10);
    const green = randCreate(0, 1.0, 10);
    const blue = randCreate(0, 1.0, 10);
    const alpha = randCreate(0, 1.0, 10);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(red, green, blue, alpha);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

const randCreate = (min, max , digits) => {
    return Math.floor(Math.random()*( max - min + 1 ) * digits + min) / digits;
}




window.onload = main;