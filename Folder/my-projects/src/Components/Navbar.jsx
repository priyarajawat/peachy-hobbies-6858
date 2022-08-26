import { Flex,Box,Image, Spacer,Heading,Input, SimpleGrid ,Text} from "@chakra-ui/react";

function Navbar(){
    return(
        <div className="backgr"><div>  
            <Box sx={{backgroundImage:"https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg",height:"680px"}}>
                <Flex>
                    <Image sx={{width:"10%",marginLeft:"100px",marginTop:"10px"}} src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"/>
                    <Spacer/>
                   
                 <a href="https://www.urbancompany.com/blog"><Heading sx={{color:"white",fontSize:"18px",paddingLeft:"10px",marginTop:"13px"}}
                    >Blog</Heading></a>
                    <a href="https://partner.urbancompany.com/?utm_source=Customer_web&utm_campaign=header&utm_medium=homepage">  <Heading sx={{color:"white",fontSize:"18px",paddingLeft:"40px",marginTop:"13px",textDecoration:"underline"}}>Register As A Professional</Heading></a>   
                  
                    <Heading sx={{color:"white",fontSize:"18px",paddingLeft:"40px",marginTop:"13px",marginRight:"100px"}}>Login/Sign Up</Heading>

                </Flex>

                <Flex sx={{paddingTop:"190px",width:"70%",margin:"auto",gap:"1rem"}}>

                    <Input placeholder="Enter Location" sx={{backgroundColor:"white",width:"26%",height:"50px"}} />
                    <Input placeholder="Search for Services" sx={{backgroundColor:"white",width:"66%",height:"50px"}}/>
                   </Flex>

                   <Flex sx={{margin:"auto",justifyContent:"center"}}>
                  
                   <Heading sx={{color:"white",fontSize:"18px",paddingTop:"13px",textDecoration:"underline",marginBottom:"20px"}}
                    >Womens's Therapies</Heading>
                    <Heading sx={{color:"white",fontSize:"18px",paddingTop:"13px",textDecoration:"underline",marginBottom:"20px"}}>Salon For Men's</Heading>
                    <Heading sx={{color:"white",fontSize:"18px",paddingTop:"13px",textDecoration:"underline",marginBottom:"20px"}}>Mens's Therapies</Heading>


                   </Flex>

                   

            </Box>
                <Box id="postion" sx={{height:"300px",width:"60%",margin:"auto",paddingTop:"20px"}}>
                    
                    
                    <br/> <Box  sx={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",height:"210px",backgroundColor:"white"}}>
                    <SimpleGrid sx={{padding:"2rem 2rem 2rem 2rem"}}  columns={5}  >
                       
                    <Box className="Box"  >
                        <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" />
                        <Text id="two">Salon For Women</Text>
                    </Box>
               <Box className="Box" >
               <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png" />
              <Text id="two">Hair, Skin &amp; Nails</Text>
               </Box>
                 <Box className="Box"  >
                 <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" />
                <Text id="two">Women's Therapies</Text>
                 </Box>
               <Box className="Box"  >
               <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" />
             <a href="https://www.urbancompany.com/delhi-ncr-mens-grooming"> <Text id="two">Sales For Men</Text></a>
             
               </Box>
                <Box className="Box"  >
                <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" />
               <Text id="two">Men's Therapies</Text>
                </Box>
  
                    </SimpleGrid>
                    </Box>
                   
                    
                   </Box></div>
            
            <Box sx={{height:"300px",width:"60%",margin:"auto",paddingTop:"-800px"}}>
                    <Heading>Home Services</Heading>
                    <br/>
                    <br/> <Box sx={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:"2rem",height:"180px"}}>
                    <SimpleGrid  columns={5}  >
                       
                    <Box className="Box"  >
                        <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" />
                        <Text id="two">Appliances Repair</Text>
                    </Box>
               <Box className="Box" >
               <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" />
              <Text id="two">Home Painting</Text>
               </Box>
                 <Box className="Box"  >
                 <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" />
                <Text id="two">Cleaning & Pest</Text>
                 </Box>
               <Box className="Box"  >
               <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png" />
              <Text id="two">Disinfection</Text>
               </Box>
                <Box className="Box"  >
                <Image className="img"   src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" />
               <Text id="two">Home Repairs</Text>
                </Box>
  
                    </SimpleGrid>
                    </Box>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                   </Box>
                   <Box sx={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>

                   </Box>

        </div>
    )
}
export default Navbar;