/**
 * Create reducers async
 */
export function createReducer(initialState, handlers){
	return (state = initialState, action) => {
		const handler = handlers[action.type];
		if (!handler) return state;
		return handler(state, action);
	};
}

export default { createReducer };
