/**
 * Chain-of-Thought Prompt Examples
 * 
 * This file contains chain-of-thought prompts that break down the string case conversion
 * problem into smaller, logical steps for generating more reliable code.
 */

/**
 * CHAIN-OF-THOUGHT PROMPT FOR STRING CASE CONVERSION
 * 
 * Let's think through the problem of converting strings to different case formats step by step.
 * 
 * Step 1: Understand the input
 * - The input is a string that may contain mixed separators (spaces, hyphens, underscores, dots)
 * - The input may have leading/trailing whitespace
 * - The input may have multiple consecutive separators
 * 
 * Step 2: Normalize the input
 * - Trim leading and trailing whitespace
 * - Replace all separators with a consistent delimiter (spaces)
 * - Remove special characters
 * 
 * Step 3: Split into words
 * - Split the normalized string by the delimiter
 * - Filter out empty words
 * 
 * Step 4: Transform words based on target case format
 * - For camelCase: lowercase first word, capitalize rest
 * - For snake_case: lowercase all, join with underscores
 * - For dot.case: lowercase all, join with dots
 * - For kebab-case: lowercase all, join with hyphens
 * - For PascalCase: capitalize all words
 * 
 * Step 5: Join the words
 * - Use the appropriate separator for the target format
 * 
 * Example walkthrough for "hello-world":
 * Step 1: Input is "hello-world"
 * Step 2: Normalize → "hello world" (replace - with space)
 * Step 3: Split → ["hello", "world"]
 * Step 4a (camelCase): ["hello", "World"] → join → "helloWorld"
 * Step 4b (snake_case): ["hello", "world"] → join → "hello_world"
 * Step 4c (dot.case): ["hello", "world"] → join → "hello.world"
 * Step 4d (PascalCase): ["Hello", "World"] → join → "HelloWorld"
 */

/**
 * Chain-of-thought implementation of case conversion functions
 */

/**
 * Helper function to normalize input string
 * @param {string} str - The input string
 * @returns {string[]} Array of words
 */
function normalizeString(str) {
  if (typeof str !== 'string') {
    throw new TypeError(`Input must be a string, received ${str === null ? 'null' : typeof str}`);
  }
  
  // Step 1: Trim whitespace
  str = str.trim();
  
  if (str.length === 0) {
    return [];
  }
  
  // Step 2: Replace separators with spaces and remove special characters
  str = str
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // Step 3: Split and filter
  return str.split(' ').filter(word => word.length > 0);
}

/**
 * Converts to camelCase using chain-of-thought approach
 * @param {string} str - The string to convert
 * @returns {string} The camelCase string
 */
function chainCamelCase(str) {
  const words = normalizeString(str);
  
  if (words.length === 0) return '';
  
  return words
    .map((word, index) => {
      const lower = word.toLowerCase();
      return index === 0 
        ? lower 
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

/**
 * Converts to snake_case using chain-of-thought approach
 * @param {string} str - The string to convert
 * @returns {string} The snake_case string
 */
function chainSnakeCase(str) {
  const words = normalizeString(str);
  return words.map(word => word.toLowerCase()).join('_');
}

/**
 * Converts to dot.case using chain-of-thought approach
 * @param {string} str - The string to convert
 * @returns {string} The dot.case string
 */
function chainDotCase(str) {
  const words = normalizeString(str);
  return words.map(word => word.toLowerCase()).join('.');
}

/**
 * Converts to kebab-case using chain-of-thought approach
 * @param {string} str - The string to convert
 * @returns {string} The kebab-case string
 */
function chainKebabCase(str) {
  const words = normalizeString(str);
  return words.map(word => word.toLowerCase()).join('-');
}

/**
 * Converts a string to kebab-case format with comprehensive input validation and error handling.
 * 
 * Process:
 * Step 1 (Input Validation): Verify that the input is a string. If not, throw a descriptive TypeError.
 * Step 2 (Normalization & Parsing): Convert to lowercase, split by multiple separators (spaces, hyphens, 
 *   underscores, camelCase/PascalCase boundaries), and remove non-alphabetic characters.
 * Step 3 (Transformation): Join parsed words with single hyphens to create kebab-case format.
 * Step 4 (Edge Case Handling): Handle empty strings or inputs with no valid alphabetic characters 
 *   by returning an empty string. Ensure no leading, trailing, or consecutive hyphens.
 * 
 * @function toKebabCase
 * @param {string} str - The string to convert to kebab-case
 * @returns {string} The converted kebab-case string (all lowercase, words separated by hyphens)
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * // Returns 'hello-world-test-example'
 * toKebabCase("HelloWorld_test Example");
 * 
 * @example
 * // Returns 'user-id'
 * toKebabCase('user_id');
 * 
 * @example
 * // Returns 'first-name'
 * toKebabCase('firstName');
 * 
 * @example
 * // Returns 'mobile-phone-number'
 * toKebabCase('MOBILE.PHONE.NUMBER');
 * 
 * @example
 * // Returns empty string
 * toKebabCase('   ');
 */
function toKebabCase(str) {
  // Step 1: Input Validation - Verify input is a string
  if (typeof str !== 'string') {
    throw new TypeError(`Input must be a string, received ${str === null ? 'null' : typeof str}`);
  }

  // Step 2: Normalization & Parsing - Normalize and split into words
  // First, trim whitespace
  str = str.trim();

  // Handle empty strings
  if (str.length === 0) {
    return '';
  }

  // Replace non-alphabetic and non-numeric characters with spaces
  // This handles special characters like !, @, #, ., etc.
  str = str.replace(/[^a-zA-Z0-9\s]/g, ' ');

  // Insert spaces before uppercase letters (handles camelCase and PascalCase)
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Normalize multiple consecutive spaces to single space
  str = str.replace(/\s+/g, ' ').trim();

  // Split by spaces to get individual words
  const words = str.split(' ').filter(word => word.length > 0);

  // Step 3: Transformation - Convert to lowercase and join with hyphens
  // Step 4: Edge Case Handling - Empty array returns empty string, no leading/trailing hyphens
  if (words.length === 0) {
    return '';
  }

  return words.map(word => word.toLowerCase()).join('-');
}


/**
 * Converts to PascalCase using chain-of-thought approach
 * @param {string} str - The string to convert
 * @returns {string} The PascalCase string
 */
function chainPascalCase(str) {
  const words = normalizeString(str);
  return words
    .map(word => {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

module.exports = {
  normalizeString,
  chainCamelCase,
  chainSnakeCase,
  chainDotCase,
  chainKebabCase,
  chainPascalCase,
  toKebabCase
};
