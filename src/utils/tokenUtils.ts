// Save token to local storage
export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

// Get token from local storage
export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

// Remove token from local storage
export const removeToken = (): void => {
  localStorage.removeItem("token");
};
