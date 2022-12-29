import {Link} from 'react-router-dom'
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

//Footer for home page

export default function Footer() {

    const Links = [
    ]

    return (
      <div className="footer">
       <div className="left">
        <div className="nav-logo">EdEasy</div>
        &copy; 2022
       </div>
       <div className="right">
        <Link to="/teacher">Achieve excellence on EdEasy</Link>
       </div>
      </div>
    );
  }