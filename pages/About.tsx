
import React from 'react';
import { AUTHOR_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight">À propos</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img 
            src="https://picsum.photos/200/200" 
            alt={AUTHOR_INFO.name} 
            className="w-32 h-32 rounded-2xl object-cover grayscale border-4 border-white shadow-xl"
          />
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{AUTHOR_INFO.name}</h2>
            <p className="text-gray-500 italic text-sm">{AUTHOR_INFO.role}</p>
            <p className="text-gray-700 leading-relaxed">
              {AUTHOR_INFO.bio}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Pourquoi Copypaste.dev ?</h2>
        <div className="grid gap-6">
          <div className="p-6 bg-white border border-gray-100 rounded-2xl">
            <h3 className="font-bold mb-2">Résoudre les problèmes concrets</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Beaucoup de développeurs perdent des heures sur des éléments d'interface basiques (onglets, menus, modals). Mon but est de vous donner ces briques pour que vous puissiez vous concentrer sur la logique métier de vos clients.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-100 rounded-2xl">
            <h3 className="font-bold mb-2">Simplicité avant tout</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pas de librairies npm lourdes. Pas de setup webpack complexe. Du code que vous pouvez comprendre et modifier en 5 minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-10">
        <p className="text-gray-500 mb-6 font-medium italic">"Ce site est tenu par un humain réel, pas une multinationale."</p>
        <div className="h-1 w-12 bg-[#4F46E5] mx-auto rounded-full"></div>
      </section>
    </div>
  );
};

export default About;
