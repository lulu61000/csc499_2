export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio_sample/clap.mp3","audio_sample/guitar_c0.mp3","audio_sample/guitar_c1.mp3","audio_sample/guitar_c2.mp3","audio_sample/guitar_c3.mp3","audio_sample/guitar_c4.mp3","audio_sample/guitar_c5.mp3","audio_sample/guitar_c6.mp3","audio_sample/guitar_c7.mp3","audio_sample/high.mp3","audio_sample/highKick.mp3","audio_sample/hithat.mp3","audio_sample/low.mp3","audio_sample/lowKick.mp3","audio_sample/mean.mp3","audio_sample/metal_c0.mp3","audio_sample/metal_c1.mp3","audio_sample/metal_c2.mp3","audio_sample/metal_c3.mp3","audio_sample/metal_c4.mp3","audio_sample/metal_c5.mp3","audio_sample/metal_c6.mp3","audio_sample/metal_c7.mp3","audio_sample/pianoElec_c0.mp3","audio_sample/pianoElec_c1.mp3","audio_sample/pianoElec_c2.mp3","audio_sample/pianoElec_c3.mp3","audio_sample/pianoElec_c4.mp3","audio_sample/pianoElec_c5.mp3","audio_sample/pianoElec_c6.mp3","audio_sample/pianoElec_c7.mp3","audio_sample/piano_c0.mp3","audio_sample/piano_c1.mp3","audio_sample/piano_c2.mp3","audio_sample/piano_c3.mp3","audio_sample/piano_c4.mp3","audio_sample/piano_c5.mp3","audio_sample/piano_c6.mp3","audio_sample/piano_c7.mp3","audio_sample/snare.mp3","audio_sample/violin_c0.mp3","audio_sample/violin_c1.mp3","audio_sample/violin_c2.mp3","audio_sample/violin_c3.mp3","audio_sample/violin_c4.mp3","audio_sample/violin_c5.mp3","audio_sample/violin_c6.mp3","audio_sample/violin_c7.mp3","data/cars.json","external_audio/high.mp3","external_audio/low.mp3","external_audio/mean.mp3","favicon.png"]),
	mimeTypes: {".mp3":"audio/mpeg",".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CT5EsbFm.js","app":"_app/immutable/entry/app.Bo_5Kmaq.js","imports":["_app/immutable/entry/start.CT5EsbFm.js","_app/immutable/chunks/entry.HqiCmPsF.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.Bo_5Kmaq.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.3yJoD6ZP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
