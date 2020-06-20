var database = firebase.database();

// Subscription Mail Part
// #######################################
function pushEmail(){
    var email = document.getElementById("email").value;

    writeUserData('Subscription' ,email );
    alert('You have been successfully Subscribed!');
}

function writeUserData(userId,  email) {
    // firebase.database().ref('users/' + userId).set({
     
    //   email: email,
     
    // });

    var ref = database.ref('Subscriber');
    ref.push({
        email : email
    })
}
// ########################################