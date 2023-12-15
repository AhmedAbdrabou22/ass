import Fine from "../../assets/OIP.png"
import Arabi from "../../assets/OIP (1).png"
import Red from "../../assets/download (1).png"
import Green from "../../assets/OIP (2).png"
import AData from "../../assets/download.png"

const AboutClient = () => {
    return (
        <div>
            <h2 className='clientTitle '>Our Clients</h2>
            <div className='d-flex overflow-scroll justify-content-between align-items-center'>
                <img className='p-2' src={Fine} alt="image"/>
                <img className='p-2' src={Red} alt="image"/>
                <img className='p-2' src={Arabi} alt="image"/>
                <img className='p-2' src={Fine} alt="image"/>
                <img className='p-2' src={Green} alt="image"/>
                <img className='p-2' src={AData} alt="image"/>
                <img className='p-2' src={Fine} alt="image"/>
                <img className='p-2' src={Green} alt="image"/>
                <img className='p-2' src={AData} alt="image"/>
                <img className='p-2' src={Fine} alt="image"/>
                <img className='p-2' src={Green} alt="image"/>
                <img className='p-2' src={AData} alt="image"/>
            </div>
        </div>
    )
}

export default AboutClient
