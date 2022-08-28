import { Heading, SimpleGrid,Box,Image ,Text, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import PlacementExample from "./Sidebar";

function Middle(){
    return(
        <div>
              <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            
            <Box sx={{width:"86%",margin:"auto"}}>
                <Heading sx={{marginTop:"100px",display:"flex",justifyContent:"center"}}>New Category Launches</Heading>
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Expert Counseling</Text>
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Advanced Skin Treaments</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Furniture Making,Upholstery Purifier</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Air Purifier</Text>
                    <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Flat 100 Off</Text>
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Buy RO water Purifier</Text>
                    </Box>
                </SimpleGrid>
            </Box>
            

            <br/>
           

            <br/>
           
            <br/><br/>

            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}> <Heading sx={{marginTop:"100px",display:"flex",justifyContent:"center"}}>Appliances</Heading>
                <Text sx={{marginTop:"2px",fontSize:"22px",color:"grey",fontFamily:"bold",display:"flex",justifyContent:"center"}}>Services , Repair , Installation & Uninstallation</Text>
               
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1640322586655-03f2a3.jpeg" />
                     <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Instant Video Consult </Text>
                  
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Free & Instant Diagnosis</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Geyser</Text>
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Starts at 240</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Water Purifier</Text>
                    <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Upto 45% Off</Text>
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Air Purifier</Text>
                    <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Flat 100 Off</Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <br/>
           

           <br/>
          
           <br/><br/>


            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}>
            <Heading sx={{marginTop:"100px",display:"flex",justifyContent:"center"}}>Salon , Spa and Massage services</Heading>
                <Text sx={{marginTop:"2px",fontSize:"22px",color:"grey",fontFamily:"bold",display:"flex",justifyContent:"center"}}>Hygienic & Single use Products</Text>
               
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Salon Prime</Text>
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Free Waxing</Text>
                    </Box>
                    <Box>
                    <Image borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg" />
                   <a href="https://www.urbancompany.com/delhi-ncr-mens-grooming"><Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Salon for Men</Text></a> 
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Flat 100 Off</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Spa For Women</Text>
                    <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Free Hand Massage</Text>
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Massage for Men</Text>
                        <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer",display:"flex",justifyContent:"center"}}>Start at 499</Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <br/>
           

           <br/>
          
           <br/><br/>


            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}>
                <Heading sx={{marginTop:"100px",display:"flex",justifyContent:"center"}}>Cleaning & Pest Control</Heading>
              
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Bathroom and Kitchen Cleaning</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Full Home Cleaning</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Sofa & Carpet Cleaning</Text>
                 
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Cockroach , Ant & General Pest Control</Text>
                    </Box>
                </SimpleGrid>
            </Box>

            
            <br/>
           

           <br/>
          
           <br/><br/>


            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}>
                <Heading sx={{marginTop:"100px",display:"flex",justifyContent:"center"}}>UC Luxury Experience</Heading>
                <Text sx={{marginTop:"2px",fontSize:"22px",color:"grey",fontFamily:"bold",display:"flex",justifyContent:"center"}}>Top Proffessionals | Best Brands | Premium Experience</Text>
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Salon Live</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Salon For Man Royale</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Spa Luxe</Text>
                    
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Massage Therapy For Men Royale</Text>
                    </Box>
                </SimpleGrid>
            </Box>

               
            <br/>
           

           <br/>
          
           <br/><br/>


            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto",paddingBottom:"5rem"}}>
                <Heading sx={{marginTop:"100px",display:"flex",justifyContent:"center"}}>Home Repairs</Heading>
              
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur"  height={"158px"} width={"300px"} borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Furniture Making,Upholstery Purifier</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" height={"158px"} borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}> Electricians</Text>
                    </Box>
                    <Box>
                    <Image className="sur" height={"158px"} width={"300px"} borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}> Plumbers</Text>
                    
                    </Box>
                    <Box>
                        <Image className="sur"  height={"158px"} width={"300px"} borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer",display:"flex",justifyContent:"center"}}>Carpentrs</Text>
                    </Box>
                </SimpleGrid>
            </Box>
            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Flex sx={{marginTop:"10px",marginBottom:"10px"}}>
                   <PlacementExample/>
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_a4e46fa0.png" />
         
           </Flex>

           <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>



           <Flex sx={{marginTop:"10px",marginBottom:"10px"}}>
           <Link to="/extra">     <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1624344861242-558286.png" />        </Link>
        
           
             
                
                
         
           </Flex>

           <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>

           
      <Flex sx={{marginTop:"11px",marginBottom:"10px"}}>
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_3cffdf20.png" /></Flex>
           
         

        </div>
    )
}
export default Middle;