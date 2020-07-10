import {SpaceObject} from "./spaceObject";
import {degToRad, lightenDarkenColor, polarToRelative, relativeToPolar} from "../utilities";

export class Planet extends SpaceObject {
    constructor({radius, color, name, distance, orbitalSpeed, initialAngle}) {
        initialAngle = initialAngle ? initialAngle : Math.round(Math.random() * 360);
        const relativeCoords = polarToRelative(distance, initialAngle);

        super({
            radius,
            color,
            name,
            x: relativeCoords.x,
            y: relativeCoords.y
        });

        this.position = {
            orbitalSpeed,  // deg per sec
            initialAngle,
            angle: initialAngle,
        };
    }

    draw(context, progress) {
        let polarCoords = relativeToPolar(this.x, this.y);
        polarCoords.angle = this.position.angle;
        let relativeCoords = polarToRelative(polarCoords.radius, polarCoords.angle);
        this.position.angle = this.position.initialAngle + this.position.orbitalSpeed * (progress / 1000);

        context.save();
        context.beginPath();

        context.lineWidth = 1;
        context.strokeStyle = lightenDarkenColor(this.color, 20);

        context.fillStyle = this.color;

        context.arc(relativeCoords.x, relativeCoords.y, this.radius, 0, degToRad(360));
        context.fill();
        context.stroke();

        context.closePath();
        context.restore();
    }
}