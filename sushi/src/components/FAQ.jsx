import { useState } from "react";
import Header from "./Header";

const questions = [
  {
    question: "É necessário fazer reserva?",
    answer:
      "Recomendamos fazer reserva, principalmente nos finais de semana e datas comemorativas, para garantir sua mesa."
  },
  {
    question: "Os ingredientes são frescos?",
    answer:
      "Sim. Trabalhamos diariamente com ingredientes frescos e selecionados para manter o padrão de qualidade do ShanghaiSushi."
  },
  {
    question: "O restaurante possui opções vegetarianas?",
    answer:
      "Sim, contamos com uma seleção de sushis, uramakis e pratos quentes preparados especialmente para clientes vegetarianos."
  },
  {
    question: "Vocês realizam eventos e comemorações?",
    answer:
      "Sim. O ShanghaiSushi oferece opções para aniversários, encontros corporativos e pequenas celebrações."
  },
  {
    question: "Qual o horário de funcionamento?",
    answer:
      "Funcionamos de terça a domingo, das 18h às 23h."
  },
  {
    question: "É possível personalizar um combinado?",
    answer:
      "Sim. Nossa equipe pode montar combinados personalizados de acordo com suas preferências e restrições alimentares."
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