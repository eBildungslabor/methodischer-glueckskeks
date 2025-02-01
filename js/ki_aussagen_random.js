const kiAussagen = [
    "KI entlastet Lehrkräfte, indem sie Routineaufgaben übernimmt und mehr Zeit für individuelle Förderung schafft.",
    "KI degradiert Lehrkräfte zu bloßen 'Aufsichtsorganen', wenn zu viele Aufgaben automatisiert werden.",
    "KI-gestützte Diagnosen erkennen Lernschwächen frühzeitig und ermöglichen gezielte Förderung.",
    "KI-Analysen reduzieren Lernende auf Muster und Datenpunkte, ohne ihre individuelle Entwicklung wirklich zu erfassen.",
    "KI-gestützte adaptive Lernplattformen ermöglichen maßgeschneiderte Bildungswege für jeden Einzelnen.",
    "KI-Systeme bewerten permanent den Lernfortschritt und setzen Lernende einem ständigen Leistungsdruck aus.",
    "KI erstellt und optimiert Unterrichtsmaterial automatisch, sodass Inhalte individuell angepasst werden können.",
    "KI-generierte Materialien führen zu Standardisierung und Qualitätseinbußen, weil maschinelle Inhalte oft oberflächlich bleiben.",
    "KI demokratisiert Bildung, indem sie hochwertige Lernressourcen global und kostenlos verfügbar macht.",
    "KI verstärkt bestehende Ungleichheiten, da teurere KI-Systeme besseren Zugang zu Bildung ermöglichen als kostenlose Alternativen.",
    "KI fördert eigenständiges Lernen, da Schüler:innen interaktiv und individuell mit Themen arbeiten können.",
    "KI verführt dazu, passiv Wissen zu konsumieren, anstatt aktiv eigene Gedanken zu entwickeln.",
    "KI inspiriert Lehrkräfte zu neuen didaktischen Konzepten und innovativen Lehrmethoden.",
    "KI schwächt die kreative und intuitive Unterrichtsgestaltung, wenn Lehrkräfte sich auf maschinelle Vorschläge verlassen.",
    "KI überwindet Sprachbarrieren und macht internationale Bildungsangebote zugänglich.",
    "KI-Übersetzungen sind oft ungenau und verfälschen Inhalte, wodurch Missverständnisse entstehen.",
    "KI ermöglicht interaktive Simulationen und virtuelle Experimente, die komplexe Zusammenhänge greifbar machen.",
    "KI-gesteuerte Lernprozesse entmündigen Lernende und nehmen ihnen die Möglichkeit, sich selbstständig mit Themen auseinanderzusetzen.",
    "KI bewertet Prüfungen objektiver und transparenter als menschliche Lehrkräfte.",
    "KI-basierte Bewertungen entmenschlichen den Lernprozess, weil sie keine individuellen Umstände berücksichtigen.",
    "KI personalisiert den Unterricht und unterstützt Lehrkräfte dabei, auf einzelne Lernende einzugehen.",
    "KI isoliert Lernende, da personalisierte Lernpfade den sozialen Austausch in der Klasse reduzieren.",
    "KI gibt direktes und konstruktives Feedback, das Lernende gezielt verbessert.",
    "KI-Feedback bleibt unpersönlich und ersetzt nicht die empathische Rückmeldung einer Lehrkraft.",
    "KI eröffnet neue Bildungswege, die bisher undenkbar waren, und erweitert die Lernmöglichkeiten.",
    "KI schafft eine gefährliche Abhängigkeit, da Bildungssysteme bei Systemausfällen oder Missbrauch destabilisiert werden.",
    "KI-gestützte Chatbots begleiten Lernende rund um die Uhr und beantworten Fragen ohne Wartezeit.",
    "KI ersetzt echte zwischenmenschliche Interaktion, sodass der direkte Austausch mit Lehrkräften und Mitschüler:innen leidet.",
    "KI ergänzt den Unterricht sinnvoll und unterstützt Lehrkräfte in ihrer Arbeit.",
    "KI steuert zunehmend Bildungsinhalte und entzieht der Gesellschaft die Kontrolle über das vermittelte Wissen.",
    "KI reduziert bürokratische Aufgaben und gibt Lehrkräften mehr Zeit für pädagogische Arbeit.",
    "KI sorgt dafür, dass Lehrkräfte sich mit komplizierten Technologien statt mit Schüler:innen beschäftigen müssen.",
    "KI hilft, unbewusste Vorurteile in der Bildung zu erkennen und zu reduzieren.",
    "KI übernimmt oft bestehende gesellschaftliche Vorurteile und verstärkt Diskriminierung.",
    "KI erleichtert die Bewertung von Hausarbeiten und Tests, indem sie objektive Kriterien anwendet.",
    "KI-basierte Bewertungssysteme können kreativere oder alternative Lösungsansätze nicht angemessen würdigen.",
    "KI kann in Echtzeit Übersetzungen liefern, sodass Sprachgrenzen im Bildungsbereich verschwimmen.",
    "KI-Übersetzungen enthalten oft Ungenauigkeiten, die das Verständnis von Fachinhalten verfälschen.",
    "KI ermöglicht personalisierte Lernpfade, die den individuellen Fortschritt optimal unterstützen.",
    "KI verstärkt die Trennung in starke und schwache Lernende, anstatt gemeinsames Lernen zu fördern.",
    "KI kann Lernmotivation steigern, indem sie spielerische und interaktive Elemente einbindet.",
    "KI-basierte Lernmethoden belohnen schnelle Antworten und benachteiligen tiefgehendes, langsames Denken.",
    "KI kann Schüler:innen gezielt fördern, indem sie Lernlücken erkennt und individuelle Übungen anbietet.",
    "KI verstärkt eine Prüfungsmentalität, bei der nur noch Defizite und nicht die Stärken der Lernenden im Fokus stehen.",
    "KI macht lebenslanges Lernen einfacher, weil sie jederzeit neue Inhalte vermitteln kann.",
    "KI kann Lerninhalte so gestalten, dass sie sich stärker an kurzfristigen Trends als an nachhaltigem Wissen orientieren.",
    "KI macht es einfacher, Bildung für eine große Anzahl von Menschen weltweit zugänglich zu machen.",
    "KI ersetzt nicht den Wert von persönlichem Austausch zwischen Lernenden und Lehrenden.",
    "KI kann als Tutor dienen und Lernenden sofort Antworten auf ihre Fragen geben.",
    "KI nimmt Schüler:innen die Herausforderung, sich selbst Wissen zu erarbeiten und durch eigenes Nachdenken Lösungen zu finden.",
    "KI eröffnet neue Möglichkeiten für individuelles Lernen außerhalb des klassischen Schulmodells.",
    "KI führt dazu, dass traditionelle Bildungsstrukturen in Frage gestellt werden, bevor Alternativen ausgereift sind.",
    "KI reduziert Stress, indem sie Lernenden hilft, sich besser zu organisieren und ihren Fortschritt zu verfolgen.",
    "KI kann dazu führen, dass Lernende sich mehr auf digitale Tools verlassen als auf ihre eigene Fähigkeit, Informationen zu strukturieren."
];

function zeigeZufallsAussage() {
    const randomIndex = Math.floor(Math.random() * kiAussagen.length);
    document.getElementById("article").innerText = kiAussagen[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    zeigeZufallsAussage();
    document.querySelector("input[type=button]").addEventListener("click", zeigeZufallsAussage);
});
