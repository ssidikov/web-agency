
import Link from 'next/link'



export default function MentionsLegalesPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className='bg-white rounded-lg shadow p-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-8'>Mentions légales</h1>

          <div className='space-y-6 text-gray-700'>
            <section>
              <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                Informations de l&apos;entreprise
              </h2>
              <p>
                <strong>Nom de l&apos;entreprise :</strong> Web Agency
              </p>
              <p>
                <strong>Type d&apos;entreprise :</strong> SAS
              </p>
              <p>
                <strong>SIREN :</strong> 000 000 000
              </p>
              <p>
                <strong>Adresse :</strong> 123 Main St, Paris
              </p>
              <p>
                <strong>Téléphone :</strong> +33 1 23 45 67 89
              </p>
              <p>
                <strong>Email :</strong> info@webagency.com
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900 mb-3'>Directeur de publication</h2>
              <p>John Doe</p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900 mb-3'>Hébergement</h2>
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
              <p>
                <strong>Site web :</strong> vercel.com
              </p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900 mb-3'>Propriété intellectuelle</h2>
              <p>Tout le contenu est protégé par le droit d&apos;auteur.</p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900 mb-3'>Protection des données</h2>
              <p>Vos données sont en sécurité avec nous.</p>
            </section>

            <section>
              <h2 className='text-xl font-semibold text-gray-900 mb-3'>Cookies</h2>
              <p>Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur.</p>
            </section>
          </div>

          <div className='mt-8 pt-6 border-t'>
            <Link href='/' className='text-blue-600 hover:text-blue-800 transition-colors'>
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
