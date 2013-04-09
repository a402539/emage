define({
	name : "Amatorka",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/amatorka.png)"
			}
		}
	}]
})