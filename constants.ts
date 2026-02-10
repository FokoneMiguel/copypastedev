
import { Snippet, Category } from './types';

export const SNIPPETS: Snippet[] = [
  {
    id: 'whatsapp-floating-button',
    name: 'WhatsApp Floating Button – Instant Contact',
    category: Category.JS,
    shortDescription: 'Le raccourci business ultime : contact direct via WhatsApp.',
    description: 'Permettez à vos visiteurs de vous contacter instantanément. Réduisez la friction et transformez vos simples visiteurs en clients via une discussion directe.',
    problem: 'Les formulaires sont lents, les emails restent sans réponse. En business, la vitesse est reine. Sans contact immédiat, vous perdez des ventes.',
    solution: 'Un bouton flottant stratégique, reconnu par tous, qui ouvre instantanément WhatsApp avec un message pré-configuré pour ne pas faire réfléchir le client.',
    price: 1500,
    features: [
      'Position flottante (Mobile-First optimisé)',
      'Vert WhatsApp officiel (#25D366)',
      'Micro-animation de pulsation lente',
      'Message de bienvenue pré-rempli',
      'Zéro configuration complexe'
    ],
    limitations: [
      'N\'envoie pas de messages automatiques',
      'Ne collecte pas de données personnelles',
      'Nécessite l\'application WhatsApp sur le mobile du client'
    ],
    previewHtml: `
      <div class="relative h-64 w-full bg-[#F8FAFC] rounded-3xl flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner">
        <div class="absolute bottom-6 right-6 group">
          <div class="relative">
            <!-- Pulsation discrète -->
            <div class="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
            <!-- Bouton Principal -->
            <div class="bg-[#25D366] h-14 w-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#128C7E] transition-all transform hover:scale-110 active:scale-95 relative z-10">
              <svg viewBox="0 0 24 24" class="w-8 h-8 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.63 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="text-center px-8">
          <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
            Le bouton flotte en bas à droite.<br/>
            Testez l'expérience client maintenant.
          </p>
        </div>
      </div>
    `,
    codePreview: `// Simple et clair. Zéro friction.
const whatsappConfig = {
  numero: "237690000000",
  message: "Bonjour, je vous contacte depuis votre site web.",
  position: "right" // 'left' ou 'right'
};`,
    lastUpdated: '2024-03-27',
    downloadSize: '8kb'
  },
  {
    id: 'modern-form-validation',
    name: 'Modern Form Validation',
    category: Category.JS,
    shortDescription: 'Évitez les formulaires frustrants avec une validation humaine.',
    description: 'Un formulaire conçu pour rassurer l\'utilisateur final et le développeur qui l\'intègre. Sobriété intelligente et UX sans faille.',
    problem: 'Un formulaire moche fait fuir vos clients. Des erreurs sèches ("Invalid Input") les bloquent. Un code JS complexe vous empêche de livrer.',
    solution: 'Un design universel sur carte blanche avec des erreurs bienveillantes ("Veuillez entrer un email valide") et une structure Vanilla JS limpide.',
    price: 2000,
    features: [
      'Design Sobriété Intelligente (Carte blanche)',
      'Messages d\'erreurs humains et aidants',
      'Validation temps-réel non aggressive',
      'Animation de secousse subtile sur erreur',
      'Pédagogique : Code facile à adapter'
    ],
    limitations: [
      'N\'inclut pas le script PHP d\'envoi d\'email',
      'Pas de protection CAPTCHA avancée incluse',
      'Design fixe pour garantir l\'accessibilité'
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
    codePreview: `// Validation bienveillante
if (!email.includes('@')) {
  showError("Veuillez entrer une adresse email valide");
}`,
    lastUpdated: '2024-03-26',
    downloadSize: '15kb'
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
