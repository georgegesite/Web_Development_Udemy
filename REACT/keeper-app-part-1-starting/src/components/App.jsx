import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App()
{
    return(
    <div>
            <Header/>
            <Footer />
            <Note title="Study" content="Learn DSA & OOP"/>
            <Note title="Review" content="LeetCode and JS Syntax"/>
        </div>
    )
};

export default App;