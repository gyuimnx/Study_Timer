import React, {useState} from "react";
import "./SubjectList.css";
import SubjectItem from "../Item_Subject/SubjectItem";

function SubjectList({subject, onUpdate, onDelete, onSelectSubject}) {
    const [search, setSearch] = useState("");
    function onChangeSearch(e) {
        setSearch(e.target.value);
    };

    function getSearchResult() {
        return search == "" ? subject : subject.filter((item) => item.content.includes(search));
    };
    return (
        <div className="SubjectList">
            <h2>과목 검색</h2>
            <div className="listWrapper">
                <input 
                    className="searchbar" 
                    value={search} 
                    onChange={onChangeSearch} 
                    placeholder="과목을 입력하세요"
                />
            </div>
            <div>
                {getSearchResult().map((item)=>(
                    <SubjectItem 
                        key={item.id} 
                        {...item} 
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        onSelectSubject={onSelectSubject}
                    ></SubjectItem>
                ))}
            </div>
        </div>
    )
};

export default SubjectList;