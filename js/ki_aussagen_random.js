const kiAussagen = [
    "Könntet ihr das Barcamp-Prinzip nutzen (Lernende schlagen eigene Themen/Fragen vor)?",
    "Könntet ihr eine Zufallsauswahl ergänzen (z. B. mit einem Würfel oder dem Ziehen einer Karte)?",
    "Könntet ihr Lernende gemeinsam etwas erarbeiten lassen?",
    "Könntet ihr den Online-Raum verändern bzw. wechseln?",
    "Könntet ihr Bewegung integrieren?",
    "Könntet ihr Anonymität ermöglichen, um mehr Beteiligung zu erreichen?",
    "Könntet ihr unterschiedliche Sinne ansprechen, z. B. etwas Auditives oder Visuelles?",
    "Könntet ihr Haptik nutzen – z. B. mit Lego, Knete oder Bastelmaterialien?",
    "Könntet ihr Interaktion erhöhen, indem in kleineren Gruppen miteinander gesprochen wird?",
    "Könntet ihr eine Spielerei oder etwas Ähnliches einbauen, was das Lernen freudvoller macht?",
    "Könntet ihr andere Perspektiven oder externe Expert*innen einbinden?",
    "Könntet ihr nicht direkt erklären, sondern erst auf Fragen warten?",
    "Könntet ihr begleitende Materialien zu einer Gruppenarbeit anbieten - z.B. einen Lernpfad, der gemeinsam genutzt werden kann?",
    "Könntet ihr Gegenstände nutzen (einen Ball, Hüte, ein Seil, Süßigkeiten ...)?",
    "Könntet ihr Zeit zum eigenen Nachdenken und zur Selbstreflexion der Lernenden stärker berücksichtigen?",
    "Könntet ihr etwas (gemeinsam) visualisieren?",
    "Könntet ihr das Lernen zeitlich ausweiten – also z. B. vorab und/oder nachträglich weitere (Online-)Angebote anbieten?",
    "Könntet ihr mit einem Perspektivwechsel arbeiten – z. B. aus Sicht einer historischen Figur oder fiktiven Person denken lassen?",
    "Könntet ihr ein „Lernen durch Lehren“-Element integrieren, bei dem Lernende Inhalte selbst erklären oder präsentieren?",
    "Könntet ihr mit Storytelling arbeiten?",
       "Könntet ihr Lernende sich gegenseitig helfen lassen?",
       "Könntet ihr Materialien zum Selbstlernen anbieten?",
       "Könntet ihr auf mehr Pausen achten?",
    "Könntet ihr eine kurze Achtsamkeitspause oder ein Ritual zum Einstieg/Nachdenken einbauen?",
    "Könntet ihr ein „Lernprodukt“ entstehen lassen – etwas, das Lernende selbst gestalten und veröffentlichen können?",
    "Könntet ihr mit Provokationen oder kontroversen Thesen zum Denken anregen?",
    "Könntet ihr einen „Lernspaziergang“ machen, bei dem unterwegs miteinander gesprochen oder auch allein überlegt wird?",
    "Könntet ihr Rollenspiele oder Simulationen nutzen, um Erfahrungen erlebbar zu machen?",
];

function zeigeZufallsAussage() {
    const randomIndex = Math.floor(Math.random() * kiAussagen.length);
    document.getElementById("article").innerText = kiAussagen[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    zeigeZufallsAussage();
    document.querySelector("input[type=button]").addEventListener("click", zeigeZufallsAussage);
});
