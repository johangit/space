import {Space} from "./space/space";
import {Star} from "./space/star";
import {Planet} from "./space/planet";

require('./styles.scss');


document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    const rootNode = document.getElementById('has-background');
    const firstNode = rootNode.children[0];
    rootNode.insertBefore(canvas, firstNode);
    canvas.style.position = 'absolute';

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;


    const space = new Space({
        canvas,
        width,
        height,
        dpr,
        showFps: true
    });

    const sun = new Star({
        radius: 40,
        color: '#bda65f',
        name: 'Sun',
        x: width / 2,
        y: height / 4
    });


    sun.addPlanet(new Planet({
        name: 'Mercury',
        radius: 4,
        orbitalSpeed: 100,
        color: '#a86457',
        distance: 80,
    }));

    sun.addPlanet(new Planet({
        name: 'Earth',
        radius: 10,
        orbitalSpeed: 30,
        color: '#91c4cd',
        distance: 130,
    }));

    sun.addPlanet(new Planet({
        name: 'Mars',
        radius: 9,
        orbitalSpeed: 10,
        color: '#977459',
        distance: 200,
    }));

    sun.addPlanet(new Planet({
        name: 'Uranus',
        radius: 15,
        orbitalSpeed: 1,
        color: '#16bba9',
        distance: 400,
    }));

    space.addStar(sun);

    space.play();


});
