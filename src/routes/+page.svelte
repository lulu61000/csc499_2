<script>
	import * as Erie from "erie-web";
	import { onMount } from "svelte";
	import { browser } from '$app/environment';
	// import { data } from '/data';
	import * as d3 from 'd3';

	const Stream = Erie.Stream;
    const compileAuidoGraph = Erie.compileAuidoGraph;

	let audio;
	let status = false;

	let spec = {
  "description": "Mean and standard deviation of Miles_per_Gallon by Origin",
  "data": {
    "url": "data/cars.json"
  },
  "transform": [
    {
      "aggregate": [
        {
          "op": "mean",
          "field": "Miles_per_Gallon",
          "as": "Miles_per_Gallon_mean"
        },
        {
          "op": "stdevp",
          "field": "Miles_per_Gallon",
          "as": "Miles_per_Gallon_stdevp"
        }
      ],
      "groupby": [
        "Origin"
      ]
    },
    {
      "calculate": "datum.Miles_per_Gallon_mean - datum.Miles_per_Gallon_stdevp",
      "as": "Miles_per_Gallon_lower"
    },
    {
      "calculate": "datum.Miles_per_Gallon_mean + datum.Miles_per_Gallon_stdevp",
      "as": "Miles_per_Gallon_upper"
    },
    {
      "fold": [
        "Miles_per_Gallon_lower",
        "Miles_per_Gallon_mean",
        "Miles_per_Gallon_upper"
      ],
      "by": "Origin",
      "exclude": true,
      "as": [
        "measure",
        "statistics"
      ]
    }
  ],
  "sampling": [
    {
      "name": "low",
      "sample": {
        "mono": "external_audio/low.mp3"
      }
    },
    {
      "name": "mean",
      "sample": {
        "mono": "external_audio/mean.mp3"
      }
    },
    {
      "name": "high",
      "sample": {
        "mono": "external_audio/high.mp3"
      }
    },
    {
      "name": "bird",
      "sample": {
        "mono": "external_audio/bird.mp3"
      }
    },
    {
      "name": "rain",
      "sample": {
        "mono": "external_audio/rain.mp3"
      }
    }
  ],
  "tone": {
    "continued": false
  },
  "encoding": {
    "time": {
      "field": "measure",
      "type": "nominal",
      "scale": {
        "band": 0.5,
        "order": [
          "Miles_per_Gallon_lower",
          "Miles_per_Gallon_men",
          "Miles_per_Gallon_upper"
        ]
      }
    },
    "pan": {
      "field": "statistics",
      "type": "quantitative",
      "scale": {
        "polarity": "positive",
        "maxDistinct": true,
        "title": "value"
      },
      "format": ".4"
    },
    "pitch": {
      "field": "statistics",
      "type": "quantitative",
      "scale": {
        "polarity": "positive",
        "range": [
          "C1",
          "C7"
        ],
        "title": "value"
      },
      "format": ".4"
    },
    "timbre": {
      "field": "measure",
      "type": "nominal",
      "scale": {
        "domain": [
          "Miles_per_Gallon_lower",
          "Miles_per_Gallon_mean",
          "Miles_per_Gallon_upper"
        ],
        "range": [
          "piano",
          "piano",
          "piano"
        ]
      }
    },
    "repeat": {
      "field": "Origin",
      "type": "nominal",
      "speech": true,
      "scale": {
        "description": "skip"
      }
    }
  },
  "config": {
    "speechRate": 1.75,
	"skipScaleSpeech": true,
	"skipDescription": true,
	"skipSquenceIntro": true,
	"skipSequenceDescription": true
  }
};

	onMount(() => {
		console.log('odnMout');

		compileAuidoGraph(spec)
			.then((audio_graph) => {
				audio = audio_graph;
				console.log(audio);
				audio.prerender();
				window.audioPlayer = audio;
			}).then(() => {
				if (browser) {
					play();
				}
			})
			.catch((e) => {
				specError = true;
				console.warn(e);
			});
		if (browser) {
			function stopEvent(event) {
				if (event.key == 'x') {
					stop();
				}
			}
			window.addEventListener('keypress', stopEvent);
		}
	
		// console.log(Erie);
    	// console.log(Stream);
    	// console.log(compileAuidoGraph);

	});

	function play() {
		if (audio) {
			audio.playQueue();
			status = true;
			// d3.select('#timer')
			// 	.style('left', 0)
			// 	.transition()
			// 	.duration(20000)
			// 	.ease(d3.easeLinear)
			// 	.style('left', '100%');
		} else {
			console.warn('Audio not ready');
		}
	}
	function stop() {
		audio?.stopQueue();
		status = false;
		d3.select('#timer').interrupt();
		d3.select('#timer').style('left', 0);
	}





	// onMount(() => {
	// 	runSpec();
	// });
</script>