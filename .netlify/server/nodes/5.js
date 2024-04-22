import * as server from '../entries/pages/projects/_project_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_project_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[project]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.Y8IdGuyi.js","_app/immutable/chunks/scheduler.9rETXCuu.js","_app/immutable/chunks/index.GzZsvtwO.js","_app/immutable/chunks/Waves.svelte_svelte_type_style_lang.ANW1yJ2Y.js","_app/immutable/chunks/Nav.AKDimoAP.js","_app/immutable/chunks/ContactForm.vJ3X5W0v.js","_app/immutable/chunks/index.SNfDup5C.js","_app/immutable/chunks/Waves.QBdbUr-R.js"];
export const stylesheets = ["_app/immutable/assets/Waves.v4D2jFs5.css","_app/immutable/assets/Nav.4Ppp6mM5.css"];
export const fonts = [];
