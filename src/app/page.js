
import styles from './page.module.css'
import Header from './Components/Layout/Header'
import Section1 from './Components/Layout/Section1'
import Section2 from './Components/Layout/Section2'
import Section3 from './Components/Layout/Section3'
import Section5 from './Components/Layout/Section5'


export default function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      
      <Section5 />
    </div>
  )
}
