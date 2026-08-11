export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          max-w-7xl mx-auto mt-4
          px-6 py-4
          rounded-2xl
          bg-[#111215]/80
          backdrop-blur-xl
          border border-white/10
          flex justify-between items-center
        "
      >
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <span className="text-[#D4AF37]">Shanghai</span>Sushi
        </h1>

        <nav className="hidden md:flex gap-8 text-slate-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#sobre" className="hover:text-white transition">Sobre</a>
          <a href="#menu" className="hover:text-white transition">Menu</a>
          <a href="#reserva" className="hover:text-white transition">Reserva</a>
          <a href="#contato" className="hover:text-white transition">Contato</a>
          <a href="#faq" className="hover:text-white transition">Perguntas Frequentes</a>
        </nav>

        <button
          className="
            px-5 py-2 rounded-xl
            border border-[#D4AF37]/40
            text-[#F5E7A1]
            bg-transparent
            hover:bg-[#D4AF37]/10
            transition
          "
        >
          Reservar mesa
        </button>
      </div>
    </header>
  );
}