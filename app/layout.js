import "./globals.css";
import "leaflet/dist/leaflet.css";
import RevealEffects from "../components/RevealEffects";
import MotionEnhancements from "../components/MotionEnhancements";

export const metadata = {
  title: "EduRole — Powering Education Across Africa",
  description:
    "A comprehensive Education Management Information System for schools, universities, and national education systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RevealEffects />
        <MotionEnhancements />
        {children}
      </body>
    </html>
  );
}
