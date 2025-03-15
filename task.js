import { db } from "../firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, Timestamp } from "firebase/firestore";

// Function to add a task
const addTask = async (title, description) => {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            title: title,
            description: description,
            completed: false,
            created: Timestamp.now()
        });
        console.log("Task added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding task:", error);
    }
};
