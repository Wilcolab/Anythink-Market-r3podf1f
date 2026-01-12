/**
 * REFINED PROMPT FOR CAMELCASE FUNCTION
 * 
 * Use this prompt with Copilot to generate a robust camelCase function
 */

/**
 * Prompt to use with Copilot:
 * 
 * Write a JavaScript function called `robustCamelCase` that converts any input string into camelCase format with comprehensive error handling and edge case management.
 * 
 * Requirements:
 * 1. Type Validation:
 *    - Check if the input is a string
 *    - Throw a TypeError with a descriptive message if the input is null, undefined, a number, an object, or any non-string type
 * 
 * 2. Whitespace Handling:
 *    - Remove leading and trailing whitespace
 *    - Normalize multiple consecutive spaces, tabs, and line breaks to a single space
 *    - Handle strings that are only whitespace (return empty string)
 * 
 * 3. Separator Handling:
 *    - Treat spaces, hyphens, underscores, and dots as word separators and remove them in the output
 * 
 * 4. Non-Alphabetic Characters:
 *    - Replace special characters (except separators) with spaces, then normalize
 * 
 * 5. Case Conversion:
 *    - Convert the entire string to lowercase first
 *    - Capitalize the first letter of each word except the first word
 * 
 * 6. Edge Cases:
 *    - Already camelCased strings should remain unchanged
 *    - Strings starting with numbers should keep the number at the start
 *    - Empty strings should return empty string
 *    - Single word strings should return lowercase
 * 
 * Examples:
 * - robustCamelCase("  hello  World!  ") → "helloWorld"
 * - robustCamelCase("user_id") → "userId"
 * - robustCamelCase("SCREEN-NAME") → "screenName"
 * - robustCamelCase("hello.world.example") → "helloWorldExample"
 * - robustCamelCase("123 test string") → "123testString"
 * - robustCamelCase("   ") → ""
 * - robustCamelCase("") → ""
 * - robustCamelCase(42) → throws TypeError: Input must be a string, received number
 * - robustCamelCase(null) → throws TypeError: Input must be a string, received null
 */

// Generated implementation using the refined prompt above:
function robustCamelCase(str) {
  // Type validation
  if (typeof str !== 'string') {
    throw new TypeError(`Input must be a string, received ${str === null ? 'null' : typeof str}`);
  }

  // Trim leading and trailing whitespace
  str = str.trim();

  // Handle empty strings
  if (str.length === 0) {
    return '';
  }

  // Replace non-alphabetic and non-numeric characters (except spaces) with spaces
  // Then normalize multiple spaces to single space
  str = str
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Split by spaces and convert to camelCase
  const words = str.split(' ').filter(word => word.length > 0);

  if (words.length === 0) {
    return '';
  }

  // Convert to camelCase: first word as-is (lowercase), rest capitalized
  return words
    .map((word, index) => {
      const lowerWord = word.toLowerCase();
      if (index === 0) {
        return lowerWord;
      }
      return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    })
    .join('');
}

/**
 * Converts a string to dot.case format.
 * 
 * The function:
 * - Treats spaces, hyphens, underscores, and other separators as word boundaries
 * - Converts the string to lowercase
 * - Joins words with dots
 * - Handles leading/trailing whitespace
 * - Removes special characters except word separators
 * 
 * @function toDotCase
 * @param {string} str - The string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * // Returns 'hello.world'
 * toDotCase('hello world');
 * 
 * @example
 * // Returns 'user.id'
 * toDotCase('user_id');
 * 
 * @example
 * // Returns 'screen.name'
 * toDotCase('SCREEN-NAME');
 * 
 * @example
 * // Returns 'hello.world.example'
 * toDotCase('hello world example');
 */
function toDotCase(str) {
  // Type validation
  if (typeof str !== 'string') {
    throw new TypeError(`Input must be a string, received ${str === null ? 'null' : typeof str}`);
  }

  // Trim leading and trailing whitespace
  str = str.trim();

  // Handle empty strings
  if (str.length === 0) {
    return '';
  }

  // Replace non-alphabetic and non-numeric characters (except spaces) with spaces
  // Then normalize multiple spaces to single space
  str = str
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Split by spaces, convert to lowercase, and join with dots
  return str
    .toLowerCase()
    .split(' ')
    .filter(word => word.length > 0)
    .join('.');
}

module.exports = { robustCamelCase, toDotCase };
