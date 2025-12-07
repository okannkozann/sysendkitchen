import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-sys-metallic pt-24 pb-12 border-t border-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sys-navy mb-6">Projeniz için görüşelim.</h2>
            <p className="text-sys-steel mb-12 text-lg max-w-2xl mx-auto">
              Endüstriyel mutfak ihtiyaçlarınız için uzman ekibimizle iletişime geçin. 
              Ücretsiz keşif ve projelendirme hizmetimizden yararlanın.
            </p>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Address Card */}
              <div className="bg-white p-8 rounded-2xl border border-sys-silver shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="bg-sys-light p-4 rounded-full text-sys-accent mb-6 group-hover:bg-sys-accent group-hover:text-white transition-colors">
                    <MapPin size={32} />
                </div>
                <h4 className="text-sys-navy font-bold mb-3 text-lg">Adres</h4>
                <p className="text-sys-steel leading-relaxed">
                  İkitelli OSB, Metal İş Sanayi Sitesi<br />
                  12. Blok No:45, Başakşehir/İstanbul
                </p>
              </div>
              
              {/* Phone Card */}
              <div className="bg-white p-8 rounded-2xl border border-sys-silver shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                 <div className="bg-sys-light p-4 rounded-full text-sys-accent mb-6 group-hover:bg-sys-accent group-hover:text-white transition-colors">
                    <Phone size={32} />
                </div>
                <h4 className="text-sys-navy font-bold mb-3 text-lg">Telefon</h4>
                <p className="text-sys-steel text-lg font-medium mb-1">+90 (212) 444 0 SYS</p>
                <p className="text-sys-steel text-sm">Hafta içi: 09:00 - 18:00</p>
              </div>

              {/* Email Card */}
              <div className="bg-white p-8 rounded-2xl border border-sys-silver shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                 <div className="bg-sys-light p-4 rounded-full text-sys-accent mb-6 group-hover:bg-sys-accent group-hover:text-white transition-colors">
                    <Mail size={32} />
                </div>
                <h4 className="text-sys-navy font-bold mb-3 text-lg">E-Posta</h4>
                <a href="mailto:info@syseqipman.com" className="text-sys-steel hover:text-sys-accent transition-colors text-lg">
                  info@syseqipman.com
                </a>
                <p className="text-sys-steel text-sm mt-1">24 saat içinde dönüş</p>
              </div>

            </div>
        </div>

        <div className="h-px w-full bg-sys-silver mb-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sys-steel text-sm">© 2024 SYS Endüstriyel Mutfak. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
             <a href="#" className="text-sys-steel hover:text-sys-accent transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="text-sys-steel hover:text-sys-accent transition-colors"><Instagram size={20} /></a>
             <a href="#" className="text-sys-steel hover:text-sys-accent transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;