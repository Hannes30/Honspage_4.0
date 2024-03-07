

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.WEEI5wgZ.js","_app/immutable/chunks/scheduler.xf6jTNgh.js","_app/immutable/chunks/index.ZOb3XnUt.js"];
export const stylesheets = ["_app/immutable/assets/1.I4giwYQo.css"];
export const fonts = [];
