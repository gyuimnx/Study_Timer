import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
    const [dateTime, setDateTime] = useState({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        day: new Date().toLocaleDateString('ko-KR', {weekday: 'short'})
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime({
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                day: new Date().toLocaleDateString('ko-KR', {weekday: 'short'})
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="Header">
            <div className="HeaderContents">
                <span className="HeaderDate">{dateTime.date} ({dateTime.day})</span>
                <span className="HeaderTime">{dateTime.time}</span>
            </div>
        </div>
    );
}

export default Header;
