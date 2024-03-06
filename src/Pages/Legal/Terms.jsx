import React from "react";
import terms from '../../assets/images/terms.jpg';

const Terms = () => {
  return (
    <div className="text-center bg-purple-100 font-bold">
      <h1 className="text-4xl py-4">TaskHut - Terms of Use</h1>
      <div className="lg:flex justify-evenly items-center">
        <div>
          <h3 className="items-center text-wrap py-4">
            Welcome to TaskHut! These Terms of Use ("Terms") govern your access
            to and use of the TaskHut website (the "Site"). <br /> By accessing
            or using the Site, you agree to be bound by these Terms. <br />{" "}
            Please read them carefully before accessing or using the Site.
          </h3>
        </div>

        <div>
          <img src={terms} className="lg:w-96 sm:w-32 rounded-3xl" alt="" />
        </div>

      </div>
      <button className="btn  btn-primary my-5">1. Acceptance of Terms</button>
      <p className="text-balance">
        By accessing or using the Site, you agree to these Terms and any
        additional terms and conditions that may apply to specific services or
        features offered on the Site. If you do not agree to these Terms, you
        may not access or use the Site.
      </p>
      <button className="btn  btn-primary my-5">2. Changes to Terms</button>
      <p className="text-balance">
        We reserve the right to modify these Terms at any time without prior
        notice. Any changes will be effective immediately upon posting on the
        Site. Your continued use of the Site after the posting of revised Terms
        constitutes your acceptance of such changes.
      </p>
      <button className="btn  btn-primary my-5">3. Use of the Site</button>
      <p className="text-balance">
        You may use the Site only for lawful purposes and in accordance with
        these Terms. You agree not to: Violate any applicable laws or
        regulations. Impersonate any person or entity, or falsely state or
        otherwise misrepresent your affiliation with any person or entity.
        Interfere with or disrupt the operation of the Site or servers or
        networks connected to the Site. Attempt to gain unauthorized access to
        the Site or any portion thereof. Engage in any other conduct that
        restricts or inhibits anyone’s use or enjoyment of the Site.
      </p>
      <button className="btn  btn-primary my-5">
        4. Company Responsibilities
      </button>
      <p className="text-balance">
        Companies posting jobs, blogs, or reviews on TaskHut are responsible for
        ensuring the accuracy and legality of the content they submit. Companies
        are not allowed to discriminate against applicants based on protected
        characteristics such as race, gender, religion, or sexual orientation.
      </p>
      <button className="btn  btn-primary my-5">
        5. User Responsibilities
      </button>
      <p className="text-balance">
        Users applying for jobs on TaskHut must provide accurate and truthful
        information in their applications. Users must not engage in any
        fraudulent or deceptive activities on the Site.
      </p>
      <button className="btn  btn-primary my-5">
        6. Intellectual Property Rights
      </button>
      <p className="text-balance">
        The Site and its entire contents, features, and functionality (including
        but not limited to all information, software, text, displays, images,
        video, and audio) are owned by TaskHut and its licensors and are
        protected by copyright, trademark, and other intellectual property laws.
      </p>
      <button className="btn  btn-primary my-5">
        7. Links to Third-Party Websites
      </button>
      <p className="text-balance">
        The Site may contain links to third-party websites or resources. These
        links are provided for your convenience only and do not imply any
        endorsement or affiliation with the linked site. We have no control over
        the content or availability of these third-party sites and are not
        responsible for any damages or losses incurred as a result of your use
        of or reliance on any third-party content, products, or services.
      </p>
      <button className="btn  btn-primary my-5">
        8. Limitation of Liability
      </button>
      <p className="text-balance">
        In no event shall TaskHut or its affiliates, licensors, or service
        providers be liable for any indirect, consequential, incidental,
        special, punitive, or exemplary damages, including without limitation,
        damages for loss of profits, goodwill, use, data, or other intangible
        losses, arising out of or relating to your use of the Site.
      </p>
      <button className="btn  btn-primary my-5">9. Governing Law</button>
      <p className="text-balance">
        These Terms shall be governed by and construed in accordance with the
        laws of Bangladesh, without regard to its conflict of law provisions.
      </p>
      <button className="btn  btn-primary my-5">10. Contact Us</button>
      <p className="text-balance">
        If you have any questions about these Terms, please contact us at
        taskhutweb@gmail.com.
      </p>
      <p>
        By accessing or using the Site, you acknowledge that you have read,
        understood, and agree to be bound by these Terms.
      </p>
      Last Updated: 26/02/2024
    </div>
  );
};

export default Terms;
