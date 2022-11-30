export type PropertyStateType = {
  id: number;
  name: string;
  bedroom: number;
  bathroom: number;
  toilet: number;
  stories: null;
  verified: false;
  price: string;
  plots: null;
  description: string;
  statu: null;
  sittingroom: number;
  image_urls: string[];
  drafted: boolean;
  google_location: {
    photos: string[];
  };
  location: string;
  uid: string;
  payment_type: {
    id: number;
    name: string;
    abbreviation: string;
    show: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  service: null;
  discount_price: null;
  used: boolean;
  amount: null;
  color: null;
  agent: {
    id: number;
    name: string;
    location: string;
    logo_url: string;
    banner_url: string;
    google_location: {
      label: string;
      value: {
        terms: {
          value: string;
          offset: number;
        }[];
        types: string[];
        place_id: string;
        reference: string;
        description: string;
        matched_substrings: {
          length: number;
          offset: number;
        }[];
        structured_formatting: {
          main_text: string;
          main_text_matched_substrings: {
            length: number;
            offset: number;
          }[];
        };
      };
    };
    users_permissions_user: number;
    published_at: string;
    created_at: string;
    updated_at: string;
    country: number;
    state: number;
    inspection_count: string;
    id_image_front: string;
    keywords: string;
    inspection_fee: string;
    id_image_back: string;
    location_keyword: number;
    is_verified: null;
  };
  categorie: {
    id: number;
    name: string;
    image_url: null;
    show: boolean;
    requires_personal_info: boolean;
    is_apartment: boolean;
    is_product: boolean;
    is_space: boolean;
    description: null;
    published_at: string;
    created_at: string;
    updated_at: string;
    slug: null;
  };
  state: {
    id: number;
    name: string;
    short: string;
    description: null;
    image_url: null;
    country: number;
    published_at: string;
    created_at: string;
    updated_at: string;
    slug: null;
  };
  legal_fee: string;
  agency_fee: string;
  caution_fee: string;
  location_keyword: {
    id: number;
    name: string;
    slug: string;
    state: number;
    background_img: string;
    has_group: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  expiration_date: string;
  is_available: boolean;
  agent_profile: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    bio: string;
    avatar_url: string;
    gander: null;
    agent: number;
    created_at: string;
    updated_at: string;
    is_verified: null;
    work_industry: null;
    online: false;
    deactivated: null;
    last_seen: string;
    geo_location: null;
    budget: string;
    verified_phone_number: null;
  };
  published_at: string;
  created_at: string;
  updated_at: string;
  amenities: [
    {
      id: number;
      name: string;
      des: null;
      icon: null;
      show: boolean;
      published_at: string;
      created_at: string;
      updated_at: string;
    },
  ];
  interested_parties: [];
};
