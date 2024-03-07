const services = [
  {
    url: "WebDevelopment",
    name: "Web Development",
    text: "Bei der Entwicklung einer Website muss bedacht werden, dass jede Unternehmenswebseite einzigartige Anforderungen hat. Um Ihnen maßgeschneiderte Lösungen zu bieten, habe ich drei Pakete zusammengestellt. Diese decken ein breites Spektrum von Bedürfnissen kleiner bis mittelgroßer Unternehmen ab"
  },
  {
    url: "WebHosting",
    name: "Web Hosting",
    text: "Webhosting bezeichnet das Online-Bereitstellen der Website. Diese läuft auf einem Server, der mit Strom und Wartungskosten verbunden ist. Die Hosting-Preise variieren je nach den Anforderungen Ihrer Website. Zum Beispiel kann die Integration eines Content Management Systems (CMS) zu zusätzlichen Kosten führen, da es fortgeschrittene Funktionen bietet."
  }
];
function load({ params }) {
  return { services: services.filter((e) => e.url == params.service)[0] };
}
export {
  load
};
