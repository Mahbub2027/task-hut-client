import React from 'react'
import privacy from '../../assets/images/privacy.jpg';

const PrivacyPolicy = () => {
  return (
    <div className="text-center bg-purple-100 font-bold">
      <h1 className="text-4xl py-4">TaskHut - Privacy Policy</h1>
      <div className="lg:flex justify-evenly items-center">
        <div>
          <h3 className="items-center text-balance py-4">
            Welcome to TaskHut, your one-stop platform for connecting companies with talented professionals. <br />
            We are committed to protecting the privacy of our users, both companies and individuals. <br />
            This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to protect it.
          </h3>
        </div>

        <div>
          <img src={privacy} className="lg:h-96 sm:h-32 w-full  rounded-3xl" alt="" />
        </div>
      </div>

      <h4 className='text-2xl py-12'>Information We Collect</h4>
      1. Company Information: When companies register on TaskHut, we collect basic information such as company name, contact details, website URL, and industry. We may also collect additional information depending on the specific services used, such as job postings, blog posts, and reviews.
      Individual Information: When individuals create profiles on TaskHut, we collect basic information such as name, email address, location, and skills. We may also collect additional information depending on the specific services used, such as job applications, reviews, and ratings.
      Usage Data: We collect information about how users interact with our platform, such as the pages they visit, the links they click, and the searches they perform. This information helps us improve the user experience and personalize content.
      How We Use Your Information <br /> <br />

      2. To provide and improve our services: We use the information we collect to operate, maintain, and improve TaskHut, including matching companies with qualified candidates, facilitating communication between users, and personalizing content.
      To send you marketing communications: With your consent, we may use your email address to send you marketing communications about TaskHut products and services. You can unsubscribe from these communications at any time.
      To comply with legal requirements: We may disclose your information to comply with legal requirements, such as a court order or subpoena. <br />

      <h4 className='text-2xl py-12'>Data Sharing and Disclosure</h4>

      We do not share your personal information with third parties except in the following limited circumstances: <br />

      1. Service providers: We may share your information with third-party service providers who help us operate TaskHut, such as cloud storage providers and payment processors. These service providers are bound by contractual obligations to keep your information confidential and secure.<br></br>

      2. Legal requirements: We may disclose your information to comply with legal requirements, such as a court order or subpoena. <br />
      3. Business transfers: If TaskHut is acquired by or merged with another company, your information may be transferred to the new company. <br />

      <h4 className='text-2xl py-12'>Data Security</h4>

      We take appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure, so we cannot guarantee the security of your information.

      <h4 className='text-2xl py-12'>Your Choices</h4>

      You have choices about how we collect, use, and share your information:
      1. You can choose not to provide certain information, but this may limit your ability to use certain features of TaskHut. <br />
      2. You can access and update your information in your account settings. <br />
      3. You can unsubscribe from marketing communications by clicking the unsubscribe link in any email you receive from us. <br />
      <h4 className='text-2xl py-12'>Children's Privacy</h4>

      TaskHut is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.

      <h4 className='text-2xl py-12'>Changes to this Privacy Policy</h4>

      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.

      <h4 className='text-2xl py-12'>Contact Us</h4>

      If you have any questions about this Privacy Policy, please contact us at:

      Email: taskhutweb@gmail.com
      Address: LU, Kamalbazar, Sylhet, Bangladesh

    </div>
  )
}

export default PrivacyPolicy





