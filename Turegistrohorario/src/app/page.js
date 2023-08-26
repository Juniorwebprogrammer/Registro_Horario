import styles from '@/styles/Home/page.module.css';
import Info from '@/components/Home/Info';
import Botones from '@/components/Home/Botones';

export default function Home() {
  return (
    <>
      <div className={styles.homePage}>
        <Info/>
        <Botones/>
      </div>
    </>
  )
}
