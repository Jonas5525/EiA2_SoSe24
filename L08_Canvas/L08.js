"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const rectSize = 89; // Größe der Rechtecke
    const spacing = 5; // Abstand zwischen den Rechtecken
    let numColorfulRectangles = 200; // Anzahl der Rechtecke mit farbigem Verlauf
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Funktion zum Zeichnen von zufälligen Rechtecken, die den Canvas füllen
    function drawRandomRectangles() {
        const numRows = Math.floor(canvas.height / (rectSize + spacing));
        const numCols = Math.floor(canvas.width / (rectSize + spacing));
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                const x = j * (rectSize + spacing);
                const y = i * (rectSize + spacing);
                // Überprüfen, ob das Rechteck einen farbigen Verlauf haben soll
                const isColorful = numColorfulRectangles > 0 && randomInt(1, 10) === 1;
                if (isColorful) {
                    // Rechteck mit farbigem Verlauf zeichnen
                    const gradient = context.createLinearGradient(x, y, x + rectSize, y + rectSize);
                    gradient.addColorStop(0, `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`);
                    gradient.addColorStop(1, `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`);
                    context.fillStyle = gradient;
                    context.fillRect(x, y, rectSize, rectSize);
                    numColorfulRectangles--; // Reduzieren der Anzahl der farbigen Rechtecke
                }
                else {
                    // Rechteck mit zufälliger Schwarzfarbe zeichnen
                    context.fillStyle = "black";
                    context.fillRect(x, y, rectSize, rectSize);
                    // Überprüfen, ob eine Linie des Kreuzes gezeichnet werden soll
                    const lineType = randomInt(0, 3);
                    if (lineType === 0) {
                        // Horizontale Linie zeichnen
                        drawHorizontalLine(x, y + rectSize / 2);
                    }
                    else if (lineType === 1) {
                        // Vertikale Linie zeichnen
                        drawVerticalLine(x + rectSize / 2, y);
                    }
                    else if (lineType === 2) {
                        // Diagonale Linie von links oben nach rechts unten zeichnen
                        drawDiagonalLine(x, y, x + rectSize, y + rectSize);
                    }
                    else {
                        // Diagonale Linie von rechts oben nach links unten zeichnen
                        drawDiagonalLine(x + rectSize, y, x, y + rectSize);
                    }
                }
            }
        }
    }
    // Funktion zum Zeichnen einer horizontalen Linie
    function drawHorizontalLine(x, y) {
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + rectSize, y);
        context.stroke();
    }
    // Funktion zum Zeichnen einer vertikalen Linie
    function drawVerticalLine(x, y) {
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x, y + rectSize);
        context.stroke();
    }
    // Funktion zum Zeichnen einer diagonalen Linie
    function drawDiagonalLine(x1, y1, x2, y2) {
        context.strokeStyle = "white";
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }
    // Zufällige Rechtecke zeichnen
    drawRandomRectangles();
});
//# sourceMappingURL=L08.js.map