import MobileIcon from "../../assets/MobileIcon.svg";

export const AboutSection = () => {
   return (
      <section>
         <div>
            <img src={MobileIcon} alt="Ícone Mobile" />
            <h2 className="title lg black">Sobre o <span className="red">aplicativo</span></h2>
         </div>

         <p className="paragraph black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor
            ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat
            elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non
            imperdiet erat elementum. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies,
            non imperdiet erat elementum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam
            ultricies, non imperdiet erat elementum.
         </p>
      </section>
   );
};
