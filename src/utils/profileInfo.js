import profilePicture from 'images/profile-default.png';

export const defaultImage = profilePicture;
export let image = defaultImage;

export const setImage= (picture) => {
	image = picture
}