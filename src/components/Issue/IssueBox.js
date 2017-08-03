import React from 'react';

{/*component to hold all issue-related components in IssueLog*/}

const Issue = ({ issuetype, column, descript, requester, date }) => (
	<div style={{margin: 4, border: "solid"}}>
		<h5> {issuetype} - {column} </h5>
		<h4> {requester} said on {date} ... </h4>
		<p> {descript} </p>
	</div>
)

const IssueList = ({ issues }) => (
	<div>
		{issues.map((issue) => (
			<Issue key={issue.key} issuetype={issue.issuetype} column={issue.column} descript={issue.descript} requester={issue.requester} date={issue.date} />
		))}
	</div>
)

class IssueBox extends React.Component {

  render() {
  	const { issues = [] } = this.props
    return (
    	<div>
    		<IssueList issues={issues} />
		</div>
    );
  }
}

export default IssueBox;
