import {SpaceObject} from "./spaceObject";
import {degToRad, lightenDarkenColor, polarToRelative, relativeToPolar} from "../utilities";

export class Planet extends SpaceObject {
    constructor({radius, color, name, distance, orbitalSpeed}) {
        const relativeCoords = polarToRelative(distance, 0);

        super({
            radius,
            color,
            name,
            x: relativeCoords.x,
            y: relativeCoords.y
        });

        this.position = {
            orbitalSpeed,
            angle: 0,
        };
    }

    draw(context, progress) {
        let polarCoords = relativeToPolar(this.x, this.y);
        polarCoords.angle = this.position.angle;
        let relativeCoords = polarToRelative(polarCoords.radius, polarCoords.angle);
        this.position.angle += this.position.orbitalSpeed / 100;


        context.beginPath();

        context.arc(relativeCoords.x, relativeCoords.y, this.radius, 0, degToRad(360));

        context.lineWidth = 2;
        context.strokeStyle = lightenDarkenColor(this.color, 20);
        context.stroke();

        context.fillStyle = this.color;
        context.fill();

        context.closePath();

    }
}