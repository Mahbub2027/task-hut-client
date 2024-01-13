// Installed Material Tailwind for this
// npm i @material-tailwind/react

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function WhyTaskHut() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Global Talent Pool
        </AccordionHeader>
        <AccordionBody>
          Access a diverse and highly skilled pool of developers spanning
          continents. Find the perfect match for your project, regardless of
          location.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Seamless Collaboration
        </AccordionHeader>
        <AccordionBody>
          TaskHut facilitates smooth collaboration, enabling companies and
          developers to work together seamlessly, overcoming time zone
          differences and cultural barriers.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Remote Work, Redefined
        </AccordionHeader>
        <AccordionBody>
          Discover a world where remote work is not just a trend but a
          transformative experience. TaskHut empowers developers to take control
          of their careers and offers companies the flexibility to scale their
          teams efficiently.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Trust and Transparency
        </AccordionHeader>
        <AccordionBody>
          We prioritize trust and transparency in every interaction. Our
          platform is built on a foundation of integrity, ensuring fair
          compensation, clear communication, and reliable project management.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        Innovation Ecosystem
        </AccordionHeader>
        <AccordionBody>
          Join a thriving community of forward-thinkers,
          where ideas flourish, and innovation knows no bounds. TaskHut is not
          just a platform; it&apos;s an ecosystem that nurtures creativity and
          encourages continuous learning.
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default WhyTaskHut;
