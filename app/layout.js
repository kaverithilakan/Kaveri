import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaveri T",
  description:
    "I'm  Kaveri T, CFO & Director at IGORAZA PVT. LTD. ,with a background in civil engineering, I combine my expertise in finance with a passion for exploring innovations, such as 3D printing and smart infrastructure technologies. This unique blend allows me to approach financial strategies and operational decisions with a forward-thinking mindset. My role involves not just managing the company’s finances but also researching new technological advancements in both civil engineering and tech, ensuring that IGORAZA stays at the forefront of innovation. By the latest trends and solutions, I aim to help drive the company toward sustainable, transformative growth while maintaining a clear focus on our financial goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
