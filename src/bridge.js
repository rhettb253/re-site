import React from "react";
import { Routes, Route } from 'react-router-dom';
import App from "./app/App";
import Page2 from "./page2/Page2";

class Bridge extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/about" element={<Page2 />}></Route>
                </Routes>
            </>
        );
    }
}

export default Bridge;