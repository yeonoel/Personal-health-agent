import React from "react";
import '../styles/formu.css'


const Formu = () => {
    return (
        <div className="containerformed">
            <div class="center">
                <h1>Heure et date du rendez-vous</h1>
                <form method="post">
                    <div class="txt_field">
                        <input type="date" required />
                        <span></span>
                    </div>
                    <div class="txt_field">
                        <input type="time" required/>
                        <span></span>
                    </div>
                        <input type="button" onclick="window.location.href = 'inscription2.html';" value="Confirmer" />
                    <div class="signup_link">
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formu;