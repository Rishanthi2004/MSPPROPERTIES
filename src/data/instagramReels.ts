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
    posterUrl: '/assets/aistudio/795debf9-181f-4a38-89ac-6790fb058578_76ef772c.jpg',
    shortcode: 'DeqSBKGSsiQ',
  },
  {
    id: 'video-02',
    reelUrl: 'https://www.instagram.com/p/DfE3MwxyguN/',
    videoUrl: '/assets/videos/reel-02.mp4',
    posterUrl: '/assets/aistudio/2ed08cf9-601c-41f6-84c8-9929ea6d00b0_e97ae681.jpg',
    shortcode: 'DfE3MwxyguN',
  },
  {
    id: 'video-03',
    reelUrl: 'https://www.instagram.com/p/Dd5p0xWSB4R/',
    videoUrl: '/assets/videos/reel-03.mp4',
    posterUrl: '/assets/aistudio/68d5b685-fed6-489a-ae7f-de56802cd7c4_f54ce62e.jpg',
    shortcode: 'Dd5p0xWSB4R',
  },
  {
    id: 'video-04',
    reelUrl: 'https://www.instagram.com/p/DcteJzty98D/',
    videoUrl: '/assets/videos/reel-04.mp4',
    posterUrl: '/assets/aistudio/17ab3351-8983-48d4-a004-bfe4485a0942_deedd7c0.jpg',
    shortcode: 'DcteJzty98D',
  },
];
