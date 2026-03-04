const items = [
  { name: "Myjka zimnowodna (230V)", price: "140,00 zł/doba", deposit: "Kaucja zwrotna 300 zł" },
  { name: "Myjka gorącowodna (400V)", price: "230,00 zł/doba", deposit: "Kaucja zwrotna 300 zł" },
  { name: "Odkurzacz piorący", price: "80,00 zł/doba", deposit: "Kaucja zwrotna 300 zł" },
];

const accessories = [
  { name: "Dodatkowe akcesoria wraz z urządzeniem", price: "" },
  { name: "Pianotwórnica", price: "30,00 zł" },
  { name: "Dysza rotacyjna", price: "40,00 zł" },
  { name: "Wąż ciśnieniowy 20m (przedłużka)", price: "45,00 zł" },
  { name: "Wąż do kanalizacji 20m", price: "70,00 zł" },
  { name: "Lanca teleskopowa 5,5m", price: "80,00 zł" },
];

const Pricing = () => {
  return (
    <section id="cennik" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Cennik <span className="text-gradient">Wynajmu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Wynajem urządzeń na każdy dzień — bez zbędnych formalności.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-card hover:border-primary/30 transition-colors"
            >
              <div>
                <h3 className="font-heading font-bold text-lg">{item.name}</h3>
                {item.deposit && (
                  <span className="text-sm text-muted-foreground">{item.deposit}</span>
                )}
              </div>
              <span className="font-heading font-extrabold text-2xl text-primary whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="font-heading font-bold text-xl mb-6 text-center">
            Dodatkowe akcesoria
          </h3>
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
            {accessories.filter(a => a.price).map((acc, i) => (
              <div
                key={acc.name}
                className={`flex items-center justify-between px-6 py-4 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className="text-foreground">{acc.name}</span>
                <span className="font-heading font-bold text-primary">{acc.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
