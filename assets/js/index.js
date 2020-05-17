document.addEventListener('swup:enabled', event => {
    //import Swup from 'swup';
    const swup = new Swup(); // only this line when included with script tag

});

document.addEventListener('swup:contentReplaced', event => {

    window.scrollTo(0,0);

    // 1. remove active class from all links
    const body = document.getElementsByTagName('body')[0];
    const navLi = document.querySelectorAll('header nav li');
    const navLinks = document.querySelectorAll('header nav li a');
    const backgroundColor = document.getElementById('swup').dataset.backgroundColor;

    body.classList.remove(...body.classList);
    body.classList.add(`background-${backgroundColor}`);

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

        updatePosition(event, terrazzo, false);
        terrazzo.classList.add('playing');

        setTimeout(() => {
            terrazzo.classList.remove('playing');
        }, 1000)

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

        //currentEvent=event;
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

        el.style.transform = `translateX(${event.pageX}px) translateY(${event.pageY - scrollYPos}px) scale(${scale})`;
    }

       
    document.documentElement.onmousemove=function(event){
         currentEvent=event;
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
        
        prevEvent=currentEvent;
        prevSpeed=speed;
    }, 100);
})();
