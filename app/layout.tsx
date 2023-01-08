import './globals.css';

import NavListAndButton from '@/components/NavListAndButton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-yellow-100">
        <header>
          <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-yellow-500">
            <div className="text-xl font-bold uppercase">
              <a href="/">Note App</a>
            </div>
            <NavListAndButton />
          </nav>
        </header>
        <div className="min-h-screen">{children}</div>
        <footer className="w-full px-4 py-6 bg-yellow-500">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-base text-gray-700 mb-4">Copyright &copy; 2020 John Doe</p>
            <ul className="flex items-center text-base text-gray-700 mb-4">
              <li>
                <a href="#" className="px-2 hover:text-gray-900">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="px-2 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="px-2 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="px-2 hover:text-gray-900">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
