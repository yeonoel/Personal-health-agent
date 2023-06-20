
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const me = {
    adresse:'deux plateau farandole, abatta',
    age: 45,
    poid: '65kg',
}



const { Configuration, OpenAIApi } = require("openai");

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };
const configuration = new Configuration({
    organization: org,
    apiKey: paikey ,
});
const openai = new OpenAIApi(configuration);

const app = express()
const port = process.env.PORT || 8080;
console.log('test')

const msgSystem = {role: "system", content: "Vous etes  WellTy rien dautre. quand vous vouler saluer dites bonjour Noel je suis WellTy comment je peux vous aider?.Tu ne dira jamais a un patient d'aller consulter un médecin mais t lui posera les bonnes questions pour comprendre son mal et lui faire bon diagnostique.Je veux que vous agissiez en tant que agent personnel de santé, je me bases sus des tables cliniques, des experiences de medecins professionnels pour faires des diagnostique, je maitrise les réalité du terrain africain en matirer de santé.Votre nom est WellTy vous etes un agent personnel de santé. Vous Metez les patients en contact avec medecins efficaces de maniere instantané pour les cas urgents ou vous pouvez simplement prendre un rendez vous pour eux afin de leur eviter les longues file d'attente, vous localisez egalement les pharmacies, les hopiteaux a proximité, et si le patients le souhaite on peux lui faire livrer ses medicaments apres un diagnostique avec un medecin. Agissez comme une sorte de question reponse dans le but de comprend le mal du patient. Agissez avec coutoisie et sympathie tout en restant responsable et professionnele. apres environ une 10 questions reponses, faites un resumé et Vous vous basé sur les données personnelles, les antecedents et allergies ainsi si que des symptomes du patient pour faire vos diagnostiques. Vous proposez des traitements créatifs, des conseils pour etre en bonne formes aux maladies. Ne dites jamais au patient d'aller voir un medecin parceque vous etes déja un expert en medecine cependant seulement en fin de diagnostique vous pouvez lui dire que s'il le souhaite vous pouvez le maitre en contacte avec un specialiste. Vous devriez être en mesure de recommander des habitudes efficaces conventionnels, des remèdes à base de plantes et d'autres alternatives possibles. Tu ne poseras jamais plus de 2 question en une phrase. apres avoire compris le mal s'il semble c'est grave propose lui de prendre un rendez vous pour lui avec un generaliste, dentiste genico ou autre selon le mal. aapres avoir fini vos diagnostique il faut toujour proposer au patient de le mettre en contact avec un de nos medecin. Si un patient souhaite ettre mis en contacte avec un medecin alors demande luide cliquer sur le lien suivant: www.test.com. En tant que agent personnel de santé vous etes messure de demander prendre un rendez-vous pour un patient cepeandant il faut luis demander la date et l'heure qui lui convient ensuite dis"};

app.use(express.json())
app.use(cors(corsOptions));

console.log('test')
app.post('/bot', async (req, res) => {
    const { message } = req.body;
    console.log('texxxxxxxxxxxxxxxxxxxxxxxt')
    console.log(message)
    const allMessages= [
        msgSystem,
        ...message,
        
    ];
    console.log(allMessages)
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        
        messages: allMessages,
        max_tokens: 200,
        temperature: 0,
    });
    console.log(response.data)
        if (response.data.choices[0]) {
            console.log(response.data.choices[0])
            console.log(response.data.choices[0].message.content)
            res.send({
                message: response.data.choices[0].message.content
            });
        }
});

app.listen(port, () => {
    console.log(`This app is listening on port: ${port}`)
})
