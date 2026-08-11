import Header from "./Header";

const menuItems = [
  {
    name: "Combinado Premium",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
    desc: "24 peças especiais com salmão, atum e camarão."
  },
  {
    name: "Sashimi Selection",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600",
    desc: "Cortes nobres preparados com máxima precisão."
  },
  {
    name: "Uramaki Especial",
    img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600",
    desc: "Recheios exclusivos e ingredientes frescos."
  },
  {
    name: "Hot Roll Crocante",
    img: "https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=600",
    desc: "Empanado na medida certa com toque especial da casa."
  },
  {
    name: "Nigiri Premium",
    img: "https://images.unsplash.com/photo-1562158070-57ad65f6adad?w=600",
    desc: "Peças artesanais preparadas individualmente."
  },
  {
    name: "Temaki Salmão",
    img: "https://images.unsplash.com/photo-1582450871972-ab5ca7a04786?w=600",
    desc: "Salmão fresco, cream cheese e cebolinha."
  },
  {
    name: "Yakisoba Especial",
    img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600",
    desc: "Massa oriental com legumes e proteínas selecionadas."
  },
  {
    name: "Sobremesa Japonesa",
    img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600",
    desc: "Mochis e doces tradicionais para finalizar a experiência."
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#0E0E11] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px]" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#7A1F1F]/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Header title="Menu em" highlight="destaque" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:border-[#D4AF37]/30
                transition-all duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-48 w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.name}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  className="
                    w-full py-3 rounded-xl
                    border border-[#D4AF37]/40
                    text-[#F5E7A1]
                    bg-transparent
                    hover:bg-[#D4AF37]/10
                    transition duration-300
                  "
                >
                  Conhecer prato
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}