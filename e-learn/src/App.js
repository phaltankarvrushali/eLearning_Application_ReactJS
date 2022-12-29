import React from 'react';
import "./App.scss";
import { Navigate, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import FeedBack from './components/feedback_components/Feedback.js';
import Blogs from './pages/Blog/index.jsx';
import BlogDetail from './pages/Blog/blog.jsx';

// Compontent import 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages import 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/CourseCatalog";
import Learning from "./pages/Learning";
import Cart from "./pages/Cart";
import Settings from "./pages/Settings";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Course from "./pages/Course";
import JavaVideoView from "./pages/JavaVideoView";
import WebDesignVideoView from "./pages/WebDesignVideoView";
import PythonVideoView from "./pages/PythonVideoView";
import CVideoView from "./pages/CVideoView";
import AddModifyCourse from "./pages/AddModifyCourse";
import Assessment from './components/core/Main';
import LectureNotes from './Todo';



function App() {
  return (
    <UserAuthContextProvider>
      <div className="app-wrap">
        <Navbar />
        <Sidebar />
        <div className="app" className='main-blog'>

        <FeedBack
				style={{zIndex:'1', position:'fixed', left:'2px!'}}
				position="left"
				numberOfStars={5}
				headerText="Feedback"
				bodyText="Please give us your feedback!"
				buttonText="Feedback?"
        
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => 

					fetch('http://localhost:5010/feedback', {
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json'
						},
						method: 'POST', // or 'PUT'
						body: JSON.stringify(data),
					}).then((response) => { 
						if (!response.ok) {
							return Promise.reject('Thank you for your feedback!');
						}
						response.json()
					}).then(() => {
						alert('Success!');
					}).catch((error) => {
						alert('Thank you for your feedback!', error);
					})
				}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<ProtectedRoute><Learning /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            {/* <Route path="/settings" element={<ProtectedRoute><Settings /></s>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />           
            <Route path="/signup" element={<Signup />} />
            <Route path="/JavaVideoView" element={<JavaVideoView />} />
            <Route path="/WebDesignVideoView" element={<WebDesignVideoView />} />
            <Route path="/PythonVideoView" element={<PythonVideoView />} />
            <Route path="/CVideoView" element={<CVideoView />} />
            <Route path="/AddModifyCourse" element={<AddModifyCourse />} />
            <Route path="/Assessment" element={<Assessment />} />
            <Route path="/LectureNotes" element={<LectureNotes />} />
            <Route path="/learning/:id" element={<ProtectedRoute><Course /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
