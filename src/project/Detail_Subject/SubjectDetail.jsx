import React, {useState, useEffect, useRef} from 'react';
import './SubjectDetail.css';

function SubjectDetail({ subject }) {
    const [time, setTime] = useState(0); //시간
    const [isActive, setIsActive] = useState(false); //작동중인가
    const [detailItems, setDetailItems] = useState([]);

    useEffect(()=>{
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    function clock(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return [hours, minutes, remainingSeconds].map(v => v < 10 ? "0" + v : v).join(":");
    };

    function handleStartStop() {
        if (!isActive) {
            const newItem = {
                id: Date.now(),
                startTime: new Date(),
                stopTime: null,
                duration: 0
            };
            setDetailItems([...detailItems, newItem]);
        } else {
            setDetailItems(items => items.map(item => {
                if (!item.stopTime) {
                    return {
                        ...item,
                        stopTime: new Date().toLocaleTimeString(),
                        duration: Math.floor((new Date() - item.startTime) / 1000)
                    };
                }
                return item;
            }));
        }
        setIsActive(!isActive);
        setTime(0);
    };

    //TOTAL 표시
    const calculateTotalStudyTime = () => {
        return detailItems.reduce((total, item) => total + item.duration, 0);
    };
    
    //reset 버튼 함수
    function handleReset() {
        setIsActive(false);
        setTime(0);
        setDetailItems([]);
    };

    if (!subject) return null;

    return (
    <div className="SubjectDetail">
        <h2>{subject.content} 학습 기록</h2>
        <div className='DetailHeader'>
            <div className='DetailHeader_2'>
                <button onClick={handleStartStop} className='startStopButton'>
                    {isActive ? 'Stop' : 'Start'}
                </button>
                <span>{clock(time)}</span>
            </div>
            <div className='DetailHeader_3'>
                <span>TOTAL: {clock(calculateTotalStudyTime())}</span>
                <button onClick={handleReset} className='resetButton'>Reset</button>
            </div>
        </div>
        {detailItems.map(item => (
            <div key={item.id} className='DetailItem'>
                <p>{item.startTime.toLocaleString()}</p>
                <p>~</p>
                <p>{item.stopTime ? item.stopTime.toLocaleString() : '진행 중'}</p>
                <p>공부 시간: {clock(item.duration)}</p>
            </div>
        ))}
    </div>
    );
}

export default SubjectDetail;