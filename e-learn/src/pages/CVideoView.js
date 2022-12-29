
import './CVideoView.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

// Added C++ Videos
function VideoView() {
    let navigate = useNavigate();
  return <div className="bg-container">
    <Container>
    <h1>
      C++
    </h1>
    <br/>

    <div className="grid-container">
    <div className = "gridvid1">
    <h2>
      Beginners
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/ZzaPdXTrSb8" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/vLnPwxZdW4Y" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/OTroAxvRNbw" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    </div>

    <div className = "gridvid2">
    <h2>
      Intermediate
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/wN0x9eZLix4" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/_zQqN5OYCCM" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/_bYFu9mBnr4" title="YouTube video" allow="fullscreen"></iframe>
    </div>
    </div>

    <div className = "gridvid3">
    <h2>
      Advanced
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/TGOXttOoI0U" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/GeLp4F-Svc8" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/287_oG4CNMc" title="YouTube video" allow="fullscreen"></iframe>
    </div>
    </div>
    </div>
  

  </Container>


   
  <label className="progress-size">Congratulations! If you have landed on this page, you have made great progress! You can see your course progress below!</label>
    
    <ProgressBar animated now={50}  label={`50%`}  />
    </div>


  
    
  
  
}

export default VideoView;