import Header from "./Header";

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <Header title="Entre em" highlight="contato" />

        <div className="grid lg:grid-cols-2 gap-10">
      
          <div
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Faça sua reserva
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Seu nome"
                className="
                  w-full p-4 rounded-xl
                  bg-[#15171C]
                  border border-white/10
                  text-white
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:border-[#D4AF37]/50
                "
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                className="
                  w-full p-4 rounded-xl
                  bg-[#15171C]
                  border border-white/10
                  text-white
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:border-[#D4AF37]/50
                "
              />

              <input
                type="text"
                placeholder="Assunto"
                className="
                  w-full p-4 rounded-xl
                  bg-[#15171C]
                  border border-white/10
                  text-white
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:border-[#D4AF37]/50
                "
              />

              <textarea
                rows="5"
                placeholder="Sua mensagem"
                className="
                  w-full p-4 rounded-xl
                  bg-[#15171C]
                  border border-white/10
                  text-white
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:border-[#D4AF37]/50
                "
              />

              <button
                type="submit"
                className="
                  w-full py-3 rounded-xl
                  border border-[#D4AF37]/40
                  text-[#F5E7A1]
                  bg-transparent
                  hover:bg-[#D4AF37]/10
                  transition duration-300
                "
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Informações */}
          <div className="flex flex-col gap-6">
            <div
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                ShanghaiSushi
              </h3>

              <div className="space-y-3 text-slate-300">
                <p>📍 Rua Sakura, 128 – São Paulo, SP</p>
                <p>📞(11) 98472-3156</p>
                <p>✉ shangaisushi@gmail.com</p>
                <p>🕒 Terça a Domingo • 18h às 23h</p>
              </div>
            </div>

            <div
              className="
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/5
              "
            >
              <img
                src="https://images.unsplash.com/photo-1755142437156-3068da28e52c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mapa fictício"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}