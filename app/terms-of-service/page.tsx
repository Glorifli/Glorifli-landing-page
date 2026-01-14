import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Glorifli',
    description: 'Terms of Service for Glorifli - Read our terms and conditions for using our services.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-black text-white font-sans pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Terms of Service</h1>
                    <p className="text-gray-400 text-lg">Our terms and conditions</p>
                    <p className="text-sm text-gray-500 mt-4">Last updated: January 14, 2026</p>
                </header>

                <div className="space-y-12 text-gray-300 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Interpretation and Definitions</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Interpretation</h3>
                            <p>
                                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Definitions</h3>
                            <p className="mb-4">For the purposes of these Terms and Conditions:</p>
                            <ul className="list-disc pl-6 space-y-4 marker:text-gray-500">
                                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                                <li><strong>Country</strong> refers to: Florida, United States.</li>
                                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Glorifli.</li>
                                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                                <li><strong>Service</strong> refers to the Website.</li>
                                <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                                <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
                                <li><strong>Website</strong> refers to Glorifli, accessible from glorifli.com.</li>
                                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Acknowledgment</h2>
                        <div className="space-y-4">
                            <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                            <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                            <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                            <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                            <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">User Accounts</h2>
                        <div className="space-y-4">
                            <p>When You create an account with Us (if applicable), You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.</p>
                            <p>You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password. You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Content</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Your Right to Post Content</h3>
                            <div className="space-y-4">
                                <p>Our Service allows You to post or submit Content (e.g., information for your website, blog posts, or chatbot configurations). You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness.</p>
                                <p>By posting Content to the Service, You grant Us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service for the purpose of providing the Service to You. You retain any and all of Your rights to any Content You submit, post or display on or through the Service and You are responsible for protecting those rights.</p>
                                <p>You represent and warrant that: (i) the Content is Yours (You own it) or You have the right to use it and grant Us the rights and license as provided in these Terms, and (ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Content Restrictions</h3>
                            <div className="space-y-4">
                                <p>The Company is not responsible for the content of the Service's users. You expressly understand and agree that You are solely responsible for the Content and for all activity that occurs under Your account.</p>
                                <p>You may not transmit any Content that is unlawful, offensive, upsetting, intended to disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of such objectionable Content include, but are not limited to, the following:</p>
                                <ul className="list-disc pl-6 space-y-2 marker:text-gray-500">
                                    <li>Unlawful or promoting unlawful activity.</li>
                                    <li>Defamatory, discriminatory, or mean-spirited content, including references or commentary about religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups.</li>
                                    <li>Spam, machine – or randomly – generated, constituting unauthorized or unsolicited advertising, chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling.</li>
                                    <li>Containing or installing any viruses, worms, malware, trojan horses, or other content that is designed or intended to disrupt, damage, or limit the functioning of any software, hardware or telecommunications equipment.</li>
                                    <li>Infringing on any proprietary rights of any party, including patent, trademark, trade secret, copyright, right of publicity or other rights.</li>
                                    <li>Impersonating any person or entity including the Company and its employees or representatives.</li>
                                    <li>Violating the privacy of any third person.</li>
                                    <li>False information and features.</li>
                                </ul>
                                <p>The Company reserves the right, but not the obligation, to, in its sole discretion, determine whether or not any Content is appropriate and complies with these Terms, refuse or remove this Content. The Company can also limit or revoke the use of the Service if You post such objectionable Content.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Content Backups</h3>
                            <p>Although regular backups of Content are performed, the Company does not guarantee there will be no loss or corruption of data. You agree to maintain a complete and accurate copy of any Content in a location independent of the Service.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">AI-Generated Content</h2>
                        <div className="space-y-4">
                            <p>Our Service may utilize AI features (e.g., AI-powered chatbots). When You use Our Service’s AI features, You retain ownership of both Your inputs (content You provide to the AI) and outputs (content generated by the AI in response), subject to the terms of the underlying AI providers.</p>
                            <p>You acknowledge that AI-generated content may be inaccurate, incomplete, or biased. You are responsible for reviewing and verifying any AI-generated content before use. You must not represent AI-generated content as human-created when it is not.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Copyright Policy</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-white mb-4">Intellectual Property Infringement</h3>
                            <p>We respect the intellectual property rights of others. It is Our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement of any person.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">DMCA Notice and DMCA Procedure for Copyright Infringement Claims</h3>
                            <p className="mb-4">You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-gray-500 mb-4">
                                <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.</li>
                                <li>A description of the copyrighted work that You claim has been infringed, including the URL of the location where the copyrighted work exists or a copy of the copyrighted work.</li>
                                <li>Identification of the URL or other specific location on the Service where the material that You claim is infringing is located.</li>
                                <li>Your address, telephone number, and email address.</li>
                                <li>A statement by You that You have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                                <li>A statement by You, made under penalty of perjury, that the above information in Your notice is accurate and that You are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                            </ul>
                            <p>You can contact our copyright agent via email at <strong>info@glorifli.com</strong>. Upon receipt of a notification, the Company will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the Service.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
                        <p>The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Your Feedback to Us</h2>
                        <p>You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Links to Other Websites</h2>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
                        <p>We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
                        <div className="space-y-4">
                            <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                            <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms).</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                        <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
                        <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Disputes Resolution</h2>
                        <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">United States Legal Compliance</h2>
                        <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Severability and Waiver</h2>
                        <ul className="list-disc pl-6 space-y-4 marker:text-gray-500">
                            <li><strong>Severability:</strong> If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law.</li>
                            <li><strong>Waiver:</strong> Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right at any time thereafter.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Changes to These Terms and Conditions</h2>
                        <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                        <p className="mb-4">If you have any questions about these Terms and Conditions, You can contact us:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-gray-500">
                            <li>By email: <strong>info@glorifli.com</strong></li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
