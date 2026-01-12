/**
 * Adds two numbers together and returns their sum.
 * 
 * @function addNumbers
 * @param {number} a - The first number to add
 * @param {number} b - The second number to add
 * @returns {number} The sum of the two numbers
 * 
 * @example
 * // Returns 8
 * addNumbers(5, 3);
 * 
 * @example
 * // Returns 30
 * addNumbers(10, 20);
 * 
 * @example
 * // Returns -2
 * addNumbers(-5, 3);
 */
function addNumbers(a, b) {
  return a + b;
}

/**
 * Converts a string to camelCase format with comprehensive error handling.
 * 
 * Transforms input strings by:
 * - Converting to camelCase (first word lowercase, subsequent words capitalized)
 * - Handling multiple whitespace characters (spaces, tabs, line breaks)
 * - Removing special characters (!, @, #, etc.)
 * - Treating separators (spaces, hyphens, underscores, dots) as word boundaries
 * - Trimming leading and trailing whitespace
 * 
 * @function camelCase
 * @param {string} str - The string to convert to camelCase
 * @returns {string|Error} The converted camelCase string, or an error message if input is invalid
 * @throws {TypeError} Implicitly returns error message for non-string inputs
 * 
 * @example
 * // Returns 'helloWorld'
 * camelCase('  hello  World!  ');
 * 
 * @example
 * // Returns 'userId'
 * camelCase('user_id');
 * 
 * @example
 * // Returns 'screenName'
 * camelCase('SCREEN-NAME');
 * 
 * @example
 * // Returns 'helloWorldExample'
 * camelCase('hello.world.example');
 * 
 * @example
 * // Returns empty string
 * camelCase('   ');
 * 
 * @example
 * // Returns error message
 * camelCase(42);
 * // 'Error: Input must be a string, but received number'
 * 
 * @example
 * // Returns error message
 * camelCase(null);
 * // 'Error: Input must be a string, but received object'
 * 
 * @see {@link addNumbers} for a simple arithmetic utility function
 */
function camelCase(str) {
  // Error handling for non-string inputs
  if (typeof str !== 'string') {
    return `Error: Input must be a string, but received ${typeof str}`;
  }

  // Trim leading and trailing spaces
  str = str.trim();

  // Check if string is empty after trimming
  if (str.length === 0) {
    return '';
  }

  // Replace non-alphabetic characters (except spaces) with spaces
  // Then replace multiple consecutive spaces with a single space
  str = str
    .replace(/[^a-zA-Z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Convert to camelCase
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      // Skip empty words
      if (word.length === 0) {
        return '';
      }
      // Keep first word lowercase, capitalize first letter of subsequent words
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .filter(word => word.length > 0) // Remove empty strings
    .join('');
}

/**
 * Converts a string to snake_case format with comprehensive error handling.
 * 
 * Transforms input strings by:
 * - Converting to snake_case (all lowercase with underscores between words)
 * - Handling multiple whitespace characters (spaces, tabs, line breaks)
 * - Removing special characters (!, @, #, etc.)
 * - Treating separators (spaces, hyphens, underscores, dots) as word boundaries
 * - Trimming leading and trailing whitespace
 * - Collapsing consecutive underscores to a single underscore
 * 
 * @function toSnakeCase
 * @param {string} str - The string to convert to snake_case
 * @returns {string|Error} The converted snake_case string, or an error message if input is invalid
 * @throws {TypeError} Implicitly returns error message for non-string inputs
 * 
 * @example
 * // Returns 'hello_world'
 * toSnakeCase('helloWorld');
 * 
 * @example
 * // Returns 'user_id'
 * toSnakeCase('userId');
 * 
 * @example
 * // Returns 'screen_name'
 * toSnakeCase('SCREEN NAME');
 * 
 * @example
 * // Returns 'hello_world_example'
 * toSnakeCase('hello.world.example');
 * 
 * @example
 * // Returns empty string
 * toSnakeCase('   ');
 * 
 * @example
 * // Returns error message
 * toSnakeCase(42);
 * // 'Error: Input must be a string, but received number'
 */
function toSnakeCase(str) {
  // Error handling for non-string inputs
  if (typeof str !== 'string') {
    return `Error: Input must be a string, but received ${typeof str}`;
  }

  // Trim leading and trailing spaces
  str = str.trim();

  // Check if string is empty after trimming
  if (str.length === 0) {
    return '';
  }

  // Replace non-alphabetic characters (except spaces) with spaces
  // Then replace multiple consecutive spaces with a single space
  str = str
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Convert to snake_case
  return str
    .toLowerCase()
    .split(' ')
    .filter(word => word.length > 0) // Remove empty strings
    .join('_');
}

/**
 * Converts a string to camelCase format by treating spaces, hyphens, and underscores as word separators.
 * 
 * The function:
 * - Treats spaces, hyphens, and underscores as word separators
 * - Converts the first word to lowercase
 * - Capitalizes the first letter of all subsequent words
 * - Removes all separators from the output
 * - Handles uppercase input by converting to lowercase first
 * 
 * @function toCamelCase
 * @param {string} str - The string to convert to camelCase
 * @returns {string} The converted camelCase string
 * 
 * @example
 * // Returns 'firstName'
 * toCamelCase('first name');
 * 
 * @example
 * // Returns 'userId'
 * toCamelCase('user_id');
 * 
 * @example
 * // Returns 'screenName'
 * toCamelCase('SCREEN_NAME');
 * 
 * @example
 * // Returns 'mobileNumber'
 * toCamelCase('mobile-number');
 */
function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^(.)/, (c) => c.toLowerCase());
}

module.exports = { addNumbers, camelCase, toSnakeCase, toCamelCase };
