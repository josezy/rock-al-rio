import Layout from '../components/Layout';

export default function ReportePage() {
  return (
    <Layout>
      <div className="w-full flex flex-col h-screen pt-2">
        <iframe
          src="https://hackmd.io/@yojosebenitez/rock-al-rio"
          width="100%"
          height="100%"
          title="Reporte Rock al Río"
          className="border-0"
        >
          Cargando reporte...
        </iframe>
      </div>
    </Layout>
  );
}