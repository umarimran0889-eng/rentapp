import "./Browse.css"
import Casual from "../assets/casual.png"
import Formal from "../assets/Fomal.png"
import Party from "../assets/party.png"
import Gym from "../assets/gym.png"



const Browsebydesign = () => {
    return (
        <div className="BrowseDesign">
            <h1>BROWSE BY DRESS STYLE</h1>
            
             <div className="style-grid">

          <div className="style-card casual">
    <img src={Casual} alt="Casual" />
    <span>Casual</span>
</div>

<div className="style-card formal">
    <img src={Formal} alt="Formal" />
    <span>Formal</span>
</div>

<div className="style-card party">
    <img src={Party} alt="Party" />
    <span>Party</span>
</div>

<div className="style-card gym">
    <img src={Gym} alt="Gym" />
    <span>Gym</span>
</div>

</div>
</div>
           
  )
}

export default Browsebydesign
