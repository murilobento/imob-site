import React from 'react';
import { Property } from '../types';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1 h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`rounded px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm ${property.purpose === 'Venda' ? 'bg-primary/90' : 'bg-slate-700/90'}`}>
            {property.purpose}
          </span>
          {property.isNew && (
             <span className="rounded bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-lg">
                Novo
             </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent p-6 pt-12">
          <h3 className="text-2xl font-bold text-white font-display">
            R$ {property.price.toLocaleString('pt-BR')} 
            {property.priceSuffix && <span className="text-sm font-normal text-gray-300 ml-1">{property.priceSuffix}</span>}
          </h3>
        </div>
      </div>

      <div className="flex flex-col p-6 flex-grow">
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
          {property.address.neighborhood} • {property.address.city}
        </span>
        <h4 className="text-lg font-bold text-text-main line-clamp-1 font-display group-hover:text-primary transition-colors">
          {property.title}
        </h4>
        
        <div className="my-6 grid grid-cols-4 gap-2 text-text-muted border-t border-b border-gray-100 py-4">
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-2xl text-primary/70">bed</span>
            <span className="text-xs font-medium">{property.features.beds} Dorms</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-2xl text-primary/70">bathtub</span>
            <span className="text-xs font-medium">{property.features.baths} Ban</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-2xl text-primary/70">garage</span>
            <span className="text-xs font-medium">{property.features.parking} Vagas</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-2xl text-primary/70">square_foot</span>
            <span className="text-xs font-medium">{property.features.area}m²</span>
          </div>
        </div>

        <Link 
          to={`/property/${property.id}`}
          className="mt-auto w-full flex items-center justify-center rounded-lg bg-background-subtle border border-transparent py-3 text-sm font-bold text-text-main transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20"
        >
          Ver Detalhes
        </Link>
      </div>
    </article>
  );
};

export default PropertyCard;
