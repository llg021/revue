import React from 'react';

import DiscussAdd from './DiscussAdd';

{/*component to hold all discussion-related components*/}

const Comment = ({author, date, text}) => (
	<div style={{margin: 4, border: "solid"}}>
		<h4> {author} said on {date} ... </h4>
		<p> {text} </p>
	</div>
)

const DiscussList = ({ comments }) => (
	<div>
		{comments.map((comment) => (
			<Comment key={comment.key} author={comment.author} date={comment.date} text={comment.text}/>
		))}
	</div>
)

class DiscussionBox extends React.Component {

  render() {
  	const { comments = [] } = this.props
    return (
    	<div>
    		<DiscussList comments={comments} />
			<DiscussAdd />
		</div>
    );
  }
}

export default DiscussionBox;
