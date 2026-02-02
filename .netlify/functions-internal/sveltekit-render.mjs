import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["BingSiteAuth.xml","Logo.png","favicon.png","img/projects/ChrZeh.webp","img/projects/Musikschule.webp","img/projects/SchBau.webp","img/projects/Vhp.webp","robots.txt","sitemap.xml"]),
	mimeTypes: {".xml":"text/xml",".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CelU7_KL.js",app:"_app/immutable/entry/app.B9hSKOC7.js",imports:["_app/immutable/entry/start.CelU7_KL.js","_app/immutable/chunks/D_p0Uydz.js","_app/immutable/entry/app.B9hSKOC7.js","_app/immutable/chunks/D_p0Uydz.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/impressum",
				pattern: /^\/impressum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
