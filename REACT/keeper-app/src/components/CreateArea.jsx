import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";

function CreateArea(props) {
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

        // Use the onAdd function from props to add the new note to the parent component's state
        props.onAdd(response.data);

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

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />
        <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
