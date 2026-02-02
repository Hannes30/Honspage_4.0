

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BuUXGjvA.js","_app/immutable/chunks/D_p0Uydz.js","_app/immutable/chunks/IHki7fMi.js"];
export const stylesheets = ["_app/immutable/assets/1.BtxDgowG.css"];
export const fonts = [];
