import {MongoClient} from 'mongodb';
import {log} from "../utils.js";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
try {
    await client.connect();
    log("Connected to mongodb");
    // Access the 'testdb' database
    const db = client.db('test_db');

    // Access the 'users' collection (it will be created if it doesn't exist)
    const usersCollection = db.collection('users');

    // Insert a sample document
    const newUser = {
        name: "John Doe",
        age: 25,
        email: "johndoe@example.com"
    };
    const insertResult = await usersCollection.insertOne(newUser);
    console.log("Document inserted with _id:", insertResult.insertedId);

    // Find a document (retrieve user by name)
    const query = { name: "John Doe" };
    const user = await usersCollection.findOne(query);
    console.log("User found:", user);

    // List all collections in the database
    const collections = await db.listCollections().toArray();

    console.log("Collections in the database:");
    collections.forEach((collection) => console.log(collection.name));
} catch (e) {
    console.error(e);
} finally {
    client.close();
}
