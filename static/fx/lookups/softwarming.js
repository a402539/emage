define({
	name : "Soft Warming",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/softwarming.png)"
			}
		}
	}]
})