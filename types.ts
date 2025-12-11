export interface Property {
  id: number;
  title: string;
  type: 'Casa' | 'Apartamento' | 'Terreno' | 'Sobrado';
  purpose: 'Venda' | 'Aluguel';
  price: number;
  priceSuffix?: string;
  address: {
    street?: string;
    city: string;
    neighborhood: string;
    state: string;
  };
  features: {
    beds: number;
    baths: number;
    parking: number;
    area: number;
  };
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  description?: string;
  agent?: {
    name: string;
    creci: string;
    image: string;
  };
}
