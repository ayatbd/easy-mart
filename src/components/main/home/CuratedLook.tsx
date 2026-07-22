// --- Types ---
interface Product {
  id: string;
  name: string;
  price: number;
  top: string; // Percentage for hotspot positioning
  left: string; // Percentage for hotspot positioning
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Silk Blazer",
    price: 299,
    top: "35%",
    left: "45%",
    image: "/api/placeholder/100/100", // Replace with your assets
  },
  {
    id: "2",
    name: "Tailored Wool Trousers",
    price: 180,
    top: "70%",
    left: "55%",
    image: "/api/placeholder/100/100",
  },
];
