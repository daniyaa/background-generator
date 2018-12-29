var database = [
{ 
     username: "daniya",
     password: "no"
 }
   ]

var newsfeed = [
{ 
     username: "bobby",
     timeline: "so tired of learning!"
 },

{
    username: "sally",
    timeline: "javascript is cool!!"
}
]

var userNamePrompt = prompt("what's your username?")
var passwordPrompt = prompt("what's your password?")

function signIn(user, passw) {
     if (user === database[0].username && 
     	passw === database[1].password)
      { console.log(newsfeed);
      }
     else {
     	alert("sorry, worng username and password");
     }

}

signIn(userNamePrompt, passwordPrompt);