import './Userpage.css'
import Navbar from '../Components/Nav_bar'
function Userpage(){
    return(
        <>
        <Navbar></Navbar>
        <div className='profile_pic'>
            <img alt='Charminar' src='https://tse2.mm.bing.net/th?id=OIP.O0zI4cPstjz8gs1JJR10ywHaEo&pid=Api&P=0&h=180'></img>
            //Name
            //about description
            //customize the channel
        </div>
        <div className='urvideos_heading'>
            <span>Your Videos</span>
        </div>
        <hr></hr>
        <button>Publish</button>
        <div>

        </div>
        </>
    )
}
export default Userpage