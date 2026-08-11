import { FaFish, FaUtensils, FaLeaf } from "react-icons/fa";
import Header from "./Header";

export default function Highlights() {
  const items = [
    {
      icon: <FaFish className="text-4xl text-[#D4AF37]" />,
      title: "Ingredientes frescos",
      desc: "Selecionamos diariamente peixes e ingredientes de alta qualidade para garantir sabor e frescor em cada prato."
    },
    {
      icon: <FaUtensils className="text-4xl text-[#D4AF37]" />,
      title: "Chefs especializados",
      desc: "Nossa equipe combina técnicas tradicionais japonesas com apresentação sofisticada e atenção aos detalhes."
    },
    {
      icon: <FaLeaf className="text-4xl text-[#D4AF37]" />,
      title: "Experiência exclusiva",
      desc: "Ambiente elegante, atendimento impecável e uma atmosfera pensada para proporcionar momentos inesquecíveis."
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <Header title="Nossos" highlight="destaques" />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                hover:-translate-y-2
                hover:border-[#D4AF37]/40
                transition-all duration-300
              "
            >
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  mb-6
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}