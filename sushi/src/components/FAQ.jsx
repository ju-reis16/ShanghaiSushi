import { useState } from "react";
import Header from "./header";

const questions = [
  {
    question: "É necessário fazer reserva?",
    answer:
      "Recomendamos fazer reserva, principalmente nos finais de semana e datas comemorativas, para garantir sua mesa."
  },
  {
    question: "Aniversariante paga?",
    answer:
      "Sim! O aniversariante tem direito a uma cortesia especial. Consulte nossa equipe para mais detalhes sobre as condições e benefícios disponíveis na data da comemoração."
  },
  {
    question: "Vocês possuem opções para quem não come peixe cru?",
    answer:
      "Sim, oferecemos uma variedade de pratos que não contêm peixe cru, incluindo opções vegetarianas e de outros ingredientes."
  },
  {
    question: "Vocês realizam eventos e comemorações?",
    answer:
      "Sim. O ShanghaiSushi oferece opções para aniversários, encontros corporativos e pequenas celebrações."
  },
  {
    question: "O rodízio pode ser dividido entre duas pessoas?",
    answer:
      "Não, O rodízio é individual e cada pessoa deve solicitar sua própria opção de rodízio.."
  },
  {
    question: "Posso fazer alterações em algum prato?",
    answer:
      "Dependendo do prato, algumas alterações podem ser possíveis. Consulte nossa equipe no momento do pedido."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0E0E11]">
      <div className="max-w-4xl mx-auto px-6">
        <Header title="Perguntas" highlight="frequentes" />

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                overflow-hidden
              "
            >
              <button
                onClick={() => toggle(index)}
                className="
                  w-full
                  flex justify-between items-center
                  p-6
                  text-left
                  text-white
                  font-semibold
                  hover:bg-white/5
                  transition
                "
              >
                <span>{item.question}</span>

                <span className="text-[#D4AF37] text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}