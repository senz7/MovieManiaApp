import "./global.css";

export const metadata = {
  title: "Movies webapp",
  description: "Created by Arseniy Nazarevskiy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">{children}</body>
    </html>
  );
}
