import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>© 2023 Minha Empresa. Todos os direitos reservados.</p>
                <p>Contato: contato@minhaempresa.com</p>
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;