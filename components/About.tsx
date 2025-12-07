import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const FEATURES = [
  "Uzman Kadro",
  "Profesyonel Çözüm",
  "Anahtar Teslim Proje",
  "Mutlu Müşteri, Güçlü Mutfak"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sys-light skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="inline-block bg-sys-metallic px-4 py-2 rounded-full text-sys-navy text-sm font-medium border border-sys-silver">
              25+ Yıllık Tecrübe
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sys-navy leading-tight">
              Mutfak Mimarisinde <br />
              <span className="text-sys-steel">Güvenilir Partneriniz</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              SYS Endüstriyel Mutfak olarak, otellerden restoranlara, fabrikalardan hastanelere kadar geniş bir yelpazede profesyonel mutfak çözümleri sunuyoruz. Projelendirmeden kuruluma, satış sonrası destekten bakıma kadar her aşamada yanınızdayız.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sys-navy">
                  <CheckCircle2 className="text-sys-accent w-6 h-6" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-sys-metallic">
                <img 
                    src="assets/resim11.png" 
                    alt="SYS Mutfak Proje" 
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-sys-navy/10 mix-blend-multiply"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl border border-sys-metallic shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-sys-navy mb-1">50+</div>
                <div className="text-sm text-sys-steel uppercase tracking-wider">Tamamlanan Proje</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;