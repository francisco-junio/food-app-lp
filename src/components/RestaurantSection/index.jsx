import { RestaurantList } from "./RestaurantList";
import RestaurantIcon from "../../assets/RestaurantIcon.svg";

export const RestaurantSection = () => {
   return (
      <section className="section-green section-padding">
         <div className="container">
            <img src={RestaurantIcon} alt="Ícone Restaurante" />
            <h2 className="title white md">Restaurantes famosos</h2>
            <RestaurantList />
         </div>
      </section>
   );
};
