import * as server from '../entries/pages/projects/_project_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_project_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[project]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.LgNPGkG-.js","_app/immutable/chunks/scheduler.xf6jTNgh.js","_app/immutable/chunks/index.ZOb3XnUt.js","_app/immutable/chunks/each.6w4Ej4nR.js","_app/immutable/chunks/Nav.i-7WEO7k.js","_app/immutable/chunks/ContactForm.6v0WjrF5.js","_app/immutable/chunks/index.7YiL76hb.js","_app/immutable/chunks/Waves.K_Q-O9T6.js"];
export const stylesheets = ["_app/immutable/assets/Nav.4Ppp6mM5.css","_app/immutable/assets/Waves.eR-QEibE.css"];
export const fonts = [];
