import { useState } from 'react'
import { getFirestore , collection , addDoc , doc , getDoc ,query , where , getDocs , updateDoc} from 'firebase/firestore'
import { app } from './firebase'

const firestore = getFirestore(app);

function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore , 'cities') , {
      name: 'Samalkot',
      pinCode : '533440',
      famous : 'Shiva Temple'
    });
    console.log(result);
  }

  const makeSubColletion = async () => {
    await addDoc(collection(firestore , 'cities/7LeZHNXaTeYnlJAQt68L/places') , {
      name: "this place is wonderful another",
      description: "One of the Shakti Pithas",
      data : Date.now()
    })
  }

  const getDocument = async () => {
    const ref = doc(firestore , '/cities' , 'DPdUQPDwVfJtnFhACxpA')
    const snap = await getDoc(ref);
    console.log(snap.data());
  }

  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore , 'users');
    const q = query(collectionRef , where( 'isMale' , '==' , true));
    const snapshot = await getDocs(q);
    snapshot.forEach(data => console.log(data.data()));
  }

  const update = async () => {
    const docRef = doc(firestore , 'cities' , 'DPdUQPDwVfJtnFhACxpA');
    await updateDoc(docRef , {
      name : "Kakinada"
    })
  }

  return (
    <div>
      <h1> Firebase FireStore</h1>
      <button onClick={writeData}> Put Data</button>
      <button onClick={makeSubColletion}> Put Sub Data</button>
      <button onClick={getDocument}> Get Document</button>
      <button onClick={getDocumentsByQuery}> Get Documents By Query</button>
      <button onClick={update}> Updating</button>
    </div>
  )
}

export default App
