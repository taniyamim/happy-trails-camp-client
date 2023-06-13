import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { BsFillQuestionCircleFill } from "react-icons/bs";

const FAQ = () => {
    return (
        <div>
            <section className="bg-whit">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-black">Frequently asked questions</h2>
                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                                    <BsFillQuestionCircleFill> </BsFillQuestionCircleFill>
                                    How can I become an instructor and upload my classes?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400"> To become an instructor, you need to sign up on our website and create an instructor account. Once you're logged in, you can navigate to the instructor dashboard and find the option to add a new class. Provide the necessary details such as class name, description, schedule, and pricing, along with any additional information.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                                    <BsFillQuestionCircleFill> </BsFillQuestionCircleFill>
                                    Can I enroll in multiple classes?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">Yes, as a student, you can enroll in multiple classes. Simply browse through the available classes, select the ones you're interested in, and proceed with the enrollment process for each class individually.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                                    <BsFillQuestionCircleFill> </BsFillQuestionCircleFill>
                                    How do I pay for a class?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">We offer secure payment options for class enrollment. When you select a class and proceed to enroll, you'll be redirected to the payment page where you can choose your preferred payment method, such as credit card, PayPal, or bank transfer. Follow the instructions to complete the payment and secure your spot in the class.</p>
                                <p className="text-gray-500 dark:text-gray-400">Feel free to <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we'll help you out as soon as we can.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                                    <BsFillQuestionCircleFill> </BsFillQuestionCircleFill>
                                    What happens if I need to cancel my enrollment?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400"> If you need to cancel your enrollment in a class, please contact our support team as soon as possible. Cancellation policies may vary depending on the specific class and the timing of the cancellation. We will assist you in the cancellation process and provide any applicable refund or credit options.</p>
                                <p className="text-gray-500 dark:text-gray-400">Find out more information by <a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">reading the license</a>.</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                                    <BsFillQuestionCircleFill> </BsFillQuestionCircleFill>
                                    How can I access the class materials and resources?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">Once you have successfully enrolled in a class, you will gain access to the class materials and resources through your student dashboard. You can log in to your account, navigate to the enrolled classes section, and find all the relevant materials, including documents, videos, and interactive content.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                                    <BsFillQuestionCircleFill> </BsFillQuestionCircleFill>
                                    Are there any prerequisites for enrolling in certain classes?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">Some classes may have specific prerequisites or requirements. These requirements are usually mentioned in the class description or details. Make sure to read the class information thoroughly to determine if you meet the prerequisites before enrolling. If you have any questions or concerns, feel free to reach out to the instructor or our support team.</p>

                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                                    <BsFillQuestionCircleFill> </BsFillQuestionCircleFill>
                                    What if I encounter technical issues during a class session?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400"> If you experience any technical difficulties during a class session, please try the following troubleshooting steps: ensure a stable internet connection, refresh the page, clear your browser cache, and check your device settings. If the problem persists, you can contact our technical support team for assistance. We strive to provide a smooth learning experience for all our students.</p>

                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-black">
                                    <BsFillQuestionCircleFill> </BsFillQuestionCircleFill>
                                    Can I track the status of my order?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">Yes, you can track the status of your order. Once your order is shipped, we will provide you with a tracking number and a link to the shipping carrier's website. You can use this information to track the progress of your delivery and stay updated on its status.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;