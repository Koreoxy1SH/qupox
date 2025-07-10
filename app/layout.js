import "./globals.css";
import "./fanta.css";
import Head from "./head";

export const metadata = {
  title: "Qubox | Note",
  description: "Note App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <div id="app">{children}</div>
        <div id="portal"></div>
      </body>
    </html>
  );
}
