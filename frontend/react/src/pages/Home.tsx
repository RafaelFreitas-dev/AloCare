import React, { useState, useEffect } from 'react';
import { ServiceItem } from '../types';

const servicesData: Record<string, ServiceItem[]> = {
  manutencao: [
    { icon: '🔧', name: 'Encanador' }, { icon: '⚡', name: 'Eletricista' }, { icon: '🎨', name: 'Pintor' },
    { icon: '❄️', name: 'Instalação de Ar-Condicionado' }, { icon: '🪟', name: 'Vidraceiro' }, { icon: '🚪', name: 'Marceneiro' },
    { icon: '🔩', name: 'Serralheiro' }, { icon: '🛠️', name: 'Pedreiro' }
  ],
  limpeza: [
    { icon: '🧹', name: 'Faxineira' }, { icon: '🪣', name: 'Limpeza Pós-Obra' }, { icon: '🪟', name: 'Lavagem de Vidros' },
    { icon: '🛋️', name: 'Limpeza de Sofá' }, { icon: '🧺', name: 'Lavanderia' }, { icon: '🏢', name: 'Limpeza Comercial' }
  ],
  cuidados: [
    { icon: '👶', name: 'Babá' }, { icon: '👴', name: 'Cuidador de Idosos' }, { icon: '🐶', name: 'Pet Sitter' },
    { icon: '🐾', name: 'Dog Walker' }, { icon: '👩‍🍳', name: 'Cozinheira' }, { icon: '🧑‍🦽', name: 'Acompanhante' }
  ],
  reformas: [
    { icon: '🏗️', name: 'Reforma Geral' }, { icon: '🚿', name: 'Reforma Banheiro' }, { icon: '🍽️', name: 'Reforma Cozinha' }
  ],
  jardim: [
    { icon: '🌿', name: 'Jardinagem' }, { icon: '🏊', name: 'Limpeza de Piscina' }, { icon: '🏡', name: 'Paisagismo' }
  ]
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('manutencao');

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up-init');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, { threshold: 0.1 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [activeTab]);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#0D1117]">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#EEF3FF] to-white py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="fade-up-init opacity-0 translate-y-4 transition-all duration-700 ease-out">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#0D1117] font-[Sora]">
              Cuide da sua casa com<br />
              <span className="text-[#1B5EF7]">profissionais de confiança.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10">
              Conectamos você com os melhores profissionais verificados para qualquer serviço residencial.
            </p>
          </div>
          
          <div className="fade-up-init opacity-0 translate-y-4 transition-all duration-700 ease-out delay-150">
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-[#E5E9F2] max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-2 mb-4">
              <div className="flex items-center gap-2 pl-3 w-full border-b md:border-b-0 md:border-r border-[#E5E9F2] pb-2 md:pb-0">
                <span className="text-xl">🔍</span>
                <input type="text" placeholder="Qual serviço você precisa?" className="w-full focus:outline-none text-sm text-[#0D1117]" />
              </div>
              <div className="flex items-center gap-2 pl-3 w-full pb-2 md:pb-0">
                <span className="text-xl">📍</span>
                <input type="text" placeholder="CEP ou Bairro" className="w-full focus:outline-none text-sm text-[#0D1117]" />
              </div>
              <button className="bg-[#1B5EF7] hover:bg-[#1248d0] text-white px-6 py-3 rounded-xl font-bold w-full md:w-auto transition-colors text-sm">
                Buscar
              </button>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-[#EDFAF4] px-4 py-1.5 rounded-full border border-emerald-100">
              <span className="w-2 height-2 bg-[#22C55E] rounded-full animate-pulse"></span>
              <p className="text-xs text-emerald-800 font-medium m-0">
                <strong className="font-bold">127 profissionais</strong> disponíveis agora perto de você
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 fade-up-init opacity-0 translate-y-4 transition-all duration-700">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0D1117] font-[Sora]">Serviços para toda a sua casa</h2>
          <p className="text-[#6B7280] mt-2">Escolha a categoria e encontre o profissional perfeito</p>
        </div>

        {/* Abas de categoria via Tailwind Grid/Flex */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 fade-up-init opacity-0 translate-y-4 transition-all duration-700 delay-100">
          {[
            { id: 'manutencao', label: '🔧 Manutenção' },
            { id: 'limpeza', label: '✨ Limpeza' },
            { id: 'cuidados', label: '❤️ Cuidados' },
            { id: 'reformas', label: '🏗️ Reformas' },
            { id: 'jardim', label: '🌿 Jardim & Piscina' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all border ${
                activeTab === tab.id
                  ? 'bg-[#1B5EF7] text-white border-[#1B5EF7] shadow-md shadow-blue-500/10'
                  : 'bg-[#F4F6FA] text-[#6B7280] border-[#E5E9F2] hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 fade-up-init opacity-0 translate-y-4 transition-all duration-700 delay-200">
          {servicesData[activeTab].map((service, index) => (
            <div key={index} className="bg-white border border-[#E5E9F2] p-6 rounded-2xl text-center shadow-sm hover:shadow-md hover:border-[#1B5EF7] transition-all cursor-pointer group">
              <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">{service.icon}</div>
              <h4 className="font-semibold text-sm text-[#0D1117] font-[Sora]">{service.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* EMERGENCY SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-[#0D1117] rounded-3xl p-8 md:p-12 text-white shadow-xl fade-up-init opacity-0 translate-y-4 transition-all duration-700">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold font-[Sora] flex items-center gap-2 text-white">
              <span className="text-[#FF4D00]">⚡</span> Serviços de Emergência 24h
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-1">Problemas urgentes? Profissionais disponíveis agora para atender você</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🔑', title: 'Chaveiro 24h', desc: 'Perdeu as chaves ou ficou trancado do lado de fora?' },
              { icon: '🚿', title: 'Desentupimento', desc: 'Vazamentos graves ou encanamento totalmente entupido.' },
              { icon: '⚡', title: 'Pane Elétrica', desc: 'Apagões localizados, curtos-circuitos ou tomadas superaquecidas.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#FF4D00] transition-colors group">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold font-[Sora] text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <a href="#" className="text-[#FF4D00] group-hover:text-orange-400 text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                  Chamar agora <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}