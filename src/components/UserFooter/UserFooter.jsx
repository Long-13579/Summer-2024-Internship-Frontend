import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FootLogo from "@/assets/footer-logo.webp";
import Button from "@/components/Button";
import LinkList from "@/components/UserFooter/LinkList";
import IconTicket from '@/assets/images/ic-ticket.svg?react';
import { ACCOUNT_LINKS, EVENT_RENTAL_LINKS, MOVIE_LINKS, CINESTAR_LINKS, OTHER_SERVICES_LINKS,SOCIAL_LINKS } from "@/components/UserFooter/constant";
import { getAllCinemas } from "@/apis/cinema";

const UserFooter = () => {
    const [cinemaSystemLinks, setCinemaSystemLinks] = useState([]);

    useEffect(() => {
        const fetchAllCinemas = async () => {
            const cinemaSystemLinks = await getAllCinemas();
            setCinemaSystemLinks(cinemaSystemLinks);;
        };
        fetchAllCinemas();   
    }, []);

    return (
        <div className="bg-gradient-to-r from-purple-700 to-blue-500 text-white py-10 px-4 w-full">
            <div className="flex flex-wrap max-w-screen-xl mx-auto">
                <div className="w-full md:w-1/3">
                    <Link to="/" className="block mx-auto mb-6" aria-label="The logo of Cinestar">
                        <img width="170" height="60" sizes="(max-width: 768px) 50vw 100vw" src={FootLogo} alt="Cinestar logo" />
                    </Link>
                    <div className="text-left mb-5 text-lg">
                        <p>BE HAPPY, BE A STAR</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <Button title='Book Now' icon={IconTicket} link="/film"/>
                    </div>
                    <div className="flex justify-left mt-4">
                        {SOCIAL_LINKS.map((socialLink, index) => (
                            <Link key={index} to={socialLink.href} target="_blank" rel="noopener noreferrer" className="mr-2 transition-transform transform hover:-translate-y-1">
                                {socialLink.icons}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-5 md:mt-0">
                    <div className="flex flex-wrap">
                        <LinkList title="Account" links={ACCOUNT_LINKS} />
                        <LinkList title="Event Rental" links={EVENT_RENTAL_LINKS} />
                    </div>
                    <div className="flex flex-wrap mt-5">
                        <LinkList title="Movies" links={MOVIE_LINKS} />
                        <LinkList title="Cinestar" links={CINESTAR_LINKS} />
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-5 md:mt-0">
                    <div className="flex flex-wrap">
                        <LinkList title="Other Services" links={OTHER_SERVICES_LINKS} />
                        {cinemaSystemLinks.length > 0 && <LinkList title="Cinema System" links={cinemaSystemLinks} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFooter;
