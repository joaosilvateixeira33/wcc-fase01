import CopaLoading from '../components/CopaLoading';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950">
      <CopaLoading />
    </div>
  );
}