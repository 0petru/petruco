import { WebsiteExample, VideoTestimonial, WrittenReview, FaqItem } from './types';

export const WEBSITE_EXAMPLES: WebsiteExample[] = [
  {
    id: 'psiholog-psihoterapeut',
    title: 'Exemplul 1: Psiholog & Psihoterapeut',
    subtitle: 'Modern. Profesional. Clar.',
    description: 'Orientat pe definirea clară a abordării terapeutice (CBT, psihodinamică sau integrativă), stabilirea unei relații de încredere și programarea ghidată a primei ședințe.',
    tag: 'Individual & Cuplu',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    previewUrl: '/preview/individual',
    features: [
      'Prezentare empatică a parcursului profesional și acreditărilor COPSI',
      'Explicarea pașilor pentru prima ședință de evaluare',
      'Calendar integrat pentru programări online și telefon direct',
      'Design minimalist în nuanțe calde de salvie și crem terapeutic'
    ],
    mockupContent: {
      heroTitle: 'Dr. Andreea Ionescu — Psihoterapeut Specialist',
      heroSubtitle: 'Spațiu sigur și confidențial pentru anxietate, burnout, depresie și dezvoltare personală.',
      specialties: ['Terapie Cognitiv-Comportamentală', 'Gestionarea Stresului & Anxietate', 'Consiliere de Cuplu', 'Dezvoltare Emoțională'],
      aboutExcerpt: 'Acreditată de Colegiul Psihologilor din România, cu peste 9 ani de practică clinică dedicată adulților și tinerilor.',
      address: 'Strada Nicolae Iorga 14, Sector 1, București (zona Piața Romană)',
      contactAction: 'Programează o ședință inițială'
    }
  },
  {
    id: 'cabinet-psihologie',
    title: 'Exemplul 2: Cabinet de Psihologie',
    subtitle: 'Construit pentru încredere și contact.',
    description: 'Structurat pentru un cabinet individual sau o echipă multidisciplinară (evaluare clinică, expertiză, psihoterapie), cu accent pe autoritate și localizare rapidă.',
    tag: 'Cabinet & Echipă',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    previewUrl: '/preview/cabinet',
    features: [
      'Ghid complet de servicii clinice și tarife transparente',
      'Integrare Google Maps cu indicații rutiere și parcare',
      'Formular securizat de triaj și solicitare programare',
      'Testimoniale anonimizate și etică profesională clar stipulată'
    ],
    mockupContent: {
      heroTitle: 'Cabinet Individual de Psihologie Mihai Voinea',
      heroSubtitle: 'Evaluare psihologică clinică, avize de specialitate și psihoterapie pentru adulți.',
      specialties: ['Psihologie Clinică', 'Consiliere Psihologică', 'Avize Psihologice', 'Terapie Sistemică'],
      aboutExcerpt: 'Cabinet autorizat COPSI cu abordare centrată pe soluții și confidențialitate deplină.',
      address: 'Bulevardul Eroilor 28, Cluj-Napoca (aproape de Parcul Central)',
      contactAction: 'Solicită disponibilitate cabinet'
    }
  },
  {
    id: 'psihologie-copii',
    title: 'Exemplul 3: Psihologie pentru Copii & Adolescenți',
    subtitle: 'Adaptat serviciilor și publicului potrivit.',
    description: 'Creat special pentru părinți care caută sprijin empatic pentru copiii lor: ton călduros, explicarea modului de lucru cu cei mici și răspunsuri la îngrijorările părinților.',
    tag: 'Copii & Adolescenți',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    previewUrl: '/preview/copii',
    features: [
      'Ghid pentru părinți: Cum decurge prima întâlnire fără copil',
      'Atmosferă vizuală prietenoasă, calmă și fără termeni tehnici intimidanți',
      'Programe speciale pentru adaptare școlară, ADHD și gestionarea emoțiilor',
      'Contact rapid pe WhatsApp și apel direct cu un click'
    ],
    mockupContent: {
      heroTitle: 'Cabinet Psihologie Infantilă & Familie — Ioana Damian',
      heroSubtitle: 'Sprijin emoțional, evaluare psihologică și terapie prin joc pentru copii și adolescenți.',
      specialties: ['Terapie prin Joc & Art-Terapie', 'Dificultăți de Învățare & ADHD', 'Anxietate de Separare', 'Ghidaj Parental (Parenting)'],
      aboutExcerpt: 'Peste 11 ani de experiență în psihologie pediatrică și consilierea relațiilor de familie.',
      address: 'Strada Vasile Alecsandri 8, Iași (zona Copou)',
      contactAction: 'Programează o discuție preliminară'
    }
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'video-1',
    name: 'Dr. Elena Radu',
    role: 'Psiholog Clinician & Psihoterapeut',
    clinic: 'Cabinet Individual de Psihoterapie',
    city: 'București',
    duration: '2:14 min',
    highlightQuote: '„Oamenii care vin acum prin recomandare spun că au citit deja pe site despre abordarea mea și știu exact ce presupune prima ședință.”',
    keyMetric: '+85% conversie recomandări',
    thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    videoPreview: 'Prezentare caz: De la profil Facebook inactiv la 12 solicitări lunare de programare din căutări Google'
  },
  {
    id: 'video-2',
    name: 'Psih. Andrei Munteanu',
    role: 'Psihoterapeut Integrativ',
    clinic: 'Cabinet Psihologie Munteanu',
    city: 'Cluj-Napoca',
    duration: '1:48 min',
    highlightQuote: '„Procesul a fost foarte simplu și nu a trebuit să mă ocup de partea tehnică. În două săptămâni totul a fost impecabil.”',
    keyMetric: 'Locul 1 pe Google Maps local',
    thumbnailUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    videoPreview: 'Cum arată o poziționare profesională pe Google Maps pentru un cabinet din Cluj'
  },
  {
    id: 'video-3',
    name: 'Simona Matei',
    role: 'Psiholog Specialist Copii & Familie',
    clinic: 'Centrul Emoția',
    city: 'Timișoara',
    duration: '2:30 min',
    highlightQuote: '„Părinții găsesc exact detaliile despre cum decurge prima ședință și vin deja relaxați și hotărâți să înceapă procesul.”',
    keyMetric: 'Zero apeluri pierdute',
    thumbnailUrl: 'https://images.unsplash.com/photo-1580894732470-36d7a46c10eb?auto=format&fit=crop&w=600&q=80',
    videoPreview: 'Crearea unei punți de încredere cu părinții înainte de intrarea în cabinet'
  }
];

