    import React, {useState, useRef} from "react";
    import "./SubjectEditor.css";

    function SubjectEditor({onCreate}) {
        const [content, setContent] = useState("");
        const textRef = useRef();

        function onChangeContent(e) {
            setContent(e.target.value);
        };

        function handleKeyDown(e) {
            if (e.key === 'Enter'){
                onSubmit();
            }
        };

        function onSubmit() {
            if (content.length <= 0) {
                textRef.current.focus();
            } else {
                onCreate(content);
                setContent("");
            }
        };

        return (
            <div className="SubjectEditor">
                <h2>과목 추가</h2>
                <div className="editorWrapper">
                    <input
                        ref={textRef}
                        value={content} 
                        onChange={onChangeContent}
                        placeholder="과목 입력"
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={onSubmit}>추가</button>
                </div>
            </div>
        )
    };

    export default SubjectEditor;