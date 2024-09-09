// Handle API or general errors
export const handleApiError = (error: any): string => {
  // You can customize this to log the error to a monitoring service
  console.error("API Error:", error);

  if (error.response && error.response.data && error.response.data.message) {
    // Return a meaningful error message from the API response
    return error.response.data.message;
  }

  // If there's no API message, return a default error message
  return "Something went wrong. Please try again.";
};

// Handle generic JavaScript errors
export const handleGenericError = (error: Error): void => {
  console.error("Generic Error:", error.message);
  alert("An error occurred. Please refresh the page or try again later.");
};
