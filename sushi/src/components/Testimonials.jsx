import Header from "./Header";

const testimonials = [
  {
    name: "Mariana Costa",
    comment:
      "Uma das melhores experiências gastronômicas que já tive. O atendimento e a qualidade dos pratos são impecáveis.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
  },
  {
    name: "Rafael Mendes",
    comment:
      "Ambiente sofisticado, ingredientes frescos e uma apresentação incrível. Voltarei muitas vezes.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
  },
  {
    name: "Fernanda Oliveira",
    comment:
      "O combinado premium superou todas as expectativas. Um restaurante que realmente entrega excelência.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0E0E11]">
      <div className="max-w-7xl mx-auto px-6">
        <Header title="O que nossos" highlight="clientes dizem" />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
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
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="text-[#D4AF37] text-lg mb-3">
                  ★★★★★
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.name}
                </h3>

                <p className="text-slate-300 leading-relaxed italic">
                  “{item.comment}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}