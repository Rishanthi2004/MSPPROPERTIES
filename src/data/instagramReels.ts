export interface InstagramReel {
  id: string;
  reelUrl: string;
  videoUrl: string;
  posterUrl: string;
  shortcode: string;
}

/**
 * OFFICIAL MSP PROPERTIES INSTAGRAM VIDEOS
 * 4 Individual Video Sources:
 * 1. /assets/videos/reel-01.mp4 (The Grove – Royal Palms)
 * 2. /assets/videos/reel-02.mp4 (Serene Valley Estates)
 * 3. /assets/videos/reel-03.mp4 (Serenity Shores)
 * 4. /assets/videos/reel-04.mp4 (The Grand Enclave)
 */
export const INSTAGRAM_ACCOUNT_URL = 'https://www.instagram.com/msp_properties/';

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'video-01',
    reelUrl: 'https://www.instagram.com/p/DeqSBKGSsiQ/',
    videoUrl: '/assets/videos/reel-01.mp4',
    posterUrl: '/assets/videos/reel-01-poster.jpg',
    shortcode: 'DeqSBKGSsiQ',
  },
  {
    id: 'video-02',
    reelUrl: 'https://www.instagram.com/p/Dd5p0xWSB4R/',
    videoUrl: '/assets/videos/reel-02.mp4',
    posterUrl: '/assets/videos/reel-02-poster.jpg',
    shortcode: 'Dd5p0xWSB4R',
  },
  {
    id: 'video-03',
    reelUrl: 'https://www.instagram.com/p/DdJ3OKPytOI/',
    videoUrl: '/assets/videos/reel-03.mp4',
    posterUrl: '/assets/videos/reel-03-poster.jpg',
    shortcode: 'DdJ3OKPytOI',
  },
  {
    id: 'video-04',
    reelUrl: 'https://www.instagram.com/p/DcteJzty98D/',
    videoUrl: '/assets/videos/reel-04.mp4',
    posterUrl: '/assets/videos/reel-04-poster.jpg',
    shortcode: 'DcteJzty98D',
  },
];
