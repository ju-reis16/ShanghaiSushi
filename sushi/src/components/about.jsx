import Header from "./Header";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0E0E11]">
      <div className="max-w-7xl mx-auto px-6">
        <Header title="Sobre o" highlight="ShanghaiSushi" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div
            className="
              rounded-3xl
              overflow-hidden
              border border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=900"
              alt="Chef preparando sushi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Tradição, elegância e sabor em cada detalhe
            </h3>

            <p className="text-slate-300 leading-relaxed mb-5">
              O ShanghaiSushi nasceu da paixão pela culinária japonesa e pelo
              compromisso com a excelência. Cada prato é preparado com
              ingredientes frescos, técnicas tradicionais e uma apresentação
              cuidadosamente elaborada.
            </p>

            <p className="text-slate-300 leading-relaxed mb-8">
              Nosso objetivo é proporcionar uma experiência gastronômica
              sofisticada, onde o ambiente, o atendimento e a qualidade dos
              pratos transformam cada visita em um momento especial.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div
                className="
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-5
                "
              >
                <h4 className="text-[#D4AF37] font-semibold mb-2">Missão</h4>
                <p className="text-slate-300 text-sm">
                  Oferecer uma experiência autêntica da culinária japonesa.
                </p>
              </div>

              <div
                className="
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-5
                "
              >
                <h4 className="text-[#D4AF37] font-semibold mb-2">Visão</h4>
                <p className="text-slate-300 text-sm">
                  Ser referência em gastronomia japonesa premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}