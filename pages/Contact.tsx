
import React from 'react';
import { AUTHOR_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 space-y-12 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
        <p className="text-gray-500">
          Une question sur un snippet ? Un problème de paiement ? <br />
          Je réponds généralement en moins de 2 heures.
        </p>
      </div>

      <div className="grid gap-4">
        <a 
          href={`mailto:${AUTHOR_INFO.email}`} 
          className="p-6 bg-white border border-gray-100 rounded-2xl flex items-center justify-between hover:border-[#4F46E5]/50 transition-all group"
        >
          <div className="text-left">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
            <p className="font-bold text-gray-900">{AUTHOR_INFO.email}</p>
          </div>
          <span className="text-[#4F46E5] font-bold group-hover:translate-x-1 transition-transform">→</span>
        </a>

        <a 
          href={`https://wa.me/${AUTHOR_INFO.whatsapp}`} 
          target="_blank" 
          rel="noreferrer"
          className="p-6 bg-white border border-gray-100 rounded-2xl flex items-center justify-between hover:border-green-500/50 transition-all group"
        >
          <div className="text-left">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
            <p className="font-bold text-gray-900">Ouvrir la discussion</p>
          </div>
          <span className="text-green-500 font-bold group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <div className="pt-10 border-t border-gray-100">
        <p className="text-sm text-gray-400">
          Miguel Evelin — Copypaste.dev
        </p>
      </div>
    </div>
  );
};

export default Contact;
