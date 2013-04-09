define({
	name : "Fall Colors",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/fallcolors.png)"
			}
		}
	}]
})