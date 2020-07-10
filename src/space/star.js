import {SpaceObject} from "./spaceObject";
import {degToRad, lightenDarkenColor, polarToRelative, relativeToPolar} from "../utilities";

export class Star extends SpaceObject {
    constructor({radius, color, name, x, y}) {
        super({radius, color, name, x, y});

        this.planets = [];
    }

    draw(context, progress) {
        context.resetTranslate(this.x, this.y);

        context.beginPath();

        context.lineWidth = 4;
        context.strokeStyle = lightenDarkenColor(this.color, 20);
        context.fillStyle = this.color;

        context.arc(0, 0, this.radius, 0, degToRad(360));
        context.stroke();
        context.fill();

        context.closePath();

        this.planets.forEach(planet => {
            planet.draw(context, progress);
        });
    }

    addPlanet(planet) {
        this.planets.push(planet);
    }
}