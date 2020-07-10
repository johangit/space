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
        this.startedAt = performance.now();

        this.context = canvas.getContext('2d');
        this.context.scale(dpr, dpr);

        this.context.resetTranslate = (x, y) => {
            this.context.resetTransform();
            this.context.scale(dpr, dpr);
            this.context.translate(x, y);
        }

        this.context.roundedRect = function (x, y, width, height, radius) {
            if (width < 2 * radius) radius = width / 2;
            if (height < 2 * radius) radius = height / 2;
            this.beginPath();
            this.moveTo(x + radius, y);
            this.arcTo(x + width, y, x + width, y + height, radius);
            this.arcTo(x + width, y + height, x, y + height, radius);
            this.arcTo(x, y + height, x, y, radius);
            this.arcTo(x, y, x + width, y, radius);
            this.closePath();
        }

        this.clear();

        this.asteroids = [];
        this.stars = [];
        this.status = 'stop';
    }

    clear() {
        this.context.resetTranslate(0, 0);
        this.context.fillStyle = "#535353";
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    addStar(star) {
        this.stars.push(star);
    }

    addAsteroids(asteroid) {
        this.asteroids.push(asteroid);
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
        this.context.fillStyle = '#2F2F2F';
        this.context.roundedRect(10, 10, 120, 30, 2);
        this.context.fill();

        this.context.fillStyle = '#fff';
        this.context.font = '15px monospace';
        this.context.fillText(`FPS: ${Math.round(this.fps.value)}`, 20, 30);
    }

    play() {
        this.status = 'play';

        const animate = () => {
            let progress = Math.round(performance.now() - this.startedAt);

            this.clear();

            this.stars.forEach(star => {
                star.draw(this.context, progress);
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