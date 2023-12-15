import ImgAbout from "../../assets/global-businessman-holding-glowing-sphere-futuristic-communication-concepts-generated-by-ai (1).png"
import AboutCorner from '../../components/About/AboutCorner'
import AboutVision from '../../components/About/AboutVision'
import AboutClient from '../../components/About/AboutClient'
import AboutParteners from '../../components/About/AboutParteners'
import ImgMission from "../../assets/Left Content Wrapper.png"
import ImageWraber from "../../assets/Image Wrapper.png"
import CardandImgRight from "../../components/CardandImgRight"
import CardandImgleft from "../../components/CardandImgLeft"
const AboutPage = () => {
    return (
        <div>
            <div className='w-75 mx-auto text-center mt-5'>
                <h2 style={{ textAlign: "center" }} className='infoAbout'>Who We Are?</h2>
                <p style={{ color: "#585858", marginTop: "10px" }}>Our uncompromising adherence to our morals and ethical values allows us to provide our clients with remarkable services, contributing to having a positive impact on society, (Integrity, Professional conduct, Making a difference)</p>
                <div className='mt-5'>
                    <img src={ImgAbout} alt="About Image" className='w-100' style={{ borderRadius: "20px" }} />
                </div>
            </div>
            <CardandImgRight/>
            <CardandImgleft/>
            <div className='container w-75' style={{marginTop:"150px"}}>
                <AboutClient />
            </div>
            <div className='container w-75' style={{marginTop:"150px"}}>
                <AboutParteners />
            </div>
        </div>
    )
}

export default AboutPage
