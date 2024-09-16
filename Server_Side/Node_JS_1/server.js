import express from 'express';
import { log } from "../../utils.js";
import { usersCollection } from "./mongoDB.js";
import { ObjectId } from "mongodb";

const app = express();
app.use(express.json());

// GET all users
app.get('/users', async (req, res) => {
    try {
        const allUsersData = await usersCollection.find({}).toArray();
        return res.json(allUsersData);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Failed to fetch users" });
    }
});

// GET a specific user by username
app.get('/users/:username', async (req, res) => {
    try {
        const username = decodeURIComponent(req.params.username);
        const userData = await usersCollection.findOne({ name: username });

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json(userData);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ message: "Failed to fetch user" });
    }
});

// POST create a new user
app.post('/users', async (req, res) => {
    try {
        const newUser = req.body.user;
        if (!newUser) {
            return res.status(400).json({ message: "User data is required" });
        }

        const result = await usersCollection.insertOne(newUser);
        const newUserId = result.insertedId;
        const newUserData = await usersCollection.findOne({ _id: new ObjectId(newUserId) });

        return res.status(201).json(newUserData);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Failed to create user" });
    }
});

// PUT update a user by ID
app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = req.body.user;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const filter = { _id: new ObjectId(id) };
        const update = { $set: updatedUser };

        const result = await usersCollection.updateOne(filter, update);

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const newUserData = await usersCollection.findOne(filter);
        return res.json(newUserData);
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ message: "Failed to update user" });
    }
});

// DELETE remove a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const filter = { _id: new ObjectId(id) };
        const result = await usersCollection.deleteOne(filter);

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ message: "Failed to delete user" });
    }
});

// Start the server
app.listen(4000, () => log('SERVER listening on port 4000'));
