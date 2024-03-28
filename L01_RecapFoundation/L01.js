"use strict";
/*
Aufgabe: L01_Recap&Foundation
Name: Jonas Bausch
Matrikel: 275861
Datum: 28.03.24
Quellen: Jonas Gissler, Albert Wirz, ChatGPT
*/
var Kräutervereinigungen;
(function (Kräutervereinigungen) {
    // Die Arrays
    Kräutervereinigungen.Personen = ["Max", "Zopfl", "Edu", "Corvin", "David", "Luana"];
    Kräutervereinigungen.Verben = ["baut", "zaubert", "crafted", "rollt", "jabbert", "schmökert"];
    Kräutervereinigungen.Objekte = ["Bubatz", "den dicksten Jabba", "eine Alzheimertrompete", "die Kräuterrakete", "ne fette Rocket", "ein mordsmäßiges Kräutergemisch"];
    // Funktion für die 'Verse'
    function getVerse() {
        let verse = "";
        // Random Auswahl
        let randomSubjectIndex = (Math.random() * Kräutervereinigungen.Personen.length);
        let randomPredicateIndex = (Math.random() * Kräutervereinigungen.Verben.length);
        let randomObjectIndex = (Math.random() * Kräutervereinigungen.Objekte.length);
        // Craften des Verses
        verse += Kräutervereinigungen.Personen.splice(randomSubjectIndex, 1)[0];
        verse += " " + Kräutervereinigungen.Verben.splice(randomPredicateIndex, 1)[0];
        verse += " " + Kräutervereinigungen.Objekte.splice(randomObjectIndex, 1)[0];
        return verse;
    }
    Kräutervereinigungen.getVerse = getVerse;
})(Kräutervereinigungen || (Kräutervereinigungen = {}));
// Schleife
for (let i = Kräutervereinigungen.Personen.length; i >= 1; i--) {
    console.log(i);
    let verse = Kräutervereinigungen.getVerse();
    console.log(verse);
}
//# sourceMappingURL=L01.js.map