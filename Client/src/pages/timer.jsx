import React, { useState, useEffect } from "react";
import '../styles/timer.css'; // Import the CSS file

function Countdown() {
  const [targetDate, setTargetDate] = useState(new Date("2025-07-18T00:00:00").getTime());

  const flipAllCards = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600) % 24;
    const days = Math.floor(time / 86400);

    const daysDigits = String(days).padStart(3, "0").split("");
    const hoursDigits = String(hours).padStart(2, "0").split("");
    const minutesDigits = String(minutes).padStart(2, "0").split("");
    const secondsDigits = String(seconds).padStart(2, "0").split("");

    flip(document.querySelector("[data-days-hundreds]"), daysDigits.length > 2 ? daysDigits[0] : "0");
    flip(document.querySelector("[data-days-tens]"), daysDigits[daysDigits.length - 2]);
    flip(document.querySelector("[data-days-ones]"), daysDigits[daysDigits.length - 1]);
    flip(document.querySelector("[data-hours-tens]"), hoursDigits[0]);
    flip(document.querySelector("[data-hours-ones]"), hoursDigits[1]);
    flip(document.querySelector("[data-minutes-tens]"), minutesDigits[0]);
    flip(document.querySelector("[data-minutes-ones]"), minutesDigits[1]);
    flip(document.querySelector("[data-seconds-tens]"), secondsDigits[0]);
    flip(document.querySelector("[data-seconds-ones]"), secondsDigits[1]);
  };

  const flip = (flipCard, newNumber) => {
    if (!flipCard) return;

    const top = flipCard.querySelector(".top");
    const bottom = flipCard.querySelector(".bottom");
    const startNumber = top.textContent;

    if (newNumber === startNumber) return;

    top.textContent = startNumber;
    bottom.textContent = startNumber;
    flipCard.dataset.currentNumber = newNumber;
    flipCard.dataset.nextNumber = newNumber;

    flipCard.addEventListener("animationstart", () => {
      top.textContent = newNumber;
    });

    flipCard.addEventListener("animationend", () => {
      bottom.textContent = newNumber;
      flipCard.classList.remove("flip");
    });

    flipCard.classList.add("flip");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const totalCountDownTime = Math.ceil((targetDate - currentTime) / 1000);
      if (totalCountDownTime <= 0) clearInterval(interval);
      flipAllCards(totalCountDownTime);
    }, 250);

    return () => clearInterval(interval);
  }, [targetDate]);

  const currentTime = new Date().getTime();
  const days = Math.floor((targetDate - currentTime) / 86400000);

  return (
    <div className="countdown-body">
      <div>
        <div className="countdown-container">
          {/* Days Section */}
          <div className="countdown-cards">
            <div className="card-title">Days</div>
            <div className="card-container">
              {days > 99 && (
                <div className="flip-card" data-days-hundreds>
                  <div className="top">0</div>
                  <div className="bottom">0</div>
                </div>
              )}
              <div className="flip-card" data-days-tens>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div className="flip-card" data-days-ones>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
            </div>
          </div>

          {/* Hours Section */}
          <div className="countdown-cards">
            <div className="card-title">Hours</div>
            <div className="card-container">
              <div className="flip-card" data-hours-tens>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div className="flip-card" data-hours-ones>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
            </div>
          </div>

          {/* Minutes Section */}
          <div className="countdown-cards">
            <div className="card-title">Minutes</div>
            <div className="card-container">
              <div className="flip-card" data-minutes-tens>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div className="flip-card" data-minutes-ones>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
            </div>
          </div>

          {/* Seconds Section */}
          <div className="countdown-cards">
            <div className="card-title">Seconds</div>
            <div className="card-container">
              <div className="flip-card" data-seconds-tens>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div className="flip-card" data-seconds-ones>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;