import React from "react";
import "./DetailItem.css";

function DetailItem({id, isDone, content, createdDate, onUpdate, onDelete, onSelectSubject}) {
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
        <div className="DetailItem" onClick={onClickItem}>
            <div className="time_D">{new Date(createdDate).toLocaleDateString()}</div>
        </div>
    )
};

export default DetailItem;