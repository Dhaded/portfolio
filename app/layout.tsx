import '../styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Shivalingesh Dhaded | Backend Engineer',
  description: 'Distributed Systems | Azure | Kubernetes | ELK | Golang',
  openGraph: {
    title: 'Shivalingesh Dhaded | Backend Engineer',
    description: 'CKAD | ELK Certified | Enterprise Backend Engineer',
    url: 'https://dhaded.github.io/portfolio/',
    siteName: 'Shivalingesh Dhaded Portfolio',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b border-gray-800 py-5">
          <div className="max-w-6xl mx-auto px-6 flex justify-between">
            <h1 className="font-bold text-lg">Shivalingesh Dhaded</h1>
            <div className="space-x-6">
              <Link href="/">Home</Link>
              <Link href="/projects">Systems</Link>
              <Link href="/blog">Writing</Link>
              <Link href="/resume">Resume</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  )
}
