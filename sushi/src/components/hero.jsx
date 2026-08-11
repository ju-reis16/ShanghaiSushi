export default function Hero() {
  return (
    <section
      id="home"
      className="
        pt-32 pb-24
        text-white
        relative
        overflow-hidden
        bg-[#0B0B0D]
      "
    >
      {/* Efeitos de fundo */}
      <div className="absolute -left-32 top-20 w-80 h-80 bg-[#7A1F1F]/25 rounded-full blur-[120px]" />

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px]" />

      <div className="absolute left-1/2 bottom-0 w-[400px] h-[300px] bg-[#7A1F1F]/15 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <span
            className="
              inline-block
              px-4 py-2
              rounded-full
              bg-white/10
              border border-white/20
              backdrop-blur-md
              text-sm
              mb-6
            "
          >
            ✦ Restaurante japonês premium
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            A arte do
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#D4AF37]
                via-[#F5E7A1]
                to-[#B8860B]
              "
            >
              {" "}sushi perfeito
            </span>
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-xl">
            No ShanghaiSushi, tradição japonesa e sofisticação se encontram
            para criar uma experiência gastronômica única, com ingredientes
            selecionados e apresentações impecáveis.
          </p>

          <button
            className="
              px-6 py-3
              rounded-xl
              font-semibold
              bg-transparent
              border border-[#D4AF37]/40
              text-[#F5E7A1]
              backdrop-blur-md
              hover:bg-[#D4AF37]/10
              hover:scale-105
              transition
              duration-300
            "
          >
            Conheça nosso menu
          </button>
        </div>

        {/* Imagem */}
        <div
          className="
            rounded-3xl
            overflow-hidden
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(122,31,31,0.25)]
          "
        >
          <img
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900"
            alt="Combinado de sushi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}