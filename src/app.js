function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet; // Export the function for use in other files

// If run directly, print output (useful for debugging)
if (require.main === module) {
  console.log(greet("World"));
}

