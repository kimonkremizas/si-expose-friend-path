//// Using MongoDB drivers
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://admin:PuLCtVMXT9ohTNS0@cluster0.xdpknem.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(async err => {
//     const collection = client.db("InvitesDB").collection("Invites");

//     const items = await collection.find({}).toArray();
//     console.log(items);

//     await collection.insertOne({ invited_email: 'lol', invitee_email: 'lol' });

//     client.close();
// });



//// Using REST API
// import axios from 'axios';

// var data = JSON.stringify({
//     "collection": "Invites",
//     "database": "InvitesDB",
//     "dataSource": "Cluster0",
//     "projection": {
//         "_id": 1
//     }
// });

// var config = {
//     method: 'post',
//     url: 'https://data.mongodb-api.com/app/data-lthwp/endpoint/data/v1/action/find',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Request-Headers': '*',
//         'api-key': '4vUIujFNjADkKmd3Z5C8rJz3WKmh7LFXbQ8hhFCXH5fAjCFNIH0cAs9ALYSzRro4',
//     },
//     data: data
// };

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


//// Using Realm
// import Realm from "realm";

// const app = new Realm.App({ id: "application-0-fzpqu" });
// const credentials = Realm.Credentials.anonymous();
// try {
//     const user = await app.logIn(credentials);
//     writeOnDB(user);
// } catch (err) {
//     console.error("Failed to log in", err);
// }

// export async function writeOnDB(user) {

//     const InviteSchema = {
//         name: 'Invite',
//         properties: {
//             _id: 'objectId?',
//             invited_email: 'string?',
//             invitee_email: 'string?',
//         },
//         primaryKey: '_id',
//     };

//     const realm = await Realm.open({
//         schema: [InviteSchema],
//         sync: { user, flexible: true },
//     });

//     await realm.subscriptions.update((subs) => {
//         realm.write(() => {
//             realm.create('Invite', { name: 'test1@test.com', age: 'test2@test.com' });
//         });
//         const dogs = realm.objects("Invite");
//     });

// }