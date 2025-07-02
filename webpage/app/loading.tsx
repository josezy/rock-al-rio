export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-r-4 border-l-4 border-transparent border-r-accent animate-[spin_1.5s_linear_infinite]"></div>
      </div>
      <p className="ml-4 text-xl font-medium">Cargando...</p>
    </div>
  );
}
