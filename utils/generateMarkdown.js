function generateMarkdown(response, answers) {
  return `

  ![Profile Image](${response.data.avatar_url})

# ${answers.title}

## {roject Description
 ${answers.description}

## Installation
 ${answers.installation}

## Usage
 ${answers.usage}

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
 Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

 Please make sure to update tests as appropriate.

## Test
 ${answers.test}
## Questions
## Email
 ${response.data.email}

`;
}

module.exports = generateMarkdown;
