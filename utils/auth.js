import axios from 'axios';


const API_KEY = 'AIzaSyDEj_QRz0sc5a7kPIy7P0aDNH5D83TfOH4';

async function authenticate(mode, email, password) {

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  // console.log(response.data.idToken);
  const token = response.data.idToken;
  return(token);
}

export async function createUser(email, password) {
  const token = await authenticate('signUp', email, password);
  return token;
}

export async function logUser(email, password) {
  const token = await authenticate('signInWithPassword', email, password);
  return token;
}

