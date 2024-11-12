import React from 'react';

const TermsOfService = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-8 text-pink-600">Terms of Service</h1>
      <p className="text-gray-700 mb-4">Effective Date: 23 July 2024</p>

      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-700 mb-4">
        By accessing or using Blood Sugar Companion's website and blood sugar tracker services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with these terms, please do not use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
      <p className="text-gray-700 mb-4">
        Our services are intended for users who are at least 18 years of age. By using our services, you confirm that you meet this eligibility requirement.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
      <p className="text-gray-700 mb-4">
        You agree to use our blood sugar tracker and website services responsibly and only for lawful purposes. You may not use our services to engage in any fraudulent or illegal activity or to attempt to gain unauthorized access to our systems.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Account Registration and Security</h2>
      <p className="text-gray-700 mb-4">
        To access certain features, you may need to register and create an account. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Privacy</h2>
      <p className="text-gray-700 mb-4">
        Your privacy is important to us. Our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> explains how we collect, use, and protect your information when you use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        All content and materials on this website, including text, graphics, logos, and software, are the intellectual property of Blood Sugar Companion or its licensors and are protected by copyright and other laws. You may not use, copy, or distribute any content from this website without our permission.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
      <p className="text-gray-700 mb-4">
        Our blood sugar tracker services are provided for informational and self-monitoring purposes only and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your healthcare provider with any questions you may have regarding a medical condition.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        Blood Sugar Companion shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services. This includes, but is not limited to, damages for personal injury, loss of data, or other losses resulting from the use or inability to use our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to modify or replace these Terms of Service at any time. Any changes will be posted on this page with an updated effective date. By continuing to use our services, you accept any modified terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to terminate or suspend your account and access to our services without notice if you violate these terms or engage in any activity that may harm our business or other users.
      </p>

      <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
      <p className="text-gray-700 mb-4">
        These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
      </p>

      <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions about these Terms of Service, please contact us at:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Email: <strong>ethanj.michael03@gmail.com</strong></li>
        {/* <li>Mailing Address: <strong>[Your Business Address, if applicable]</strong></li> */}
      </ul>
    </div>
  );
};

export default TermsOfService;
