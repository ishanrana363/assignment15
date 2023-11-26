import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppNavbar from "./components/AppNavbar.jsx";
import DataListPage from "./pages/DataListPage.jsx";
import SaveDataPage from "./pages/SaveDataPage.jsx";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <AppNavbar/>
                <Routes>
                    <Route path= "/" element={<DataListPage/>}/>
                    <Route path= "/save" element={<SaveDataPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;