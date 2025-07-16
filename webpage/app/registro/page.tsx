import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Registro() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Registro Festival Internacional Rock al Río
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-6 my-8">
              <p className="text-gray-600 text-center mb-6">
                ¡Forma parte de la historia! Regístrate para la próxima edición del Festival Internacional Rock al Río 2025.
              </p>
              
              <div className="w-full h-screen min-h-[800px]">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc2FyC9W82fOBPB6xZGFBr5SDBolZPNZmnVeEFHejoOrkVxUQ/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Registro Festival Rock al Río"
                  className="border-0 rounded-lg"
                >
                  Cargando...
                </iframe>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}