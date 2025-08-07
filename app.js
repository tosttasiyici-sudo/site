import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const messagesRef = collection(db, "messages");

const q = query(messagesRef, orderBy("createdAt"));
onSnapshot(q, (snapshot) => {
  const msgDiv = document.getElementById("messages");
  msgDiv.innerHTML = "";
  snapshot.forEach((doc) => {
    const msg = document.createElement("p");
    msg.textContent = doc.data().text;
    msgDiv.appendChild(msg);
  });
});

window.sendMessage = async function () {
  const input = document.getElementById("msgInput");
  const text = input.value.trim();
  if (text !== "") {
    await addDoc(messagesRef, {
      text: text,
      createdAt: serverTimestamp()
    });
    input.value = "";
  }
};
