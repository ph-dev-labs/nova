import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});
import Nav from "@/components/landing/Nav";
import GreenLogo from "@/components/landing/GreenLogo";
import Link from "next/link";


const PrivacyPolicy = () => {
    return (
        <>
            <Nav />
            <div className={`container mx-auto mt-8 p-4 ${inter.className}`}>
                <h1 className="lg:text-3xl font-bold mb-4 text-[#013941] text-md">Terms and Conditions</h1>
                <p className="text-[#333333] mb-4 font-medium text-lg">Effective Date: September 16th, 2024</p>
                <p className="text-[#000E10] font-bold mt-12 mb-10">These Terms and Conditions govern your use of Novacrust services, a product of Prosharbiz LLC, incorporated in Delaware. By accessing or using Novacrust, you agree to comply with these terms. Please read them carefully.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">1. Definitions</h2>
                <ul className="list-disc list-inside text-[#000E10]  text-sm font-bold mb-6">
                    "Novacrust" refers to the cross-border payment platform operated by Prosharbiz LLC.
                    "User" or "You" refers to anyone using Novacrust services.
                    "Services" includes creating, funding, and using Novacrust virtual cards.
                </ul>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">2. Eligibility</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">You must be at least 18 years old or the age of majority in your jurisdiction to use our services. By registering, you represent that all information provided is accurate and truthful.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">3. Account Creation and Security</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">Users must create an account to access Novacrust services.
                    You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
                    Notify us immediately if you suspect unauthorized access to your account.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">4. Use of Services</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">Permitted Use: Novacrust is for lawful purposes only. You agree not to use our services for fraudulent, illegal, or unauthorized transactions.
                    Card Restrictions: Novacrust virtual cards cannot be used for cash withdrawals or at physical points of sale.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">5. Fees and Charges</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">Novacrust charges fees for card issuance, funding, and certain transactions. Fees are displayed clearly at the time of use.
                    All payments and charges are final and non-refundable, except wallet balances as specified in the Refund Policy.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">6. Funding and Transactions</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">Users may fund their virtual cards in local currency, subject to conversion to USD.
                    Transactions are processed based on available card balance. Users are responsible for ensuring sufficient funds before initiating payments..</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">7. Refunds and Disputes</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">Only wallet balances are refundable as per our Refund Policy.<br />
                    Users must report disputes regarding transactions within 30 days of the transaction date.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">8. Intellectual Property</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">All content, trademarks, and intellectual property associated with Novacrust are owned by Prosharbiz LLC. Unauthorized use, reproduction, or distribution of any content is prohibited.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">9. Limitation of Liability</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-2">Prosharbiz LLC is not liable for:</p>
                <ul className="list-disc list-inside mb-4">
                    <li className="mb-2 ml-3 text-[#000E10]  text-sm font-bold">Losses arising from unauthorized account access due to user negligence.</li>
                    <li className="mb-2 ml-3 text-[#000E10]  text-sm font-bold">Failures or delays in processing transactions caused by third-party providers.</li>
                    <li className="mb-2 ml-3 text-[#000E10]  text-sm font-bold">Indirect, incidental, or consequential damages.</li>
                </ul>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">10. Privacy</h2>

                <p className="text-[#000E10]  text-sm font-bold mb-6">Your use of Novacrust is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">11. Termination</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-2">We reserve the right to suspend or terminate your account for:</p>
                <ul className="list-disc list-inside mb-4">
                    <li className="mb-2 ml-3 text-[#000E10]  text-sm font-bold">Breach of these terms.</li>
                    <li className="mb-2 ml-3 text-[#000E10]  text-sm font-bold">Engaging in fraudulent or unlawful activities.</li>
                    <li className="mb-2 ml-3 text-[#000E10]  text-sm font-bold">At our sole discretion, with prior notice where applicable.</li>
                </ul>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">12. Modifications to Terms</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">We may update these Terms and Conditions periodically. Continued use of Novacrust after changes signifies your acceptance of the revised terms.</p>

                <h2 className="text-xl font-bold mb-3 text-[#000E10]">13. Governing Law</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">These Terms are governed by the laws of the State of Delaware, without regard to its conflict of laws principles.</p>

                <h2 className="text-xl font-bold mb-3 text-[#000E10]">14. Contact Us</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-1">For questions or concerns about these Terms and Conditions, please contact:</p>
                <p className="text-[#000E10]  text-sm font-bold mb-1">Prosharbiz LLC</p>
                <p className="text-[#000E10]  text-sm font-bold mb-1">651 N Broad St, Suite 206 Middletown, Delaware 19709</p>
                <p className="text-[#000E10]  text-sm font-bold mb-1">Email: support@novacrust.com</p>

                <p className="text-[#000E10]  text-xl font-bold mb-8 mt-8">By using Novacrust, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>

            </div>

            <section className="bg-[#013941]">
                <div className="px-4 lg:px-24 py-8 lg:py-16 space-y-6">
                    <GreenLogo />
                    <div className="block lg:flex lg:justify-between space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h4 className="text-[#E6FBF2] text-md">USA</h4>
                                <p className="text-[#80EABF] text-sm">
                                    651 N Broad St, Suite 206 Middletown, Delaware 19709
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-[#E6FBF2] text-md">NIGERIA</h4>
                                <p className="text-[#80EABF] text-sm">
                                    142 Ahmadu Bello Way, Victoria Island, Lagos 101241
                                </p>
                            </div>
                        </div>
                        <hr className="lg:hidden" />
                        <div>
                            <div className="space-y-4 lg:flex lg:justify-between lg:space-y-0 lg:space-x-6">
                                <div className="space-y-2 flex flex-col">
                                    <h4 className="text-[#E6FBF2] text-md">LEGAL</h4>
                                    <Link href="/privacy-and-policy" className="text-[#80EABF] text-sm">Privacy policy</Link>
                                    <Link href="/terms-and-conditions" className="text-[#80EABF] text-sm">Terms and Conditions</Link>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#E6FBF2] text-md">CONTACT US</h4>
                                    <p className="text-[#80EABF] text-sm">
                                        support@novacrust.com
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[#E6FBF2] text-md">SOCIAL LINKS</h4>
                                    <p className="text-[#80EABF] text-sm">Facebook</p>
                                    <p className="text-[#80EABF] text-sm">Instagram</p>
                                    <p className="text-[#80EABF] text-sm">Twitter</p>
                                    <p className="text-[#80EABF] text-sm">Linkedin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center justify-center flex-col space-y-2">
                        <p className="text-xs text-[#E6FBF2] text-center">
                            © Copyright 2024
                        </p>
                        <p className="text-xs text-[#E6FBF2]">
                            Made with ❤️ in New York & Lagos. Available 🌍
                        </p>
                        <p className="text-xs text-[#E6FBF2] text-center">
                            Novacrust is a financial technology company, not a bank.
                            <br />
                            All banking services are provided by our licensed banking
                            partners.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;