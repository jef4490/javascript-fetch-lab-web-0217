function getIssues() {
  const repo = 'jef4490/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/issues', {
  headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(showIssues)
}

function showIssues(json) {
  let template = Handlebars.compile(document.getElementById("issues-template").innerHTML)
  let results = template(json)
  document.getElementById("issues").innerHTML = results
}

function createIssue() {
  const repo = 'jef4490/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/issues', {
  method: 'post',
  title: document.getElementById("title").value,
  body: document.getElementById("body").value,
  headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(getIssues)
}

function showResults(json) {
  let template = Handlebars.compile(document.getElementById("repo-template").innerHTML)
  let results = template(json)
  document.getElementById("results").innerHTML = results
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/forks', {
  method: 'post',
  headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(showResults)
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
