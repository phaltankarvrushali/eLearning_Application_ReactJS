
import './JavaVideoView.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';




// Added Java Videos
function VideoView() {
    let navigate = useNavigate();
  return <div className="bg-container">
    <Container>
    <h1>
      Java
    </h1>
    <br/>

    <div className="grid-container">
    <div className = "gridvid1">
    <h2>
      Java
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/N8LDSryePuc" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/hs45eeZ326U" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/P6ivQ3QRq0I" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    </div>

    <div className = "gridvid2">
    <h2>
      Java OOPs
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/IUqKuGNasdM" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/Zs342ePFvRI" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/Ft88V_rDO4I" title="YouTube video" allow="fullscreen"></iframe>
    </div>
    </div>

    <div className = "gridvid3">
    <h2>
      Advanced Java 
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/rH0winlka8A" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/FLkOX4Eez6o" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/A3ZUpyrnCbM" title="YouTube video" allow="fullscreen"></iframe>
    </div>
    </div>



    </div>
  


  
  </Container>



   
  <label className="progress-size">Congratulations! If you have landed on this page, you have made great progress! You can see your course progress below!</label>
    
    <ProgressBar animated now={50}  label={`50%`}  />
      
    </div>
  
  
}


export default VideoView;

