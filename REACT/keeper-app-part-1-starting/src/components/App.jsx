import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import tasks from "../tasks";

function App()
{
    return(
    <div>
            <Header/>
            <Footer />
            <Note title={tasks[0].title} content={tasks[0].content}/>
            <Note title={tasks[1].title} content={tasks[1].content}/>
    </div>
    )
};

export default App;