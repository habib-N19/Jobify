import { jwtDecode } from "jwt-decode";

export const verifyAccessToken = (accessToken: string) => {
	if (accessToken) {
		return jwtDecode(accessToken);
	}
	return null;
};
