export default (state = {}, action) => {
	switch (action.type) {
	case 'add_issue':
		state.issues.push(action.payload);
	}
}