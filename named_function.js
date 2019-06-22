/*using Named functions to solve callback Hell when trying to use asynchronous operations, 
very similar to callbacks but callback function is passed as a named parameter
not too good either but better than callback loops
requires creating extra functions*/

console.log("Before asynchronous operation starts"); //logs before to depict the start of the async process
getUser(1, getUserRepositories); //calls the getUser function and passes it an id and a named callback function as parameters
console.log("asynchronous operations have started"); //logs after to show that the async process has started and is in process while logging

function getUserRepositories(user) {
    console.log(user);
    getRepositories(user.gitHubUsername, getRepoCommits); //calls the getRepositories function and passes username and a named callback function as parameters
}

function getRepoCommits(repos) {
    console.log(repos);
    getCommits(repos[0], displayCommit); //calls the getCommits function and passes a repo and a named callback function as parameters
}

function displayCommit(commits) {
    console.log(commits);
    console.log("asynchronous operations ended"); //logs done to show that the async process has finally ended
}

function getUser(id, callback) {
    setTimeout(() => { //async function
        console.log("Reading a user from a database...");
        callback({ //passes a user object to the callback function as a parameter
            id,
            gitHubUsername: "joswal"
        });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => { //async function to get user repositories
        console.log("Calling GitHub API...");
        callback(["repo1", "repo2", "repo3"]); //passes a repos array to the callback function as a parameter
    }, 2000)
}

function getCommits(repo, callback) {
    setTimeout(() => { //async function to get repo commit
        console.log("Calling GitHub API...");
        callback(["commit"]); //passes a commit array to the callback function as a parameter
    }, 2000);
}