export const WRITTEN_REVIEWS: WrittenReview[] = [
  {
    id: 'review-1',
    stars: 5,
    quote: 'Înainte aveam doar o prezență online foarte limitată. Acum avem un website profesionist și toate informațiile sunt mult mai ușor de găsit.',
    author: 'Dr. Elena Radu',
    credentials: 'Psiholog / Psihoterapeut',
    location: 'București',
    verified: true
  },
  {
    id: 'review-2',
    stars: 5,
    quote: 'Procesul a fost foarte simplu și nu a trebuit să mă ocup de partea tehnică. Am primit exact ceea ce aveam nevoie pentru cabinet.',
    author: 'Andrei Munteanu',
    credentials: 'Cabinet de Psihologie',
    location: 'Cluj-Napoca',
    verified: true
  },
  {
    id: 'review-3',
    stars: 5,
    quote: 'Pacienții trimiși de medici parteneri îmi spun frecvent că au căutat numele meu pe Google, au găsit imediat site-ul cu adresa cabinetului și au făcut programarea direct.',
    author: 'Cristina Dumitrescu',
    credentials: 'Psiholog Clinician Principal',
    location: 'Brașov',
    verified: true
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Trebuie să am deja un website?',
    answer: 'Nu. Construim totul de la zero sau, dacă aveți deja un website vechi ori incomplet, îl refacem complet pentru a respecta standardele moderne de claritate, viteză și conformitate.'
  },
  {
    question: 'Trebuie să am deja un Google Business Profile?',
    answer: 'Nu. Ne ocupăm noi de crearea, configurarea, verificarea și optimizarea profilului Google Business și a pinului de pe Google Maps pentru cabinetul dumneavoastră.'
  },
  {
    question: 'Analiza chiar este gratuită?',
    answer: 'Da. Analizăm prezența actuală (sau absența ei) și vă prezentăm concluziile într-o scurtă întâlnire de 15–20 de minute, cu exemple concrete.'
  },
  {
    question: 'Sunt obligat să cumpăr ceva?',
    answer: 'Nu. Dacă după întâlnire decideți că nu doriți să lucrăm împreună, rămâneți cu raportul de analiză și toate informațiile prezentate — 100% gratuit.'
  }
];
