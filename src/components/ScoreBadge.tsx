interface ScoreBadgeProps {
  score: string;
  status: 'previsto' | 'ao-vivo' | 'finalizado';
}

export default function ScoreBadge({ score, status }: ScoreBadgeProps) {
  const statusStyles = {
    'previsto': 'bg-gray-400',
    'ao-vivo': 'bg-red-600 animate-pulse', 
    'finalizado': 'bg-gray-800'
  };

  return (
    <div 
      className={`
        ${statusStyles[status]} 
        text-white 
        px-3 
        py-1 
        font-mono 
        text-sm 
        font-bold 
        uppercase 
        tracking-tighter
      `}
    >
      {score}
    </div>
  );
}