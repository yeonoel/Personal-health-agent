import React from "react";
import '../styles/style_contact.css'
import { Link } from "react-router-dom";

const Rdv = () => {


    return (
        <body>
            <main>
                <div class="box">
                    <div className="containaireImg">
                        <img src="pills.png" alt="pills" />      
                    </div>
                    <h1><p>Médecin généraliste</p></h1>
                        <Link className="formu" to='/formulairerdv'>Sélectionner</Link>
                </div>
                <div class="box">
                    <div className="containaireImg">
                        <img src="mdi_doctor.png" alt="pills"  />
                    </div>
                <h1><p>Pédiatre</p></h1>
                    <Link className="formu" to='/formulairerdv'>Sélectionner</Link>
                </div>
                <div class="box">
                    <div className="containaireImg">
                        <img src="maki_doctor.png" alt="pills" />
                    </div>
                <h1><p>Dentiste</p></h1>
                    <Link className="formu" to='/formulairerdv'>Sélectionner</Link>
                </div>
            </main>
        </body>
    )
}

export default Rdv;