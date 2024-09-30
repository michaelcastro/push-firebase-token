let admin = require("firebase-admin");

let serviceAccount = require("./service-account.json"); //put your service-account.json on same diretory of the app.js

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

app.options.credential.getAccessToken().then(function (customToken) {
    console.log("Bearer " + customToken.access_token);
})
    .catch(function (error) {
        console.log("Error creating custom token:", error);
    });

