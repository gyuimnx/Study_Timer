import React from "react";
import "./SubjectItem.css";

function SubjectItem({id, isDone, content, createdDate, onUpdate, onDelete}) {
    function onChangeCheckbox() {
        onUpdate(id);
    };
    function onClickDelete() {
        onDelete(id);
    };
    return (
        <div className="SubjectItem">
            <input 
                className="checkbox" 
                checked={isDone} 
                type="checkbox" 
                onChange={onChangeCheckbox}
            />
            <div className="title">{content}</div>
            <div className="time">{new Date(createdDate).toLocaleDateString()}</div>
            <button className="btn" onClick={onClickDelete}>삭제</button>
        </div>
    )
};

export default SubjectItem;