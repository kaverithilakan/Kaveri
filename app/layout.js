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
  title: "Gowrishankar V.V",
  description:
    "My name is Gowrishankar V.V. I’m a tech enthusiast turned entrepreneur with a mission to innovate and inspire. As the Founder & CEO of IGORAZA PVT. LTD., I am dedicated to chasing the latest tech trends and building solutions that truly matter. Dive in to learn more about my journey! 👇With a solid background in software engineering, I’ve dedicated my career to creating impactful tech solutions. My entrepreneurial spirit led me to establish IGORAZA PVT. LTD., By integrating my enthusiasm for the latest technology with product development, I spearhead innovative solutions. 🚀 .",
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
