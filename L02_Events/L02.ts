/*
Aufgabe: L02_Events
Name: Jonas Bausch
Matrikel: 275861
Datum: 15.03.24
Quellen: Jonas Gissler & ChatGPT
*/

document.addEventListener('DOMContentLoaded', () => {
    // Span für Cursor
    let mousePositionElement = document.createElement('span');
    mousePositionElement.classList.add('span');
    document.body.appendChild(mousePositionElement);

    // Eventlistener Mausbewegung
    document.addEventListener('mousemove', (event: MouseEvent) => {
        // Position des Span-Elements entsprechend der Cursorposition aktualisieren
        mousePositionElement.style.left = `${event.clientX + 10}px`; 
        mousePositionElement.style.top = `${event.clientY + 10}px`; 

        // X- und Y-Koordinaten sowie das aktuelle Element 
        mousePositionElement.innerHTML = `X: ${event.clientX}, Y: ${event.clientY}, Element: ${(event.target as HTMLElement).tagName}`;
    });

    // Eventlistener für Klickereignis
    document.addEventListener('click', logEventDetails);

    // Eventlistener für Tastendruckereignis
    document.addEventListener('keyup', logEventDetails);

    // Eventlistener für Klickereignis auf den Button
    let customButton = document.getElementById('customButton');
    if (customButton) {
        customButton.addEventListener('click', (event: MouseEvent) => {
            let customEvent = new CustomEvent('customEvent', {
                bubbles: true, // Erlaubt das Hochsteigen des Events im DOM-Baum
                detail: { message: 'Custom event triggered!' } // Zusätzliche Informationen können hier übergeben werden
            });
            document.dispatchEvent(customEvent); // Custom-Event auslösen
        });
    }
});

// Protokollierung der Ereignisdetails
function logEventDetails(event: Event) {
    // Extrahiere Ereignisdetails
    let eventType = event.type;
    let target = (event.target as HTMLElement).tagName;
    let currentTarget = (event.currentTarget as HTMLElement).tagName;

    // Array für alle Eltern-Elemente (bis zum document)
    let parentElements: HTMLElement[] = [];
    let currentElement = event.target as HTMLElement | null;
    while (currentElement) {
        parentElements.push(currentElement);
        if (currentElement.tagName.toLowerCase() === 'html') break; 
        currentElement = currentElement.parentElement;
    }

    // Logge die Ereignisdetails in der Konsole
    console.log(`Event Type: ${eventType}`);
    console.log(`Target: ${target}`);
    console.log(`Current Target: ${currentTarget}`);
    console.log("currenttarget:");
    for (let i = parentElements.length - 1; i >= 0; i--) {
        console.log(parentElements[i].tagName);
    }
    console.log("Event:", event);
}
