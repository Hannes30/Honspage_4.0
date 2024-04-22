

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1._TgH9q5-.js","_app/immutable/chunks/scheduler.9rETXCuu.js","_app/immutable/chunks/index.GzZsvtwO.js"];
export const stylesheets = ["_app/immutable/assets/1.I4giwYQo.css"];
export const fonts = [];
