const kiAussagen = [
    "Könntet ihr das Barcamp-Prinzip nutzen (Lernende schlagen eigene Themen/Fragen vor)?",
    "Könntet ihr eine Zufallsauswahl ergänzen (z. B. mit einem Würfel oder dem Ziehen einer Karte)?",
    "Könntet ihr Lernende gemeinsam etwas erarbeiten lassen?",
    "Könntet ihr den Raum verändern bzw. wechseln?",
    "Könntet ihr Bewegung integrieren?",
    "Könntet ihr Anonymität ermöglichen, um mehr Beteiligung zu erreichen?",
    "Könntet ihr unterschiedliche Sinne ansprechen, z. B. etwas Auditives oder Visuelles?",
    "Könntet ihr Haptik nutzen – z. B. mit Lego, Knete oder Bastelmaterialien?",
    "Könntet ihr Interaktion erhöhen, indem in kleineren Gruppen miteinander gesprochen wird?",
    "Könntet ihr eine Spielerei oder etwas Ähnliches einbauen, was das Lernen freudvoller macht?",
    "Könntet ihr andere Perspektiven oder externe Expert*innen einbinden?",
    "Könntet ihr Gegenstände nutzen (einen Ball, Hüte, ein Seil, Süßigkeiten ...)?",
    "Könntet ihr Zeit zum eigenen Nachdenken und zur Selbstreflexion der Lernenden stärker berücksichtigen?",
    "Könntet ihr etwas (gemeinsam) visualisieren?",
    "Könntet ihr digitale Angebote nutzen?",
    "Könntet ihr das Lernen zeitlich ausweiten – also z. B. vorab und/oder nachträglich weitere (Online-)Angebote anbieten?",
    "Könntet ihr mit einem Perspektivwechsel arbeiten – z. B. aus Sicht einer historischen Figur oder fiktiven Person denken lassen?",
    "Könntet ihr ein „Lernen durch Lehren“-Element integrieren, bei dem Lernende Inhalte selbst erklären oder präsentieren?",
    "Könntet ihr eine kreative Methode wie ein Lerncomic oder Erklärvideo einsetzen?",
    "Könntet ihr eine Zukunftswerkstatt durchführen und gemeinsam Utopien oder Visionen entwickeln?",
    "Könntet ihr mit analogem oder digitalem Storytelling arbeiten?",
    "Könntet ihr eine kurze Achtsamkeitspause oder ein Ritual zum Einstieg/Nachdenken einbauen?",
    "Könntet ihr ein „Lernprodukt“ entstehen lassen – etwas, das Lernende selbst gestalten und veröffentlichen können?",
    "Könntet ihr mit Provokationen oder kontroversen Thesen zum Denken anregen?",
    "Könntet ihr mit Ton oder Musik experimentieren – z. B. als Ausdrucksform oder Reflexion?",
    "Könntet ihr mit einer Challenge oder Mission arbeiten, die über mehrere Tage/Wochen läuft?",
    "Könntet ihr Feedback-Formate kreativ gestalten – z. B. mit Postkarten, Emojis oder Peer-Reviews?",
    "Könntet ihr einen „Lernspaziergang“ machen, bei dem unterwegs Aufgaben oder Impulse warten?",
    "Könntet ihr Rollenspiele oder Simulationen nutzen, um Erfahrungen erlebbar zu machen?",
    "Könntet ihr Raum für Scheitern und Experimente bewusst zulassen und thematisieren?"
];

function zeigeZufallsAussage() {
    const randomIndex = Math.floor(Math.random() * kiAussagen.length);
    document.getElementById("article").innerText = kiAussagen[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    zeigeZufallsAussage();
    document.querySelector("input[type=button]").addEventListener("click", zeigeZufallsAussage);
});
