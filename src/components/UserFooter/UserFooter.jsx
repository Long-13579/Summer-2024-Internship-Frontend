import React from "react";
import "./UserFooter.scss";
import facebookIcon from "../../assets/icon-facebook.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import tiktokIcon from "../../assets/icon-tiktok.svg";
import zaloIcon from "../../assets/icon-zalo.svg";
import footlogo from "../../assets/footer-logo.webp";

const UserFooter = () => {
    return (
        <div className="container">
            <div className="footer-wr">
                <div className=" col-4">
                    <a href="/" className="ft-logo" aria-label="The logo of Cinestar">
                        <img width="170" height="60" sizes="(max-width: 768px) 50vw 100vw" src={footlogo} alt="" />
                    </a>
                    <div className="ft-text">
                        <p className="txt-desktop">BE HAPPY, BE A STAR</p>
                    </div>
                    <div className="ft-hotline-social">
                        <a className="link" href="https://www.facebook.com/codeengine"><img src={facebookIcon} alt="Facebook" href="/"/></a>
                        <a className="link" href="https://www.instagram.com/codeenginestudio/"><img src={instagramIcon} alt="Instagram" /></a>
                        <a className="link" href="https://tiktok.com"><img src={tiktokIcon} alt="TikTok" /></a>
                        <a className="link" href="https://zalo.me"><img src={zaloIcon} alt="Zalo" /></a>
                    </div>
                </div>
                <div className="footer-item col-4">
                    <div className="row footer-item-top">
                        <div className="col-6 col">
                            <div className="text">Account</div>
                            <ul className="menu-list">
                                <li className="menu-item"><a className="menu-link" href="/login/?prevUrl=">Login</a></li>
                                <li className="menu-item"><a className="menu-link" href="/register">Register</a></li>
                                <li className="menu-item"><a className="menu-link" href="/membership">Membership</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col">
                            <div className="text">Event Rental</div>
                            <ul className="menu-list">
                                <li className="menu-item"><a className="menu-link" href="/he-thong-thue-rap/">Theater Rental</a></li>
                                <li className="menu-item"><a className="menu-link" href="/loai-hinh-cho-thue-khac/">Other Types of Rentals</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-item-bot">
                        <div className="col-6 col">
                            <div className="text">Movies</div>
                            <ul className="menu-list">
                                <li className="menu-item"><a className="menu-link" href="/movie/showing/">Now Showing</a></li>
                                <li className="menu-item"><a className="menu-link" href="/movie/upcoming/">Coming Soon</a></li>
                                <li className="menu-item"><a className="menu-link" href="/movie">Special Screenings</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col">
                            <div className="text">Cinestar</div>
                            <ul className="menu-list">
                                <li className="menu-item"><a className="menu-link" href="/about-us">About Us</a></li>
                                <li className="menu-item"><a className="menu-link" href="/contact">Contact</a></li>
                                <li className="menu-item"><a className="menu-link" href="/career/">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" col-2">
                    <div className="text">Other Services</div>
                    <ul className="menu-list">
                        <li className="menu-item"><a className="menu-link" href="/Restaurant">Restaurant</a></li>
                        <li className="menu-item"><a className="menu-link" href="/Kidzone">Kidzone</a></li>
                        <li className="menu-item"><a className="menu-link" href="/Bowling">Bowling</a></li>
                        <li className="menu-item"><a className="menu-link" href="/billiard">Billiards</a></li>
                        <li className="menu-item"><a className="menu-link" href="/gym">Gym</a></li>
                        <li className="menu-item"><a className="menu-link" href="/opera">Opera House</a></li>
                        <li className="menu-item"><a className="menu-link" href="/coffee">Coffee</a></li>
                    </ul>
                </div>
                <div className=" col-2">
                    <div className="text">Theater System</div>
                    <ul className="menu-list">
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/">All Theater Systems</a></li>
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/8f3a5832-8340-4a43-89bc-6653817162f1">Cinestar Quoc Thanh</a></li>
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/667c7727-857e-4aac-8aeb-771a8f86cd14">Cinestar Hai Ba Trung (HCMC)</a></li>
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/cf13e1ce-2c1f-4c73-8ce5-7ef65472db3c">Cinestar Sinh Vien (Binh Duong)</a></li>
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/8f54df74-3796-42ea-896e-cd638eec1fe3">Cinestar My Tho</a></li>
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/4a51b9ee-f143-4411-9dbb-5f54a1c382c0">Cinestar Kien Giang</a></li>
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/104509be-034e-47c1-bf1b-aba7f2df4f28">Cinestar Lam Dong</a></li>
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/e08f986a-1937-419e-b1b1-759b7c74728b">Cinestar Da Lat</a></li>
                        <li className="menu-item"><a className="menu-link" href="/book-tickets/f8a60463-5c34-49a9-9ae8-52081e387bb8">Cinestar Hue</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserFooter;
