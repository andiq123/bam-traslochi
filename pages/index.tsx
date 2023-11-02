import Head from "next/head";
import { useState } from "react";
import About from "../components/about";
import Contact from "../components/contact/contact";
import CookieConsent from "../components/cookieConsent";
import ExperienceBanner from "../components/experienceBanner";
import Footer from "../components/footer";
import Initial from "../components/initial";
import Modal from "../components/modal";
import Tasks from "../components/tasks";
import { getContact, getTasks } from "../fakeApi/data";
import { ContactDetails } from "../types/contactDetails";
import { Task } from "../types/task";

interface Props {
  tasks: Task[];
  contactDetails: ContactDetails;
}
const Home = ({ tasks, contactDetails }: Props) => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const openModal = () => {
    setIsOpenedModal(true);
  };

  const closeModal = () => {
    setIsOpenedModal(false);
  };

  return (
    <div>
      <Head>
        <title>
          Traslochi BAM SRL - Servizio professionale di Traslochi a Verona e
          Villafranca di Verona
        </title>
        <meta
          name="description"
          content="Traslochi BAM SRL offre servizi professionali di trasloco a Verona e Villafranca di Verona. Siamo leader nel settore con oltre 11 anni di esperienza."
        />
        <meta
          name="keywords"
          content="Traslochi, Traslochi Verona, Trasloco Verona, BAM SRL, traslochi nazionali, traslochi internazionali"
        />
        <link rel="canonical" href="https://bamsrl-traslochi.it/" />
        <link rel="dns-prefetch" href="//translate.google.com" />
        <link rel="dns-prefetch" href="//s.w.org" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="Q_K3eXshjO0maCZGR66Q4mZOZ60t09lwMKXCUf93ZgA"
        />
      </Head>

      <Modal
        phoneNumber={contactDetails.Telefono}
        isOpen={isOpenedModal}
        closeModal={closeModal}
      />

      <Initial openModal={openModal} />
      <ExperienceBanner />
      <Tasks tasks={tasks} />
      <About />
      <Contact details={contactDetails} openModal={openModal} />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export async function getStaticProps() {
  const tasks = getTasks();
  const contactDetails = getContact();

  return {
    props: { tasks, contactDetails },
  };
}

export default Home;
