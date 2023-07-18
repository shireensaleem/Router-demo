
import { db, firebase1 } from './firebase/config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import './App.css';


function App() {

  
  return (
    <div className="App">
     <button onClick={()=>{
      
const auth = getAuth();
signInWithEmailAndPassword(auth, 'shireensalee08@gmail.com', '123445')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    db.collection('users').get().then(snapshot=>{
      snapshot.forEach((obj=>{
       console.log(obj.data());
      }))
       });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


        



      
     }}>Click me</button>
     
    </div>
  );
}

export default App;
