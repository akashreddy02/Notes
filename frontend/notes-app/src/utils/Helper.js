export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); // Returns true if valid, false if invalid
};

export const getInitials = (name) => {
  if (!name) return "";
  const words = name.split(" "); // Split the name by spaces to get words
  let initials = "";
  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i].charAt(0).toUpperCase(); // Get the first letter of each word
  }
  return initials; // Return the initials (e.g., "AR" for "Akash Reddy")
};
