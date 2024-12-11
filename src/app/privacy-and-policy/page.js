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
            <div className={`container mx-auto mt-8 p-4 ${inter.className} bg-[#E6FBF2]`}>
                <h1 className="lg:text-3xl font-bold mb-4 text-[#013941] text-md">Privacy Policy</h1>
                <p className="text-[#333333] mb-4 font-medium text-lg">Effective Date: September 16th, 2024</p>
                <p className="text-[#000E10] font-bold mt-12 mb-10">Protecting your personal information is a priority for NovaCrust, a product of 21C Coffee, as we recognize your personal information. To explain how we gather, use, and protect your information, we have prepared this Privacy Policy. By using our services, you agree to the terms of this Privacy Policy.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">1. Information We Collect</h2>
                <ul className="list-disc list-inside text-[#000E10]  text-sm font-bold mb-6">
                    <li className="list-none">a. {" "}<strong>Personal information:</strong> Name, address, phone number, and billing information when customers subscribe to our services.</li>
                    <li>Username, password, and other login credentials.</li>
                    <li>Email address.</li>
                    <li>Credit card information for purchasing products from NovaCrust {"without card"}.</li>
                </ul>

                <ul className="list-disc list-inside text-[#000E10]  text-sm font-bold mb-6">
                    <li className="list-none">b. {" "} Transactional Information:</li>
                    <li>Details of payments, transactions, and funding methods linked to your Novacrust virtual card.</li>
                </ul>


                <ul className="list-disc list-inside text-[#000E10]  text-sm font-bold mb-6">
                    <li className="list-none">c. {" "}  Technical Information:</li>
                    <li>Device type, IP address, browser type, and usage data collected through cookies or other tracking technologies.</li>
                </ul>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">2. How We Use Your Information</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-1">We use your information to:</p>
                <p className="text-[#000E10]  text-sm font-bold mb-1">Provide and improve our services, including issuing virtual cards and processing transactions.</p>
                <ul className="list-disc list-inside text-[#000E10]  text-sm font-bold mb-4">
                    <li>Communicate with you regarding account updates, promotions, or policy changes.</li>
                    <li>Comply with legal obligations and prevent fraud or unauthorized access.</li>
                </ul>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">3. How We Share Your Information</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-1">Your information may be shared with:</p>
                <ul className="list-disc list-inside text-[#000E10]  text-sm font-bold mb-2">
                    <li>Service Providers: Third-party processors, payment gateways, and compliance partners who help us deliver our services.</li>
                    <li>Legal Authorities: When required by law or to protect our rights and prevent misuse of our platform.</li>
                    <li>Corporate Affiliates: Entities within Prosharbiz LLC for business purposes.</li>
                </ul>
                <p className="text-[#000E10]  text-sm font-bold mb-4">We never sell or share your information for marketing purposes without your consent.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">4. Data Retention</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">We retain your personal information as long as your account is active or as required by law. Once no longer needed, data is securely deleted or anonymized.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">5. Security Measures</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">We use encryption, firewalls, and secure server protocols to protect your data. While we strive to safeguard your information, no system is completely secure, and we encourage responsible sharing of sensitive data.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">6. Your Rights</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-1">You have the right to:</p>
                <ul className="list-disc list-inside text-[#000E10]  text-sm font-bold mb-2">
                    <li>Access, update, or delete your personal information by logging into your account.</li>
                    <li>Opt-out of marketing communications.</li>
                    <li>Request clarification on how your data is used.</li>
                </ul>
                <p className="text-[#000E10]  text-sm font-bold mb-4">To exercise these rights, contact us at <span className="text-[#013941]">privacy@novacrust.com</span>.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">7. Cookies and Tracking</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">Novacrust uses cookies to enhance your experience. You can manage cookie preferences in your browser settings.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">8. International Users</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">As a Delaware-based company, Prosharbiz LLC complies with U.S. data laws. Users outside the U.S. consent to data transfers to and processing in the United States.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">9. Changes to This Privacy Policy</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-6">We may update this policy periodically. The effective date at the top of the page indicates the latest revision. Continued use of our services signifies your agreement to the revised terms.</p>
                <h2 className="text-xl font-bold mb-3 text-[#000E10]">10. Contact Us</h2>
                <p className="text-[#000E10]  text-sm font-bold mb-2">For questions or concerns about this policy, reach out to:</p>
                <ul className="list-disc list-inside mb">
                <li className="text-[#000E10]  text-sm font-bold mb-1">Prosharbiz LLC</li>
                <li className="text-[#000E10]  text-sm font-bold mb-1">651 N Broad St, Suite 206 Middletown, Delaware 19709</li>
                    <li className="text-[#000E10]  text-sm font-bold mb-1">Email: <span className="text-[#013941]">privacy@novacrust.com</span></li>
                   
                </ul>
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