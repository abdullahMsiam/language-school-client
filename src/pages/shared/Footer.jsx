import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import img1 from '../../assets/image/icons/footericon.avif'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content mb-0">
                <div>
                    <div>
                        <img className='w-14 rounded-2xl' src={img1} alt="" />
                    </div>
                    <p>Language Learning Institute<br />Learn every Language here.</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <Link><FaFacebook></FaFacebook></Link>
                        <Link><FaYoutube></FaYoutube></Link>
                        <Link><FaTwitter></FaTwitter></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;