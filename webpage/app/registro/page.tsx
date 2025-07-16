import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Registro - Festival Internacional Rock al Río 2025",
  description: "Inscríbete al Festival Internacional Rock al Río 2025. Forma parte de la historia del festival de rock más grande del oriente antioqueño. 15 de noviembre, 2025 en Rionegro, Antioquia.",
  keywords: [
    "registro Rock al Río",
    "inscripción festival",
    "Rock al Río 2025",
    "festival rock Colombia",
    "Rionegro Antioquia",
    "noviembre 2025",
    "Alberto Grisales",
    "registro festival rock"
  ],
  openGraph: {
    title: "Registro - Festival Internacional Rock al Río 2025",
    description: "Inscríbete al Festival Internacional Rock al Río 2025. 15 de noviembre en Rionegro, Antioquia.",
    url: 'https://rockalriocolombia.org/registro',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Registro Festival Internacional Rock al Río 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Registro - Festival Internacional Rock al Río 2025",
    description: "Inscríbete al festival de rock más grande del oriente antioqueño. 15 de noviembre, 2025.",
    images: ['/banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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