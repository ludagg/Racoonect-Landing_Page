export default function CTA() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-primary-light/30">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text-main lg:text-4xl mb-6">Prêt à valoriser vos ressources ?</h2>
        <p className="text-lg text-text-main/70 mb-10 max-w-2xl mx-auto">
          Rejoignez plus de 500 exploitations agricoles qui font confiance à RACOONS pour leur transition écologique et économique.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-background-dark transition-all hover:bg-primary-dark hover:scale-105 shadow-lg shadow-primary/20 cursor-pointer">
            Demander une démo
          </button>
          <button className="flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-base font-bold text-text-main transition-all hover:bg-gray-50 cursor-pointer">
            Contacter un expert
          </button>
        </div>
      </div>
    </section>
  );
}
