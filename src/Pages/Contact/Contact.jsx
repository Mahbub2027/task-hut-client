import { Helmet } from "react-helmet";
import ContactComponents from "../../ComponentsUI/ContactComponents";

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact || TaskHut</title>
      </Helmet>
      <ContactComponents></ContactComponents>
    </div>
  );
}

export default Contact;
