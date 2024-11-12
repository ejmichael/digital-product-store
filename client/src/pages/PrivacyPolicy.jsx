import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-8 text-pink-600">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">Effective Date: 10 July 2024</p>
      
      <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
      <p className="text-gray-700 mb-4">
        Welcome to Blood Sugar Companion! We value your privacy and are committed to protecting your personal information.
        This privacy policy outlines how we collect, use, and store your data when you visit our website or use our blood sugar tracker services.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We may collect and process the following types of information:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
        <li>
          <strong>Personal Information:</strong> Name, email address, and contact details when you subscribe, register, or contact us.
        </li>
        <li>
          <strong>Health-Related Data:</strong> Information you provide related to blood sugar levels, medications, meal tracking, and medical appointments, if applicable.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about your interactions with our website, such as IP address, browser type, pages visited, and other data collected through cookies and similar technologies.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use your data to:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
        <li>Provide, operate, and improve our blood sugar tracker services.</li>
        <li>Respond to your inquiries, support requests, or feedback.</li>
        <li>Send periodic updates, reminders, or tips related to blood sugar management.</li>
        <li>Comply with legal obligations and protect the security of our website and users.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
      <p className="text-gray-700 mb-4">
        We store your information securely and use industry-standard measures to protect it from unauthorized access, alteration, or destruction. Only authorized personnel can access this information as needed.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not share, sell, or rent your personal information with third parties, except:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
        <li>When required by law, regulation, or legal process.</li>
        <li>With trusted service providers who help us operate our website and who agree to keep your data confidential.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
      <p className="text-gray-700 mb-4">
        Our website may use cookies to enhance user experience and analyze site performance. You can disable cookies in your browser settings, but some features may be limited as a result.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. User Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
        <li>Access, correct, or delete your personal information.</li>
        <li>Withdraw consent for data processing, where applicable.</li>
        <li>Request a copy of your data or limit its use.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        To exercise these rights, please contact us at <strong>[Contact Email]</strong>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this policy periodically. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have questions or concerns about our privacy policy, please reach out to us at:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Email: <strong>ethanj.michael03@gmail.com</strong></li>
        {/* <li>Mailing Address: <strong>[Your Business Address, if applicable]</strong></li> */}
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
