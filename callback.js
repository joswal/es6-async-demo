/*the default callback loops when trying to use asynchronous operations,
this is really bad practice as it results in callback hell */


console.log("Before asynchronous operation starts"); //logs before to depict the start of the async process
getUser(1, (user) => { //calls the getUser function and passes it an id and a callback function as arguments
    console.log(user); //logs the user object returned 
    getUserRepositories(user.gitHubUsername, (repos) => { //calls getUserRepositories function and passes username and a callback function as arguments
        console.log(repos);
        getCommits(repos[0], (commit) => { //calls getCommits function and passes repo and a callback function as arguments
            console.log(commit);
            console.log("asynchronous operations ended"); //logs done to show that the async process has finally ended
        })
    })
});
console.log("asynchronous operation have started"); //logs after to show that the async process has started and is in process while logging

function getUser(id, callback) { //high order function that accepts an id and a callback as parameters
    setTimeout(() => { //async function
        console.log("Reading a user from a database...");
        callback({ //passes a user object to the callback function as an argument
            id: id,
            gitHubUsername: "joswal"
        });
    }, 2000);
}

function getUserRepositories(username, callback) { //high order function that accepts a username and a callback as parameters
    setTimeout(() => { //async function to get user repositories
        console.log("Calling GitHub API...");
        callback(["repo1", "repo2", "repo3"]); //passes a repos array to the callback function as an argument
    }, 2000)
}

function getCommits(repo, callback) { //high order function that accepts a repository and a callback as parameters
    setTimeout(() => { //async function to get repo commit
        console.log("Calling GitHub API...");
        callback(["commit"]); //passes a commit array to the callback function as an argument
    }, 2000);
}