import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });



  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
  
    const newNote = {
      title: note.title,
      content: note.content
    };
  
    axios.post('http://localhost:4000/todolist/add', newNote)
      .then(response => {
        console.log("Note added successfully:", response.data);
  
        // Update the local state with the new note immediately
        setNote(prevNotes => [...prevNotes, response.data]);
  
        // Clear the form fields
        setNote({
          title: "",
          content: ""
        });
      })
      .catch(error => {
        console.error("Error adding note:", error);
        // Handle the error or provide feedback to the user
      });
  }
  
  

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
