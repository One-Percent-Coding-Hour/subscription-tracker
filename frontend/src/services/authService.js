export const authService = {
  signup: async (email, password) => {
    const user = { email };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  },

  login: async (email, password) => {
    if (email === "test@example.com" && password === "1234") {
    const user = { email };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  },

  getUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },

  logout: () => {
    localStorage.removeItem("user");
  },
};
