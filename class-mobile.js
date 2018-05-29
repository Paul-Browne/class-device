(function() {

    var dims = {
        "laptop": 1520, 			// 95em
        "tablet": 1280, 			// 80em
        "tablet-portrait": 1000, 	// 62.5em
        "mobile": 720, 				// 45em
        "mobile-portrait": 440 		// 27.5em
    };

    function addRemoveClasses(attribute, addOrRemove, el) {
        var attribs = el.getAttribute('class-' + attribute);
        if (attribs) {
            attribs.split(" ").forEach(function(element) {
                if (addOrRemove == "add") {
                    if (!element.indexOf("/")) {
                        el.classList.remove(element.slice(1));
                    } else {
                        el.classList.add(element);
                    }
                } else {
                    if (!~element.indexOf("/")) {
                        el.classList.remove(element);
                    }
                }
            });
        }
    }

    function containerFunc(device, el) {
        var wW = window.innerWidth;
        if (wW < dims[device]) {
            addRemoveClasses(device, 'add', el);
        } else {
            addRemoveClasses(device, 'remove', el);
        }
    }

    function initialClasses(el) {
        var ci = "class-initial";
        if (!el.getAttribute(ci)) {
            el.setAttribute(ci, el.className);
        } else {
            el.getAttribute(ci).split(" ").forEach(function(element) {
                el.classList.add(element);
            });
        }
        if (!el.getAttribute(ci).length) {
            el.removeAttribute(ci);
        }
    }

    function _resize(a, b) {
        return window.addEventListener("resize", function() {
            clearTimeout(b),
                b = setTimeout(a, 150)
        }), a
    }

    function initialize() {
        // iterate over all elements with classes in body
        var classers = document.querySelectorAll('body [class]');
        var i = classers.length;
        while (i--) {

            initialClasses(classers[i]);

            var k = Object.keys(dims);
            var j = 0;
            var _j = k.length;
            while (j < _j) {
                containerFunc(k[j], classers[i]);
                j++;
            }
        }
    }

    _resize(function() {
        initialize();
    })();

})();
