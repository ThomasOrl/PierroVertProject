import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 PierrOVert. Tous droits réservés.</p>
        <div>
          <a href="/" className="text-white ">Politique de confidentialité</a>
          <a href="/" className="text-white ">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;