import React from 'react';
import {Routes , Route , Navigate} from "react-router-dom";
import styles from "./styles/App.module.css";

import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/SignUp" element={<SignUp />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="*" element={<Navigate to="SignUp" replace />}/>
            </Routes>
        </div>
    );
};

export default App;