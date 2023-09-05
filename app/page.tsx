import Image from 'next/image'
import styles from './page.module.css'
import Head from './Components/Head'
import Data from '@/lib/data.json'

export default function Home() {
  
  const data = Data
  
  
  
  
  
  return (
    <main className={styles.main}>
      <Head />
      
    </main>
  )
}
