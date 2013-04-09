define({
	name : "Foggy Night",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/foggynight.png)"
			}
		}
	}]
})