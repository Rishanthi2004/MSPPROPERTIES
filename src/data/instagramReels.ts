export interface InstagramReel {
  id: string;
  reelUrl: string;
  shortcode: string;
  title: string;
  titleTa: string;
  description: string;
  descriptionTa: string;
  location?: string;
}

/**
 * OFFICIAL MSP PROPERTIES INSTAGRAM REELS
 * Exact URLs provided by user:
 * 1. https://www.instagram.com/p/DeqSBKGSsiQ/
 * 2. https://www.instagram.com/p/DfE3MwxyguN/
 * 3. https://www.instagram.com/p/Dd5p0xWSB4R/
 * 4. https://www.instagram.com/p/DcteJzty98D/
 */
export const INSTAGRAM_ACCOUNT_URL = 'https://www.instagram.com/msp_properties/';

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-01',
    reelUrl: 'https://www.instagram.com/p/DeqSBKGSsiQ/',
    shortcode: 'DeqSBKGSsiQ',
    title: 'The Grove – Royal Palms Plotted Development',
    titleTa: 'தி குரோவ் – ராயல் பாம்ஸ் வீட்டு மனைப் பிரிவு',
    description: 'Exclusive on-site walkthrough showcasing 40ft blacktop avenues and royal palm trees in Namma Namakkal.',
    descriptionTa: '40 அடி தார்ச்சாலை மற்றும் அழகிய அரச பனை மரங்கள் நிறைந்த நம்ம நாமக்கல் கேட்டட் குடியிருப்பு வான்வழி வீடியோ.',
    location: 'Mohanur Road Corridor, Namma Namakkal',
  },
  {
    id: 'reel-02',
    reelUrl: 'https://www.instagram.com/p/DfE3MwxyguN/',
    shortcode: 'DfE3MwxyguN',
    title: 'Serene Valley Estates – Kolli Hills Foothills',
    titleTa: 'செரீன் வேலி எஸ்டேட்ஸ் – கொல்லிமலை அடிவாரம்',
    description: 'Experience natural mountain streams and cool breezes at our Kolli Hills foothills sanctuary in Namakkal.',
    descriptionTa: 'இதமான குளுமையான வானிலை மற்றும் நாமக்கல் கொல்லிமலையின் எழில் கொஞ்சும் இயற்கைக் காட்சிகள்.',
    location: 'Senthamangalam, Kolli Hills Foothills, Namakkal',
  },
  {
    id: 'reel-03',
    reelUrl: 'https://www.instagram.com/p/Dd5p0xWSB4R/',
    shortcode: 'Dd5p0xWSB4R',
    title: 'Serenity Shores – Waterfront Living Walkthrough',
    titleTa: 'செரினிட்டி ஷோர்ஸ் – நதிக்கரை எழில் மனைப் பிரிவு',
    description: 'Promenade walk just minutes from Karur New Bus Stand & Textile Industrial corridor in Namma Karur.',
    descriptionTa: 'கரூர் புதிய பேருந்து நிலையம் மற்றும் தேசிய நெடுஞ்சாலைக்கு மிக அருகில் அமைந்த பிரீமியம் வீட்டு மனைகள்.',
    location: 'Amaravathi River Promenade, Namma Karur',
  },
  {
    id: 'reel-04',
    reelUrl: 'https://www.instagram.com/p/DcteJzty98D/',
    shortcode: 'DcteJzty98D',
    title: 'The Grand Enclave – Gated Community Tour',
    titleTa: 'தி கிராண்ட் என்கிளேவ் – பிரம்மாண்ட நுழைவு வளைவு',
    description: 'Tour of our signature Salem - Namakkal smart highway plotted development with underground utilities for IT workers.',
    descriptionTa: 'கான்கிரீட் சாலைகள், அழகிய பூங்காக்கள் மற்றும் ஐடி ஊழியர்களுக்கான ஃபைபர் வசதியுடன் கூடிய சேலம் - நாமக்கல் திட்டம்.',
    location: 'Salem - Namakkal Smart Corridor, Salem',
  },
];
