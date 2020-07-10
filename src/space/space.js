import {degToRad, animate} from '../utilities';

export class Space {
    constructor({canvas, width, height, dpr}) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        this.canvas = canvas;
        this.canvasWidth = width;
        this.canvasHeight = height;

        this.context = canvas.getContext('2d');
        this.context.scale(dpr, dpr);

        // console.log(this.context);
        // console.log(this.context.hasOwnProperty('setTranslate'));

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

    play() {
        this.status = 'play';

        // this.stars.forEach(star => {
        //     star.draw(this.context)
        // });

        let progress = 1;

        const animate = () => {
            this.clear();

            this.stars.forEach(star => {
                star.draw(this.context, progress);
                progress++;
            });

            if (this.status === 'play') {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
}