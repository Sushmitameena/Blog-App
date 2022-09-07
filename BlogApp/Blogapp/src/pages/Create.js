import React, { useState } from "react";
// import ReactDOM from 'react-dom';
// import './App.css';

function Form() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [createdat, setCreatedat] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthorname(e.target.value);
  };

  const handleCreatedatChange = (e) => {
    setCreatedat(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e.target.value);
    alert("Blog created successfully");
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form style={{"textAlign":"center",}}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> Create a blog </h2>
          <br />

          <label>Title:</label>
          <br />
          <input
            type="text"
            value={title}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />

          <label>Category:</label>
          <br />
          <input
            type="text"
            value={category}
            required
            onChange={(e) => {
              handleCategoryChange(e);
            }}
          />
          <br />

          <label>Subcategory:</label>
          <br />
          <input
            type="text"
            value={subcategory}
            required
            onChange={(e) => {
              handleSubcategoryChange(e);
            }}
          />
          <br />

          <label>Description:</label>
          <br />
          <input
            type="text"
            value={description}
            required
            onChange={(e) => {
              handleDescriptionChange(e);
            }}
          />
          <br />

          <label>Author Name:</label>
          <br />
          <input
            type="text"
            value={authorname}
            required
            onChange={(e) => {
              handleAuthorChange(e);
            }}
          />
          <br />

          <label>Created At:</label>
          <br />
          <input
            type="date"
            value={createdat}
            required
            onChange={(e) => {
              handleCreatedatChange(e);
            }}
          />
          <br />
          <br />

           <input type="button" class="btn btn-primary" style={{"background":"blue"}} value="Submit"></input>
        </form>
      </header>
    </div>
  );
}

export default Form;
