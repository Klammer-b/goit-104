export const serializeUser = (user) => ({
  name: user.name,
  email: user.email,
  id: user._id,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
  avatarUrl: user.avatarUrl,
});
