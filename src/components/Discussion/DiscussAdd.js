import React from 'react';

class DiscussAdd extends React.Component {
	constructor() {
    super();
    this.state = {
    	discusstext:'',
    	resolved: false
    };
  }

	onSubmit = (event) => {
		this.setState({
			error: this.state.discusstext === '' && this.state.resolved === true ? 'Must indicate resolution.': null
		});
		console.log(this.state);
		event.preventDefault();
	}


	onChange = (event) => {
		const name = event.target.name;
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState({
      		[name]: value,
    	});
	    if (this.props.onChange) {
	      this.props.onChange(this.state);
	    }
  	}

  render() {
	  
    return (
    	<div>
			<form onSubmit={this.onSubmit} style={{marginTop: "40px"}}>
				{this.state.error ? <p style={{color:'red'}}> {this.state.error} </p> : undefined}
				<label style={{marginLeft: "10px"}}> Add to the Discussion </label> <br/>
				<textarea name="discusstext" onChange={this.onChange} style={{marginLeft: "10px", marginRight: "10px", width:"300px", height:"100px"}}/>
				<input type="submit" value="Submit" /> <br/>
				<input type="checkbox" name="resolved" onChange={this.onChange} style={{marginLeft: "175px"}}/> Mark as resolved
			</form>
		</div>
    );
  }
}

export default DiscussAdd;