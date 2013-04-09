define({
	name : "Candle Light",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/candlelight.png)"
			}
		}
	}]
})