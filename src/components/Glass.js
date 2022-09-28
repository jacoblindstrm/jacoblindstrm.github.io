export function Glass() {
    return (
        <div>
            <div style={{
                zIndex: 10,
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                backdropFilter: `url(${"#displacementFilter"})`,
                WebkitBackdropFilter: `url(${"#displacementFilter"})`,
                transform: `rotate(180deg)`,
            }}></div>
            <svg viewBox="0 0 0 0" xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                <filter id="displacementFilter" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="turbulence" baseFrequency="0.002" numOctaves="1" result="turbulence"></feTurbulence>
                <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10"></feDisplacementMap>
                </filter>
            </svg>
        </div>
    );
}