import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { N as Nav } from "../../chunks/Nav.js";
import { W as Waves } from "../../chunks/Waves.js";
const HanneswithDotsLight_medium = "/_app/immutable/assets/HanneswithDotsLight_medium.ur1BCRe0.png";
const css$3 = {
  code: "@keyframes svelte-1e1rae9-background{from{background-color:#C2FFEA00}to{background-color:#C2FFEA}}.backgroundFadeIn.svelte-1e1rae9{animation-name:svelte-1e1rae9-background ;animation-duration:1s}",
  map: null
};
const LandingScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="flex flex-wrap justify-around items-center ml-16 lg:flex-nowrap pt-20" data-svelte-h="svelte-1mfe4vf"><div class="lg:pb-40"><h1>Hannes Scheibelauer</h1> <span>Der kreative Webentwickler 
        für <span class="text-secondary bg-primary-200 px-2 rounded-md backgroundFadeIn svelte-1e1rae9">deine</span> digitale Erfolgsstory!</span></div> <div class=""><img${add_attribute("src", HanneswithDotsLight_medium, 0)} alt="Hannes Scheibelauer with Web Icons"></div> </div>`;
});
const css$2 = {
  code: '.blobus.svelte-tn9miu{font-family:"Dosis", sans-serif}',
  map: null
};
const Blob = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path1 } = $$props;
  let { path2 } = $$props;
  let { duration } = $$props;
  let { delay } = $$props;
  let { id1 } = $$props;
  let { id2 } = $$props;
  let { number } = $$props;
  let { description } = $$props;
  if ($$props.path1 === void 0 && $$bindings.path1 && path1 !== void 0)
    $$bindings.path1(path1);
  if ($$props.path2 === void 0 && $$bindings.path2 && path2 !== void 0)
    $$bindings.path2(path2);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.id1 === void 0 && $$bindings.id1 && id1 !== void 0)
    $$bindings.id1(id1);
  if ($$props.id2 === void 0 && $$bindings.id2 && id2 !== void 0)
    $$bindings.id2(id2);
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$2);
  return `<div class="relative w-1/3 min-w-80 max-w-96 blobus svelte-tn9miu"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full absolute z-10 "><g><path${add_attribute("id", id1, 0)} fill="#47ffbf"${add_attribute("d", path1, 0)} transform="translate(100 100)" class=""></path></g><g><path${add_attribute("id", id2, 0)} fill="#47ffbf"${add_attribute("d", path2, 0)} transform="translate(100 100)" class="hidden "></path></g></svg> <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full relative top-3 left-2 z-0"><g><path${add_attribute("id", id1 + "-bg", 0)} fill="#99ffdb"${add_attribute("d", path1, 0)} transform="translate(100 100)"></path></g><g><path${add_attribute("id", id2 + "-bg", 0)} fill="#99ffdb"${add_attribute("d", path2, 0)} transform="translate(100 100)" class="hidden"></path></g></svg> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-secondary"><div class="lg:text-5xl xl:text-6xl text-5xl">${escape(number)}</div> <div class="lg:text-3xl xl:text-4xl text-2xl font-medium">${escape(description)}</div></div> </div>`;
});
const Blobs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="m-20 -mt-20"><div class="flex flex-wrap justify-around text-center w-full font-bold text-5xl">${validate_component(Blob, "Blob").$$render(
    $$result,
    {
      number: "2",
      description: "Jahre Erfahrung",
      id1: "blob1",
      id2: "blob2",
      duration: 5e3,
      delay: 200,
      path2: "M34,-61.8C44.5,-52.8,53.7,-44.6,62.4,-34.4C71.1,-24.2,79.3,-12.1,79.6,0.1C79.9,12.4,72.2,24.8,65.7,38.9C59.3,53.1,54.1,68.9,43.4,78.6C32.6,88.4,16.3,92.1,0.7,90.9C-15,89.7,-29.9,83.8,-41.3,74.4C-52.7,65,-60.5,52.2,-64.7,39.2C-68.8,26.3,-69.4,13.1,-72.4,-1.7C-75.3,-16.5,-80.6,-33.1,-75.6,-44.6C-70.6,-56.1,-55.3,-62.6,-40.9,-69.4C-26.6,-76.2,-13.3,-83.2,-0.8,-81.8C11.8,-80.5,23.5,-70.8,34,-61.8Z",
      path1: "M57.9,-44.5C74,-26,85.3,-2,80.8,18.7C76.3,39.4,56,56.8,34.4,64.5C12.9,72.2,-10,70.2,-29.7,61C-49.4,51.7,-65.9,35.3,-71.6,15C-77.4,-5.3,-72.2,-29.4,-58.5,-47.4C-44.7,-65.3,-22.4,-77.2,-0.7,-76.6C20.9,-76,41.8,-63,57.9,-44.5Z"
    },
    {},
    {}
  )} ${validate_component(Blob, "Blob").$$render(
    $$result,
    {
      number: "15+",
      description: "Abgeschlossene Projekte",
      id1: "blob3",
      id2: "blob4",
      duration: 4e3,
      delay: 1e3,
      path2: "M58.6,-45.7C74.8,-26.5,85.8,-2.2,81,18.3C76.2,38.9,55.5,55.7,33.3,64.8C11,73.8,-12.9,75.1,-31.7,66C-50.6,56.9,-64.4,37.4,-69.7,15.5C-75.1,-6.4,-71.9,-30.6,-58.9,-49.1C-45.9,-67.6,-22.9,-80.3,-0.8,-79.6C21.2,-78.9,42.5,-64.9,58.6,-45.7Z",
      path1: "M58.6,-48.8C71.2,-31.1,73.1,-7,67.9,15.4C62.7,37.7,50.4,58.3,32,67.5C13.7,76.7,-10.6,74.6,-32.4,65C-54.3,55.4,-73.7,38.3,-80.5,16.2C-87.3,-6,-81.5,-33.2,-66,-51.6C-50.5,-70,-25.3,-79.6,-1.1,-78.7C23.1,-77.9,46.1,-66.5,58.6,-48.8Z"
    },
    {},
    {}
  )} ${validate_component(Blob, "Blob").$$render(
    $$result,
    {
      number: "21",
      description: "Anzahl der beherrschten Frameworks / Sprachen ",
      id1: "blob5",
      id2: "blob6",
      duration: 3e3,
      delay: 2500,
      path2: "M60.1,-45.2C75.8,-28.3,84.9,-3.4,80.3,19.1C75.8,41.5,57.5,61.6,34.7,72.8C12,84,-15.4,86.4,-36.6,76.2C-57.7,65.9,-72.6,42.9,-76.7,19.2C-80.7,-4.5,-73.8,-28.9,-59.2,-45.6C-44.6,-62.3,-22.3,-71.1,0,-71.1C22.2,-71.1,44.4,-62.1,60.1,-45.2Z",
      path1: "M54.9,-40.7C70.4,-24.4,81.7,-1.6,79,21C76.2,43.7,59.4,66.1,36.9,77.1C14.4,88.1,-13.8,87.6,-33.7,75.8C-53.6,63.9,-65.2,40.7,-69.5,17.2C-73.8,-6.4,-70.8,-30.2,-58,-46C-45.2,-61.7,-22.6,-69.3,-1.4,-68.1C19.7,-67,39.4,-57.1,54.9,-40.7Z"
    },
    {},
    {}
  )}</div></div>`;
});
const css$1 = {
  code: ".button.svelte-aa6yvn{text-shadow:2px 2px #fff}",
  map: null
};
const CallToAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="p-10 pt-20 flex flex-wrap justify-center"><span class="w-full text-center text-5xl font-medium text-white " data-svelte-h="svelte-xfazyq">Ein Erstgespräch ist Kostenfrei</span> <button class="button bg-primary-400 rounded-md text-secondary px-10 py-4 text-3xl font-medium m-10 relative top-0 hover:-top-1 duration-300 svelte-aa6yvn" data-svelte-h="svelte-1epx33b">Kontaktiere mich</button> </div>`;
});
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { QuestionText } = $$props;
  if ($$props.QuestionText === void 0 && $$bindings.QuestionText && QuestionText !== void 0)
    $$bindings.QuestionText(QuestionText);
  return `<div class="w-full flex justify-center flex-nowrap mx-4"><div class="lg:w-1/2 pb-5"><button class="border-t pt-7 text-4xl font-thin text-gray-200 border-primary-300 flex items-center w-full hover:animate-pulse"><div class="text-start w-5/6">${escape(QuestionText)}</div> <div class="w-5 ml-auto mr-2"><svg id="Ebene_2" data-name="Ebene 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.6 197.18"${add_attribute("class", "w-full transition -rotate-90", 0)}><g id="Ebene_1-2" data-name="Ebene 1"><path fill="#99FFDB" d="M6.63,84.38L167.77,1.37c8.14-4.19,17.83,1.72,17.83,10.87h0c0,4.63-2.61,8.86-6.75,10.93L29.2,98.19v.8l149.65,75.02c4.14,2.07,6.75,6.3,6.75,10.93h0c0,9.15-9.69,15.06-17.83,10.87L6.63,112.8c-4.07-2.1-6.63-6.29-6.63-10.87v-6.69c0-4.58,2.56-8.77,6.63-10.87Z"></path></g></svg></div></button> <div${add_attribute("class", "text-2xl font-light text-gray-300 max-h-0 overflow-hidden transition dropwdown ", 0)}>${slots.default ? slots.default({}) : ``}</div></div> </div>`;
});
const css = {
  code: ".highlighted.svelte-3yqdb1{background-color:#C2FFEA88;border-radius:6px;color:#022034;padding:0px 4px;display:inline}",
  map: null
};
const Questions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="bg-secondary w-full h-20 lg:rotate-2 rotate-6 relative"></div>  <div class="-mt-10 w-full flex justify-center flex-wrap bg-secondary -mb-20 py-10 z-10 relative">${validate_component(Question, "Question").$$render(
    $$result,
    {
      QuestionText: "Wie kann eine Website meinem Unternehmen helfen?"
    },
    {},
    {
      default: () => {
        return `Eine Website ist deine digitale <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-1s2f1mn">Visitenkarte im Web</span>. Für Kunden oder Interessenten ist sie die erste Anlaufstelle für Informationen. Ein positiver <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-3yum5y">erster Eindruck</span> ist nicht nur in der realen Welt wichtig, sondern auch in der Digitalen.`;
      }
    }
  )} ${validate_component(Question, "Question").$$render($$result, { QuestionText: "Was kostet eine Website?" }, {}, {
    default: () => {
      return `Die Kosten für eine Website können variieren und sind nicht festgelegt. Für ein Unternehmen mit umfangreichen Anforderungen und Funktionen können die Kosten bei <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-1o8e65n">5000€</span> oder mehr liegen. Hingegen kann eine einfache Website für ein kleines Unternehmen mit grundlegenden Informationen <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-w6zhnw">800€</span>  oder weniger kosten.`;
    }
  })} ${validate_component(Question, "Question").$$render(
    $$result,
    {
      QuestionText: "Wie lange dauert die Entwicklung?"
    },
    {},
    {
      default: () => {
        return `Die Dauer der Website-Entwicklung ist variabel und hängt von verschiedenen Faktoren ab. Für umfangreiche Projekte mit speziellen Anforderungen kann die Entwicklung <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-1on529c">mehrere Monate</span> in Anspruch nehmen. Hingegen kann eine simpler gestaltete Website für kleine Unternehmen in  <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-1s3abv">wenigen Wochen</span>  erstellt werden.`;
      }
    }
  )} ${validate_component(Question, "Question").$$render(
    $$result,
    {
      QuestionText: "Kann ich meine bestehende Website aktualisieren?"
    },
    {},
    {
      default: () => {
        return `Natürlich! Nach Absprache mit Ihnen kann ich Updates oder sogar <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-11qc0vm">komplette Neugestaltungen</span> Ihrer Website umsetzen.`;
      }
    }
  )} ${validate_component(Question, "Question").$$render(
    $$result,
    {
      QuestionText: "Welche laufenden Kosten gibt es für eine Website?"
    },
    {},
    {
      default: () => {
        return `Die Hosting-Kosten, um sicherzustellen, dass die Website online abrufbar ist, belaufen sich auf <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-bv9nll">20-40€</span> pro Monat. Websites, die umfangreiche Daten speichern (z.B. Vereinsverwaltung), können aufgrund ihres größeren Umfangs teurer sein. Die Domain-Kosten (z.B. hannes-scheibelauer.at), die dazu kommen, liegen hingegen nur bei <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-gt2d8j">3-10€</span> pro Monat.`;
      }
    }
  )} ${validate_component(Question, "Question").$$render(
    $$result,
    {
      QuestionText: "Erhalte ich eine eigene E-Mail-Adresse?"
    },
    {},
    {
      default: () => {
        return `Ja, nach Bedarf kannst du deine eigene E-Mail für <span class="highlighted text-2xl svelte-3yqdb1" data-svelte-h="svelte-19pziz8">2,99€</span> pro Monat pro Nutzer erhalten.`;
      }
    }
  )} ${validate_component(Question, "Question").$$render(
    $$result,
    {
      QuestionText: "Kann ich meine Website selbst bearbeiten?"
    },
    {},
    {
      default: () => {
        return `Ja, auf Wunsch erstelle ich ein <span class="highlighted text-2xl  svelte-3yqdb1" data-svelte-h="svelte-156lkc7">Content Management System (CMS)</span> mit dem Sie einfach Texte und Bilder selbst bearbeiten können.`;
      }
    }
  )} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-i9npbb_START -->${$$result.title = `<title>Home - Hannes Scheibelauer</title>`, ""}<!-- HEAD_svelte-i9npbb_END -->`, ""} <div>${validate_component(Nav, "Nav").$$render($$result, { active: "1" }, {}, {})} ${validate_component(LandingScreen, "LandingScreen").$$render($$result, {}, {}, {})} <div class="-top-44 relative lg:-top-36">${validate_component(Waves, "Waves").$$render(
    $$result,
    {
      headingText: "Ich bin",
      headingTextHighlighted: "Hannes"
    },
    {},
    {
      default: () => {
        return `<p data-svelte-h="svelte-11hp9l8">Ich  besuche die IT-HTL ybbs als Schüler, habe jedoch früh erkannt, dass mir Webdesign  mehr Freude bereitet als andere Fachbereiche. Seit dem Jahr Zusammenarbeit
     im Vordergrund – ich arbeite nicht nur für meine Kunden, sondern gemeinsam mit ihnen. Jedes Design stimme ich persönlich mit meinen Kunden ab, um sicherzustellen, dass die Website erst dann finalisiert wird, wenn sie zu 100% ihren Anforderungen entspricht.</p>`;
      }
    }
  )}</div> ${validate_component(Blobs, "Blobs").$$render($$result, {}, {}, {})} ${validate_component(CallToAction, "CallToAction").$$render($$result, {}, {}, {})} ${validate_component(Questions, "Questions").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
