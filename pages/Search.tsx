import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES } from '../constants';

const Search: React.FC = () => {
  return (
    <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/60 pb-8">
          <div>
            <nav aria-label="Breadcrumb" className="flex text-sm text-text-muted mb-3">
              <ol className="flex items-center space-x-2">
                <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
                <li><span className="text-slate-300">/</span></li>
                <li><span className="font-semibold text-secondary">Busca de Imóveis</span></li>
              </ol>
            </nav>
            <h1 className="text-3xl font-display font-extrabold text-secondary sm:text-4xl tracking-tight">Imóveis em <span className="text-primary">Regente Feijó</span></h1>
            <p className="mt-2 text-text-muted text-lg">Encontramos <span className="font-bold text-secondary">{PROPERTIES.length} imóveis</span> exclusivos para você.</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider pl-3">Ordenar:</span>
            <div className="relative">
              <select className="appearance-none bg-transparent py-2 pl-2 pr-8 text-sm font-bold text-secondary focus:outline-none cursor-pointer">
                <option>Mais Relevantes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
                <option>Mais Recentes</option>
              </select>
              <span className="material-symbols-outlined absolute right-0 top-1.5 pointer-events-none text-slate-400 text-lg">expand_more</span>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-28 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-display font-bold text-lg text-secondary flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">tune</span>
                  Filtros
                </h3>
                <button className="text-xs font-semibold text-text-muted hover:text-primary transition-colors uppercase tracking-wider">Limpar</button>
              </div>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input type="text" placeholder="Código ou palavra-chave" className="w-full rounded-xl border-gray-200 bg-slate-50 pl-10 pr-4 py-3 text-sm font-medium text-secondary placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all" />
                  <span className="material-symbols-outlined absolute left-3 top-3 text-slate-400 text-[20px]">search</span>
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-3">Finalidade</label>
                  <div className="bg-slate-50 p-1 rounded-xl flex">
                    <label className="cursor-pointer flex-1 relative">
                      <input type="radio" name="purpose" className="peer sr-only" defaultChecked />
                      <div className="flex items-center justify-center rounded-lg py-2 text-sm font-bold text-text-muted transition-all z-10 relative peer-checked:text-white peer-checked:shadow-sm">Comprar</div>
                      <div className="absolute inset-0 bg-secondary rounded-lg scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300"></div>
                    </label>
                    <label className="cursor-pointer flex-1 relative">
                      <input type="radio" name="purpose" className="peer sr-only" />
                      <div className="flex items-center justify-center rounded-lg py-2 text-sm font-bold text-text-muted transition-all z-10 relative peer-checked:text-white peer-checked:shadow-sm">Alugar</div>
                      <div className="absolute inset-0 bg-secondary rounded-lg scale-95 opacity-0 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300"></div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-3">Tipo de Imóvel</label>
                  <div className="space-y-3">
                    {['Casa', 'Apartamento', 'Terreno'].map((type, index) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-slate-50 transition-colors -mx-2">
                        <input type="checkbox" className="form-checkbox rounded border-slate-300 text-primary focus:ring-primary h-5 w-5 transition-all" />
                        <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">{type}</span>
                        <span className="ml-auto text-xs font-semibold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">{[8, 4, 2][index]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-3">Quartos</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['1+', '2+', '3+', '4+'].map((opt, i) => (
                      <label key={opt} className="cursor-pointer">
                        <input type="radio" name="beds" className="peer sr-only" defaultChecked={i === 2} />
                        <div className="flex h-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-bold text-text-muted hover:border-primary hover:text-primary peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary peer-checked:shadow-md transition-all">
                          {opt}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-3">Valor (R$)</label>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="number" placeholder="Mínimo" className="w-full rounded-lg border-gray-200 bg-slate-50 px-3 py-2.5 text-sm font-medium focus:border-primary focus:ring-primary focus:bg-white transition-all placeholder:text-slate-400" />
                    <input type="number" placeholder="Máximo" className="w-full rounded-lg border-gray-200 bg-slate-50 px-3 py-2.5 text-sm font-medium focus:border-primary focus:ring-primary focus:bg-white transition-all placeholder:text-slate-400" />
                  </div>
                </div>

                <button type="button" className="mt-4 w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:scale-[1.02] hover:shadow-primary/40 active:scale-[0.98]">
                  Aplicar Filtros
                </button>
              </form>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROPERTIES.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex items-center justify-center gap-3">
              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-text-muted transition-all hover:border-primary hover:text-primary hover:shadow-md">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors">1</button>
              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-text-muted font-bold transition-all hover:border-primary hover:text-primary hover:shadow-md">2</button>
              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-text-muted font-bold transition-all hover:border-primary hover:text-primary hover:shadow-md">3</button>
              <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-text-muted transition-all hover:border-primary hover:text-primary hover:shadow-md">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;
