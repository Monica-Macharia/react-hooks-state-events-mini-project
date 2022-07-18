import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit,allCategory}) {
  const [input, setInput] = useState("");
  const [section, setSection] =useState("categ");

  function submitFun(event){
    event.preventDefault();
    onTaskFormSubmit({input, category});
    setInput(""); setSection("categ");
  }
  return (
    <form className="new-task-form" onSubmit = {submitFun}>
      <label>
        Details
        <input type="text" value={input}
        onChange= {(event)=>setInput(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value = {section} onChange={(event)=> setSection(event.target.value)}>{allCategory.map((categ)=>(<option key={categ}>{categ}</option>))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
