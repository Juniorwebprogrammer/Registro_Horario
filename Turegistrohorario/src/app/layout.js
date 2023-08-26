import styles from '../app/global.module.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Navigation from '@/components/General/Navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Registro Horario',
  description: 'Development by Turinconweb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
          <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"
          />
        </head>
      <body className={styles.global}>
        <Navigation/>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"/>
      </body>
    </html>
  )
}
