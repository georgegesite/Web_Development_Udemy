import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch tasks from your backend when the component mounts
    axios.get("http://localhost:4000/todolist/")
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  function addNote(newNote) {
    // Add the new note to the state
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    // Send a DELETE request to your backend
    axios.delete(`http://localhost:4000/todolist/${id}`)
      .then(response => {
        console.log("Note deleted successfully:", response.data);
        
        // Remove the deleted note from the state based on its 'id' property
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
      })
      .catch(error => {
        console.error("Error deleting note:", error);
      });
  }
  
  

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
