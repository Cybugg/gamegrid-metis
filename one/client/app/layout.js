
import "./globals.css";



export const metadata = {
  title: "GameGrid",
  description: "GameGrid Blockchain: Web3 gaming platform designed to revolutionize the gaming experience by integrating financial incentives. It offers a decentralized system where players can stake tokens in competitive matches (Winner wins it all), trade and get rewarded with unique in-game assets as NFTs, and make purchases with native tokens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
