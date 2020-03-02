import React, { Component } from "react";
// import "./index.css";
import Store from "../../utils/store";
import {LoginFormContainer, LoginFormRow,  Panel, Logo, DivMain, FormGroup, InputFormControl, LoginButton} from './loginStyle';
import { Alert } from 'reactstrap';

class Login extends Component {
  
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
            alert: false
        }
    }

    handleOnChangeInput = evt =>{
        this.setState({[evt.target.id]: evt.target.value});
    };

    handleSubmit = (e) => {
        const state = this.state;
        e.preventDefault();
        e.stopPropagation();
        var username = state.username;
        var password = state.password;
        if(username === "shaadi" && password === "123"){
            Store.store.dispatch({
                type: "LOGIN"
            });
        }
        else{
            this.setState({
                alert: true,
                username: "",
                password: ""
            });
        }
    };


    render() {
        const state = this.state;
        return (
        
        <LoginFormContainer id="LoginForm">

            <LoginFormRow>
                <DivMain>
                <Panel>
                    <Logo
                    src="images/logo.png"
                    alt="Logo"
                    />

                    <p>Please enter username and password</p>
                </Panel>
                <form id="Login" onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <InputFormControl
                        type="text"
                        id="username"
                        required
                        onChange={this.handleOnChangeInput}
                        placeholder="Username"
                        value={state.username}
                    />
                    </FormGroup>

                    <FormGroup>
                    <InputFormControl
                        type="password"
                        id="password"
                        required
                        onChange={this.handleOnChangeInput}
                        placeholder="Password"
                        value={state.password}
                    />
                    </FormGroup>
                    {(state.alert) &&
                        <Alert color="danger">
                            The User Name or Password entered is incorrect. Please try again.
                        </Alert>
                    }
                    <LoginButton type="submit">
                    Login
                    </LoginButton>
                </form>
                </DivMain>
                <p>Designed by Manas Suri</p>
            </LoginFormRow>
        </LoginFormContainer>
        );
    }
}

export default Login;
