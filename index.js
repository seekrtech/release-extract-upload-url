const core = require('@actions/core')
const github = require('@actions/github')

try {
  const url = github.context.payload['release']['upload_url']
  core.setOutput('upload_url', url);
} catch (error) {
  core.setFailed(error.message);
}
