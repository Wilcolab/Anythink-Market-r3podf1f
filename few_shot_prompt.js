/**
 * Few-Shot Prompt Examples
 * 
 * This file contains few-shot prompts and examples for generating code
 * with contextual learning from multiple examples.
 */

/**
 * Example 1: Converting strings to different case formats
 * 
 * Input: "hello world"
 * Expected Output (camelCase): "helloWorld"
 * Expected Output (snake_case): "hello_world"
 * Expected Output (PascalCase): "HelloWorld"
 */

/**
 * Example 2: Handling separators in strings
 * 
 * Input: "user_first_name"
 * Expected Output (camelCase): "userFirstName"
 * Expected Output (PascalCase): "UserFirstName"
 * Expected Output (snake_case): "user_first_name"
 */

/**
 * Example 3: Handling special characters
 * 
 * Input: "Hello@World#Test!"
 * Expected Output (camelCase): "helloWorldTest"
 * Expected Output (snake_case): "hello_world_test"
 * Expected Output (PascalCase): "HelloWorldTest"
 */

/**
 * Example 4: Handling whitespace
 * 
 * Input: "  hello   world  "
 * Expected Output (camelCase): "helloWorld"
 * Expected Output (snake_case): "hello_world"
 * Expected Output (PascalCase): "HelloWorld"
 */

module.exports = {
  examples: [
    {
      input: "hello world",
      camelCase: "helloWorld",
      snake_case: "hello_world",
      pascalCase: "HelloWorld"
    },
    {
      input: "user_first_name",
      camelCase: "userFirstName",
      snake_case: "user_first_name",
      pascalCase: "UserFirstName"
    },
    {
      input: "Hello@World#Test!",
      camelCase: "helloWorldTest",
      snake_case: "hello_world_test",
      pascalCase: "HelloWorldTest"
    },
    {
      input: "  hello   world  ",
      camelCase: "helloWorld",
      snake_case: "hello_world",
      pascalCase: "HelloWorld"
    }
  ]
};
