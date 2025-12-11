import type { Json } from '../supabase/supabase';

export interface Color {
	name: string;
	color: string;
	price: number;
}

export interface VariantProduct {
  id: string;
  color: string;
  talla: string;
  price: number;
  stock: number;
  color_name: string;
  product_id: string;
}


export interface Product {
  id: string;
  created_at: string;
  name: string;
  brand: string;
  slug: string;
  features: string[] | null;
  description: Json;
  images: string[];
  variants: VariantProduct[];
}

export interface PreparedProducts {
	id: string;
	name: string;
	brand: string;
	slug: string;
	features: string[];
	description: Json;
	images: string[];
	created_at: string;
	price: number;
	colors: {
		name: string;
		color: string;
	}[];
	variants: VariantProduct[];
}