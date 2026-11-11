export type Language = 'en' | 'ta';

export interface Property {
  id: string;
  projectNumber: string;
  name: string;
  nameTa: string;
  category: string;
  categoryTa: string;
  location: string;
  locationTa: string;
  image: string;
  plotSize: string;
  plotSizeTa: string;
  availability: string;
  availabilityTa: string;
  priceGuide: string;
  priceGuideTa: string;
  approvalStatus: string;
  approvalNo: string;
  reraNo: string;
  overview: string;
  overviewTa: string;
  highlights: string[];
  highlightsTa: string[];
  amenities: { name: string; icon: string }[];
  specifications: {
    roadWidth: string;
    waterSource: string;
    electricity: string;
    boundary: string;
    possession: string;
  };
  nearbyLandmarks: string[];
}

export interface SiteVisitFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredProject: string;
  preferredDate: string;
  timeSlot: string;
  pickupRequired: boolean;
  pickupCity: string;
  comments: string;
}
