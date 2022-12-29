// Imported SCSS
import './PythonVideoView.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

import ProgressBar from 'react-bootstrap/ProgressBar';



// Added Python videos
function VideoView() {
    let navigate = useNavigate();
  return <div className="bg-container">
    <Container>
    <h1>
      Python
    </h1>
    <br/>

    <div className="grid-container">
    <div className = "gridvid1">
    <h2>
      Beginners
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/Y8Tko2YC5hA" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/Z1Yd7upQsXY" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    </div>

    <div className = "gridvid2">
    <h2>
      Intermediate
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/HGOBQPFzWKo" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/0VdzZQdaZ28" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/xWsJ_qk-eJE" title="YouTube video" allow="fullscreen"></iframe>
    </div>
    </div>

    <div className = "gridvid3">
    <h2>
      Advanced
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/Yrtm7d3TJbs" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/KSiRzuSx120" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/Kes8YRV73Io" title="YouTube video" allow="fullscreen"></iframe>
    </div>
    </div>
    </div>
  

  </Container>



   
  <label className="progress-size">Congratulations! If you have landed on this page, you have made great progress! You can see your course progress below!</label>
    
    <ProgressBar animated now={50}  label={`50%`}  />
    </div>
  
  
}

export default VideoView;