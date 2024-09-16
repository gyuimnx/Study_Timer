import React, {useState, useEffect} from 'react';

function SubjectDetail({ subject }) {
    const [time, setTime] = useState(0); //시간
    const [isActive, setIsActive] = useState(false); //작동중인가

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
        }, [isActive, time])

    function handleStartStop() {
        setIsActive(!isActive);
    };

    function handleReset() {
        setIsActive(false);
        setTime(0);
    };

    if (!subject) return null;

    return (
    <div className="SubjectDetail">
        <h2>{subject.content} 상세 정보</h2>
        <p>생성일: {new Date(subject.createdDate).toLocaleString()}</p>
        <p>상태: {subject.isDone ? '완료' : '진행 중'}</p>
        <p>수강 기간: 12주</p>
        <p>담당 교수: 홍길동</p>
        <p>학점: 3학점</p>
        <button onClick={handleStartStop}>
            {isActive ? 'Stop' : 'Start'}
        </button>
        {time}
        <button onClick={handleReset}>Reset</button>
    </div>
    );
}

export default SubjectDetail;