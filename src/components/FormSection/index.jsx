import { ConvertingForm } from "./ConvertingForm";

export const FormSection = () => {
   return (
      <section className="section-red section-padding">
         <div className="container sm">
            <h2 className="title white md center">Conheça nosso aplicativo</h2>
            <ConvertingForm />
         </div>
      </section>
   );
};
