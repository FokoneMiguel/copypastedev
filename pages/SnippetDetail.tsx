
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SNIPPETS, AUTHOR_INFO } from '../constants';

const SnippetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const snippet = SNIPPETS.find(s => s.id === id);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!snippet) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Snippet introuvable</h1>
        <Link to="/snippets" className="text-[#4F46E5] font-medium hover:underline">Retour au catalogue</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Product Info */}
        <div className="lg:col-span-7 space-y-16">
          <section className="space-y-6">
            <Link to="/snippets" className="inline-flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-[#4F46E5] transition-colors">
              <span className="mr-2">←</span> Retour au Catalogue
            </Link>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                {snippet.name}
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                {snippet.description}
              </p>
            </div>
          </section>

          {/* Problem vs Solution */}
          <section className="grid md:grid-cols-2 gap-8 border-y border-gray-100 py-12">
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest">Le Problème</h3>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "{snippet.problem}"
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-green-500 uppercase tracking-widest">La Solution</h3>
              <p className="text-sm text-gray-900 leading-relaxed font-medium">
                {snippet.solution}
              </p>
            </div>
          </section>

          {/* Demo Area */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Démo Interactive</h3>
              <span className="text-[10px] text-gray-400 font-medium italic">Expérience isolée sans distractions</span>
            </div>
            <div className="bg-[#F3F4F6] rounded-3xl p-8 md:p-20 flex items-center justify-center border border-gray-100 overflow-hidden relative group">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
              <div className="w-full relative z-10" dangerouslySetInnerHTML={{ __html: snippet.previewHtml || '' }} />
            </div>
          </section>

          {/* Detailed Features */}
          <section className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">Ce que vous recevez</h4>
                <ul className="space-y-3">
                  {snippet.features.map((f, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-3">
                      <span className="h-5 w-5 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">Ce qu'il ne fait pas</h4>
                <ul className="space-y-3">
                  {snippet.limitations.map((l, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-start gap-3">
                      <span className="h-1.5 w-1.5 bg-gray-200 rounded-full mt-2 flex-shrink-0"></span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Checkout */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-200/50 space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Prix Unique</p>
                <p className="text-4xl font-black text-gray-900">{snippet.price.toLocaleString()} FCFA</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Archive .ZIP</p>
                <p className="text-sm font-bold text-gray-900">{snippet.downloadSize || '10kb'}</p>
              </div>
            </div>

            <button 
              onClick={() => setShowCheckout(true)}
              className="w-full bg-[#4F46E5] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#4338CA] transition-all shadow-lg shadow-[#4F46E5]/20"
            >
              Acheter maintenant
            </button>

            {/* Reassurance Links */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-gray-900">Support Direct</p>
                <p className="text-[9px] text-gray-400 italic">Par WhatsApp</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-gray-900">Code Propre</p>
                <p className="text-[9px] text-gray-400 italic">Ultra-commenté</p>
              </div>
            </div>

            {showCheckout && (
              <div className="space-y-6 pt-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="space-y-2 text-center">
                  <h4 className="font-bold text-gray-900">Paiement Mobile Money</h4>
                  <p className="text-xs text-gray-500">Choisissez votre opérateur pour le dépôt :</p>
                </div>
                
                <div className="space-y-3">
                  <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-2xl flex justify-between items-center group">
                    <div>
                      <p className="text-[10px] font-bold text-yellow-800 uppercase tracking-widest">MTN Mobile Money</p>
                      <p className="text-lg font-black text-yellow-900">{AUTHOR_INFO.mtn}</p>
                    </div>
                    <button onClick={() => navigator.clipboard.writeText(AUTHOR_INFO.mtn)} className="text-[10px] font-bold text-yellow-600 bg-white px-3 py-1 rounded-full shadow-sm hover:bg-yellow-100 transition-colors uppercase">Copier</button>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex justify-between items-center group">
                    <div>
                      <p className="text-[10px] font-bold text-orange-800 uppercase tracking-widest">Orange Money</p>
                      <p className="text-lg font-black text-orange-900">{AUTHOR_INFO.orange}</p>
                    </div>
                    <button onClick={() => navigator.clipboard.writeText(AUTHOR_INFO.orange)} className="text-[10px] font-bold text-orange-600 bg-white px-3 py-1 rounded-full shadow-sm hover:bg-orange-100 transition-colors uppercase">Copier</button>
                  </div>
                </div>

                <div className="p-4 bg-[#F9FAFB] rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-900 mb-2">Finaliser la commande :</p>
                  <ol className="text-[11px] text-gray-600 space-y-2 list-decimal ml-4">
                    <li>Faites le dépôt exact de <span className="font-bold">{snippet.price} FCFA</span></li>
                    <li>Faites une capture d'écran de la confirmation</li>
                    <li>Envoyez la preuve sur WhatsApp ou Email</li>
                  </ol>
                </div>

                <a 
                  href={`https://wa.me/${AUTHOR_INFO.whatsapp}?text=Bonjour Miguel, je viens de payer le snippet "${snippet.name}" (${snippet.price} FCFA). Voici ma preuve de paiement en pièce jointe.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-center block hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                >
                  Envoyer la preuve (WhatsApp)
                </a>
              </div>
            )}

            <p className="text-[9px] text-center text-gray-400 italic leading-relaxed">
              Le lien de téléchargement vous sera envoyé dès confirmation manuelle du paiement. Merci de votre confiance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnippetDetail;
