import { db } from "./firebase.mjs"
import { addDoc, collection, getDocs, updateDoc, deleteField, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

document.getElementById("sub").addEventListener('click', async () => {
  let title = document.getElementById('int').value
  let desc = document.getElementById('int-1').value

  try {
    const docRef = await addDoc(collection(db, "mustafa"), {
      title: title,
      desc: desc

    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})

async function show(){
const querySnapshot = await getDocs(collection(db, "mustafa"));
querySnapshot.forEach((doc) => {

  document.getElementById('card').innerHTML += `<div id="minicard"><h3>${doc.data().title}</h3><br /><h4>${doc.data().desc}</h4><br /><button id="edt">Edit</button><button id="del">Delete</button></div>`
  console.log(doc.id)
  console.log(doc.data())

})};
window.show = show
show()
/*
document.getElementById('del').addEventListener('click', async ()=>{
  await deleteDoc(doc(db, "cities", "mustafa"));
  deleteDoc()
 
})
*/
document.getElementById('edt').addEventListener('click', async ()=>{

  const cityRef = doc(db, 'cities', 'BJ');

  // Remove the 'capital' field from the document
  await updateDoc(cityRef, {
      capital: deleteField()
  });

})





