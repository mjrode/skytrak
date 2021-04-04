export interface PlayBetterVariant {
  available: boolean;
  name: string;
  price: number;
  id: number;
  featured_image: PlayBetterImage;
}
export interface PlayBetterImage {
  src: string;
}
export interface PlayBetterProduct {
  updated_at: string;
}

export interface PlayBetterAPIResponse {
  product: PlayBetterProduct;

  variants: PlayBetterVariant[];
}
