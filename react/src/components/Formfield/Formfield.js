import React from 'react';
import './Formfield.css';
import mailImg from '../../assets/mail.png';
import lockImg from '../../assets/lock.png';
import ok from '../../assets/sucsess.png';
import wrong from '../../assets/wrong.png';

class Formfield extends React.Component {
    constructor (){
        super();
        this.state = {
            emailValid: null,
            password: "",
            submited: null
        }
        this.emailValidator = this.emailValidator.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    
    
    emailValidator(e){
        let regExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        let text = e.target.value;
        if (regExp.test(text)) {
            this.setState({ emailValid: true})
        } else {
            this.setState({ emailValid: false})
        }        
    }
    submitHandler (e){
        e.preventDefault(); 
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        if (this.state.emailValid && password.value) {
            this.setState({ submited: true })
            password.style.borderColor = "green";
            email.style.borderColor = "green"
            setTimeout(document.location.reload(true),5000);
        } else {
            password.value = "";
            this.setState({ submited: false })
        }
    }
    render(){
        return(
            <div className="field">
                <form onSubmit={this.submitHandler}>
                    <div className="inputs">
                        <img src={mailImg} alt="email" className="icon" />
                        <input id="email" placeholder="Email" type="text" onChange={this.emailValidator} />
                        {
                            (this.state.emailValid !== null) ? (this.state.emailValid ? <img src={ok} className="valid" alt="ok"/> : <img src={wrong} className="valid" alt="wrong"/>) : console.log("null")
                        }
                        {
                            (this.state.submited !== null) ? (!this.state.submited ? <p className="wrongEmail">Invalid Username</p> : console.log("need submit")) : console.log("null")
                        }
                    </div>
                    <div className="inputs">
                        <img src={lockImg} alt="email" className="icon" />
                        <input id="password" placeholder="Password" type="password" />
                        {
                            (this.state.submited) ? <img src={ok} className="valid" alt="wrong"/> : console.log('need submit')
                        }
                    </div>
                    <div className="loginBtn">
                        <button>Login</button>
                        <p>
                            Forgot your password? <a href="">Reset it here</a>
                        </p>
                    </div>
                </form>    
            </div>
        )
    }
}

export default Formfield;