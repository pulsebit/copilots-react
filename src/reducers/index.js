export const authReducer = (state, action) => {
	switch(action.type) {
		case 'AUTH':
			return state ? true : false
		default:
			return state
	}
}