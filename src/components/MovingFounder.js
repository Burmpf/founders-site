import React from "react";
import "./MovingFounder.css";

class MovingFounder extends React.Component {
    render() {
        document.addEventListener("mousemove", (e) => {
            const mouseX=e.clientX;
            const mouseY=e.clientY;

            const anchor = document.getElementById('anchor');
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;
            const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

            console.log(angleDeg);

            const eyes = document.querySelector(".founder-eyes");
            eyes.forEach((eye) => {
                eye.style.transform = `rotate(${angleDeg}deg)`;
            })
        });

        function angle(cx, cy, ex, ey){
            const dy=ey-cy;
            const dx=ex-cx;
            const rad = Math.atan2(dy,dx);
            const deg = rad * (180/Math.PI);
            return deg;

        }

        return (
            <div className="founder-moving">
                <img className="anchor" src="./images/noeyes-founder.png" alt="founder body" />
                <div>
                    <img className="founder-eyes" src="./images/founder-eyes.png" alt="founder eyes" />
                </div>
            </div>
        );
    }
}



export default MovingFounder;