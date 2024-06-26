import fb_icon from '@/assets/ct-1.webp';
import zalo_icon from '@/assets/ct-2.webp';
import mail_icon from '@/assets/ct-1.svg';
import phone_icon from '@/assets/ct-2.svg';
import address_icon from '@/assets/ct-3.svg';
import Button from '@/components/Button';

const Contact = () => {
  return (
    <div className='sc-pd py-10'>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 p-4" data-aos="fade-up">
            <div className="py-16">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold uppercase mb-6">CONTACT US</h2>
              </div>
              <div className="flex flex-col items-center">
                <a 
                  className="flex items-center justify-center z-0 mt-8 mb-8 w-full max-w-md h-24 bg-gradient-to-r from-blue-600 to-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 rounded-md text-white text-lg"
                  href="https://www.facebook.com/cinestarcinemasvietnam" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img src={fb_icon} alt="Facebook Icon" className="w-auto h-full mr-5" />
                  <span className="flex-1 text-center">FACEBOOK</span>
                </a>
                <a 
                  className="flex items-center justify-center z-0 mt-8 mb-8 w-full max-w-md h-24 bg-gradient-to-r from-blue-400 to-blue-500 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 rounded-md text-white text-lg"
                  href="https://zalo.me/2861828859391058401" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <img src={zalo_icon} alt="Zalo Icon" className="w-auto h-full mr-5" />
                  <span className="flex-1 text-center">ZALO CHAT</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4" data-aos="fade-up">
            <div className="bg-blue-800 bg-opacity-80 p-10 rounded-lg flex flex-col gap-5">
              <h3 className="text-3xl font-extrabold mb-5">CONTACT INFORMATION</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <img src={mail_icon} alt="Mail Icon" className="w-6 h-6 mr-3" />
                  <a href="mailto:marketing.cinestar@gmail.com" className="text-white">marketing.cinestar@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <img src={phone_icon} alt="Phone Icon" className="w-6 h-6 mr-3" />
                  <a href="tel:028 7300 8881" className="text-white">028 7300 8881</a>
                </li>
                <li className="flex items-center">
                  <img src={address_icon} alt="Address Icon" className="w-6 h-6 mr-3" />
                  <a href="https://maps.app.goo.gl/RYfzjhyyw7vn7PuV8" target="_blank" rel="noreferrer" className="text-white">135 Hai Bà Trưng, Ben Nghe Ward, District 1, HCMC</a>
                </li>
              </ul>
              <div className="mt-5">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 mb-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Full Name" required />
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Enter Email" required />
                    </div>
                    <div className="w-full px-3">
                      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" rows="10" placeholder="Contact Information or Feedback" required></textarea>
                    </div>
                  </div >
                
                  <div className='flex items-start gap-8'><Button title='SEND NOW'/></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
