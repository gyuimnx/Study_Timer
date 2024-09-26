import React from "react";
import "./SubjectItem.css";

function SubjectItem({id, isDone, content, createdDate, onUpdate, onDelete, onSelectSubject}) {
    function onChangeCheckbox(e) {
        e.stopPropagation();
        onUpdate(id);
    };
    function onClickDelete(e) {
        e.stopPropagation();
        onDelete(id);
    };
    function onClickItem() {
        onSelectSubject(id);
    }
    return (
        <div className="SubjectItem" onClick={onClickItem}>
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