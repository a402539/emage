define({
	name : "Film Stock 50",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/filmstock_50.png)"
			}
		}
	}]
})