import shopImg from "@/assets/zdjecie_sklep.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-hero min-h-[90vh] flex items-center pt-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-heading font-semibold uppercase tracking-wider mb-4">
              Od 2008 roku
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-secondary-foreground">
              Sprzedaż i serwis{" "}
              <span className="text-primary">myjek ciśnieniowych i maszyn sprzątających
              </span>
            </h1>
          </div>
          <p className="text-lg text-secondary-foreground/70 max-w-lg font-body leading-relaxed">
            Profesjonalne urządzenia Kärcher i Kränzle. Sprzedaż, serwis, wynajem. 
            Wieloletnie doświadczenie i fachowa obsługa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-elevated">
              
              Skontaktuj się
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#uslugi"
              className="inline-flex items-center gap-2 border-2 border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg font-heading font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors">
              
              Nasze usługi
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <img
              src={shopImg}
              alt="Sklep F.H.U. JACU - Kärcher i Kränzle"
              className="relative z-10 w-full max-w-md object-cover rounded-xl drop-shadow-2xl" />
            
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;