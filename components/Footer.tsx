import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-background-subtle pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-2xl">apartment</span>
              </div>
              <span className="text-xl font-bold text-primary font-display">JR Imóveis</span>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Sua imobiliária de confiança em Regente Feijó. Comprometidos em realizar sonhos com transparência e ética.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm text-text-muted transition-all hover:bg-primary hover:text-white hover:-translate-y-1">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm text-text-muted transition-all hover:bg-primary hover:text-white hover:-translate-y-1">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main font-display">Menu Rápido</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li><Link to="/" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Início</Link></li>
              <li><Link to="/search" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Imóveis para Comprar</Link></li>
              <li><Link to="/search" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Imóveis para Alugar</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Cadastre seu Imóvel</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main font-display">Contato</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-muted">
              <li className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">location_on</span>
                <span>Av. Regente Feijó, 1234 - Centro<br/>Regente Feijó - SP</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">call</span>
                <span>(18) 3222-0000</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">mail</span>
                <span>contato@jrimoveis.com.br</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">badge</span>
                <span>CRECI: 12345-J</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main font-display">Horário de Atendimento</h4>
            <ul className="flex flex-col gap-3 text-sm text-text-muted bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span>Seg - Sex</span>
                <span className="font-bold text-primary">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span>Sábado</span>
                <span className="font-bold text-primary">09:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="font-medium text-red-500">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted gap-4">
          <p>© 2024 JR Imóveis. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
