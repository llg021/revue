import React from 'react';

import {
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import IssueReport from './IssueReport';
import IssueLog from './IssueLog';


const colItems = [
{value: ""},
		{value: "Patient ID"},
		{value: "Date of Birth"},
		{value: "Temperature"},
		{value: "Heart Rate"},
		{value: "Blood Pressure"}
	];

const issueItems = [
	{value: ""},
		{value: "Missing value"},
		{value: "Implausible numerical value"},
		{value: "Date time inconsistency"},
		{value: "Illegal vocabulary"},
		{value: "Future event"}
	];

const Nav = () => (
  <header> 
  	<li><Link to='/issuereport'>Issue Report</Link></li>
  	<li><Link to='/issuelog'>Issue Log</Link></li>
  </header>
)

class App extends React.Component {

  render() {
    return (
    	<div>
    		<Nav/>
    		<Switch>
      			<Route path='/issuereport' render={(props) => ( <IssueReport colItems={colItems} issueItems={issueItems}/> )} />
      			<Route path='/issuelog' component={IssueLog}/>
    		</Switch>
		</div>
    );
  }
}


export default App;
