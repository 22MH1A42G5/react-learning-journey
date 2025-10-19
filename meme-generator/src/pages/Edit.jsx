import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from '../components/Text';

const EditPage = () => {
    const [params] = useSearchParams();
    console.log(params.get("url"));
    const [count , setCount] = useState(0);

    const addText = () => {
        setCount(count+1)
    }

    return (
        <div>
            <div>
                <img src={params.get("url")} alt="" width={"250px"} />
                {
                    Array(count).fill(0).map((e , index) => <div key = {index}> <Text /> </div>)
                }
            </div>
            <Button onClick={addText}> Add Text</Button>
        </div>

    )
}

export default EditPage;