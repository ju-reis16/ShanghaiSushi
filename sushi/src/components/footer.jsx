import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#08080A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo e descrição */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-[#D4AF37]">Shanghai</span>Sushi
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Uma experiência gastronômica inspirada na tradição japonesa,
              com ingredientes selecionados, ambiente sofisticado e
              atendimento de excelência.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Navegação
            </h4>

            <div className="flex flex-col gap-3 text-slate-400">
              <a href="#home" className="hover:text-[#D4AF37] transition">
                Home
              </a>
              <a href="#sobre" className="hover:text-[#D4AF37] transition">
                Sobre
              </a>
              <a href="#menu" className="hover:text-[#D4AF37] transition">
                Menu
              </a>
              <a href="#contato" className="hover:text-[#D4AF37] transition">
                Contato
              </a>
              <a href="#faq" className="hover:text-[#D4AF37] transition">
                FAQ
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contato
            </h4>

            <div className="text-slate-400 space-y-3 mb-6">
              <p>Rua Sakura, 128 – São Paulo, SP</p>
              <p>(11) 99999-9999</p>
              <p>contato@shanghaisushi.com</p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  hover:border-[#D4AF37]/50
                  hover:bg-[#D4AF37]/10
                  transition
                "
              >
                <FaInstagram className="text-[#F5E7A1]" />
              </a>

              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  hover:border-[#D4AF37]/50
                  hover:bg-[#D4AF37]/10
                  transition
                "
              >
                <FaFacebookF className="text-[#F5E7A1]" />
              </a>

              <a
                href="#"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  hover:border-[#D4AF37]/50
                  hover:bg-[#D4AF37]/10
                  transition
                "
              >
                <FaWhatsapp className="text-[#F5E7A1]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-slate-500 text-sm">
          © 2026 ShanghaiSushi. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}