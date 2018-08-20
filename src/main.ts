class Renderer {
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;

    constructor() {
        this.canvas = document.querySelector('canvas') as HTMLCanvasElement;
        this.gl = this.canvas.getContext('webgl') as WebGLRenderingContext;
    }
}
