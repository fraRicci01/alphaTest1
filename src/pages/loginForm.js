import React from "react";
import UserApi from "./components/user/usersApi";


class LogInForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        }
    }
    
    handelChange = (event) => {
        this.setState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })

        console.log(event.target.name + event.target.value)
    }

    handelSubmit = () => {
        var jsonData = {
            "username": this.state.username,
            "password": this.state.password
        }

        UserApi.UserExsist(jsonData)
    }

    render() {
        return (
            <div class="container text-center" style={{padding: "50px"}}>
                <div class="row" style={{borderRadius: "15px", boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)", width: "90%", margin: "auto"}}>
                    <div class="col" style={{padding: "0px"}}>
                        <img src="https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid" alt="login image" style={{width: "100%", borderRadius: "15px 0px 0px 15px"}}/>
                    </div>
                    <div class="col" style={{textAlign: "left", paddingTop: "50px", paddingBottom: "50px"}}>
                        <form>

                            <div class="mb-3">
                                <label or="exampleInputEmail1" class="form-label">Email address</label>
                                <input value={this.state.username} onChange={this.handelChange} name = "username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input value={this.state.password} onChange={this.handelChange} name = "password" type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={this.handelSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default LogInForm;