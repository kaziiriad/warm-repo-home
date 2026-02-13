const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="section-container text-center">
      <p className="text-muted-foreground text-sm italic mb-2">
        "Building robust systems that scale, one commit at a time"
      </p>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} Sultan Mahmud. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
