import React from "react";
import facebookIcon from "@/assets/icon-facebook.svg";
import instagramIcon from "@/assets/icon-instagram.svg";
import tiktokIcon from "@/assets/icon-tiktok.svg";
import zaloIcon from "@/assets/icon-zalo.svg";
import footlogo from "@/assets/footer-logo.webp";
import Button from "@/components/Button";
import bookBtnInfo from '@/assets/images/ic-user.svg'
const UserFooter = () => {
    return (
        <div className="bg-gradient-to-r from-purple-700 to-blue-500 text-white py-10 px-4 w-full">
            <div className="flex flex-wrap max-w-screen-xl mx-auto">
                <div className="w-full md:w-1/3">
                    <a href="/" className="block mx-auto mb-6" aria-label="The logo of Cinestar">
                        <img width="170" height="60" sizes="(max-width: 768px) 50vw 100vw" src={footlogo} alt="" />
                    </a>
                    <div className="text-left mb-5 text-lg">
                        <p>BE HAPPY, BE A STAR</p>
                    </div>
                    <div className="flex items-center gap-8 ">
                        <Button title="Book now " icon={bookBtnInfo}/>
                    </div>
                    <div className="flex justify-left mt-4 ">
                        <a className="mr-2 transition-transform transform hover:-translate-y-1" href="https://www.facebook.com/codeengine">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a className="mr-2 transition-transform transform hover:-translate-y-1" href="https://www.instagram.com/codeenginestudio/">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a className="mr-2 transition-transform transform hover:-translate-y-1" href="https://tiktok.com">
                            <img src={tiktokIcon} alt="TikTok" />
                        </a>
                        <a className="mr-2 transition-transform transform hover:-translate-y-1" href="https://zalo.me">
                            <img src={zaloIcon} alt="Zalo" />
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-5 md:mt-0">
                    <div className="flex flex-wrap">
                        <div className="w-1/2 p-2">
                            <div className="uppercase font-bold text-xl mb-2">Account</div>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/login/?prevUrl=">Login</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/register">Register</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/membership">Membership</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="uppercase font-bold text-xl mb-2">Event Rental</div>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/he-thong-thue-rap/">Theater Rental</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/loai-hinh-cho-thue-khac/">Other Types of Rentals</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-5">
                        <div className="w-1/2 p-2">
                            <div className="uppercase font-bold text-xl mb-2">Movies</div>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/movie/showing/">Now Showing</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/movie/upcoming/">Coming Soon</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/movie">Special Screenings</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="uppercase font-bold text-xl mb-2">Cinestar</div>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/about-us">About Us</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/contact">Contact</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/career/">Careers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-5 md:mt-0">
                    <div className="flex flex-wrap">
                        <div className="w-1/2 p-2">
                            <div className="uppercase font-bold text-xl mb-2">Other Services</div>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/Restaurant">Restaurant</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/Kidzone">Kidzone</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/Bowling">Bowling</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/billiard">Billiards</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/gym">Gym</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/opera">Opera House</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/coffee">Coffee</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="uppercase font-bold text-xl mb-2">Theater System</div>
                            <ul className="list-none p-0">
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/">All Theater Systems</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/8f3a5832-8340-4a43-89bc-6653817162f1">Cinestar Quoc Thanh</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/667c7727-857e-4aac-8aeb-771a8f86cd14">Cinestar Hai Ba Trung (HCMC)</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/cf13e1ce-2c1f-4c73-8ce5-7ef65472db3c">Cinestar Sinh Vien (Binh Duong)</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/8f54df74-3796-42ea-896e-cd638eec1fe3">Cinestar My Tho</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/4a51b9ee-f143-4411-9dbb-5f54a1c382c0">Cinestar Kien Giang</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/104509be-034e-47c1-bf1b-aba7f2df4f28">Cinestar Lam Dong</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/e08f986a-1937-419e-b1b1-759b7c74728b">Cinestar Da Lat</a>
                                </li>
                                <li className="mb-2">
                                    <a className="text-white no-underline hover:text-yellow-custom-700" href="/book-tickets/f8a60463-5c34-49a9-9ae8-52081e387bb8">Cinestar Hue</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFooter;
