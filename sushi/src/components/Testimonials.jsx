import Header from "./header";

const testimonials = [
  {
    name: "Virginia Fonseca",
    comment:
      "Uma das melhores experiências gastronômicas que já tive. O atendimento e a qualidade dos pratos são impecáveis.",
    photo:
      "https://f.i.uol.com.br/fotografia/2024/03/21/171104982765fc8c639bc28_1711049827_3x4_md.jpg"
  },
  {
    name: "Vini Junior",
    comment:
      "Ambiente sofisticado, ingredientes frescos e uma apresentação incrível. Voltarei muitas vezes.",
    photo:
      "https://f.i.uol.com.br/fotografia/2024/07/16/17211514276696afc36aa09_1721151427_3x4_lg.jpg"
  },
  {
    name: "Luiza Sonza",
    comment:
      "O combinado premium superou todas as expectativas. Um restaurante que realmente entrega excelência.",
    photo:
      "https://s2-gshow.glbimg.com/4FCAIA-CKeDC9mWif7AwA-c3MFI=/13x0:1427x1920/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2025/u/o/KyzVVGQTiC8IoRsZZJ0w/farm003-543092971-18084765191505391-1002530590802384574-n.jpg"
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