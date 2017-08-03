import React from 'react';
import state from '../state';

const Select = ({ items, ...props }) => (
	<select {...props}>
	{items.map((item) => (
		<option key={item.value} value={item.value}>{item.value}</option>
	))}
	</select>
)

class IssueReport extends React.Component {
	constructor() {
    super();
    this.state = {
    	column: '',
    	issue: '',
    };
  }

	onSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		
		//{
			//type: 'add_issue',
			//payload: {
				//id: 5,
				//issueType: this.state.issue,
				//column: this.state.column,
				//descript: this.state.descript,				
			//}
		//}

		//state.issues.push({
			//id: 5,
			//issueType: this.state.issue,
			//column: this.state.column,
			//descript: this.state.descript,
		//});
		
		// this.setState({
		// 	saving: true,
		// })
		// setTimeout(() => {
		// 	this.setState({
		// 		saving: false,
		// 	})
		// }, 3000)
	}

	onChange = (event) => {
		this.setState({
      		[event.target.name]: event.target.value,
    	});
	    if (this.props.onChange) {
	      this.props.onChange(this.state);
	    }
  	}

  render() {
	  const { colItems = [], issueItems = [] } = this.props;

	  // if (this.state.saving) {
	  	// return <h1>Saving...</h1>;
	  // }

    return (
    	<div>
		<form onSubmit={this.onSubmit}>
			<h1 style={{textAlign: "center"}}> Issue Report </h1>
	        <Select items={colItems} name="column" onChange={this.onChange} style={{margin: "10px"}}/>
			<Select items={issueItems} name="issue" onChange={this.onChange} style={{margin: "10px"}}/> <br/>
			<label style={{marginLeft: "10px"}}> Description </label> <br/>
			<textarea name="descript" onChange={this.onChange} style={{marginLeft: "10px", marginRight: "10px", width:"300px", height:"100px"}}/> 
			<input type="submit" value="Submit" />
		</form>
		</div>
    );
  }
}


export default IssueReport;