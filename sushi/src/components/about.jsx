import Header from "./header";

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
              src="https://images.unsplash.com/photo-1700367059983-ee8a28689971?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chef preparando sushi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Uma experiência gastronômica
              <span className="text-[#D4AF37]"> inesquecível</span>
            </h3>

            <p className="text-slate-300 leading-relaxed mb-5">
              O Shangai Sushi nasceu em 2018, a partir do sonho de uma família
apaixonada pela culinária japonesa e pela arte de receber bem. A ideia surgiu do
desejo de criar um restaurante que não oferecesse apenas bons pratos, mas também
um ambiente onde as pessoas pudessem se reunir, comemorar e criar momentos
especiais.
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
                Nossa missão é proporcionar uma experiência gastronômica completa,
unindo qualidade, sabor e um atendimento acolhedor.
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
                  Nossos valores estão presentes em cada detalhe do restaurante. Acreditamos
na importância da qualidade, do respeito, da dedicação e da
responsabilidade em tudo o que fazemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}