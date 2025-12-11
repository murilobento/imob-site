import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProperties = PROPERTIES.filter(p => p.isFeatured).slice(0, 3);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search');
  };

  const scrollToProperties = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('imoveis');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 flex min-h-[90vh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20 z-10"></div>
          <img 
            alt="Interior de sala de estar de luxo" 
            className="h-full w-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMzMw2eKmbC9Tv4ulUPFnNFUXHBg0dca7G_91KmrTPxba-z5YCH2WSAasbWUZu_uyFBKD95AlwpMzn2hJDhhh67TLF0JAq24Hv9ao_ZhOSAxLkjhIjPLS4RRLuEik3lRW7nOB93dzrcHYUYOjjw2PUkpHInfNAMWKVmgTtwl4HTBPUQ_GprkeMVd18fnJo5LwJPISl-CprxNtBepv1o77cnQ_kCoo9_xUvD_DU4l7QQFRK6anHmSJKdBDfu26ObbLUz1zP-xunGps" 
          />
        </div>
        
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-8 pt-20 pb-48 flex flex-col md:flex-row items-center">
          <div className="flex flex-col max-w-3xl gap-8">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-slate-900/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="tracking-wide uppercase">Novos Lançamentos em Regente Feijó</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1] font-display">
              O imóvel dos seus sonhos, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">com a exclusividade</span> que você merece.
            </h1>
            
            <p className="text-lg leading-relaxed text-slate-300 max-w-2xl font-light">
              Curadoria especializada de imóveis de alto padrão. Segurança, transparência e atendimento premium para você encontrar seu novo lar em Regente Feijó.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#imoveis" onClick={scrollToProperties} className="flex min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-primary transition-all hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5">
                Ver Imóveis
              </a>
              <a href="#" className="flex min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white">
                Fale com Consultor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Floating */}
      <section className="relative z-30 -mt-24 px-6 lg:px-8 pb-12">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 md:p-10 shadow-2xl shadow-slate-900/10 border border-gray-100">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <h3 className="text-xl font-bold text-primary font-display flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">manage_search</span>
              Encontre seu imóvel ideal
            </h3>
          </div>
          <form className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:gap-8" onSubmit={handleSearch}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Finalidade</label>
              <div className="relative">
                <select className="form-select w-full rounded-lg border-gray-200 bg-background-subtle pl-4 pr-10 py-3.5 text-sm font-medium text-text-main focus:border-primary focus:ring-primary/20 transition-shadow">
                  <option>Comprar</option>
                  <option>Alugar</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Tipo</label>
              <select className="form-select w-full rounded-lg border-gray-200 bg-background-subtle px-4 py-3.5 text-sm font-medium text-text-main focus:border-primary focus:ring-primary/20 transition-shadow">
                <option>Todos os tipos</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Terreno</option>
                <option>Comercial</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Cidade</label>
              <select className="form-select w-full rounded-lg border-gray-200 bg-background-subtle px-4 py-3.5 text-sm font-medium text-text-main focus:border-primary focus:ring-primary/20 transition-shadow">
                <option>Regente Feijó</option>
                <option>Presidente Prudente</option>
                <option>Martinópolis</option>
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" className="flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-primary text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20">
                <span className="material-symbols-outlined text-[20px]">search</span>
                <span className="font-bold text-sm">Buscar Agora</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Differentials */}
      <section id="sobre" className="py-24 bg-background-subtle">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center md:mb-24">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80">Nossos Diferenciais</span>
            <h2 className="mt-3 text-3xl font-extrabold text-text-main sm:text-4xl lg:text-5xl font-display">Excelência em cada detalhe</h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg font-light">
              Mais do que uma imobiliária, somos parceiros na realização do seu sonho. Transparência e segurança são nossos pilares.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl">verified_user</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-text-main font-display">Segurança Jurídica</h3>
              <p className="text-text-muted leading-relaxed">Assessoria completa em toda documentação para garantir um negócio seguro, ético e transparente para todas as partes.</p>
            </div>
            {/* Feature 2 */}
            <div className="group rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl">diamond</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-text-main font-display">Imóveis Exclusivos</h3>
              <p className="text-text-muted leading-relaxed">Uma seleção criteriosa das melhores oportunidades de alto padrão da região, pensada para quem não abre mão de qualidade.</p>
            </div>
            {/* Feature 3 */}
            <div className="group rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl">headset_mic</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-text-main font-display">Atendimento Premium</h3>
              <p className="text-text-muted leading-relaxed">Suporte dedicado e personalizado via WhatsApp e presencialmente em nosso escritório, com corretores especialistas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="imoveis" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80">Oportunidades</span>
              <h2 className="mt-2 text-3xl font-extrabold text-text-main sm:text-4xl font-display">Destaques Recentes</h2>
            </div>
            <Link to="/search" className="group flex items-center gap-2 font-bold text-sm text-primary hover:text-primary-dark transition-colors border-b border-transparent hover:border-primary pb-0.5">
              Ver todos os imóveis
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="relative py-24 bg-primary text-white overflow-hidden">
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        <div className="absolute top-10 right-10 p-12 opacity-5">
          <span className="material-symbols-outlined text-[300px]">format_quote</span>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl font-display">O que dizem nossos clientes</h2>
            <div className="mt-4 h-1 w-20 bg-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-xl fill-current">star</span>)}
              </div>
              <p className="mb-8 text-blue-50 italic leading-relaxed text-lg font-light">"A equipe da JR Imóveis foi excepcional. Encontraram a casa perfeita para minha família em Regente Feijó em tempo recorde. Recomendo muito!"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img alt="Carlos Mendes" className="h-14 w-14 rounded-full object-cover border-2 border-blue-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBia6bONMagxDpYDZuLrF5SOI8TWZWF_fybVhCwgx1Luz1Il053Gjgi5Rql89rB8SxkWqAbqlYYPhvzp8j0C0ldOsHy_IeDv-eEJpnwVRXb2-CI1crnN2KhzBL13qprds1tYeM9s5OL9P92JkuWAUK_GPy7mDbEiGJwMusa20Zxd5sp9PW1rOTREcNOjN5xXNX1CgDof74WuONoxHSIzbIMcM5ZGwkvn_YVVD8sy6xuDDhDFOqNvs-L4IygCMOZ-0ZHMDIZA0R1otw"/>
                <div>
                  <h4 className="font-bold text-white text-lg">Carlos Mendes</h4>
                  <span className="text-sm text-blue-200">Comprou Casa em 2023</span>
                </div>
              </div>
            </div>
             {/* Testimonial 2 */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-xl fill-current">star</span>)}
              </div>
              <p className="mb-8 text-blue-50 italic leading-relaxed text-lg font-light">"Profissionalismo do início ao fim. Me ajudaram com toda a burocracia do financiamento. O atendimento personalizado faz toda a diferença."</p>
              <div className="flex items-center gap-4 mt-auto">
                <img alt="Ana Paula Silva" className="h-14 w-14 rounded-full object-cover border-2 border-blue-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXIHDPJVnfT6HLR_ICUmbIxJ3RgnldgTjDYmrIivl5Ie9KM8VgAp7rEwmOihA5dwnhtaGWj7VkZmHf5_Bs2tKjWspWp-sCRW2eqZFNmItkdtThIpYas0MPtzbmo1hfy_Il8tPQl7RjwlOYTLxChUDkNjyG0foZ2Eb3l4mKJqGsYX7zLHopZVMhRHt_CTVUXWHjivOT9mKV793zcVQENMtwrY--HdZUAmbZsecfk4oqG7ENcMGU7HmkZSyaHDInv6M3M2cp_zBJh4"/>
                <div>
                  <h4 className="font-bold text-white text-lg">Ana Paula Silva</h4>
                  <span className="text-sm text-blue-200">Comprou Apartamento</span>
                </div>
              </div>
            </div>
             {/* Testimonial 3 */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex gap-1 text-yellow-400 mb-5">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-xl fill-current">star</span>)}
              </div>
              <p className="mb-8 text-blue-50 italic leading-relaxed text-lg font-light">"Excelente opção para quem quer investir em imóveis. A curadoria da JR é impecável, só imóveis de qualidade."</p>
              <div className="flex items-center gap-4 mt-auto">
                <img alt="Roberto Campos" className="h-14 w-14 rounded-full object-cover border-2 border-blue-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDseyG3B4DFB0hoiaE3kwKrcChQnFSsufyKB1EHFFjjIUJ13tribUIHU2H0m4thY_8SUhC1uuyP3J6yVDCEXdAEAUEQXEiLQzaoKPw-ob2sjh-cCGPi8hXj5IPrVyJ0Tg4alTcb5dBqNKtGl0GuzaRjbjCpwJZe5PlPggyYsPUObQvSgojUoUWGP3RFrVVWnHCwqFhXSBCEjGkDYzLrOHFTySPgZ4SpVCOc4BKNWFZQ0MtaNN9G_PF6BMCpysg7kYSPEQwImqGhFAE"/>
                <div>
                  <h4 className="font-bold text-white text-lg">Roberto Campos</h4>
                  <span className="text-sm text-blue-200">Investidor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-main sm:text-4xl font-display">Pronto para encontrar seu novo lar?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text-muted font-light">
            Entre em contato agora mesmo e agende uma visita com um de nossos corretores especialistas.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#" className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-dark hover:-translate-y-1">
              <span className="material-symbols-outlined">chat</span>
              Fale no WhatsApp
            </a>
            <a href="#" className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 py-4 text-base font-bold text-text-main transition-colors hover:border-primary hover:text-primary hover:bg-blue-50/50">
              <span className="material-symbols-outlined">mail</span>
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;