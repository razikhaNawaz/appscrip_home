
import styles from './page.module.css'
import Header from './Components/Layout/Header'
import Section1 from './Components/Layout/Section1'
import Section2 from './Components/Layout/Section2'

export default function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
    </div>
  )
}
