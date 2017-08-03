import React from 'react';

import DiscussionBox from './Discussion/DiscussionBox';
import IssueBox from './Issue/IssueBox';
import state from '../state';

{/*component to hold all issues logged from IssueReport and corresponding discussion*/}

class IssueLog extends React.Component {
  render() {
    return (
      <div>
    	   <h1 style={{textAlign: "center"}}> Issue Log </h1>
          <h2> Issue Box </h2>
          <IssueBox issues={state.issues} />
          <h2> Discussion Box </h2>
    	    <DiscussionBox comments={state.comments} />
		  </div>
    );
  }
}

export default IssueLog;