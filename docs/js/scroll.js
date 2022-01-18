// Credits: https://www.30secondsofcode.org/js/s/throttle/
const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function () {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};

const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll",
    throttle(function () {
        if (window.scrollY > 100) {
          backToTop.classList.replace("hide", "show");
          backToTop.classList.add("show")
        } else {
          backToTop.classList.replace("show", "hide");
        }
    }, 1000)
);
