// To add a new to do item
import React, {useState} from 'react';
import './TodoPost.scss';

function TodoPost() {

   
    const [inputs, setInputs] = useState([]);
    const [isShown, setIsShown] = useState(false);

    

    


// POST Method
const apiPost = () => {
  const url = "http://localhost:9000/items"

    fetch(url, {
  method: "POST",
  body: JSON.stringify({
    id: inputs.id,
    lectureName: inputs.lectureName,
    lectureNotes:inputs.lectureNotes,
    lectureDueDate:inputs.lectureDueDate,
    lectureTime:inputs.lectureTime,

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    

};

// handled change when submitted a new to do item

const handleChange =(event) => {
    event.persist();
    setInputs((input) => ({
        ...inputs,
        [event.target.name]:event.target.value,
    }))

}

const handleSubmit = (event) => {
    event.preventDefault();
    console.info("palak123456"+JSON.stringify(inputs));
    apiPost();
}

const handleClick = event => {
    setIsShown(current => !current);
};




return(
    <div className="leftpos">
   


      <div className="buttonstyle">
        <br/>
     
      Add Lecture Content
        <br/>
        <br/>
  
        <div>
        <button onClick={handleClick}> View Form</button>
        <br/>
        <br/>
           { isShown && ( <form onSubmit={handleSubmit}>
            Lecture Name:  <input type="text" name="lectureName" placeholder="Lecture Name" onChange={handleChange}/> <br/><br/>
            Lecture Notes:    <input type="text" name="lectureNotes" placeholder="Lecture Notes" onChange={handleChange}/> <br/><br/>
            Lecture Due Date:    <input type="date" name="lectureDueDate" placeholder="Lecture Due Date" onChange={handleChange}/> <br/><br/>
            Lecture Time:   <input type="time" name="lectureTime"  placeholder="Lecture Time" onChange={handleChange}/> <br/><br/>
            <input className="button" type="submit" value="Add"  onChange={handleChange} />
            </form>)}
            
        </div>

      </div>





        
    </div>
);
   
}

export default TodoPost;