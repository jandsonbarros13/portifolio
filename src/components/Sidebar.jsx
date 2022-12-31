import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/foto.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Pedro Barros" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1Q51Uc_GPGu9abk9M4LUHLO2PypxZYu4w/view?usp=share_link" className="btn" target="_blank">
        Meu currículo
      </a>
    </aside>
  );
};

export default Sidebar;
