import React, { Component } from 'react';
import MyButton from './../util/MyButton';
import Fade  from 'react-reveal';
class Popup extends Component {
    
    //this page will handle popup for startquiz and restart quiz
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Welcome to Your Assessment Module',
            text: 'This Assessment module will test your knowledge.',
            buttonText: 'Start the quiz' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });

            //alert("START THE QUIZ");
            this.props.startQuiz();
        } else {
            
            //alert("FINISHED QUIZ");            
            window.location.reload();// restart the application
        }
    }
     
    createMarkup(text) {
        return {__html: text};
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'You have completed the Assessment. <br /> You got: <strong>' + this.props.score + 
            '</strong> out of <strong>' + 
            this.props.total +
            '</strong> questions right.'
        })
    }

    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <Fade delay={500}>
                <div className="popup-container" style={style}>
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup">
                                <h1 className="title-style">{title}</h1>
                                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                                <span onClick={this.popupHandle}>
                                    <MyButton
                                        text={buttonText}
                                        bck='#FF9800'
                                        color='#fff'
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Popup; 

