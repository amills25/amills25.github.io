import React from "react";
import AboutMe from "./Pages/AboutMe";
import Blog from "./Pages/Blog";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

export default function App() {
    return (
        <div className="App">
            <>
                <AboutMe />
                <Projects />
                <Blog />
                {/* <Contact /> */}
            </>
        </div>
    );
}
