import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios"; // Import Axios

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch tasks from your backend when the component mounts
    axios.get("http://localhost:4000/todolist/") // Replace with your actual API endpoint URL
      .then(response => {
        // Update the 'notes' state with the fetched data
        setNotes(response.data);
      })
      .catch(error => {
        console.error("Error fetching tasks:", error);
        // Handle the error or provide feedback to the user
      });
  }, []); // The empty array [] ensures that this effect runs once when the component mounts

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
