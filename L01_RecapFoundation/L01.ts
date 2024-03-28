/*
Aufgabe: L01_Recap&Foundation
Name: Jonas Bausch
Matrikel: 275861
Datum: 28.03.24
Quellen: Jonas Gissler, Albert Wirz, ChatGPT
*/

namespace Kräutervereinigungen {
    // Die Arrays
    export let Personen: string[] = ["Max", "Zopfl", "Edu", "Corvin", "David", "Luana"];
    export let Verben: string[] = ["baut", "zaubert", "crafted", "rollt", "jabbert", "schmökert"];
    export let Objekte: string[] = ["Bubatz", "den dicksten Jabba", "eine Alzheimertrompete", "die Kräuterrakete", "ne fette Rocket", "ein mordsmäßiges Kräutergemisch" ];
    
    // Funktion für die 'Verse'
    export function getVerse(): string {
        let verse: string = ""; 
        
        // Random Auswahl
        let randomSubjectIndex: number = (Math.random() * Personen.length);
        let randomPredicateIndex: number = (Math.random() * Verben.length);
        let randomObjectIndex: number = (Math.random() * Objekte.length);
        
        // Craften des Verses
        verse += Personen.splice(randomSubjectIndex, 1)[0];
        verse += " " + Verben.splice(randomPredicateIndex, 1)[0];
        verse += " " + Objekte.splice(randomObjectIndex, 1)[0];
        
        return verse;
    }
}

// Schleife
for (let i = Kräutervereinigungen.Personen.length; i >= 1; i--) {
    console.log(i);
    let verse = Kräutervereinigungen.getVerse();
    console.log(verse);
}

