import axios from 'axios';

async function triggerGitHubAction(owner, repo, workflowId, ref, token, inputs) {
  const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`;

  const data = {
    ref: ref, // The branch you want to run the action on
    inputs: inputs
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (response.status === 204) {
      console.log('Workflow triggered successfully');
    } else {
      console.log('Unexpected response status:', response.status);
    }
  } catch (error) {
    console.error('Error triggering workflow:', error.response ? error.response.data : error.message);
  }
}

// Usage
const owner = 'Coberio';
const repo = 'coberio-broker';
const workflowId = 'create-landing.yml'; // This can be the file name or the workflow ID
const ref = 'main'; // The branch you want to run the workflow on
const token = '' //Generate personal access token;
const inputs = {
  landingId: '25c2e89b-2499-4a33-9dcf-c82d19406d17' // Replace with your desired landing ID
};

triggerGitHubAction(owner, repo, workflowId, ref, token, inputs);
