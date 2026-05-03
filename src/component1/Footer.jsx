import React from 'react'
import { CiShare2 } from 'react-icons/ci'
import { FiMessageSquare } from 'react-icons/fi'
import { IoMdLink } from 'react-icons/io'
import { PiAirplaneTakeoffFill } from 'react-icons/pi'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="saver" style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        <div className="firstside" style={{ display: "grid", alignItems: "center", justifyContent: "left", gap: "8px", width: "237px" }}>
                            <div className="textside" style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                                <PiAirplaneTakeoffFill style={{ fontSize: "30px", color: "#137FEC" }} />
                                <h1 style={{ fontSize: "18px" }}>SkySearch</h1>
                            </div>
                            <p style={{ color: "#64748B", fontSize: "14px" }}>Helping travelers find the best
                                flights and deals since 2024. Your
                                journey starts here.</p>
                            <div className="imgkeeper" style={{ display: "flex", justifyContent: "left", alignItems: "center", gap: "10px" }}>
                                <div className="pic" style={{ backgroundColor: "whitesmoke", width: "40px", borderRadius: "50%", padding: "7px", alignItems: "center", display: "grid", justifyContent: "center" }}> <CiShare2 style={{ fontSize: "20px", }} /></div>
                                <div className="pic" style={{ backgroundColor: "whitesmoke", width: "40px", borderRadius: "50%", padding: "7px", alignItems: "center", display: "grid", justifyContent: "center" }}> <IoMdLink style={{ fontSize: "20px", }} /></div>
                                <div className="pic" style={{ backgroundColor: "whitesmoke", width: "40px", borderRadius: "50%", padding: "7px", alignItems: "center", display: "grid", justifyContent: "center" }}> <FiMessageSquare style={{ fontSize: "20px", }} /></div>
                            </div>
                        </div>
                        <div className="secondside" style={{ display: "flex", gap: "5px", width: "237px",flexDirection:"column" }}>
                            <h1 style={{ fontSize: "16px" }}>Company</h1>
                           
                            <p style={{ fontSize: "14px", color: "#64748B" }}>About Us</p>
                           
                            <p style={{ fontSize: "14px", color: "#64748B" }}>Careers</p>
                           
                            <p style={{ fontSize: "14px", color: "#64748B" }}>Mobile App</p>
                           
                            <p style={{ fontSize: "14px", color: "#64748B" }}>Blog</p>
                        </div>
                        <div className="thirdside" style={{ display: "flex", gap: "5px", width: "237px",flexDirection:"column" }}>
                            <h1 style={{ fontSize: "16px" }}>Support</h1>
                           
                            <p style={{ fontSize: "14px", color: "#64748B" }}>Help Center</p>
                           
                            <p style={{ fontSize: "14px", color: "#64748B" }}>Terms of Service</p>
                           
                            <p style={{ fontSize: "14px", color: "#64748B" }}>Privacy Policy</p>
                           
                            <p style={{ fontSize: "14px", color: "#64748B" }}>Cookie Policy</p>
                        </div>
                        <div className="fourthside" style={{ display: "flex", gap: "10px", width: "237px",flexDirection:"column" }}>
                            <h1 style={{ fontSize: "16px" }}>Newsletter</h1>
                            <p style={{ fontSize: "14px", color: "#64748B" }}>Get the best travel deals delivered
                                to your inbox. </p>
                                
                                <div className="keeper" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                                    <input style={{width:"162px",padding:"10px",border:"none",borderRadius:"8px",backgroundColor:"#F8FAFC"}} type="email" placeholder='Your email' />
                                <button style={{color:"white", backgroundColor:"#137FEC", border:"none", borderRadius:"6px", width:"60px", fontSize:"14px", padding:"10px"}}>Join</button>
                                </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
