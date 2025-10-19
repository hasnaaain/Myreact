import UserCard from "./Components/UserCards.jsx"
import Pic1 from "./assets/Pic1.png"
import Pic2 from "./assets/Pic2.png"
import Pic3 from "./assets/Pic3.png"

function App() {
  return (
    <div className="container">
      <UserCard name="Killua" desc="hunter x hunter" image={Pic1}/>
      <UserCard name="Garou" desc="One-Punch-man" image={Pic2}/>
      <UserCard name="Goku" desc="dragon Ball" image={Pic3}/>
    </div>
  )
}

export default App