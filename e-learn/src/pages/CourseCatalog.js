import './CourseCatalog.scss';
import {useNavigate} from "react-router-dom";
import JavaVideoView from "./JavaVideoView";
import ProgressBar from 'react-bootstrap/ProgressBar';


//Added Course Catalog
function CourseCatalog(){
    let navigate = useNavigate();
    return  ( <div>
        <h1 className='head1'> Course Catalog  </h1> 
        <div className='grid-container1'>
        <div className='box1' onClick={() => {navigate('/WebDesignVideoView')}}>Web Design</div>
    <div className='box2'  onClick={() => {navigate('/JavaVideoView')}}>Java</div>
    <div className='box3'  onClick={() => {navigate('/PythonVideoView')}}>Python</div>
    <div className='box4' onClick={() => {navigate('/CVideoView')}}>C++</div>
    


        </div>

   
   
    <label className="progress-size">Congratulations! If you have landed on this page, you have made great progress! You can see your course progress below!</label>
    
    <ProgressBar animated now={10}  label={`10%`}  />

    </div> 



    
    
    )
}

export default CourseCatalog;