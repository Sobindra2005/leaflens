import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-600 z-10  py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between mb-12">
                    <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
                        <h1 className="text-3xl font-bold mb-4">Leaf<span className="text-green-500">Lens</span></h1>
                        <p className="text-lg text-gray-600 mb-8">LeafLens is your go-to platform for all things related to nature photography. Join us to explore the beauty of nature through the lens.</p>
                        <div className="flex flex-wrap mb-8">
                            <span className="mr-4"><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
                            <span><i className="fas fa-envelope"></i> &nbsp; info@leaflens.com</span>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
                        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                        <ul className="list-none mb-8">
                            <li className="mb-2"><a href="#" className="text-lg text-gray-600 hover:text-green-500">Events</a></li>
                            <li className="mb-2"><a href="#" className="text-lg text-gray-600 hover:text-green-500">Team</a></li>
                            <li className="mb-2"><a href="#" className="text-lg text-gray-600 hover:text-green-500">Mentors</a></li>
                            <li className="mb-2"><a href="#" className="text-lg text-gray-600 hover:text-green-500">Gallery</a></li>
                            <li className="mb-2"><a href="#" className="text-lg text-gray-600 hover:text-green-500">Terms and Conditions</a></li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
                        <h2 className="text-2xl font-bold mb-4">Follow us</h2>
                        <div className="flex flex-wrap mb-8">
                            <a href="#" className="mr-4 text-lg text-gray-600 hover:text-green-500"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="mr-4 text-lg text-gray-600 hover:text-green-500"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="mr-4 text-lg text-gray-600 hover:text-green-500"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-lg text-gray-600 hover:text-green-500"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-lg text-gray-600 mb-4">
                    &copy; leaflens.com | Designed by LeafLens Team
                </div>
            </div>
        </footer>
    );
}

export default Footer;