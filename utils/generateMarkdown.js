function generateMarkdown(response, answers) {
  return `

  ![Profile Image](${response.data.avatar_url})

# ${answers.title}

`;
}

module.exports = generateMarkdown;
