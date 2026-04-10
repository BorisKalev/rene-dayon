import { createContext, useContext, useState } from 'react'

const translations = {
  fr: {
    nav: {
      services: 'Services',
      howItWorks: 'Notre Processus',
      whyUs: 'Pourquoi Nous',
      faq: 'FAQ',
      contact: 'Contact',
      book: 'Prendre Rendez-vous',
    },
    hero: {
      eyebrow: 'Garage Rene-Dayon — Montréal, QC',
      line1: 'TRAVAIL HONNÊTE.',
      line2: 'PRIX JUSTES.',
      line3: 'TOUJOURS.',
      sub: 'Votre mécanicien de quartier depuis plus de 15 ans. Nous vous expliquons le problème, vous donnons le prix à l\'avance, et ne commençons qu\'avec votre accord.',
      cta1: 'Prendre Rendez-vous',
      cta2: 'Nos Services',
      trust: [
        { label: '15+', sub: 'Ans en Affaires' },
        { label: '3K+', sub: 'Véhicules Réparés' },
        { label: '100%', sub: 'Prix Transparents' },
        { label: '5★', sub: 'Confiance du Quartier' },
      ],
      hours: 'Lun – Ven \u00a0 8:00 – 17:00',
      walkIn: 'Bienvenue sans rendez-vous',
    },
    brands: {
      label: 'Toutes Marques',
    },
    services: {
      label: 'Ce Que Nous Faisons',
      title: 'CE QUE NOUS RÉPARONS',
      sub: 'De l\'entretien de routine aux réparations complexes — toutes marques et modèles, prix honnêtes à chaque fois.',
      items: [
        {
          title: 'Huile & Fluides',
          description: 'Huile, filtre et vérification rapide des fluides. Fait en moins d\'une heure — nous vous avertissons si autre chose nécessite attention.',
        },
        {
          title: 'Freins',
          description: 'Plaquettes, disques, étriers. Nous inspectons l\'ensemble du système et remplaçons uniquement ce qui en a besoin.',
        },
        {
          title: 'Diagnostic Moteur',
          description: 'Nous lisons les codes, expliquons ce que signifie le voyant, et vous donnons une image claire avant de toucher quoi que ce soit.',
        },
        {
          title: 'Pneus & Alignement',
          description: 'Rotation, équilibrage et alignement des roues. Nous vous aidons aussi à trouver les bons pneus selon votre voiture et votre budget.',
        },
        {
          title: 'Transmission',
          description: 'Entretien des fluides et réparations pour boîtes manuelles et automatiques. Nous vous dirons honnêtement si la réparation en vaut la peine.',
        },
        {
          title: 'Électrique',
          description: 'Batterie, alternateur, démarreur, fusibles, câblage. Nous trouvons la vraie cause — pas seulement changer des pièces au hasard.',
        },
      ],
    },
    howItWorks: {
      label: 'Notre Processus',
      title: 'COMMENT ÇA MARCHE',
      steps: [
        {
          number: '01',
          title: 'Appelez ou Réservez en Ligne',
          description: 'Téléphonez-nous ou remplissez le formulaire ci-dessous. Nous confirmons un horaire qui vous convient — généralement le jour même.',
        },
        {
          number: '02',
          title: 'Nous Inspectons & Expliquons',
          description: 'Nous examinons le véhicule, identifions les problèmes et vous expliquons exactement ce qui doit être fait et combien ça coûtera.',
        },
        {
          number: '03',
          title: 'Récupérez & Repartez',
          description: 'Le travail ne commence qu\'après votre approbation. Nous utilisons des pièces de qualité, effectuons une vérification finale et vous appelons quand c\'est prêt.',
        },
      ],
    },
    whyUs: {
      label: 'Pourquoi Nous Choisir',
      title: 'NOS\nVALEURS',
      sub: 'Nous sommes dans ce quartier depuis longtemps. Travail honnête, prix justes — et nous ne réparons pas ce qui n\'est pas cassé.',
      stats: [
        { value: '15+', label: 'Ans en Affaires' },
        { value: '3K+', label: 'Véhicules Réparés' },
      ],
      quote: '« Parler vrai, prix justes et travail de qualité — c\'est notre promesse depuis le premier jour. »',
      reasons: [
        {
          title: 'Aucun Travail Sans Votre Accord',
          description: 'Nous vous remettons un devis écrit avant de toucher quoi que ce soit. Le prix annoncé est le prix payé — aucun ajout après coup.',
        },
        {
          title: 'Mécaniciens Expérimentés',
          description: 'Notre équipe travaille sur toutes les marques et modèles depuis plus de 15 ans. Aucun apprenti sur votre voiture sans supervision.',
        },
        {
          title: 'La Plupart des Travaux en Une Journée',
          description: 'Si votre réparation prend plus de temps que prévu, nous vous appelons le matin — pas au moment où vous venez récupérer votre voiture.',
        },
        {
          title: 'Prix Clairs et Transparents',
          description: 'Aucun frais cachés, aucune mauvaise surprise. Vous obtenez un détail clair et nous facturons uniquement ce qui a été fait.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'QUESTIONS\nFRÉQUENTES',
      sub: 'Vous ne trouvez pas votre question ?',
      subLink: 'Envoyez-nous un message',
      subEnd: 'ou appelez-nous.',
      items: [
        {
          question: 'Quels sont vos horaires d\'ouverture ?',
          answer: 'Nous sommes ouverts du lundi au vendredi, de 8h00 à 17h00. Nous sommes fermés le samedi et le dimanche. Si vous devez laisser un message en dehors des heures, nous vous rappellerons dès le lendemain matin.',
        },
        {
          question: 'Faut-il prendre rendez-vous à l\'avance ?',
          answer: 'Prendre rendez-vous est la meilleure façon de garantir votre créneau. Les visites sans rendez-vous sont également les bienvenues — nous faisons de notre mieux pour vous accueillir selon le calendrier du jour.',
        },
        {
          question: 'Donnez-vous un devis avant de commencer les travaux ?',
          answer: 'Toujours. Nous inspectons le véhicule, détaillons exactement ce qui doit être fait, et vous donnons le coût total avant de toucher quoi que ce soit. Rien ne commence sans votre approbation.',
        },
        {
          question: 'Combien de temps prend une réparation standard ?',
          answer: 'Les travaux courants comme les vidanges d\'huile ou les plaquettes de frein sont terminés en quelques heures. Les réparations plus importantes — diagnostic, transmission, électrique — peuvent prendre une journée complète. Nous vous donnons une estimation réaliste à l\'avance et vous tenons informé.',
        },
        {
          question: 'Garantissez-vous vos réparations ?',
          answer: 'Oui. Tous les travaux effectués chez Rene-Dayon sont couverts par une garantie sur les pièces et la main-d\'œuvre. Si quelque chose ne va pas après notre intervention, ramenez le véhicule et nous réglerons le problème sans frais supplémentaires.',
        },
        {
          question: 'Quels modes de paiement acceptez-vous ?',
          answer: 'Nous acceptons l\'argent comptant, le débit et toutes les principales cartes de crédit. Le paiement est effectué lors de la récupération du véhicule.',
        },
      ],
    },
    contact: {
      label: 'Nous Contacter',
      title: 'VENEZ NOUS VOIR\nOU APPELEZ',
      sub: 'Remplissez le formulaire et nous confirmerons votre rendez-vous, ou appelez-nous directement. Les visites sans rendez-vous sont toujours les bienvenues pendant les heures d\'ouverture.',
      callCta: 'Appeler :',
      infoPhone: 'Téléphone',
      infoAddress: 'Adresse',
      infoHours: 'Heures',
      monFri: 'Lun – Ven',
      saturday: 'Samedi',
      sunday: 'Dimanche',
      closed: 'Fermé',
      labelName: 'Nom Complet',
      labelPhone: 'Numéro de Téléphone',
      labelService: 'Service Requis',
      labelMessage: 'Message',
      optional: '(optionnel)',
      placeholderMessage: 'Décrivez le problème ou tout ce que nous devrions savoir…',
      selectDefault: 'Choisir un service…',
      serviceOptions: [
        'Huile & Fluides',
        'Freins',
        'Diagnostic Moteur',
        'Pneus & Alignement',
        'Transmission',
        'Électrique',
        'Autre / Pas Sûr',
      ],
      submit: 'Demander un Rendez-vous',
      confirm: 'Nous confirmons dans les quelques heures en jours ouvrables.',
    },
    footer: {
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Comment ça Marche', href: '#how-it-works' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
      hours: 'Lun – Ven \u00a0 8:00 – 17:00',
    },
  },

  en: {
    nav: {
      services: 'Services',
      howItWorks: 'How It Works',
      whyUs: 'Why Us',
      faq: 'FAQ',
      contact: 'Contact',
      book: 'Book Appointment',
    },
    hero: {
      eyebrow: 'Garage Rene-Dayon — Montréal, QC',
      line1: 'HONEST WORK.',
      line2: 'FAIR PRICES.',
      line3: 'EVERY TIME.',
      sub: 'Your neighborhood mechanic for over 15 years. We tell you what\'s wrong, give you the price upfront, and don\'t start until you say yes.',
      cta1: 'Book an Appointment',
      cta2: 'Our Services',
      trust: [
        { label: '15+', sub: 'Years in Business' },
        { label: '3K+', sub: 'Vehicles Serviced' },
        { label: '100%', sub: 'Upfront Pricing' },
        { label: '5★', sub: 'Neighborhood Trusted' },
      ],
      hours: 'Mon – Fri \u00a0 8:00 – 17:00',
      walkIn: 'Walk-ins welcome',
    },
    brands: {
      label: 'All Makes',
    },
    services: {
      label: 'What We Do',
      title: 'WHAT WE WORK ON',
      sub: 'From routine maintenance to complex repairs — all makes and models, honest pricing every time.',
      items: [
        {
          title: 'Oil & Fluid Change',
          description: 'Oil, filter, and a quick fluid check. Done in under an hour — we let you know if anything else needs attention.',
        },
        {
          title: 'Brakes',
          description: 'Pads, rotors, calipers. We check the whole system and only replace what actually needs replacing.',
        },
        {
          title: 'Engine Diagnostics',
          description: 'We read the codes, explain what the warning light means, and give you a clear picture before touching anything.',
        },
        {
          title: 'Tires & Alignment',
          description: 'Rotation, balancing, and wheel alignment. We also help you find the right tires for your car and budget.',
        },
        {
          title: 'Transmission',
          description: 'Fluid service and repairs for manual and automatic. We\'ll tell you honestly whether it\'s worth fixing or not.',
        },
        {
          title: 'Electrical',
          description: 'Battery, alternator, starter, fuses, wiring. We find the actual cause — not just swap parts until something works.',
        },
      ],
    },
    howItWorks: {
      label: 'Our Process',
      title: 'HOW IT WORKS',
      steps: [
        {
          number: '01',
          title: 'Call or Book Online',
          description: 'Phone us or fill the quick form below. We confirm a time that works for you — usually the same day.',
        },
        {
          number: '02',
          title: 'We Inspect & Explain',
          description: 'We go through the vehicle, find the issues, and walk you through exactly what needs to be done and what it will cost.',
        },
        {
          number: '03',
          title: 'Pick Up & Drive',
          description: 'Work starts only after you approve. We use quality parts, do a final check, and call you when it\'s ready.',
        },
      ],
    },
    whyUs: {
      label: 'Why Choose Us',
      title: 'WHAT WE\nSTAND FOR',
      sub: 'We\'ve been in this neighborhood a long time. Honest work, fair prices — and we don\'t fix things that aren\'t broken.',
      stats: [
        { value: '15+', label: 'Years in Business' },
        { value: '3K+', label: 'Vehicles Serviced' },
      ],
      quote: '"Straight talk, fair prices, and quality work — that\'s been our promise from day one."',
      reasons: [
        {
          title: 'No Work Without Your OK',
          description: 'We give you a written estimate before touching anything. The price we quote is the price you pay — no additions after the fact.',
        },
        {
          title: 'Experienced Mechanics',
          description: 'Our team has been working on all makes and models for over 15 years. No apprentices on your car without supervision.',
        },
        {
          title: 'Most Jobs Done Same Day',
          description: 'If your repair will take longer than expected, we call you in the morning — not after you show up to pick it up.',
        },
        {
          title: 'Straightforward Pricing',
          description: 'No shop fees, no surprise line items. You get a clear breakdown and we only bill for what was actually done.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'COMMON\nQUESTIONS',
      sub: "Don't see your question?",
      subLink: 'Send us a message',
      subEnd: 'or give us a call.',
      items: [
        {
          question: 'What are your opening hours?',
          answer: "We're open Monday to Friday, 8:00 to 17:00. We're closed on Saturdays and Sundays. If you need to leave a message outside of hours, we'll get back to you first thing the next morning.",
        },
        {
          question: 'Do I need to book in advance?',
          answer: "Booking ahead is the best way to guarantee your time slot. Walk-ins are welcome too — we do our best to fit you in depending on the day's schedule.",
        },
        {
          question: 'Do you give a quote before starting the work?',
          answer: 'Always. We inspect the vehicle, write up exactly what needs to be done, and give you the full cost before anything is touched. Nothing starts without your approval.',
        },
        {
          question: 'How long does a standard repair take?',
          answer: 'Routine jobs like oil changes or brake pads are done within a few hours. Bigger repairs — diagnostics, transmission, electrical — may take a full day. We give you a realistic time estimate upfront and keep you posted.',
        },
        {
          question: 'Do you guarantee your repairs?',
          answer: "Yes. All work performed at Rene-Dayon is covered by a warranty on both parts and labour. If something isn't right after we've worked on it, bring it back and we'll sort it out at no extra charge.",
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, debit, and all major credit cards. Payment is collected when you come to pick up the vehicle.',
        },
      ],
    },
    contact: {
      label: 'Get In Touch',
      title: 'COME SEE US\nOR CALL AHEAD',
      sub: "Fill the form and we'll confirm your appointment, or just call us directly. Walk-ins are always welcome during business hours.",
      callCta: 'Call:',
      infoPhone: 'Phone',
      infoAddress: 'Address',
      infoHours: 'Hours',
      monFri: 'Mon – Fri',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      labelName: 'Full Name',
      labelPhone: 'Phone Number',
      labelService: 'Service Needed',
      labelMessage: 'Message',
      optional: '(optional)',
      placeholderMessage: 'Describe the problem or anything else we should know…',
      selectDefault: 'Select a service…',
      serviceOptions: [
        'Oil & Fluid Change',
        'Brakes',
        'Engine Diagnostics',
        'Tires & Alignment',
        'Transmission',
        'Electrical',
        'Other / Not Sure',
      ],
      submit: 'Request Appointment',
      confirm: 'We confirm within a few hours during business days.',
    },
    footer: {
      links: [
        { label: 'Services', href: '#services' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
      hours: 'Mon – Fri \u00a0 8:00 – 17:00',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const toggle = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))
  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
