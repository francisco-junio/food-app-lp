import BannerIllustration from "../../assets/BannerFood.png"

export const BannerSection = () => {
   return (
      <section>
         <div>
            <h1>Descubra o melhor aplicativo de comida</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
               tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet
               erat elementum.
            </p>
            <a href="#">Saiba mais</a>
         </div>
         <img src={BannerIllustration} alt="Comidas gostosas" />
      </section>
   );
};
