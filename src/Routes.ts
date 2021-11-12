export const homePath = '/';

export const loginPath = '/login';

export const recruitmentsPath = '/recruitments';
export const teaturesPath = '/teachers';
export const adminPath = '/admin';

export const profilePath = '/profile/:id';
export const buildProfilePath = (userId: string) => `/profile/${userId}`;

export const groupPath = '/group/:id';
export const buildGroupPath = (userId: string) => `/group/${userId}`;

export const signupPath = '/signup';
