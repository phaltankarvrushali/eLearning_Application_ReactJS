
import './WebDesignVideoView.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';




// Web Design
function VideoView() {
    let navigate = useNavigate();
  return <div className="bg-container">
    <Container>
    <h1>
      Web Design
    </h1>
    <br/>

    <div className="grid-container">
    <div className = "gridvid1">
    <h2>
      HTML/CSS/JavaScript
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/kUMe1FH4CHE" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/1PnVor36_40" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/W6NZfCO5SIk" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    </div>

    <div className = "gridvid2">
    <h2>
      Promises/SCSS/Node.js
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/DHvZLI7Db8E" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/Zz6eOVaaelI" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/TlB_eWDSMt4" title="YouTube video" allow="fullscreen"></iframe>
    </div>
    </div>

    <div className = "gridvid3">
    <h2>
      React JS
    </h2>
      <div className="vidsize1">
    <iframe src="https://www.youtube.com/embed/Ke90Tje7VS0" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize2">
    <iframe src="https://www.youtube.com/embed/Law7wfdg_ls" title="YouTube video" allow="fullscreen"></iframe>
    </div>

    <div className="vidsize3">
    <iframe src="https://www.youtube.com/embed/Y6aYx_KKM7A" title="YouTube video" allow="fullscreen"></iframe>
    </div>
    </div>
    </div>
  

  </Container>



   
  <label className="progress-size">Congratulations! If you have landed on this page, you have made great progress! You can see your course progress below!</label>
    
    <ProgressBar animated now={50}  label={`50%`}  />
    </div>
  
  
}

export default VideoView;

