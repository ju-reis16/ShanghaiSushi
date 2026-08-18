export default function CTA() {
  return (
    
    <section className="py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            relative
            rounded-[2rem]
            overflow-hidden
            border border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >
          <img
            src="https://images.unsplash.com/photo-1627462133149-167e7e9a91b7?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Experiência gastronômica"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              opacity-50
            "
          />

          <div className="absolute inset-0 bg-black/55" />

       
          <div className="relative px-8 md:px-16 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Viva uma experiência
              <span className="text-[#D4AF37]"> gastronômica única</span>
            </h2>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Descubra o equilíbrio perfeito entre tradição japonesa,
              ingredientes selecionados e uma apresentação impecável em
              cada prato servido.
            </p>

            <button
              className="
                px-8 py-4
                rounded-xl
                border border-[#D4AF37]/40
                text-[#F5E7A1]
                bg-transparent
                backdrop-blur-md
                hover:bg-[#D4AF37]/10
                hover:scale-105
                transition duration-300
              "
            >
              Reservar uma experiência
              <section id="reserva" className="scroll-mt-20"></section>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}