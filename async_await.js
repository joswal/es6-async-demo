/* the async/await method also uses promises but uses synctactic sugar to make the code look better
this is my personal favuorite for asynchronous functions, it removes all the then promises chaining and uses syntactic sugar to make it better*/
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


// consuming promises using async/await, the await is used to depict that we are getting a promise
async function displayCommit() {
    try {
        const user = await getUser(1); //gets the user object from the resolved state of the promise returned by the getUser function
        console.log(user)
        const repos = await getRepositories(user.gitHubUsername); //gets the repository array from the resolved state of the promise returned by the getRepositories function
        console.log(repos);
        const commit = await getCommits(repos[0]); //gets the commit array from the resolved state of the promise returned by the getCommits function
        console.log(commit)
        console.log("asynchronous operations ended"); //logs done to show that the async process has finally ended
    } catch (err) {
        console.log(`error: ${err.message}`) //catches the error from the reject states of the returned promises if they fail
    }
}
console.log("Before asynchronous operation starts"); //logs before to depict the start of the async process
displayCommit(); //calling the async displayCommit function
console.log("asynchronous operations have started"); //logs after to show that the async process has started and is in process while logging 