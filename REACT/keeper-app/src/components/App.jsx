import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import tasks from "../tasks";

export default function App()
{
    return(
    <div>
            <Header/>
            <Footer />
            {tasks.map(task =>
            <Note 
                key = {task.id}
                title = {task.title}
                content = {task.content}
            />
            )}
    </div>
    )
};

