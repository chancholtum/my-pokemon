import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[80rem] bg-grayMain/80 mx-auto">
          <div className="max-w-[56rem] flex flex-col justify-center bg-white text-center mx-auto">
            <div className="px-4 py-6">
              <Header />
            </div>
            {children}
            <div className="p-4">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
