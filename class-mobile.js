(function(){

	var wW = window.innerWidth;
	var dims = {
		laptop: 1520,
		tablet: 1320,
		tabletPortrait: 1000,
		mobile: 720,
		mobilePortrait: 400
	};

	function addRemoveClasses(attribute, addOrRemove, el){
		var attribs = el.getAttribute(attribute);
		if(attribs){	
			attribs.split(" ").forEach(function(element){
				if(addOrRemove == "add"){
					el.classList.add(element);
				}else{
					el.classList.remove(element);
				}
			});
		}		
	}

	function containerFunc(device, el){
		if(wW <= dims[device]){
			addRemoveClasses('class-' + device, 'add', el);
			addRemoveClasses('class-' + device + '-remove', 'remove', el);
		}else{
			addRemoveClasses('class-' + device, 'remove', el);
		}
	}


	// iterate over all elements with classes in body
	var classers = document.querySelectorAll('body [class]');
	var i = classers.length;
	while(i--){
		var k = Object.keys(dims);
		var j = k.length;
		while(j--){
			containerFunc(k[j], classers[i]);
		}
	}

})();
