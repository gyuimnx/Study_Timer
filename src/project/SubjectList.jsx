import React, {useState} from "react";
import "./SubjectList.css";
import SubjectItem from "./SubjectItem";

function SubjectList({subject, onUpdate, onDelete}) {
    const [search, setSearch] = useState("");
    function onChangeSearch(e) {
        setSearch(e.target.value);
    };

    function getSearchResult() {
        return search == "" ? subject : subject.filter((item) => item.content.includes(search));
    };
    return (
        <div className="SubjectList">
            <h2>과목 목록</h2>
            <div className="listWrapper">
                <input 
                    className="searchbar" 
                    value={search} 
                    onChange={onChangeSearch} 
                    placeholder="검색"
                />
            </div>
            <div>
                {getSearchResult().map((item)=>(
                    <SubjectItem 
                        key={item.id} 
                        {...item} 
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    ></SubjectItem>
                ))}
            </div>
        </div>
    )
};

export default SubjectList;