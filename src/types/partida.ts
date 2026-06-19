export interface Partida {
  id: string;
  data: string;
  hora: string;
  timeCasa: { nome: string; bandeira: string };
  timeVisitante: { nome: string; bandeira: string };
  placarCasa: number | null;
  placarVisitante: number | null;
  status: 'previsto' | 'ao-vivo' | 'finalizado';
}