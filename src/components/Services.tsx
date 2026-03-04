import machineLineup from "@/assets/machines-lineup.jpg";
import machineHot from "@/assets/machine-hot.jpg";
import machineKarcher from "@/assets/machine-karcher.jpg";
import { ShoppingCart, Settings, Key } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Sprzedaż",
    desc: "Wieloletnie doświadczenie na rynku pozwala naszym klientom na skorzystanie z fachowej porady przy wyborze urządzenia.",
    img: machineLineup,
  },
  {
    icon: Settings,
    title: "Serwis",
    desc: "Świadczymy usługi serwisowe u nas na miejscu. Nie wysyłamy urządzeń, naprawiamy sami — szybko i profesjonalnie.",
    img: machineKarcher,
  },
  {
    icon: Key,
    title: "Wynajem",
    desc: "Wynajmujemy profesjonalne maszyny czyszczące. Myjki ciśnieniowe na zimną i gorącą wodę oraz odkurzacze.",
    img: machineHot,
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Nasze <span className="text-gradient">Usługi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Kompleksowa obsługa urządzeń czyszczących — od sprzedaży po serwis i wynajem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="h-56 overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
