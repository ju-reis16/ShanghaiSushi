import Header from "./header";

const menuItems = [
  {
    name: "Rodizio Tradicional",
    img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600",
    desc: "Estão inclusos: temakis, ceviches, sashimis, guiozas e carpaccios."
  },
  {
    name: "Rodizio de Temakis",
    img: "https://static.itdg.com.br/images/auto-auto/d0117a8c14a1ac5f7748b46bca84f00f/temaki-varios.jpg",
    desc: "Temakis variados para você saborear, com ingredientes frescos e combinações irresistíveis."
  },
  {
    name: "A Lá Carte",
    img: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600",
    desc: "Escolha seus pratos favoritos e monte sua experiência do seu jeito."
  },
  {
    name: "Especial do Chef",
    img: "https://kiyotasushi.com.br/wp-content/uploads/2020/08/a-la-carte-1024x683.png ",
    desc: "Criação especial do nosso chef, preparada com ingredientes selecionados e um toque único."
  },
  {
    name: "Combinados",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900",
    desc: "Combinações de sushi e sashimi cuidadosamente selecionadas para uma experiência completa."
  },
  {
    name: "Bebidas Tradicionais",
    img: "https://images.unsplash.com/photo-1697479815895-23ea2934711a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Refrigerantes, chás, sucos e cafés."
  },
  {
    name: "Drinks Especiais",
    img: "https://images.unsplash.com/photo-1746785011440-aff1c8e0e559?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Combinações especiais de sabores preparadas para tornar seu momento ainda mais marcante e saboroso."
  },
  {
    name: "Sobremesa",
    img: "https://images.unsplash.com/photo-1636405188643-5efa604fb14d?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Delícias doces para finalizar sua experiência gastronômica."
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
                  Conhecer Sobre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}