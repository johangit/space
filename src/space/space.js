import {degToRad, animate} from '../utilities';

export class Space {
    constructor({canvas, width, height, dpr, showFps}) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        this.canvas = canvas;
        this.canvasWidth = width;
        this.canvasHeight = height;

        this.showFps = !!showFps;
        this.fps = {
            value: 0,
            lastCalledTime: 0,
            lastShowedTime: 0,
            updatingTime: .4
        };

        this.context = canvas.getContext('2d');
        this.context.scale(dpr, dpr);

        this.context.resetTranslate = (x, y) => {
            this.context.resetTransform();
            this.context.scale(dpr, dpr);
            this.context.translate(x, y);
        }

        this.clear();

        this.stars = [];
        this.status = 'stop';
    }

    clear() {
        this.context.resetTranslate(0, 0);
        this.context.fillStyle = "#636363";
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    addStar(star) {
        this.stars.push(star);
    }

    drawFPS() {
        if (!this.fps.lastCalledTime) {
            this.fps.lastCalledTime = performance.now();
            this.fps.lastShowedTime = performance.now();
            this.fps.value = 0;
            return;
        }

        const delta = (performance.now() - this.fps.lastCalledTime) / 1000;
        this.fps.lastCalledTime = performance.now();

        if ((performance.now() - this.fps.lastShowedTime) / 1000 > this.fps.updatingTime) {
            this.fps.lastShowedTime = performance.now();
            this.fps.value = 1 / delta;
        }


        this.context.resetTranslate(0, 0);
        this.context.fillStyle = '#ccc';
        this.context.fillRect(10, 10, 120, 30);
        this.context.fillStyle = '#777';
        this.context.font = 'bold 20px monospace';
        this.context.fillText(`FPS: ${Math.round(this.fps.value)}`, 20, 30);
    }

    play() {
        this.status = 'play';
        let progress = 1;

        const animate = () => {
            this.clear();

            this.stars.forEach(star => {
                star.draw(this.context, progress);
                progress++;
            });

            if (this.showFps) {
                this.drawFPS();
            }

            if (this.status === 'play') {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
}