import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            <span className="text-gradient">Kontakt</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-muted-foreground">
            Zapraszamy do kontaktu — chętnie odpowiemy na wszelkie pytania.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-6">
              <h3 className="font-heading font-bold text-xl">Kärcher Serwis</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Adres</p>
                  <p className="text-muted-foreground">ul. Lwowska 39<br />27-600 Sandomierz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-muted-foreground">
                    <a href="tel:+48156221221" className="hover:text-primary transition-colors">+48 15 822 12 21</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-muted-foreground">
                    <a href="mailto:biuro@karcherserwis.pl" className="hover:text-primary transition-colors text-muted-foreground">biuro@karcherserwis.pl</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Godziny otwarcia</p>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Pn–Pt: 8:00 – 16:00</p>
                    <p>Sobota: 8:00 – 12:00</p>
                    <p>Niedziela: Nieczynne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Lwowska+39,+27-600+Sandomierz,+Poland&zoom=16"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji" />
            
          </div>
        </div>
      </div>
    </section>);

};

export default Contact;