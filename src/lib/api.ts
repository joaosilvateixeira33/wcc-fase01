// src/lib/api.ts
import { Partida } from '../types/partida';

export async function getJogosDoDia(): Promise<Partida[]> {

  await new Promise((resolve) => setTimeout(resolve, 2500));

  return [
    // ABERTURA - 11 de Junho
    { id: '1', data: '2026-06-11', hora: '16:00', timeCasa: { nome: 'México', bandeira: '🇲🇽' }, timeVisitante: { nome: 'Canadá', bandeira: '🇨🇦' }, placarCasa: 2, placarVisitante: 0, status: 'finalizado' },
    
    // FASE DE GRUPOS - Exemplos representativos
    { id: '2', data: '2026-06-13', hora: '15:00', timeCasa: { nome: 'Brasil', bandeira: '🇧🇷' }, timeVisitante: { nome: 'Coreia do Sul', bandeira: '🇰🇷' }, placarCasa: 3, placarVisitante: 1, status: 'finalizado' },
    { id: '3', data: '2026-06-15', hora: '18:00', timeCasa: { nome: 'Alemanha', bandeira: '🇩🇪' }, timeVisitante: { nome: 'Japão', bandeira: '🇯🇵' }, placarCasa: 1, placarVisitante: 1, status: 'finalizado' },
    { id: '4', data: '2026-06-17', hora: '14:00', timeCasa: { nome: 'Argentina', bandeira: '🇦🇷' }, timeVisitante: { nome: 'França', bandeira: '🇫🇷' }, placarCasa: 2, placarVisitante: 2, status: 'finalizado' },
    { id: '5', data: '2026-06-18', hora: '20:00', timeCasa: { nome: 'Espanha', bandeira: '🇪🇸' }, timeVisitante: { nome: 'Inglaterra', bandeira: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }, placarCasa: 0, placarVisitante: 1, status: 'finalizado' },

    // JOGOS DE HOJE - 19 de Junho
    { 
      id: '6', 
      data: '2026-06-19', 
      hora: '15:00', 
      timeCasa: { nome: 'Brasil', bandeira: '🇧🇷' }, 
      timeVisitante: { nome: 'México', bandeira: '🇲🇽' }, 
      placarCasa: 0, 
      placarVisitante: 0, 
      status: 'previsto' 
    },
    { 
      id: '7', 
      data: '2026-06-19', 
      hora: '18:00', 
      timeCasa: { nome: 'Canadá', bandeira: '🇨🇦' }, 
      timeVisitante: { nome: 'EUA', bandeira: '🇺🇸' }, 
      placarCasa: 0, 
      placarVisitante: 0, 
      status: 'previsto' 
    },
    { 
      id: '8', 
      data: '2026-06-19', 
      hora: '21:00', 
      timeCasa: { nome: 'Espanha', bandeira: '🇪🇸' }, 
      timeVisitante: { nome: 'Inglaterra', bandeira: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }, 
      placarCasa: 0, 
      placarVisitante: 0, 
      status: 'previsto' 
    }
  ];
}