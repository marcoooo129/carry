import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { CONTENT, IMAGES } from './constants';
import { Language } from './types';
import { Section } from './components/Section';
import { PianoKeys } from './components/PianoKeys';
import { MusicCursor } from './components/MusicCursor';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('it');
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'it' ? 'en' : 'it');

  return (
    <div className="min-h-screen bg-piano-black text-zinc-300 font-serif selection:bg-piano-gold/30">
      <MusicCursor />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'bg-piano-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8 md:py-12'}`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-display text-2xl md:text-3xl tracking-tight text-piano-ivory italic z-50 hover:text-piano-gold transition-colors duration-500 cursor-default">
            LK.
          </div>
          
          <div className="flex items-center gap-12 md:gap-16">
            <div className={`hidden md:flex gap-10 text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-zinc-400 font-medium transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-80'}`}>
              <a href="#about" className="hover:text-piano-gold transition-colors duration-500 relative group">
                {t.nav.about}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-piano-gold transition-all duration-500 group-hover:w-full opacity-50"></span>
              </a>
              <a href="#education" className="hover:text-piano-gold transition-colors duration-500 relative group">
                {t.nav.education}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-piano-gold transition-all duration-500 group-hover:w-full opacity-50"></span>
              </a>
              <a href="#awards" className="hover:text-piano-gold transition-colors duration-500 relative group">
                {t.nav.awards}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-piano-gold transition-all duration-500 group-hover:w-full opacity-50"></span>
              </a>
              <a href="#contact" className="hover:text-piano-gold transition-colors duration-500 relative group">
                {t.nav.contact}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-piano-gold transition-all duration-500 group-hover:w-full opacity-50"></span>
              </a>
            </div>
            
            <button 
              onClick={toggleLang}
              className="z-50 group flex items-center gap-3 px-5 py-2 rounded-none border border-white/10 hover:border-piano-gold/40 bg-black/20 backdrop-blur-sm transition-all duration-500 text-[10px] font-sans tracking-[0.2em] uppercase cursor-pointer"
            >
              <Globe size={10} className="text-zinc-500 group-hover:text-piano-gold transition-colors" />
              <span className="text-zinc-400 group-hover:text-piano-ivory transition-colors">{lang === 'it' ? 'EN' : 'IT'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <div className="absolute inset-0 bg-gradient-to-b from-piano-black/30 via-piano-black/60 to-piano-black z-10" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={IMAGES.heroBackground} 
            alt="Piano Background" 
            className="w-full h-full object-cover grayscale brightness-75"
          />
        </div>

        {/* Hero Content */}
        <div className="z-10 text-center space-y-12 px-4 max-w-5xl mx-auto relative cursor-default">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center group"
          >
            <h2 className="font-sans text-piano-gold tracking-[0.5em] text-[10px] md:text-xs font-medium uppercase mb-12 opacity-90 border border-piano-gold/30 px-4 py-2 rounded-full backdrop-blur-sm group-hover:bg-piano-gold/10 transition-colors duration-500">
              {t.hero.role}
            </h2>
            <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] text-piano-ivory mb-6 leading-none font-normal tracking-tight">
              <span className="transition-colors duration-700 hover:text-white inline-block">LEI</span> <span className="italic font-light opacity-80 transition-all duration-700 hover:text-piano-gold hover:opacity-100 inline-block">KAIRUI</span>
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-piano-gold/50 to-transparent mx-auto mb-10 group-hover:w-48 transition-all duration-700 ease-out" />
            <p className="font-serif italic text-2xl md:text-4xl text-zinc-400 font-light tracking-wide opacity-80 max-w-2xl leading-relaxed hover:text-piano-ivory hover:opacity-100 transition-all duration-700">
              "Music is the silence between the notes."
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 z-10 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-zinc-500 hover:text-piano-gold transition-colors duration-300 cursor-pointer">{t.hero.scroll}</span>
          <div className="h-16 w-[1px] bg-gradient-to-b from-piano-gold/0 via-piano-gold/30 to-piano-gold/0 animate-pulse" />
        </motion.div>
      </div>

      {/* Profile / About Section */}
      <Section id="about" className="bg-piano-black relative py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
          
          <div className="relative order-2 md:order-1 md:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative bg-zinc-900 aspect-[3/4] group overflow-hidden"
            >
               {/* Minimalist Border Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-[0.5px] border-white/20 z-0 pointer-events-none transition-all duration-700 group-hover:top-[-1.2rem] group-hover:left-[-1.2rem]" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-[0.5px] border-piano-gold/20 z-0 pointer-events-none transition-all duration-700 group-hover:bottom-[-1.2rem] group-hover:right-[-1.2rem]" />
              
              <img 
                src={IMAGES.profile} 
                alt="Lei Kairui" 
                className="relative z-10 w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.85] shadow-2xl shadow-black/50 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-[0.5]"
              />
            </motion.div>
          </div>
          
          <div className="space-y-16 order-1 md:order-2 md:col-span-7 cursor-default">
            <div className="space-y-6">
              <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-piano-gold hover:text-white transition-colors duration-300 inline-block">{t.personal.title}</h3>
              <h2 className="font-display text-5xl md:text-7xl text-piano-ivory leading-[0.9] font-normal">
                Passion & <br/> <span className="italic text-zinc-500 transition-colors duration-500 hover:text-piano-gold">Dedication</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
               <div className="space-y-8">
                  <div className="group border-l border-white/10 pl-6 hover:border-piano-gold/50 transition-colors duration-500">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-500 block mb-2 group-hover:text-zinc-300 transition-colors duration-300">{t.personal.dobLabel}</span>
                    <span className="text-zinc-200 font-display text-xl tracking-wide group-hover:text-piano-gold transition-colors duration-300">10 . 10 . 2001</span>
                  </div>
                  <div className="group border-l border-white/10 pl-6 hover:border-piano-gold/50 transition-colors duration-500">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-500 block mb-2 group-hover:text-zinc-300 transition-colors duration-300">{t.personal.majorLabel}</span>
                    <span className="text-piano-ivory text-xl italic font-serif group-hover:text-piano-gold transition-colors duration-300">{t.personal.majorValue}</span>
                  </div>
               </div>
               
               <div className="space-y-8">
                   <div className="group border-l border-white/10 pl-6 hover:border-piano-gold/50 transition-colors duration-500">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-500 block mb-4 group-hover:text-zinc-300 transition-colors duration-300">{t.interests.title}</span>
                    <div className="flex flex-col gap-2">
                      {t.interests.list.map(interest => (
                        <span key={interest} className="text-lg font-serif italic text-zinc-400 hover:text-piano-gold hover:scale-105 origin-left transition-all duration-300 cursor-default inline-block w-max">{interest}</span>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section - Clean & Minimal */}
      <Section id="education" className="bg-piano-charcoal relative py-40">
         <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
            <PianoKeys className="h-full" />
         </div>

        <div className="max-w-4xl mx-auto relative z-10 px-6 cursor-default">
          <div className="text-center mb-32">
            <h2 className="font-display text-4xl md:text-6xl text-piano-ivory font-normal tracking-tight hover:text-white transition-colors duration-500 inline-block">{t.education.title}</h2>
          </div>

          <div className="relative border-l-[0.5px] border-white/10 ml-4 md:ml-0 space-y-24">
            {t.education.items.map((edu, idx) => (
              <div key={idx} className="relative pl-12 md:pl-24 group">
                {/* Timeline Dot */}
                <span className="absolute -left-[3px] top-3 w-[5px] h-[5px] rounded-full bg-piano-gold ring-4 ring-piano-black transition-all duration-500 group-hover:scale-150 group-hover:ring-zinc-800"></span>
                
                <div className="space-y-4 transition-all duration-500 group-hover:translate-x-2">
                  <span className="font-sans text-[9px] tracking-[0.3em] text-piano-gold uppercase inline-block border border-white/5 px-3 py-1 bg-white/5 group-hover:bg-piano-gold/10 transition-colors duration-300">{edu.period}</span>
                  <h3 className="text-3xl md:text-4xl font-display text-zinc-100 group-hover:text-piano-ivory transition-colors duration-300">{edu.institution}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 pt-2">
                     <p className="text-zinc-400 font-serif italic text-2xl group-hover:text-piano-gold transition-colors duration-300">{edu.degree}</p>
                     <span className="hidden md:block w-px h-4 bg-zinc-700"></span>
                     <p className="font-sans text-[10px] text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400 transition-colors duration-300">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Awards & Experience - Grid Layout */}
      <Section id="awards" className="bg-piano-black py-40">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 cursor-default">
          
          {/* Awards Column */}
          <div>
            <div className="flex items-baseline justify-between mb-20 border-b border-white/10 pb-6">
              <h2 className="font-display text-3xl md:text-5xl text-piano-ivory">{t.awards.title}</h2>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-600">01</span>
            </div>
            
            <div className="grid gap-12">
              {t.awards.items.map((award, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <span className="font-sans text-[9px] tracking-[0.2em] text-piano-gold block mb-3 opacity-70 group-hover:opacity-100 transition-opacity">{award.date}</span>
                  <h4 className="text-2xl md:text-3xl font-display text-zinc-200 mb-2 leading-tight group-hover:text-piano-ivory transition-colors italic">{award.name}</h4>
                  <p className="font-serif text-base text-zinc-500 mt-2 group-hover:text-zinc-400 transition-colors">— {award.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience & Skills Column */}
          <div className="space-y-32">
            {/* Experience */}
            <div>
              <div className="flex items-baseline justify-between mb-20 border-b border-white/10 pb-6">
                <h2 className="font-display text-3xl md:text-5xl text-piano-ivory">{t.experience.title}</h2>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-600">02</span>
              </div>
              {t.experience.items.map((exp, idx) => (
                 <div key={idx} className="group hover:bg-white/[0.02] p-4 -mx-4 rounded-sm transition-colors duration-300">
                    <span className="font-sans text-[9px] tracking-[0.2em] text-zinc-500 block mb-4 border border-zinc-800 self-start inline-block px-2 py-1 group-hover:border-piano-gold/30 group-hover:text-piano-gold transition-colors duration-300">{exp.date}</span>
                    <p className="text-zinc-200 font-display text-2xl leading-relaxed group-hover:text-piano-ivory transition-colors duration-300">{exp.description}</p>
                 </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-baseline justify-between mb-20 border-b border-white/10 pb-6">
                 <h2 className="font-display text-3xl md:text-5xl text-piano-ivory">{t.skills.title}</h2>
                 <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-600">03</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Languages */}
                <div>
                   <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-piano-gold mb-8">{t.skills.languagesTitle}</h4>
                   <div className="space-y-6">
                      {t.skills.languages.map((lang, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-dashed border-zinc-800 pb-2 group hover:border-zinc-600 transition-colors duration-300">
                          <span className="text-zinc-300 font-serif text-xl italic group-hover:text-piano-gold group-hover:translate-x-2 transition-all duration-300">{lang.name}</span>
                          <span className="font-sans text-[9px] text-zinc-500 tracking-widest group-hover:text-zinc-300 transition-colors">{lang.level}</span>
                        </div>
                      ))}
                   </div>
                </div>
                
                {/* Pro Skills */}
                <div>
                   <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] text-piano-gold mb-8">{t.skills.professionalTitle}</h4>
                   <ul className="space-y-4">
                      {t.skills.professional.map((skill, i) => (
                        <li key={i} className="text-zinc-400 font-display text-lg tracking-wide hover:text-piano-gold hover:translate-x-4 transition-all duration-300 cursor-default">
                          {skill}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#030303] py-40 relative overflow-hidden">
         <div className="max-w-5xl mx-auto px-6 text-center relative z-10 cursor-default">
           <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-piano-gold mb-8 block animate-pulse hover:animate-none hover:tracking-[0.6em] transition-all duration-500">Get in Touch</span>
           <h2 className="font-display text-6xl md:text-8xl text-piano-ivory mb-24 tracking-tight font-normal hover:scale-105 transition-transform duration-700 ease-out">
             {t.nav.contact}
           </h2>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 mb-32">
              <a href="mailto:kairui.lei@conservatoriosantacecilia.it" className="group text-center">
                 <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-600 group-hover:text-piano-gold transition-colors block mb-6">{t.personal.emailLabel}</span>
                 <span className="font-display text-xl md:text-2xl text-zinc-400 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/20 pb-2">kairui.lei@conservatoriosantacecilia.it</span>
              </a>

              <a href="tel:+393445777659" className="group text-center">
                 <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-600 group-hover:text-piano-gold transition-colors block mb-6">{t.personal.phoneLabel}</span>
                 <span className="font-serif italic text-3xl md:text-4xl text-zinc-400 group-hover:text-white transition-colors">+39 344 577 7659</span>
              </a>
           </div>

           <div className="flex flex-col items-center gap-8">
             <div className="w-16 h-px bg-zinc-900 group-hover:w-32 transition-all duration-500" />
             <p className="text-zinc-700 text-[10px] font-sans tracking-[0.3em] uppercase hover:text-zinc-500 transition-colors cursor-default">
               &copy; {new Date().getFullYear()} Lei Kairui. Pianist.
             </p>
           </div>
         </div>
      </footer>
    </div>
  );
};

export default App;