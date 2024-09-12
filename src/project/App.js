import React, {useState, useRef} from "react";
import "./App.css";
import Header from "./Header";
import SubjectEditor from "./SubjectEditor";
import SubjectList from "./SubjectList";

function App() {
    const [subject, setSubject] = useState([]); 
    const idRef = useRef(0);

    function onCreate(content){
        const newItem = {
            id: idRef.current,
            isDone: false,
            content,
            createdDate: new Date().getTime(),
        };
        setSubject([newItem, ...subject]);
        idRef.current += 1;
    };

    function onUpdate(targetId) {
        setSubject(subject.map((item)=>
        item.id === targetId ? {...item, isDone: !item.isDone} : item)
        )
    };

    function onDelete(targetId) {
        setSubject(subject.filter((item)=>item.id !== targetId))
    };

    return(
        <div className="App">
            <Header></Header>
            <SubjectEditor onCreate={onCreate}></SubjectEditor>
            <SubjectList subject={subject} onUpdate={onUpdate} onDelete={onDelete}></SubjectList>
        </div>
    )
};

export default App;