const Footer = () =>
<footer className="bg-secondary text-secondary-foreground py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="font-heading font-bold text-lg mb-2">KARCHERSERWIS
      <span className="text-primary">KÄRCHER</span> SERWIS
      </p>
      <p className="text-secondary-foreground/60 text-sm">
        © {new Date().getFullYear()} Kärcher Serwis. Wszelkie prawa zastrzeżone.
      </p>
    </div>
  </footer>;


export default Footer;