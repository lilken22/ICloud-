import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ICloud from './Component/Icloud';
import ICloudSignin from './Component/ICloudSignin';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ICloud />} />
                <Route path="/Icloudsignin" element={<ICloudSignin />} />
            </Routes>
        </Router>
    );
}

export default App;

