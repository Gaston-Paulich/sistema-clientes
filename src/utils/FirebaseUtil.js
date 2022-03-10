
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export function firebaseConfig() {

    const config = {
      apiKey: "AIzaSyCrHBAMXeZod5BQ0cVdodz2O0zMXh5gHdk",
      authDomain: "sistema-8bee6.firebaseapp.com",
      projectId: "sistema-8bee6",
      storageBucket: "sistema-8bee6.appspot.com",
      messagingSenderId: "752181998250",
      appId: "1:752181998250:web:32961030db975e75a256d3",
      measurementId: "G-PMP29SX24J"
    };
    
    // Initialize Firebase
    const app = initializeApp(config);
    


}

export function firebaseRegistrarUsuario(email, password) {

  createUserWithEmailAndPassword(getAuth(), email, password)
  .then(credenciales => {
    //credenciales.user.
  })

}

 export async function firebaseIniciarSesion(email, password){

  try {
    let credenciales =  await signInWithEmailAndPassword(getAuth(), email, password);
    //credenciales.user


  }catch (e){

    return false;

  }


 return true;

}

export async function firebaseBuscar(coleccionAbuscar) {
  let listado = [];
   let consulta = collection(getFirestore(), coleccionAbuscar);
  
   let resultado = await getDocs(consulta);

   resultado.forEach(documento => {
    documento.id
     let objeto = documento.data();
     objeto.id = documento.id;
     listado.push(objeto);
   });
   return listado;
}