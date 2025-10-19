import React , {useRef, useState} from "react";
import Draggable from "react-draggable";

const Text = () => {
    const [editMode , setEditMode] = useState(false);
    const [val , setVal] = useState("Double Click to Edit");

    const nodeRef = useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            {
                editMode ? (<input ref = {nodeRef} onDoubleClick={e => setEditMode(false)} value={val} onChange={ (e) => setVal(e.target.value)} />) : 
                (<h1 ref = {nodeRef} onDoubleClick={e => setEditMode(true)}>{val}</h1>)
            }
            {/* <h1 ref = {nodeRef}>{val}   </h1> */}
        </Draggable>
    )
}

export default Text;