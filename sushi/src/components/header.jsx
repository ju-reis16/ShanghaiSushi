export default function Header({ title, highlight }) {
	return (
		<div className="mb-8">
			<h2 className="text-4xl md:text-5xl font-bold">
				{title} <span className="text-[#D4AF37]">{highlight}</span>
			</h2>
		</div>
	);
}
