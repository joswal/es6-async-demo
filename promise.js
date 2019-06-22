/*promises in es 6 makes writing asynchronous operations better,
promises have two states which can be the result depending on the outcome of a task*/
function getUser(id) {
  return new Promise((resolve, reject) => { //returns a new promise waiting for a resolved or rejected result
    setTimeout(() => { //async function to  get user
      console.log("Reading a user from a database...");
      resolve({ // pending async function=> sends a user object on success of the async function after 2s
        id: id,
        gitHubUsername: "Joswal"
      })
      reject(new Error('message')); //  pending async function=>sends a new error object with a failure of the async function
    }, 2000);
  })
}

function getRepositories(username) {
  return new Promise((resolve, reject) => { //returns a new promise waiting for a resolved or rejected result
    setTimeout(() => { //async function to  get user Repositories
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]); // pending async function=> sends a repository array on success of the async function after 2s
      reject(new Error('message')); //  pending async function=>sends a new error object with a failure of the async function
    }, 2000);
  })
}

function getCommits(repo) {
  return new Promise((resolve, reject) => { //returns a new promise waiting for a resolved or rejected result
    setTimeout(() => { //async function to  get Commits
      console.log("Calling GitHub API...");
      resolve(["commit"]); // pending async function=> sends an array with "commit" on success of the async function after 2s
      reject(new Error('message')); // pending async function=>sends a new error object with a failure of the async function
    }, 2000);
  })
}

console.log("Before asynchronous operation starts"); //logs before to depict the start of the async process
//Consuming promises using then and catch, promises chaining is used to connect all the resolve states of all the returned promises
getUser(1)
  .then(user => { //gets the user object from the resolved state of the returned promise in the getUser function
    console.log(user)
    return getRepositories(user.gitHubUsername) //calls the getRepositories function and returns a promise
  })
  .then(repos => { //gets the repositories array from the resolved state of the returned promise in the getRepositories function
    console.log(repos)
    return getCommits(repos[0]) // calls the getCommits function which returns another promise
  })
  .then(commit => { //gets the commit array from the resolved state of the returned promise in the getCommits function
    console.log(commit)
    console.log("asynchronous operations ended") //logs done to show that the async process has finally ended
  })
  .catch(err => {
    console.log(`error: ${err.message}`) //catches the error from the reject states of the promises if they fail
  });

console.log("asynchronous operations have started"); //logs after to show that the async process has started and is in process while logging