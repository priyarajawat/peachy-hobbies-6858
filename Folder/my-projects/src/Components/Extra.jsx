import { Heading,Image ,Box,Flex,Spacer} from "@chakra-ui/react";
import './Extra.css';
function Extra(){
    return(
        <div>
            <Box sx={{width:"96%",margin:"auto"}}>
            <Flex sx={{borderBottom:"1px solid grey"}}>
                    <Image sx={{width:"10%",marginLeft:"100px",marginTop:"10px"}} src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/partner-training/1628575858610-5b0ae4.png"/>
                    <Spacer/>
                   
                    <Heading sx={{color:"grey",fontSize:"20px",marginTop:"13px",fontWeight:"bold"}}
                    >Blog</Heading>
                    <Heading sx={{color:"grey",fontSize:"20px",fontWeight:"bold",paddingLeft:"40px",marginTop:"13px"}}>Register As A Professional</Heading>
                    <Heading sx={{color:"grey",fontSize:"20px",fontWeight:"bold",paddingLeft:"40px",marginTop:"13px",marginRight:"100px"}}>Login/Sign Up</Heading>

                </Flex>
                <Box>
                    <Heading sx={{color:"#424242",fontSize:"28px",fontWeight:"500"}}>Anti Discrimination Policy</Heading>
                    <br/>
                    <select id="select">
                        <option>IND
                        </option>
                        <option>AUS
                        </option>
                        </select>
                </Box>
               

                <Box sx={{height:"600px",width:"100%",backgroundColor:"rgb(232, 235, 235)"}}>
                    <Box className="bb" sx={{marginTop:"40px" , boxShadow:" rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",padding:"1rem"}}>
                        <li id="li">Anti-Discrimination Policy</li>
                        <p className="p"><em cla>Urban Company seeks to empower millions of service professionals across the world to deliver safe, reliable and high quality services at home. Urban Company therefore does not tolerate, and prohibits discrimination against customers or service providers based on religion, caste, race, national origin, disability, sexual orientation, sex, marital status, gender identity, age or any other characteristic that may protected under applicable laws. </em></p>
                        <p><em></em><br/></p>
                        <p className="p"><em>Such discrimination includes, but is not limited to, refusing to provide or accept services based on any of these characteristics. </em></p>
                        <p><em></em><br/></p>
                        <p className="p"><em>Any customer or service partner found to have violated this prohibition will lose access to the Urban Company platform.</em></p>
                        <div><em><br/></em></div>

                    </Box>
                </Box>
            </Box>
        </div>
    )
}
export default Extra;