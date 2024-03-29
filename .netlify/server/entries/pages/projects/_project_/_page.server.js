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
    url: "FotoRoschmann",
    name: "Foto Roschmann",
    startText: "Die Kundin, Inhaberin des Hofcafés Wolfpassing, benötigte eine moderne Online-Präsenz, um ihr Café und ihre Dienstleistungen besser zu präsentieren. Zusätzlich wünschte sie sich ein neues Logo, das die Identität ihres Unternehmens widerspiegelt.",
    problemText: "Nach ausführlichen Gesprächen mit der Kundin über ihre Vorstellungen und Anforderungen begann ich mit dem Designprozess. Nach Erstellung des Logos setzte ich die Gestaltung der Website in Angriff. Die Website wurde so entworfen, dass sie nicht nur ästhetisch ansprechend ist, sondern auch benutzerfreundlich und leicht navigierbar. Dabei legte ich besonderen Wert darauf, das Logo nahtlos in das Gesamtdesign der Website zu integrieren, um eine konsistente Markenidentität zu gewährleisten.",
    solvingText: "Um die Website effizient zu verwalten, entwickelte ich ein maßgeschneidertes Content Management System (CMS). Dies ermöglicht der Kundin, Inhalte auf ihrer Website selbstständig zu aktualisieren und zu pflegen, ohne auf technische Unterstützung angewiesen zu sein. Die Codierung der Website erfolgte unter Berücksichtigung moderner Webstandards und responsiven Designs. Dadurch ist die Website sowohl auf Desktop- als auch auf mobilen Geräten optimal zugänglich",
    resultText: "Die Website für das Hofcafé Wolfpassing ist nun online und spiegelt die einladende Atmosphäre des Cafés wieder. Durch das implementierte CMS kann die Kundin ihre Inhalte selbstständig aktualisieren, was zu einer effektiven Pflege der Online-Präsenz führt. Die erfolgreiche Umsetzung dieses Projekts hat nicht nur die digitale Präsenz des Hofcafés verbessert, sondern auch dazu beigetragen, die Markenidentität zu stärken und die Interaktion mit den Kunden zu fördern.",
    img: "/projects/Hofcafe_Collage.jpg",
    link: "",
    tags: [
      "Homepage",
      "CMS",
      "Hosting"
    ]
  }
];
function load({ params }) {
  return projects.filter((e) => e.url == params.project)[0];
}
export {
  load
};
