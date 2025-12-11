import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === Number(id));

  if (!property) return <div className="pt-32 text-center text-xl font-bold">Imóvel não encontrado.</div>;

  const similarProperties = PROPERTIES.filter(p => p.id !== property.id).slice(0, 4);

  return (
    <>
      <main className="flex-grow pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb & Title */}
          <div className="mb-8 pt-6">
            <nav aria-label="Breadcrumb" className="flex text-sm text-text-muted mb-4">
              <ol className="flex items-center space-x-2">
                <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li><Link to="/search" className="hover:text-primary transition-colors">Imóveis</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li><span className="font-medium text-secondary">{property.title}</span></li>
              </ol>
            </nav>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight leading-tight">{property.title}</h1>
                <p className="text-text-muted mt-2 flex items-center gap-1 text-lg font-light">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  {property.address.street ? `${property.address.street} - ` : ''} {property.address.neighborhood}, {property.address.city} - {property.address.state}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-text-muted font-medium uppercase tracking-wide">Valor de {property.purpose}</p>
                <h2 className="text-4xl font-bold text-primary tracking-tight">
                  R$ {property.price.toLocaleString('pt-BR')}
                  {property.priceSuffix && <span className="text-2xl ml-1 text-text-muted">{property.priceSuffix}</span>}
                </h2>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 h-[500px]">
            {/* Main Image */}
            <div className="md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group h-full shadow-md">
              <img src={property.images[0]} alt={property.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {property.isFeatured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-primary/95 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg border border-white/10">Destaque</span>
                </div>
              )}
            </div>
            
            {/* Secondary Images (using placeholder if array is short for demo) */}
            {[1, 2, 3].map((i) => (
              <div key={i} className={`md:col-span-1 relative rounded-2xl overflow-hidden group h-full shadow-sm ${i === 3 ? 'cursor-pointer' : ''}`}>
                 <img 
                    src={property.images[i] || property.images[0]} 
                    alt={`View ${i}`} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
                 {i === 3 && (
                   <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center transition-opacity hover:bg-secondary/50">
                     <span className="text-white font-bold text-lg flex items-center gap-2">
                       <span className="material-symbols-outlined">photo_library</span>
                       Ver mais fotos
                     </span>
                   </div>
                 )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Features Grid */}
              <section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-secondary mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  Características do Imóvel
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-blue-50/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl mb-3">bed</span>
                    <span className="text-2xl font-bold text-secondary">{property.features.beds}</span>
                    <span className="text-sm text-text-muted font-medium">Quartos</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-blue-50/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl mb-3">bathtub</span>
                    <span className="text-2xl font-bold text-secondary">{property.features.baths}</span>
                    <span className="text-sm text-text-muted font-medium">Banheiros</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-blue-50/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl mb-3">garage</span>
                    <span className="text-2xl font-bold text-secondary">{property.features.parking}</span>
                    <span className="text-sm text-text-muted font-medium">Vagas</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-blue-50/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl mb-3">square_foot</span>
                    <span className="text-2xl font-bold text-secondary">{property.features.area}m²</span>
                    <span className="text-sm text-text-muted font-medium">Área Útil</span>
                  </div>
                </div>
                
                {/* Additional Features List (Mock) */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {['Piscina Aquecida', 'Área Gourmet', 'Ar Condicionado Central', 'Portão Eletrônico', 'Armários Planejados', 'Jardim de Inverno'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-secondary group">
                      <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <span className="material-symbols-outlined text-primary text-sm group-hover:text-white transition-colors">check</span>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Description */}
              <section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">description</span>
                  Descrição
                </h3>
                <div className="prose prose-slate max-w-none text-text-muted leading-relaxed">
                  <p>{property.description || "Descrição não disponível para este imóvel."}</p>
                </div>
              </section>

              {/* Map Placeholder */}
              <section className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">map</span>
                  Localização
                </h3>
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 shadow-inner flex items-center justify-center">
                  <span className="text-text-muted">Mapa Interativo (Google Maps Embed)</span>
                </div>
              </section>
            </div>

            {/* Sidebar Contact */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-blue-500"></div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-secondary tracking-tight">Tenho Interesse</h3>
                    <p className="text-xs text-text-muted mt-1 font-medium">Preencha para falar com um especialista.</p>
                  </div>
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Nome completo" className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all shadow-sm" required />
                    <input type="tel" placeholder="Telefone / WhatsApp" className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all shadow-sm" required />
                    <input type="email" placeholder="E-mail principal" className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all shadow-sm" required />
                    <textarea placeholder="Olá, gostaria de mais informações... (Opcional)" className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-sm text-secondary placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all shadow-sm min-h-[80px] resize-none"></textarea>
                    
                    <button type="submit" className="w-full rounded-lg bg-primary py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-2 group">
                      <span>Enviar Solicitação</span>
                      <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">send</span>
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-center mt-2 py-1 rounded-md bg-green-50/50 border border-green-100/50">
                      <span className="material-symbols-outlined text-green-600 text-[16px]">verified_user</span>
                      <span className="text-[11px] text-green-800 font-medium">Seus dados estão protegidos.</span>
                    </div>

                    <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-gray-100"></div>
                      <span className="flex-shrink-0 mx-3 text-gray-300 text-[10px] font-bold uppercase tracking-wider">Prefere agilidade?</span>
                      <div className="flex-grow border-t border-gray-100"></div>
                    </div>
                    
                    <button type="button" className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-sm font-bold text-secondary hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                      <span className="material-symbols-outlined">chat</span>
                      Falar no WhatsApp
                    </button>
                  </form>
                </div>

                {/* Agent Card */}
                {property.agent && (
                   <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-100 border-2 border-white shadow-md">
                          <img src={property.agent.image} alt={property.agent.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Corretor Responsável</p>
                          <h4 className="font-bold text-secondary text-lg">{property.agent.name}</h4>
                          <p className="text-xs text-text-muted font-medium">CRECI {property.agent.creci}</p>
                        </div>
                      </div>
                   </div>
                )}
              </div>
            </aside>
          </div>
        </div>

        {/* Similar Properties */}
        <section className="bg-gray-50 py-20 mt-16 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold text-secondary">Imóveis Similares</h2>
                <p className="text-text-muted mt-1">Outras opções selecionadas para você</p>
              </div>
              <Link to="/search" className="text-sm font-bold text-primary hover:text-primary-dark flex items-center gap-1 group">
                Ver todos
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarProperties.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <a href="#" target="_blank" title="Fale conosco no WhatsApp" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition-all hover:scale-110 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-600/30">
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
      </a>
    </>
  );
};

export default PropertyDetails;
