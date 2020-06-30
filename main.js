const draw = () => {
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const inRad = num => {
        return num * Math.PI / 180;
    }

    const resetTranslate = () => {
        context.resetTransform();
        context.scale(2, 2)
    }

    let canvas = document.getElementById("box");
    let context = canvas.getContext("2d");

    const canvasWidth = canvas.parentNode.offsetWidth * 2 - 20;
    const canvasHeight = canvas.parentNode.offsetHeight * 2 - 20;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = canvasWidth / 2 + "px";
    canvas.style.height = canvasHeight / 2 + "px";

    context.scale(2, 2)


    const drawGrid = () => {
        const step = 100;

        context.beginPath();
        context.font = '10px Arial';
        context.fillStyle = 'rgb(135,144,108)';
        context.strokeStyle = 'rgba(191,255,0,0.005)';
        context.lineWidth = 1;

        for (let xPosition = 0; xPosition < canvasHeight; xPosition += step) {
            context.fillText(xPosition, xPosition + 4, 10);
            context.moveTo(xPosition, 0);
            context.lineTo(xPosition, canvasHeight);
            context.stroke();
        }

        for (let yPosition = 0; yPosition < canvasWidth; yPosition += step) {
            context.fillText(yPosition, 0, yPosition - 4);
            context.moveTo(0, yPosition);
            context.lineTo(canvasWidth, yPosition);
            context.stroke();
        }

        context.closePath();
    };
    // drawGrid();


    context.strokeStyle = 'rgb(127,123,115)'
    context.lineWidth = 5;

    context.translate(400, 300);
    context.beginPath()
    context.arc(0, 0, 200, 0, inRad(360));
    context.stroke();


    const industryText = 'INDUSTRY';
    context.font = '20px Arial';
    context.fillStyle = 'rgb(201,169,169)';
    const textPos = context.measureText(industryText);

    context.rotate(inRad(32));
    context.fillText(industryText, -1 * textPos.width / 2, -210);


    const marketText = 'MARKET';
    context.font = '20px Arial';
    context.fillStyle = 'rgb(162,189,154)';
    const marketTextPos = context.measureText(marketText);

    context.rotate(inRad(60));
    context.fillText(marketText, -1 * marketTextPos.width / 2, -210);


    resetTranslate();
    context.translate(400, 300);
    context.rotate(inRad(-90));
    context.lineWidth = 20;
    context.strokeStyle = 'rgba(165,36,36,0.4)';

    for (let i = 1, radius = 32; i < 5; i++) {
        context.beginPath();
        context.arc(0, 0, radius, 0, inRad(30));
        context.stroke();
        context.closePath();
        radius += 22;
    }

    resetTranslate();
    context.translate(400, 300);
    context.rotate(inRad(-60));

    for (let i = 1, radius = 32; i < 9; i++) {
        context.beginPath();
        context.arc(0, 0, radius, 0, inRad(30));
        context.stroke();
        context.closePath();
        radius += 22;
    }

    context.strokeStyle = 'rgba(96,165,36,0.4)';
    resetTranslate();
    context.translate(400, 300);
    context.rotate(inRad(-30));

    for (let i = 1, radius = 32; i < 6; i++) {
        context.beginPath();
        context.arc(0, 0, radius, 0, inRad(30));
        context.stroke();
        context.closePath();
        radius += 22;
    }

    resetTranslate();
    context.translate(400, 300);
    // context.rotate(inRad(0));

    for (let i = 1, radius = 32; i < 4; i++) {
        context.beginPath();
        context.arc(0, 0, radius, 0, inRad(30));
        context.stroke();
        context.closePath();
        radius += 22;
    }


    resetTranslate();
    context.translate(400, 300);


    context.lineWidth = 2;
    context.strokeStyle = 'rgb(127,123,115)';

    for (let i = 0; i < 12; i++) {
        context.beginPath();
        context.rotate(inRad(30));
        context.moveTo(0, 0);
        context.lineTo(200, 0);
        context.stroke();
        context.closePath();
    }

    for (let i = 0, radius = 43; i < 8; i++) {
        context.beginPath();
        context.arc(0, 0, radius, 0, inRad(360));
        context.stroke();
        context.closePath();
        radius += 22;
    }


    resetTranslate();
    context.translate(400, 300);

    context.beginPath();
    context.arc(0, 0, 42, 0, inRad(360));
    context.fillStyle = 'rgb(127,123,115)';
    context.fill();


    resetTranslate();
    context.translate(400, 300 + 8);

    const capitalText = 'SOCIAL CAPITAL';
    context.font = '16px Arial';
    context.fillStyle = 'rgb(199,199,199)';
    const capitalTextPos = context.measureText(capitalText);

    context.rotate(inRad(-46));
    context.fillText(capitalText, 60, 0);

};
