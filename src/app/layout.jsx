import './globals.css'

export const metadata = {
  title: 'Alex Urbaez Portfolio',
  description: 'Web developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}