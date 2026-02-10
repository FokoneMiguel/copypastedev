
import React from 'react';
import { Link } from 'react-router-dom';
import { SNIPPETS } from '../constants';
import SnippetCard from '../components/SnippetCard';

const Home: React.FC = () => {
  const featuredSnippets = SNIPPETS.slice(0, 3);

  return (
    <div className="space-y-32 pt-16 md:pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="inline-block px-4 py-1.5 bg-[#4F46E5]/5 text-[#4F46E5] rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#4F46E5]/10">
          V1 — Boutique de Snippets
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-[1.1]">
          Des snippets HTML, CSS et JS <br />
          <span className="text-[#4F46E5]">prêts à copier-coller.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Gagne du temps. Évite les bugs. Livre plus vite tes projets avec des ressources optimisées pour les réalités du web moderne.
        </p>
        <div className="pt-6">
          <Link 
            to="/snippets" 
            className="inline-block px-10 py-5 bg-[#4F46E5] text-white font-bold rounded-2xl hover:bg-[#4338CA] shadow-xl shadow-[#4F46E5]/30 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Explorer le catalogue
          </Link>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white border-y border-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <div className="h-12 w-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center font-black border border-green-100">01</div>
            <h3 className="text-xl font-black text-gray-900">Prêt à l'emploi</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Pas de npm install, pas de config. Juste du code pur, clair et prêt à être injecté dans vos projets existants.</p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 bg-indigo-50 text-[#4F46E5] rounded-2xl flex items-center justify-center font-black border border-indigo-100">02</div>
            <h3 className="text-xl font-black text-gray-900">Sans framework</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Fonctionne partout. Pas besoin de React ou Vue pour des interactions simples. Gardez votre site léger et performant.</p>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center font-black border border-purple-100">03</div>
            <h3 className="text-xl font-black text-gray-900">Réalités locales</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Pensé pour les connexions lentes. Payez via MTN ou Orange Money et recevez votre snippet instantanément.</p>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="max-w-5xl mx-auto px-4 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-black text-gray-900">Sélection du moment</h2>
            <p className="text-gray-500 font-medium">Des solutions simples à des problèmes complexes.</p>
          </div>
          <Link to="/snippets" className="text-[#4F46E5] font-bold text-sm hover:opacity-70 flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-xl">
            Tout voir <span>→</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredSnippets.map(s => (
            <SnippetCard key={s.id} snippet={s} />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-3xl mx-auto px-4 text-center space-y-16">
        <h2 className="text-2xl font-black text-gray-900">Zéro risque, 100% confiance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-gray-900 mb-1">Paiement Mobile</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">MTN & Orange</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-gray-900 mb-1">Clean Code</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Commenté & Propre</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-gray-900 mb-1">Support WhatsApp</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Par Miguel F.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
