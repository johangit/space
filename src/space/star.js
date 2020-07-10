import {SpaceObject} from "./spaceObject";
import {degToRad, lightenDarkenColor, polarToRelative, relativeToPolar} from "../utilities";

export class Star extends SpaceObject {
    constructor({radius, color, name, x, y}) {
        super({radius, color, name, x, y});

        this.planets = [];
    }

    draw(context, progress) {
        context.resetTranslate(this.x, this.y);

        context.save();
        context.beginPath();

        context.shadowColor = lightenDarkenColor(this.color, 10);
        context.shadowBlur = 25;

        context.lineWidth = 4;
        context.strokeStyle = lightenDarkenColor(this.color, 20);
        context.fillStyle = this.color;

        context.arc(0, 0, this.radius, 0, degToRad(360));
        context.stroke();
        context.fill();

        context.closePath();
        context.restore();

        this.planets.forEach(planet => {
            planet.draw(context, progress);
        });
    }

    addPlanet(planet) {
        this.planets.push(planet);
    }
}