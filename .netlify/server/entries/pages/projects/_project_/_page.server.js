const projects = [
  {
    url: "HofcafeWolfpassing",
    name: "Hofcafe Wolfpassing",
    startText: "Die Kundin, Inhaberin des Hofcafés Wolfpassing, benötigte eine moderne Online-Präsenz, um ihr Café und ihre Dienstleistungen besser zu präsentieren. Zusätzlich wünschte sie sich ein neues Logo, das die Identität ihres Unternehmens widerspiegelt.",
    problemText: "Nach ausführlichen Gesprächen mit der Kundin über ihre Vorstellungen und Anforderungen begann ich mit dem Designprozess. Nach Erstellung des Logos setzte ich die Gestaltung der Website in Angriff. Die Website wurde so entworfen, dass sie nicht nur ästhetisch ansprechend ist, sondern auch benutzerfreundlich und leicht navigierbar. Dabei legte ich besonderen Wert darauf, das Logo nahtlos in das Gesamtdesign der Website zu integrieren, um eine konsistente Markenidentität zu gewährleisten.",
    solvingText: "Um die Website effizient zu verwalten, entwickelte ich ein maßgeschneidertes Content Management System (CMS). Dies ermöglicht der Kundin, Inhalte auf ihrer Website selbstständig zu aktualisieren und zu pflegen, ohne auf technische Unterstützung angewiesen zu sein. Die Codierung der Website erfolgte unter Berücksichtigung moderner Webstandards und responsiven Designs. Dadurch ist die Website sowohl auf Desktop- als auch auf mobilen Geräten optimal zugänglich",
    resultText: "Die Website für das Hofcafé Wolfpassing ist nun online und spiegelt die einladende Atmosphäre des Cafés wieder. Durch das implementierte CMS kann die Kundin ihre Inhalte selbstständig aktualisieren, was zu einer effektiven Pflege der Online-Präsenz führt. Die erfolgreiche Umsetzung dieses Projekts hat nicht nur die digitale Präsenz des Hofcafés verbessert, sondern auch dazu beigetragen, die Markenidentität zu stärken und die Interaktion mit den Kunden zu fördern.",
    img: "/projects/Hofcafe_Collage.jpg",
    link: "https://schlosswolfpassing.at/",
    tags: [
      "Homepage",
      "Logo",
      "CMS",
      "Hosting"
    ]
  },
  {
    url: "Portfolio",
    name: "Portfolio Website",
    startText: "Meine Portfolio-Seite existierte bereits, doch im vergangenen Jahr habe ich viel dazu gelernt und eine neue erstellt. Sie dient dazu, meine Fähigkeiten und meine Preisstruktur zu präsentieren.",
    problemText: "Nach umfassenden Überlegungen über meine Ziele und Anforderungen begann ich mit dem Überarbeitsprozess meiner Portfolio-Website. Dabei lag der Fokus nicht nur auf einem modernen und ansprechenden Design, sondern auch auf einer verbesserten Benutzerfreundlichkeit und klaren Navigation. Ich wollte sicherstellen, dass die Website meine Fähigkeiten und meine Persönlichkeit als Kreativschaffender authentisch widerspiegelt.",
    solvingText: "Die Neugestaltung meiner Portfolio-Website beinhaltete nicht nur die Erstellung eines neuen visuellen Konzepts, sondern auch die Implementierung effizienter Tools. Ich integrierte neue Technologien, um die Ladegeschwindigkeit zu optimieren und sicherzustellen, dass Besucher eine reibungslose und ansprechende Erfahrung haben. Zusätzlich habe ich Wert darauf gelegt, dass meine Portfolio-Seite gut auf verschiedenen Geräten funktioniert, indem ich responsive Design-Prinzipien umgesetzt habe.",
    resultText: "Meine überarbeitete Portfolio-Website ist nun online und vermittelt nicht nur meine Fähigkeiten und Projekte, sondern auch meine kreative Persönlichkeit. Besucher können leicht durch meine Arbeiten navigieren und erfahren, welche Dienstleistungen ich anbiete. Diese Aktualisierung meiner digitalen Präsenz reflektiert nicht nur meinen Fortschritt als Kreativschaffender, sondern dient auch als effektives Instrument, um potenzielle Kunden anzusprechen und zu überzeugen.",
    img: "/projects/Portfolio_Collage.jpg",
    link: "https://hannes-scheibelauer.at",
    tags: [
      "Portfolio",
      "Webdesign",
      "Responsive Design",
      "User Experience"
    ]
  },
  {
    url: "EcoGift",
    name: "EcoGift",
    startText: "Am A1 Hackathon bekamen wir die Aufgabe, eine innovative Lösung zur Beseitigung von billigen Werbegeschenken wie z.B. Kugelschreibern zu finden. Eine digitale Lösung musste her, und dafür war ich und mein Team perfekt geeignet.",
    problemText: "Um dieses Problem anzugehen, haben wir das Konzept von EcoGift entwickelt. Statt traditioneller physischer Werbegeschenke entschieden wir uns für ein unterhaltsames Spiel, das Nutzer einbindet und zugleich einen Beitrag zur Nachhaltigkeit leistet. Die technische Umsetzung beinhaltete die Entwicklung einer benutzerfreundlichen App, die es den Nutzern ermöglicht, Punkte zu sammeln und sie dann an eine Non-Profit-Organisation ihrer Wahl zu spenden.",
    solvingText: "Die Umsetzung erfolgte mit Figma, wobei wir uns für einen modernen Look in den A1-Farben entschieden haben. Zusätzlich haben wir das Spiel programmiert und einen A1-Charakter erstellt, um das Projekt noch stärker mit der Marke zu verbinden.",
    resultText: "Das Ergebnis war ein innovatives Projekt, das nicht nur die Nachhaltigkeitsbemühungen von A1 unterstützt, sondern auch eine positive Bindung zwischen der Marke und den Nutzern fördert. EcoGift bietet nicht nur einen Mehrwert für die Umwelt, sondern auch für die Nutzer, die durch ihre Teilnahme an dem Spiel einen Rabatt auf A1-Tarife erhalten.",
    img: "/projects/EcoGift.png",
    link: "https://github.com/Ecogift",
    tags: [
      "Sustainability",
      "Innovation",
      "Figma",
      "UI/UX"
    ]
  }
];
function load({ params }) {
  return projects.filter((e) => e.url == params.project)[0];
}
export {
  load
};
