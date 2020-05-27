document.addEventListener('swup:enabled', event => {
    //import Swup from 'swup';
    const swup = new Swup(); // only this line when included with script tag

});

document.addEventListener('swup:contentReplaced', event => {

    window.scrollTo(0,0);

    // 1. remove active class from all links
    const navLi = document.querySelectorAll('header nav li');
    const navLinks = document.querySelectorAll('header nav li a');

    //navLi.classList.remove('active');
    navLi.forEach(li => {
        if (li.classList.contains('active')) {
            li.classList.remove('active');
        }
    });

    // 2. go through all links and add active class if href == current URL
    navLinks.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
            link.closest('li').classList.add('active');
        }
    });
});

(function() {

    const terrazzo = document.getElementById('Terrazzo');
    const cursor = document.getElementById('Cursor');
    let scrollYPos = 0;
    let globalAcceleration = 0;
    var prevEvent, currentEvent;
    var prevSpeed = 0;

    document.documentElement.onmousemove=function(event){
        currentEvent=event;
    }
    document.onscroll = getScrollYPosition;
    document.onmousemove = handleMouseMove;
    document.onclick = handleClick;
    
    function handleMouseMove(event) {
        cursor.style.opacity = `1`;
        updatePosition(event, cursor, true);
    }

    function handleClick(event) {
        for(var i = 0; i < 6; i++) {
            createElement(event);
        }
        

    }

    function getScrollYPosition() {
        scrollYPos = window.scrollY;
    }

    function updatePosition(event, el, willScale) {
        var eventDoc, doc, body;
        let scale = 1;
        
        if (willScale) {
            if (globalAcceleration > 8000 || globalAcceleration < -8000) {
                scale = 0.5;
            } else if (globalAcceleration > 1500 || globalAcceleration < -1500) {
                scale = 0.35;
            } else if (globalAcceleration > 2000 || globalAcceleration < -2000) {
                scale = 0.2;
            }
        }

        const pos = getMousePosition(event);

        el.style.transform = `translateX(${pos.pageX}px) translateY(${pos.pageY - scrollYPos}px) scale(${scale})`;
    }
       
    document.documentElement.onmousemove=function(event){
         currentEvent=event;
    }

    function createElement(event) {
        const div = document.createElement('div');       
        const color = getRandomColor();
        const size = getRandomSize();
        const pos = getMousePosition(event);

        div.style.cssText = `background: var(${color}); border-radius: 100%; width: ${size}rem; height: ${size}rem; opacity: 0;`;
        div.classList.add(`cursor_sparks`);
        div.style.transform = `translateX(${pos.pageX + randomIntFromInterval(1,40)}px) translateY(${pos.pageY - scrollYPos  + randomIntFromInterval(1,40)}px)`;

        // append
        terrazzo.appendChild(div);

        div.addEventListener('animationend', () => {
            div.remove();
        });
    }

   

    function getMousePosition(event) {
        event = event || window.event; // IE-ism       

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        return event;
    }
    
    setInterval(function(){       

        if (prevEvent && currentEvent) {
            var movementX=Math.abs(currentEvent.screenX-prevEvent.screenX);
            var movementY=Math.abs(currentEvent.screenY-prevEvent.screenY);
            var movement=Math.sqrt(movementX*movementX+movementY*movementY);
            
            //speed=movement/100ms= movement/0.1s= 10*movement/s
            var speed = 10 * movement;//current speed            
            var acceleration = 10 * (speed - prevSpeed);
            
            globalAcceleration = Math.round(
                acceleration
            );

            if (globalAcceleration === 0) {
                updatePosition(currentEvent, cursor);
            }
        }

        if (speed > 10) {
            createElement(currentEvent);
        }
        prevEvent=currentEvent;
        prevSpeed=speed;
    }, 100);


    function getRandomColor() {
        const colors = ["--vibrant-green", "--lemon", "--coral", "--blue"];
        return colors[Math.floor(Math.random() * colors.length)];

    }

    function getRandomSize() {
        const sizes = ["0.8", "1", "1.2", "0.6"];
        return sizes[Math.floor(Math.random() * sizes.length)];

    }

    function randomIntFromInterval(min, max) { // min and max included 
        let num = Math.floor(Math.random() * (max - min + 1) + min);
        
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

        return num;
    }

})();
