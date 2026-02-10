
import { Snippet, Category } from './types';

export const SNIPPETS: Snippet[] = [
  {
    id: 'whatsapp-floating-button',
    name: 'WhatsApp Floating Button – Instant Contact',
    category: Category.JS,
    shortDescription: 'Contact instantané par WhatsApp, sans formulaire ni email.',
    description: 'Permettez à vos visiteurs de vous contacter instantanément sur leur application préférée pour augmenter vos ventes.',
    problem: 'Les formulaires sont lents et les emails sont souvent ignorés. Les visiteurs veulent une réponse immédiate pour passer à l\'achat.',
    solution: 'Un bouton flottant reconnaissable entre mille, qui ouvre une discussion directe avec un message déjà prêt à être envoyé.',
    price: 1500,
    features: [
      'Position flottante (bas-droite par défaut)',
      'Message pré-rempli personnalisable',
      'Animation de pulsation discrète',
      'Optimisé pour le pouce (Mobile-First)',
      'Zéro dépendance, 100% Vanilla JS'
    ],
    limitations: [
      'N\'envoie pas de messages automatiques',
      'Ne collecte pas de statistiques de clic internes',
      'Pas de système de gestion de tickets'
    ],
    previewHtml: `
      <div class="relative h-64 w-full bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
        <div class="absolute bottom-6 right-6">
          <div class="relative">
            <div class="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
            <div class="bg-[#25D366] h-14 w-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#128C7E] transition-colors relative z-10">
              <svg viewBox="0 0 24 24" class="w-8 h-8 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.63 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
          </div>
        </div>
        <p class="text-[10px] text-gray-400 font-medium uppercase tracking-widest text-center px-10">
          Le bouton s'affiche en bas à droite de votre écran. <br/> Cliquez sur l'icône WhatsApp pour tester.
        </p>
      </div>
    `,
    codePreview: `const config = {
  phone: "237690000000",
  message: "Bonjour, je vous contacte depuis votre site web.",
  position: "right"
};`,
    lastUpdated: '2024-03-27',
    downloadSize: '7kb'
  },
  {
    id: 'modern-form-validation',
    name: 'Modern Form Validation',
    category: Category.JS,
    shortDescription: 'Validation de formulaire élégante et humaine, sans framework.',
    description: 'Un formulaire de contact complet avec une expérience utilisateur (UX) soignée, des messages d\'erreur clairs et des animations subtiles.',
    problem: 'Les formulaires moches font fuir les utilisateurs, les erreurs sèches les frustrent, et le code JS désordonné bloque les développeurs.',
    solution: 'Une approche pédagogique avec un design universel, des messages d\'erreur bienveillants et une validation Vanilla JS performante et facile à adapter.',
    price: 2000,
    features: [
      'Validation temps réel (input event)',
      'Messages d\'erreurs humains et aidants',
      'Design universel (Carte blanche, ombre douce)',
      'Animations subtiles (shake sur erreur)',
      'Code ultra-commenté pour débutants'
    ],
    limitations: [
      'Nécessite un script serveur pour l\'envoi (PHP/Node)',
      'Limité à 3 champs (Nom, Email, Message) par défaut'
    ],
    previewHtml: `
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm mx-auto space-y-5">
        <div class="space-y-1">
          <label class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Nom complet</label>
          <input type="text" placeholder="Ex: Jean Dupont" class="w-full border border-gray-100 p-3 rounded-xl text-sm focus:border-blue-400 focus:ring-0 transition-all outline-none">
        </div>
        <div class="space-y-1">
          <label class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Adresse Email</label>
          <input type="email" placeholder="email@exemple.com" class="w-full border border-red-200 bg-red-50/30 p-3 rounded-xl text-sm outline-none">
          <p class="text-[10px] text-red-500 font-medium italic">Veuillez entrer une adresse email valide</p>
        </div>
        <div class="space-y-1">
          <label class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Message</label>
          <textarea placeholder="Comment puis-je vous aider ?" class="w-full border border-gray-100 p-3 rounded-xl text-sm h-24 outline-none"></textarea>
        </div>
        <button type="button" class="w-full bg-[#4F46E5] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#4338CA] transition-all shadow-lg shadow-[#4F46E5]/10">
          Envoyer le message
        </button>
      </div>
    `,
    codePreview: `// Exemple de validation humaine
const emailInput = document.querySelector('#email');
if (!emailInput.value.includes('@')) {
  showError(emailInput, "Veuillez entrer une adresse email valide");
}`,
    lastUpdated: '2024-03-26',
    downloadSize: '15kb'
  },
  {
    id: 'tabs-system',
    name: 'Système d\'onglets ultra-léger',
    category: Category.JS,
    shortDescription: 'Onglets fluides, accessibles et sans framework.',
    description: 'Une solution robuste pour alterner entre différents contenus sans recharger la page.',
    problem: 'Les bibliothèques d\'onglets modernes sont souvent trop lourdes (JQuery ou frameworks) ou manquent d\'accessibilité clavier.',
    solution: 'Un script de moins de 1ko en Vanilla JS qui gère les attributs ARIA, le focus clavier et les transitions CSS matérielles.',
    price: 2500,
    features: [
      'Accessibilité ARIA complète',
      'Navigation par flèches clavier',
      'Styles CSS personnalisables',
      'Poids plume (< 1ko)'
    ],
    limitations: [
      'Pas de gestion d\'historique (back button)',
      'Un seul style visuel inclus par défaut'
    ],
    previewHtml: `
      <div class="space-y-4">
        <div class="flex border-b border-gray-200">
          <button class="px-4 py-2 border-b-2 border-[#4F46E5] text-[#4F46E5] font-medium text-sm">Démo A</button>
          <button class="px-4 py-2 text-gray-400 font-medium text-sm">Démo B</button>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          Contenu de l'onglet actif affiché ici.
        </div>
      </div>
    `,
    codePreview: 'document.querySelectorAll("[role=\'tab\']").forEach(...)',
    lastUpdated: '2024-03-25',
    downloadSize: '12kb'
  }
];

export const AUTHOR_INFO = {
  name: "Tsodzo Fokone Miguel Evelin",
  role: "Fondateur & Développeur",
  bio: "Je crois en un web simple, rapide et accessible. J'ai créé Copypaste.dev pour aider mes confrères développeurs à livrer plus de projets, plus vite, sans sacrifier la qualité du code.",
  email: "miguelfokone@gmail.com",
  whatsapp: "237690000000",
  mtn: "670 00 00 00",
  orange: "690 00 00 00"
};
