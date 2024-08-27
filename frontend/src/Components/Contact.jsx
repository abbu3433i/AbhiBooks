import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-5 dark:bg-red-900">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
                {/* Get in Touch Section */}
                <div className="md:w-1/2 bg-blue-500 p-8 text-white flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="mb-4">
                        We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                    <p className="mb-4">
                        Name: Abhishek Gour
                    </p>
                    <p className="mb-4">
                        Email: abhishek123@gmail.com
                    </p>
                    <p className="mb-4">
                        Phone: +91 7474 6169
                    </p>
                    <p>
                        Address: Danish Nagar, Bhopal, India
                    </p>
                </div>

                {/* Contact Form Section */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    );
};

export default Contact;
