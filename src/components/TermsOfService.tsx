import { Scroll, ArrowLeft, Heart } from 'lucide-react'

const TermsOfService = () => {
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
            <Scroll className="h-6 w-6" />
          </div>

          <h1 className="mb-8 text-center text-3xl font-bold">Conditions d'Utilisation / Terms of Service</h1>

          <div className="space-y-8 text-gray-200">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">1. Service</h2>
              <div className="space-y-2">
                <p>🇫🇷 Lucky-chan est un bot Discord gratuit développé par Phearion Network pour faciliter l'accès aux ressources étudiantes partagées.</p>
                <p>🇬🇧 Lucky-chan is a free Discord bot developed by Phearion Network to facilitate access to shared student resources.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">2. Contributions & Soutien / Support</h2>
              <div className="space-y-2">
                <p>🇫🇷 Nous n'avons pas de microtransactions. Le service est entièrement gratuit. Les dons via PayPal sont possibles pour soutenir le projet.</p>
                <p>🇬🇧 We have no microtransactions. The service is completely free. Donations via PayPal are possible to support the project.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">3. Ressources / Resources</h2>
              <div className="space-y-2">
                <p>🇫🇷 Les ressources proviennent d'étudiants volontaires. Vous devez :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Respecter les droits d'auteur</li>
                  <li>Ne pas redistribuer les ressources</li>
                  <li>Utiliser les ressources pour votre apprentissage personnel</li>
                </ul>

                <p className="mt-4">🇬🇧 Resources come from volunteer students. You must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Respect copyright</li>
                  <li>Not redistribute the resources</li>
                  <li>Use resources for your personal learning</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">4. Vérification / Verification</h2>
              <div className="space-y-2">
                <p>🇫🇷 Une vérification annuelle est requise pour accéder aux ressources. Cela nous permet de maintenir la sécurité du service.</p>
                <p>🇬🇧 Annual verification is required to access resources. This allows us to maintain service security.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">5. Responsabilités / Responsibilities</h2>
              <div className="space-y-2">
                <p>🇫🇷 En utilisant Lucky-chan, vous acceptez de :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ne pas tenter d'accéder aux ressources sans autorisation</li>
                  <li>Ne pas utiliser le service de manière abusive</li>
                  <li>Signaler tout contenu inapproprié</li>
                  <li>Accepter que nous pouvons modifier les Conditions d'Utilisation et la Politique de Confidentialité à tout moment</li>
                </ul>

                <p className="mt-4">🇬🇧 By using Lucky-chan, you agree to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Not attempt to access resources without authorization</li>
                  <li>Not abuse the service</li>
                  <li>Report any inappropriate content</li>
                  <li>Accept that we may modify the Terms of Service and Privacy Policy at any time</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-purple-300">Contact</h2>
              <div className="space-y-2">
                <p>🇫🇷 Pour toute question ou problème :</p>
                <p>🇬🇧 For any questions or issues:</p>
                <p><a href="mailto:hestia@phearion.fr" className="text-purple-400 hover:text-purple-300">hestia@phearion.fr</a></p>
                <p className="text-sm mt-4">
                  <a href="https://github.com/Phearion" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">
                    Phearion Network on GitHub
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;