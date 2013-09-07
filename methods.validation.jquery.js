/*
*Created	:	Sep-05-2013
*Author		:	Sarath, Gopan
*Updated	:	Sep-05-2013
*/
//Phone number validation 
// +91 0000 -8888-22
jQuery.validator.addMethod('phone',function(phone){
  var vp=/^[+\(\)\[\]]*([0-9-][ \(\)\[\]]*){6,15}$/;
	return vp.test(phone);
});
 
 
//Human name {Charecters and spacees only}//
jQuery.validator.addMethod('human_name',function(name){
	var v_hn=/^[A-Za-z \]{}[A-Za-z]{1,}$/;
	return v_hn.test(name);
});

//Max Words
//Code from : https://code.google.com/p/jqueryjs/source/browse/trunk/plugins/validate/additional-methods.js?r=6307
jQuery.validator.addMethod("maxWords", function(value, element, params) { 
    return this.optional(element) || value.match(/\b\w+\b/g).length < params; 
}, $.format("Please enter {0} words or less."));

//minWords
jQuery.validator.addMethod("minWords", function(value, element, params) { 
    return this.optional(element) || value.match(/\b\w+\b/g).length >= params; 
}, $.format("Please enter at least {0} words.")); 

jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, spaces or underscores only please");

jQuery.validator.addMethod("rangeWords", function(value, element, params) { 
    return this.optional(element) || value.match(/\b\w+\b/g).length >= params[0] && value.match(/bw+b/g).length < params[1]; 
}, $.format("Please enter between {0} and {1} words."));
