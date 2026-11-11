export interface InstagramReel {
  id: string;
  reelUrl: string;
  profileUrl: string;
  thumbnail: string;
  title: string;
  titleTa: string;
  description: string;
  descriptionTa: string;
  location: string;
  duration?: string;
  date?: string;
}

/**
 * EDITABLE REEL COLLECTION FOR MSP PROPERTIES
 * All reels connect to official MSP Properties Instagram: https://www.instagram.com/msp_properties/
 * You can edit, add, or replace Reel URLs here anytime.
 */
export const INSTAGRAM_ACCOUNT_URL = 'https://www.instagram.com/msp_properties/';

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-01',
    reelUrl: 'https://www.instagram.com/reel/C8qX5N0yB7R/',
    profileUrl: INSTAGRAM_ACCOUNT_URL,
    thumbnail: '/assets/aistudio/e4afbe01-3e47-4d62-a793-7a545da84bb7_7e463a75.jpg',
    title: 'The Grove – Royal Palms Drone Walkthrough',
    titleTa: 'தி குரோவ் – ராயல் பாம்ஸ் வான்வழி வீடியோ',
    description: 'Breathtaking aerial footage showcasing 40ft blacktop avenues and avenue royal palm plantation along Avinashi Road corridor.',
    descriptionTa: 'அவினாசி ரோடு விரைவு வழிச்சாலையில் அமைந்த 40 அடி தார்ச்சாலை மற்றும் அழகிய அரச பனை மரங்கள் நிறைந்த கேட்டட் குடியிருப்பு.',
    location: 'Avinashi Road Corridor, Erode – Tirupur',
    duration: '0:45',
    date: 'Recent',
  },
  {
    id: 'reel-02',
    reelUrl: 'https://www.instagram.com/reel/C9K3mP8xT2q/',
    profileUrl: INSTAGRAM_ACCOUNT_URL,
    thumbnail: '/assets/aistudio/8fcb9853-2f8f-4c8e-9428-ac1122023487_48721bf8.jpg',
    title: 'Serene Valley Estates – Kotagiri Foothills Living',
    titleTa: 'செரீன் வேலி எஸ்டேட்ஸ் – நீலகிரி அடிவார அழகு',
    description: 'Experience the cool breeze, perennial fresh spring streams, and mist-covered mountain peaks at our Nilgiri foothills sanctuary.',
    descriptionTa: 'இதமான குளுமையான வானிலை, வற்றாத ஊற்று நீர் மற்றும் நீலகிரி மலையின் எழில் கொஞ்சும் இயற்கைக் காட்சிகள்.',
    location: 'Mettupalayam – Kotagiri Foothills, The Nilgiris',
    duration: '0:58',
    date: 'Recent',
  },
  {
    id: 'reel-03',
    reelUrl: 'https://www.instagram.com/reel/C7z1W2qP9mL/',
    profileUrl: INSTAGRAM_ACCOUNT_URL,
    thumbnail: '/assets/aistudio/34bc6433-6e99-4621-916a-73d35c0f7d74_739b0252.jpg',
    title: 'Serenity Shores – Waterfront Living Walkthrough',
    titleTa: 'செரினிட்டி ஷோர்ஸ் – ஏரிக்கரை எழில் மனைப் பிரிவு',
    description: 'Sunset stroll along the Sulur lake promenade. Just 12 minutes to Coimbatore International Airport and IT corridors.',
    descriptionTa: 'சூலூர் ஏரிக்கரையின் இதமான தென்றலும் இயற்கை எழிலும் நிறைந்த பிரீமியம் வீட்டு மனைகள். கோவை விமான நிலையத்திற்கு மிக அருகில்.',
    location: 'Sulur Lake Promenade, Coimbatore East',
    duration: '0:50',
    date: 'Recent',
  },
  {
    id: 'reel-04',
    reelUrl: 'https://www.instagram.com/reel/C5t8K3zJ1vA/',
    profileUrl: INSTAGRAM_ACCOUNT_URL,
    thumbnail: '/assets/aistudio/795debf9-181f-4a38-89ac-6790fb058578_76ef772c.jpg',
    title: 'The Grand Enclave – Luxury Boulevard Entrance',
    titleTa: 'தி கிராண்ட் என்கிளேவ் – பிரம்மாண்ட நுழைவு வளைவு',
    description: 'Tour of our signature Coimbatore plotted development featuring heavy-duty paver roads, green medians, and underground cabling.',
    descriptionTa: 'அகலமான கான்கிரீட் பேவர் சாலைகள், அழகிய மீடியன்கள் மற்றும் நிலத்தடி மின்கம்பி வசதிகளுடன் கூடிய முதன்மையான வீட்டு மனைத் திட்டம்.',
    location: 'Coimbatore Region',
    duration: '1:05',
    date: 'Recent',
  },
];
