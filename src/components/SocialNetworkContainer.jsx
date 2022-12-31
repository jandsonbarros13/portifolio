import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, lincado: "https://www.linkedin.com/in/pedro-jandson-barros-muniz-1a4a691a6/"},
  { name: "github", icon: <FaGithub />, lincado: "https://github.com/jandsonbarros13"},
  { name: "instagram", icon: <FaInstagram />, lincado: "https://www.instagram.com/pedrobarros0/"},
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.lincado} target="_blank" rel="noopener noreferrer" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
