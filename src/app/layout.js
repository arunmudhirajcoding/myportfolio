import { Varela_Round } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
// import { Toaster } from "sonner";
const Varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});


export const metadata = {
  title: "Arun kumar Portfolio",
  description: "Welcome to my portfolio website where I showcase my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Varela.className} antialiased text-white`}
      >
         <Toaster/>
        {children}
      </body>
    </html>
  );
}
