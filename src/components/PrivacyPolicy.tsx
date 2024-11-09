import { Shield, ArrowLeft, Heart } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <a
          href="#/"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-800/30 px-4 py-2 text-sm backdrop-blur-sm transition-all hover:bg-purple-700/50"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour / Back
        </a>

        <div className="mb-8 relative">
          <img
            src="/privacy.png"
            alt="Lucky-chan"
            className="mx-auto h-64 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
            <div className="animate-bounce rounded-full bg-purple-600/80 p-2 backdrop-blur-sm">
              <Heart className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl rounded-2xl border border-purple-500/20 bg-gray-800/40 p-8 backdrop-blur-xl">
          <div className="absolute -top-4 left-4 rounded-full bg-purple-600 p-2">
            <Shield className="h-6 w-6" />
          </div>

          <h1 className="mb-8 text-center text-3xl font-bold">Politique de Confidentialité / Privacy Policy</h1>

          <div className="space-y-8 text-gray-200">
            <section className="space-y-4">
              <p className="text-lg">🇫🇷 Lucky-chan, développé par Phearion Network, s'engage à protéger votre vie privée et vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).</p>
              <p className="text-lg">🇬🇧 Lucky-chan, developed by Phearion Network, is committed to protecting your privacy and personal data in compliance with the General Data Protection Regulation (GDPR).</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">Base Légale / Legal Basis (RGPD/GDPR)</h2>
              <div className="space-y-2">
                <p>🇫🇷 Nous traitons vos données sur la base de :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Votre consentement explicite</li>
                  <li>La nécessité d'exécuter notre service</li>
                  <li>Notre intérêt légitime à sécuriser le service</li>
                </ul>

                <p className="mt-4">🇬🇧 We process your data based on:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your explicit consent</li>
                  <li>The necessity to provide our service</li>
                  <li>Our legitimate interest in securing the service</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">Données Collectées / Collected Data</h2>
              <div className="space-y-2">
                <p>🇫🇷 Nous collectons uniquement :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Votre adresse e-mail (pour la vérification)</li>
                  <li>Votre identifiant Discord</li>
                </ul>

                <p className="mt-4">🇬🇧 We only collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your email address (for verification)</li>
                  <li>Your Discord ID</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">Vos Droits RGPD / Your GDPR Rights</h2>
              <div className="space-y-2">
                <p>🇫🇷 Vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement ('droit à l'oubli')</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition</li>
                </ul>

                <p className="mt-4">🇬🇧 You have the following rights:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Right to access your data</li>
                  <li>Right to rectification</li>
                  <li>Right to erasure ('right to be forgotten')</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">Conservation des Données / Data Retention</h2>
              <div className="space-y-2">
                <p>🇫🇷 Les adresses e-mail sont automatiquement supprimées chaque année, conformément au principe de minimisation des données du RGPD. Une nouvelle vérification sera nécessaire pour continuer à utiliser les ressources.</p>
                <p>🇬🇧 Email addresses are automatically deleted every year, in compliance with the GDPR data minimization principle. A new verification will be required to continue using the resources.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">Ressources Partagées / Shared Resources</h2>
              <div className="space-y-2">
                <p>🇫🇷 Les ressources disponibles sont partagées volontairement par d'autres étudiants. Nous vérifions qu'aucune information sensible ou donnée personnelle n'est présente dans ces documents, conformément au RGPD.</p>
                <p>🇬🇧 Available resources are voluntarily shared by other students. We verify that no sensitive information or personal data is present in these documents, in compliance with GDPR.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">Sécurité / Security</h2>
              <div className="space-y-2">
                <p>🇫🇷 Vos données sont stockées de manière sécurisée dans l'UE et ne sont jamais partagées avec des tiers. Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données.</p>
                <p>🇬🇧 Your data is stored securely in the EU and is never shared with third parties. We implement appropriate technical and organizational measures to protect your data.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">Contact & DPO</h2>
              <div className="space-y-2">
                <p>🇫🇷 Pour toute question concernant vos données ou pour exercer vos droits RGPD :</p>
                <p>🇬🇧 For any questions about your data or to exercise your GDPR rights:</p>
                <p><a href="mailto:hestia@phearion.fr" className="text-purple-400 hover:text-purple-300">hestia@phearion.fr</a></p>
                <p className="text-sm mt-4">
                  <a href="https://github.com/Phearion" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">
                    Phearion Network on GitHub
                  </a>
                </p>
                <p className="text-sm mt-2">
                  🇫🇷 Vous avez également le droit d'introduire une réclamation auprès de la CNIL.
                </p>
                <p className="text-sm">
                  🇬🇧 You also have the right to lodge a complaint with the CNIL.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;