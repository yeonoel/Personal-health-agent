import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css'

const Home = () => {


    return (
        <div className="containairPP" >
            
            <div className="containaireItem" >
                <div className="contentText">
                    <h1>
                        WellTy
                    </h1>
                    <p className="p1">Notre application a été créée pour résoudre les problèmes de diagnostic médical incorrect, les longues files d'attente dans les hopitaux, l'accès limité aux soins de santé , La Digitalisation des dossiers medicaux, et la surcharge de travail des médecins. Nous offrons une solution 360° pratique , accessible et efficace pour améliorer les soins de santé en afrique.</p>
                    <p className="p2"> Votre santé hyperconnecté </p>
                    <Link to='/wellty'> Go WellTy</Link>

                </div>
                <div className="containerImg">
                    <img
                        
                        src="logott.png"
                        alt="wellTy"
                    />

                </div>
            </div>
        </div>
    )
}

export default Home;