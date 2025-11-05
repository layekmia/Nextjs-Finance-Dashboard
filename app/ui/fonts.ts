import { Lusitana, Inter } from "next/font/google";

export const lusitana = Lusitana({
  weight: ["400", "700"], // Specify desired weights
  subsets: ["latin"], // Specify desired subsets
  display: "swap", // Recommended for better user experience
});

export const inter = Inter({subsets: ['latin']})