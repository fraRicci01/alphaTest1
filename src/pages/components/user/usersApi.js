import React from "react";
import User from "./user";

class UserApi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: [],
		  count: 0,
		  currentUser: [],
		  user: []
		};
	  }

	getUsers() {
		fetch("https://api.example.com/items")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result.items
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
		)
	}

	UserExsist(param) {
		alert("it workd")
		var items = JSON.parse(this.state.items)
		for (let i in items) {
			if (i.logIn === param) {
				this.setState((prevState) => {
					return { count: prevState.count + 1}
				})
				this.setState({ currentUser : items })
			}		
		}
			
		if (this.state.cont === 1) {
			this.setState = {user: this.state.currentUser}
			window.location.href = "/login"
		}
	
		else if(this.state.cont === 1) {
			alert("Something went wrong");
		}
		
		else if(this.state.cont === 0) {
			alert("Password or Username wrong")
			window.location.href = "/"
		}
		
		console.log("worked")
		
	}

	createUser(param) {
		
		fetch("https://alpha20.p.rapidapi.com/",{  // Enter your IP address here

			method: 'POST', 
			headers: {
				'X-RapidAPI-Key': '387dffdfc7mshd90ee63ad38a129p1f338fjsn7da2539621e5',
				'X-RapidAPI-Host': 'alpha20.p.rapidapi.com',
				'Content-Type': 'application/json'
			  },
			mode: 'cors', 
			body: JSON.stringify(param) // body data type must match "Content-Type" header
	
		})
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result.items
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
		)
	}
  } 

  export default UserApi;