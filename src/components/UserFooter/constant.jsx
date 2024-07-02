import FBIcon from "@/assets/footer-facebook.svg?react";
import YTBIcon from "@/assets/footer-youtube.svg?react";
import TTIcon from "@/assets/ic-tiktok.svg?react";
import ZLIcon from "@/assets/ic-zl-white.svg?react";
export const ACCOUNT_LINKS = [
    { href: "/login/?prevUrl=", text: "Login" },
    { href: "/register", text: "Register" },
    { href: "/membership", text: "Membership" },
];

export const EVENT_RENTAL_LINKS = [
    { href: "/cinema/theater-rental", text: "Theater Rental" },
    { href: "/cinema/other-rentals", text: "Other Types of Rentals" },
];

export const MOVIE_LINKS = [
    { href: "film/showing", text: "Now Showing" },
    { href: "film/comingsoon", text: "Coming Soon" },
    { href: "film/specialscreening", text: "Special Screenings" },
];

export const CINESTAR_LINKS = [
    { href: "/about-us", text: "About Us" },
    { href: "/contact", text: "Contact" },
    { href: "/career/", text: "Careers" },
];

export const OTHER_SERVICES_LINKS = [
    { href: "/service/restaurant", text: "Restaurant" },
    { href: "/service/kidzone", text: "Kidzone" },
    { href: "/service/bowling", text: "Bowling" },
    { href: "/service/billiard", text: "Billiards" },
    { href: "/service/gym", text: "Gym" },
    { href: "/service/opera", text: "Opera House" },
    { href: "/service/coffee", text: "Coffee" },
];
export const SOCIAL_LINKS = [
    {  icons: <FBIcon/>, href: "https://www.facebook.com", alt: "Facebook Icon" },
    {  icons: <YTBIcon/>, href: "https://www.youtube.com", alt: "Youtube Icon" },
    {  icons: <TTIcon/>, href: "https://www.tiktok.com", alt: "Tiktok Icon" },
    {  icons: <ZLIcon/>, href: "https://zalo.me", alt: "Zalo Icon" }
]