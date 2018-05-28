(function() {

    var dims = {
        "laptop": 1520,
        "tablet": 1320,
        "tablet-portrait": 1000,
        "mobile": 720,
        "mobile-portrait": 400
    };

    function addRemoveClasses(attribute, addOrRemove, el) {
        var attribs = el.getAttribute(attribute);
        if (attribs) {
            attribs.split(" ").forEach(function(element) {
                if (addOrRemove == "add") {
                    el.classList.add(element);
                } else {
                    el.classList.remove(element);
                }
            });
        }
    }

    function containerFunc(device, el) {
        var wW = window.innerWidth;
        if (wW <= dims[device]) {
            addRemoveClasses('class-' + device, 'add', el);
            addRemoveClasses('class-' + device + '-remove', 'remove', el);
        } else {
            addRemoveClasses('class-' + device, 'remove', el);
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
            var k = Object.keys(dims);
            var j = k.length;
            while (j--) {
                containerFunc(k[j], classers[i]);
            }
        }
    }

    _resize(function() {
        initialize();
    })();

})();
