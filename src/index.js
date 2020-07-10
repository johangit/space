import {Space} from "./space/space";
import {Star} from "./space/star";
import {Planet} from "./space/planet";
import {Asteroid} from "./space/asteroid";

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
        radius: 160,
        color: '#bda65f',
        name: 'Sun',
        x: width / 6,
        y: height / 4
    });

    sun.addPlanet(new Planet({
        name: 'Mercury',
        radius: 2,
        orbitalSpeed: 40,
        color: '#867b79',
        distance: 200,
    }));

    sun.addPlanet(new Planet({
        name: 'Venus',
        radius: 9,
        orbitalSpeed: 30,
        color: '#c2a19a',
        distance: 250,
    }));

    sun.addPlanet(new Planet({
        name: 'Earth',
        radius: 10,
        orbitalSpeed: 20,
        color: '#91c4cd',
        distance: 300,
    }));

    sun.addPlanet(new Planet({
        name: 'Mars',
        radius: 5,
        orbitalSpeed: 18,
        color: '#977459',
        distance: 350,
    }));

    sun.addPlanet(new Planet({
        name: 'Jupiter',
        radius: 45,
        orbitalSpeed: 2,
        color: '#736190',
        distance: 450,
    }));

    sun.addPlanet(new Planet({
        name: 'Saturn',
        radius: 40,
        orbitalSpeed: 1.4,
        color: '#908661',
        distance: 650,
    }));

    sun.addPlanet(new Planet({
        name: 'Uranus',
        radius: 25,
        orbitalSpeed: 1,
        color: '#16bba9',
        distance: 850,
    }));

    sun.addPlanet(new Planet({
        name: 'Neptune',
        radius: 26,
        orbitalSpeed: .6,
        color: '#168cbb',
        distance: 1050,
    }));

    space.addStar(sun);

    const helloEarth = new Asteroid({
        radius: 4,
        color: '#909090',
        x: width,
        y: height
    });

    space.addAsteroids(helloEarth);

    space.play();


});
