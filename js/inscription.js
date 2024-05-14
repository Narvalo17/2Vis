import { BASE_URL,PORT, PRO_ENDPOINT, USER_ENDPOINT } from "./constantes.js"

document.getElementById('userInput').addEventListener('change', function() {
    var user = this.value;
    if (user === 'Professionnelle') {
        document.getElementById('professionnelleForm').style.display = 'block';
    } else {
        document.getElementById('professionnelleForm').style.display = 'none';
    }
});

document.getElementById('inscriptionForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    
    
    let userType = document.getElementById('userInput').value;
    let nom, prenom, email, password, confirmation, raison, siret;
    
    if (userType === 'Client') {
        nom = document.getElementById('nom').value;
        prenom = document.getElementById('prenom').value;
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;
        confirmation = document.getElementById('confirmation').value;
    } else if (userType === 'Professionnel') {
        raison = document.getElementById('raison').value;
        siret = document.getElementById('siret').value;
    }

    if(password!== confirmation){
        console.log("$$$$$$$$$$ erreur mot de passe pas conforme");
    }

    // Créer un objet avec les données du formulaire
    let formData = {
        nom: nom,
        prenom: prenom,
        email: email,
        motDePasse: password,
        raison: raison,
        siret: siret
    };

    console.log(formData);
    try {
        const response = await axios.post(`${BASE_URL}${PORT}${userType === "Client" ? USER_ENDPOINT : PRO_ENDPOINT}`, {
            ...formData
        });
    // ici rediriger vers la page se connecter
        console.log('Réponse du serveur :', response.data);
      } catch (error) {
        console.error('Erreur lors de la requête :', error);
      }
    });


