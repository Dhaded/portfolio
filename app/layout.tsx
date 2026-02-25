import '../styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Shivalingesh Dhaded | Backend Engineer',
  description: 'Distributed Systems | CKAD | ELK | Azure Certified',
  openGraph: {
    title: 'Shivalingesh Dhaded Portfolio',
    description: 'Backend Engineer | CKAD | ELK Certified',
    url: 'https://dhaded.github.io/portfolio/',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed w-full bg-black/40 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
            <h1 className="font-bold text-lg glow">Dhaded</h1>
            <div className="space-x-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/projects">Systems</Link>
              <Link href="/resume">Resume</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          {children}
        </main>
      </body>
    </html>
  )
}
