
import React, { useState } from 'react';
import { SNIPPETS } from '../constants';
import { Category } from '../types';
import SnippetCard from '../components/SnippetCard';

const Catalogue: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'Tous'>('Tous');

  const filteredSnippets = filter === 'Tous' 
    ? SNIPPETS 
    : SNIPPETS.filter(s => s.category === filter);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Le Catalogue</h1>
        <p className="text-gray-500 max-w-xl">
          Parcourez notre collection de ressources prêtes à l'emploi. Chaque snippet est testé et documenté.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pb-4 border-b border-gray-100">
        {['Tous', ...Object.values(Category)].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === cat 
                ? 'bg-[#4F46E5] text-white' 
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSnippets.map(s => (
          <SnippetCard key={s.id} snippet={s} />
        ))}
      </div>

      {filteredSnippets.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          Aucun snippet trouvé dans cette catégorie.
        </div>
      )}
    </div>
  );
};

export default Catalogue;
