import React from "react";
import { Routes, Route } from 'react-router-dom';
import App from "./app/App";
import Page2 from "./page2/Page2";
import Page3 from "./page3/Page3";
import Page4 from "./page4/Page4";

class Bridge extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/about" element={<Page2 />}></Route>
                    <Route path="/prevtransactions" element={<Page3 />}></Route>
                    <Route path="/ftbr" element={<Page4 />}></Route>
                </Routes>
            </>
        );
    }
}

export default Bridge;