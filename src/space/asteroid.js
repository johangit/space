import {SpaceObject} from "./spaceObject";
import {degToRad, lightenDarkenColor} from "../utilities";

export class Asteroid extends SpaceObject {
    constructor({radius, color, name, x, y}) {
        super({
            radius,
            color,
            name,
            x,
            y
        });
    }

    draw(context, progress) {
        context.save();
        context.beginPath();

        context.lineWidth = 1;
        context.strokeStyle = lightenDarkenColor(this.color, -20);

        context.fillStyle = this.color;

        context.arc(this.x, this.y, this.radius, 0, degToRad(360));
        context.fill();
        context.stroke();

        context.closePath();
        context.restore();
    }
}