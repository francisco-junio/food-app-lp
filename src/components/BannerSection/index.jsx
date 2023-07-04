import BannerIllustration from "../../assets/BannerFood.png";

export const BannerSection = () => {
   return (
      <section>
         <div>
            <h1 className="title black lg">
               Descubra o melhor <span className="red">aplicativo de comida</span>
            </h1>
            <p className="paragraph black">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
               tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet
               erat elementum.
            </p>
            <a href="#" className="btn red">Saiba mais</a>
         </div>
         <img src={BannerIllustration} alt="Comidas gostosas" />
      </section>
   );
};
