// To fetch all to do items
import React, {useState} from 'react';
import './Todoitems.scss';

//let array = [];

function TodoItems() {

    const [data, setData] = useState([]);
    const [isShown, setIsShown] = useState(false);
    //const[element, setElement] = useState([]);

    const handleClick = event => {
        if (event.target.style.textDecoration) {
          event.target.style.removeProperty('text-decoration');
        } else {
          event.target.style.setProperty('text-decoration', 'line-through');
        }
      };

      
      

    
    function handleCl(){
      //console.log("object vlaue is"+objectVal);
      setIsShown(current => !current);
      // array.push(objectVal);
      // setElement(array);
      //console.log("array is"+JSON.stringify(array));
      return( <div>
        Hello!! Palak Banwari
      </div>);



 
    
     // setIsShown(false);
      


    };
    
   
    
    // Get Method
    const apiGet = () => {
        fetch("http://localhost:9000/items")
        .then((response) => response.json())
       .then((json) => { 
        
       console.log(json);
       setData(json);

});
};






return(
    <div className="leftpos">

    <div className="buttonstyle">
            <br/>
        View Lecture Content <br/>
        <br/>
        <button onClick={apiGet}> View </button>
        <br/>
        </div>
        {/*<pre>{JSON.stringify(data,null,2)} </pre>*/}
      <div>

      <ul className= "titleHeading">
            {data.map(item =>
                <li onClick={() => handleCl()}> {item.lectureName} </li>)}
        </ul>

        {isShown && (<ul >
        {data.map(eachelement =>
        
        <li onClick={handleClick}> Lecture Name : {eachelement.lectureName} <br/> <br/> 
            Lecture Notes: {eachelement.lectureNotes} <br/> <br/> Lecture Due Date: {eachelement.lectureDueDate}
              <br/> <br/>Lecture Time : {eachelement.lectureTime}
              <br/> <br/>Created Date: {eachelement.createdDate}
              <br/> <br/> Last Modified Date:  {eachelement.lastModifiedDate}  </li> )}
    </ul>

     )} 

        



      </div>


        
    </div>
);
   
}

export default TodoItems;