import * as server from '../entries/pages/services/_service_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_service_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/services/[service]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.aGZB2TEL.js","_app/immutable/chunks/scheduler.xf6jTNgh.js","_app/immutable/chunks/index.ZOb3XnUt.js","_app/immutable/chunks/Nav.i-7WEO7k.js","_app/immutable/chunks/ContactForm.6v0WjrF5.js","_app/immutable/chunks/index.7YiL76hb.js","_app/immutable/chunks/each.6w4Ej4nR.js"];
export const stylesheets = ["_app/immutable/assets/7.-ui2vYka.css","_app/immutable/assets/Waves.eR-QEibE.css","_app/immutable/assets/Nav.4Ppp6mM5.css"];
export const fonts = [];
