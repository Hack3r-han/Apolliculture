import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <footer className="footer">
        <div className="md:ml-auto flex flex-row justify-center md:justify-end ">
            <address className="footer__contact  ">Contacto: <a href="mailto:info@apolliculture.com">info@apolliculture.com</a> | Teléfono: (123) 456-7890</address>
            <nav className="footer__social-icons flex justify-center md:justify-end w-full">
                <a href="https://www.facebook.com/apolliculture" aria-label="Facebook" className="mr-2 mb-2 md:mb-0"><FaSquareFacebook /></a>
                <a href="https://www.instagram.com/apolliculture" aria-label="Instagram" className="mr-2 mb-2 md:mb-0"><AiFillInstagram /></a>
                <a href="https://twitter.com/apolliculture" aria-label="Twitter" className="mr-2 mb-2 md:mb-0"><RiTwitterXFill /></a>
                <a href="https://www.linkedin.com/company/apolliculture" aria-label="LinkedIn" className="mr-2 mb-2 md:mb-0"><FaLinkedin /></a>
                <a href="https://www.youtube.com/@apolliculture" aria-label="YouTube" className="mb-2 md:mb-0"><FaYoutube /></a>
            </nav>
        </div>
        <div className="container mx-auto mt-4">
            <p className="text-center text-sm">Derechos de autor © 2024 Apolliculture. Todos los derechos reservados.</p>
            <p className="text-center text-sm">Un proyecto de apicultura para el futuro sostenible de nuestra comunidad.</p>
        </div>
    </footer>
    );
}


export default Footer