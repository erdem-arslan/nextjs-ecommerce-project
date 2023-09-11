import './globals.css'

export const metadata = {
  title: 'NextJS | Apple Store',
  description: 'Generated by erdemarslan',
}

export default function RootLayout({ children })
{
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}