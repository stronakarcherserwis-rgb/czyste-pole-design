import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

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
              <h3 className="font-heading font-bold text-xl">Dane firmy</h3>
              
              <div className="text-sm text-muted-foreground space-y-1 pb-2 border-b border-border">
                <p className="font-semibold text-foreground">F.H.U. "JACU" Jacek Nowak</p>
                <p>ul. Konstytucji 3 Maja 2/5</p>
                <p>39-400 Tarnobrzeg</p>
                <p>NIP: 864-107-14-75</p>
                <p>REGON: 291080909</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Sklep i serwis</p>
                  <p className="text-muted-foreground">ul. Lwowska 39<br />27-600 Sandomierz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <div className="text-muted-foreground space-y-1">
                    <a href="tel:+48158221221" className="block hover:text-primary transition-colors">+48 15 822 12 21</a>
                    <a href="tel:+48604222560" className="block hover:text-primary transition-colors">+48 604 222 560</a>
                    <a href="tel:+48604904222" className="block hover:text-primary transition-colors">+48 604 904 222</a>
                    <a href="tel:+48666222549" className="block hover:text-primary transition-colors">+48 666 222 549</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">E-mail</p>
                  <p className="text-muted-foreground">
                    <a href="mailto:fhujacu@poczta.fm" className="hover:text-primary transition-colors text-muted-foreground">fhujacu@poczta.fm</a>
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

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Odwiedź nas na Facebooku</p>
                  <a href="https://pl-pl.facebook.com/karcherserwis/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    facebook.com/karcherserwis
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border min-h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.5!2d21.7489!3d50.6822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722b5d5e2f1c5e7%3A0x0!2sul.+Lwowska+39%2C+27-600+Sandomierz!5e0!3m2!1spl!2spl!4v1234567890" width="100%" height="100%"
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