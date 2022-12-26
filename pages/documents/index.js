import React from 'react';
import Sheet from "../../components/sheet/sheet";

const Document = () => {
    function onClick() {
        console.log('index.js:7 ->',);
    }
    return (
        <div>
            <Sheet/>
        </div>
    );
};

export default Document;