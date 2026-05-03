import React from 'react'
import { GoBell, GoCircle, GoPerson } from 'react-icons/go'
import { PiAirplaneTakeoffFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <nav style={{display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                    }}>
                        <div className="firstside" style={{display:"flex",
                            alignItems:"center",
                            justifyContent:"left",
                            gap:"8px"
                        }}>
                            <PiAirplaneTakeoffFill style={{fontSize:"44px", color:"#137FEC"}}/>
                            <h1 style={{fontSize:"20px"}}>SkySearch</h1>
                            </div>
                            <div className="secondside" style={{display:"flex",
                                justifyContent:"space-around",
                                alignItems:"center",
                                gap:"20px",
                                width:"30%"
                            }}>
                                <ul style={{display:"flex",
                                    alignItems:"center",
                                    justifyContent:"space-around",
                                    gap:"20px",
                                    width:"30%"
                                }}>
                                    <li style={{fontFamily:"14px"}}>Hotels</li>
                                    <li style={{fontFamily:"14px"}}>Cars</li>
                                    <li style={{fontFamily:"14px"}}>Trips</li>
                                </ul>
                                
                                <div className="imgkeeper" style={{display:"flex",
                                    alignItems:"center",
                                    justifyContent:"right"
                                }}>
                                    <GoBell style={{fontSize:"26px", color:"#475569"}} />
                                    <Link>
                                    <GoCircle style={{fontSize:"28px"}}/>
                                    </Link>
                                </div>
                                </div>
                            
                        
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
