export const IS_AUTH = 'IS_AUTH';

export const CHECK_AUTH = (googleIdToken) => ({
	type: IS_AUTH,
	payload: {
		googleIdToken: googleIdToken,
	}
});