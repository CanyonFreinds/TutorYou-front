export const homePath = '/';

export const loginPath = '/login';

export const recruitmentsPath = '/recruitments';
export const recruitmentPath = '/recruitment/post/:postId';
export const recruitmentWritePath = '/recruitment/write';
export const buildRecruitmentPath = (postId: number) => `/recruitment/post/${postId}`;

export const teaturesPath = '/teachers';
export const adminPath = '/admin';

export const profilePath = '/profile/:id';
export const buildProfilePath = (userId: number) => `/profile/${userId}`;

export const groupPath = '/group/:id';
export const buildGroupPath = (userId: number) => `/group/${userId}`;

export const signupPath = '/signup';

export const chatPath = '/chatting';
