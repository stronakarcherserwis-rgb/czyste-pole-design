import { Shield, Award, Wrench } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Wieloletnie doświadczenie",
    desc: "Na rynku od 2008 roku. Posiadamy dużą wiedzę na temat urządzeń czyszczących.",
  },
  {
    icon: Award,
    title: "Profesjonalizm",
    desc: "Jesteśmy jednym z najlepszych serwisów w regionie. Szybko i fachowo.",
  },
  {
    icon: Wrench,
    title: "Serwis na miejscu",
    desc: "Serwisujemy urządzenia u nas na miejscu. Nie wysyłamy, naprawiamy sami.",
  },
];

const About = () => {
  return (
    <section id="o-nas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            O <span className="text-gradient">Nas</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nasza firma zajmuje się serwisem i sprzedażą urządzeń, części, akcesoriów 
            oraz środków czystości. Jesteśmy gotowi, by pomóc klientowi w każdej sprawie 
            w wybranej specjalizacji.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
