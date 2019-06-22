/*the default callback loops when trying to use asynchronous operations,
this is really bad practice as it results in callback hell */


console.log("Before asynchronous operation starts"); //logs before to depict the start of the async process
getUser(1, (user) => { //calls the getUser function and passes it an id and a callback function as parameters
    console.log(user); //logs the user object returned 
    getUserRepositories(user.gitHubUsername, (repos) => { //calls getUserRepositories function and passes username and a callback function as parameters
        console.log(repos);
        getCommits(repos[0], (commit) => { //calls getCommits function and passes repo and a callback function as parameters
            console.log(commit);
            console.log("asynchronous operations ended"); //logs done to show that the async process has finally ended
        })
    })
});
console.log("asynchronous operation have started"); //logs after to show that the async process has started and is in process while logging

function getUser(id, callback) {
    setTimeout(() => { //async function
        console.log("Reading a user from a database...");
        callback({ //passes a user object to the callback function as a parameter
            id: id,
            gitHubUsername: "joswal"
        });
    }, 2000);
}

function getUserRepositories(username, callback) {
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