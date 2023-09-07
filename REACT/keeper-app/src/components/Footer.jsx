import React from "react";

export default function Footer(){
const date = new Date();
const currentYear = date.getFullYear();
    return(
        <div>
        <footer>
            <p>
                © Copyright {currentYear}
            </p>
        </footer>
        </div>

    );
}
