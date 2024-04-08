import * as React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {WebUiUris} from './Pages/WebUiUris'
import {NotFoundPage} from './Pages/NotFoundPage'
import About from "./Pages/About/About";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Home from "./Pages/Home/Home";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import TopButton from "./Components/TopButton/TopButton";

/**
 * App component.
 */
export default function App() {
    return (
        <div className="App">
            <div className="App-content">
                <Header/>
                <Routes>
                    <Route path={WebUiUris.HOME} element={<Home/>}/>
                    <Route path={WebUiUris.ABOUT} element={<About/>}/>
                    <Route path={WebUiUris.EDUCATION} element={<Education/>}/>
                    <Route path={WebUiUris.EXPERIENCE} element={<Experience/>}/>
                    <Route path={WebUiUris.PORTFOLIO} element={<Portfolio/>}/>

                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
                <Footer/>
                <TopButton/>
            </div>
        </div>
    )
}
