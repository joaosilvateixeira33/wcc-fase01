'use client'; // 1. Adicione isso no topo

import { useState, useEffect } from 'react';
import { getJogosDoDia } from '../lib/api';
import CopaLoading from '../components/CopaLoading';
import ScoreBadge from '../components/ScoreBadge';

export default function Home() {
  const [jogos, setJogos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Gerencie o carregamento manualmente aqui
  useEffect(() => {
    async function init() {
      const data = await getJogosDoDia();
      // O setTimeout aqui garante que o usuário veja a animação por 3 segundos
      setTimeout(() => {
        setJogos(data);
        setIsLoading(false);
      }, 3000);
    }
    init();
  }, []);

  // 3. Se estiver carregando, exibe o componente de animação
  if (isLoading) return <CopaLoading />;

  const aoVivo = jogos.filter(j => j.status === 'ao-vivo');
  const previstos = jogos.filter(j => j.status === 'previsto');
  const historico = jogos.filter(j => j.status === 'finalizado');

  const GameCard = ({ jogo }: { jogo: any }) => (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 hover:border-yellow-400/50 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500">{jogo.status}</span>
            {jogo.status === 'previsto' && <span className="text-[10px] text-white font-mono mt-1">INÍCIO: {jogo.hora}</span>}
        </div>
        <span className="text-[10px] text-gray-400 font-mono">{jogo.data}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="text-center"><span className="block text-3xl">{jogo.timeCasa.bandeira}</span><span className="font-bold text-sm uppercase">{jogo.timeCasa.nome}</span></div>
        <div className="text-gray-500 font-black italic">VS</div>
        <div className="text-center"><span className="block text-3xl">{jogo.timeVisitante.bandeira}</span><span className="font-bold text-sm uppercase">{jogo.timeVisitante.nome}</span></div>
      </div>
      <div className="mt-4 flex justify-center"><ScoreBadge score={`${jogo.placarCasa} - ${jogo.placarVisitante}`} status={jogo.status} /></div>
    </div>
  );

  return (
    <main className="px-6 py-16 md:px-12 max-w-7xl mx-auto">
      <header className="mb-16 border-l-4 border-yellow-400 pl-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">FIFA World Cup <span className="text-yellow-400">2026</span></h1>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-black text-white uppercase mb-8">Agenda de Hoje - 19/06</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aoVivo.map(j => <GameCard key={j.id} jogo={j} />)}
          {previstos.map(j => <GameCard key={j.id} jogo={j} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-black text-gray-500 uppercase mb-8">Histórico Recente</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {historico.map(j => <GameCard key={j.id} jogo={j} />)}
        </div>
      </section>
    </main>
  );
}