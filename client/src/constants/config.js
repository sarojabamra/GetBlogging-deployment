export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being loaded. Please wait...",
  },
  success: {
    title: "Success",
    message: "Data successfully loaded.",
  },
  responseFailure: {
    title: "Error",
    message:
      "A error occured while fetching response from the server. PLease try again.",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing request data",
  },

  networkError: {
    title: "Error",
    message:
      "Unable to connect with the server. Please check connectivity and try again later.",
  },
};

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userSignin: { url: "/signin", method: "POST" },
  createPost: { url: "/create", method: "POST" },
  getAllPosts: { url: "/posts", method: "GET" },
  getPostById: { url: "/post", method: "GET", query: true },
  updatePost: { url: "/update", method: "PUT", query: true },
  deletePost: { url: "/delete", method: "DELETE", query: true },
  newComment: { url: "/comment/new", method: "POST" },
  getAllComments: { url: "/comments", method: "GET", query: true },
  deleteComment: { url: "/comment/delete", method: "DELETE", query: true },
  getAllUsers: { url: "/users", method: "GET" },
  updateIsAdmin: { url: "/user/admin", method: "PUT", query: true },
  deleteUser: { url: "/user/delete", method: "DELETE", query: true },
  getAllUnapprovedPosts: { url: "/unapprovedposts", method: "GET" },
  approvePost: { url: "/approve-post", method: "PATCH", query: true },
  uploadFile: { url: "/file/upload", method: "POST" },
};
