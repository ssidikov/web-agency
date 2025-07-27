
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mentions Légales | Sidikoff - Agence Web',
    description: 'Mentions légales et informations légales de Sidikoff, agence web spécialisée dans la création de sites internet et applications.',
    robots: 'noindex, nofollow'
  }
}

export default async function MentionsLegalesPage() {

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Informations légales</h2>
            <p>
              <strong>Dénomination sociale :</strong> Sidikoff<br/>
              <strong>Forme juridique :</strong> Entreprise individuelle<br/>
              <strong>Adresse :</strong> France<br/>
              <strong>Email :</strong> contact@sidikoff.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Hébergeur</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br/>
              340 S Lemon Ave #4133<br/>
              Walnut, CA 91789<br/>
              États-Unis
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Protection des données personnelles</h2>
            <p>
              Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}