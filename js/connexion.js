import { BASE_URL,PORT, LOGIN, USER_ENDPOINT } from "./constantes.js"



document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    let  email, password;

        email = document.getElementById('email').value;
        password = document.getElementById('password').value;

    let formData = {
        email: email,
        motDePasse: password,
    };

    console.log(formData);
    try {
        const response = await axios.post(`${BASE_URL}${PORT}${USER_ENDPOINT}${LOGIN}`, {
            ...formData
        });
    // ici rediriger vers la page d'accueil
        console.log('Réponse du serveur :', response.data);
      } catch (error) {
        console.error('Erreur lors de la requête :', error);
      }
    });


