import { Heading, SimpleGrid,Box,Image ,Text, Flex} from "@chakra-ui/react";
import PlacementExample from "./Sidebar";

function Middle(){
    return(
        <div>
              <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            
            <Box sx={{width:"86%",margin:"auto"}}>
                <Heading sx={{marginTop:"100px"}}>New Category Launches</Heading>
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Expert Counseling</Text>
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Advanced Skin Treaments</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Furniture Making,Upholstery Purifier</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Air Purifier</Text>
                    <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Flat 100 Off</Text>
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Buy RO water Purifier</Text>
                    </Box>
                </SimpleGrid>
            </Box>
            

            <br/>
           

            <br/>
           
            <br/><br/>

            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}> <Heading sx={{marginTop:"100px"}}>Appliances</Heading>
                <Text sx={{marginTop:"2px",fontSize:"22px",color:"grey",fontFamily:"bold"}}>Services , Repair , Installation & Uninstallation</Text>
               
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1640322586655-03f2a3.jpeg" />
                     <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Instant Video Consult </Text>
                  
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Free & Instant Diagnosis</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Geyser</Text>
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Starts at 240</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Water Purifier</Text>
                    <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Upto 45% Off</Text>
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Air Purifier</Text>
                    <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Flat 100 Off</Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <br/>
           

           <br/>
          
           <br/><br/>


            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}>
            <Heading sx={{marginTop:"100px"}}>Salon , Spa and Massage services</Heading>
                <Text sx={{marginTop:"2px",fontSize:"22px",color:"grey",fontFamily:"bold"}}>Hygienic & Single use Products</Text>
               
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Salon Prime</Text>
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Free Waxing</Text>
                    </Box>
                    <Box>
                    <Image borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg" />
                   <a href="https://www.urbancompany.com/delhi-ncr-mens-grooming"><Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Salon for Men</Text></a> 
                    <Text sx={{fontSize:"15px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Flat 100 Off</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Spa For Women</Text>
                    <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Free Hand Massage</Text>
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Massage for Men</Text>
                        <Text sx={{fontSize:"14px",paddingTop:"1px",fontFamily:"bold",color:"grey",cursor:"pointer"}}>Start at 499</Text>
                    </Box>
                </SimpleGrid>
            </Box>

            <br/>
           

           <br/>
          
           <br/><br/>


            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}>
                <Heading sx={{marginTop:"100px"}}>Cleaning & Pest Control</Heading>
              
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Bathroom and Kitchen Cleaning</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Full Home Cleaning</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Sofa & Carpet Cleaning</Text>
                 
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Cockroach , Ant & General Pest Control</Text>
                    </Box>
                </SimpleGrid>
            </Box>

            
            <br/>
           

           <br/>
          
           <br/><br/>


            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}>
                <Heading sx={{marginTop:"100px"}}>UC Luxury Experience</Heading>
                <Text sx={{marginTop:"2px",fontSize:"22px",color:"grey",fontFamily:"bold"}}>Top Proffessionals | Best Brands | Premium Experience</Text>
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Salon Live</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Salon For Man Royale</Text>
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Spa Luxe</Text>
                    
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Massage Therapy For Men Royale</Text>
                    </Box>
                </SimpleGrid>
            </Box>

               
            <br/>
           

           <br/>
          
           <br/><br/>


            <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto",paddingBottom:"5rem"}}>
                <Heading sx={{marginTop:"100px"}}>Home Repairs</Heading>
              
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur"  height={"158px"} width={"300px"} borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Furniture Making,Upholstery Purifier</Text>
                  
                    </Box>
                    <Box>
                    <Image className="sur" height={"158px"} borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}> Electricians</Text>
                    </Box>
                    <Box>
                    <Image className="sur" height={"158px"} width={"300px"} borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg" />
                    <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}> Plumbers</Text>
                    
                    </Box>
                    <Box>
                        <Image className="sur"  height={"158px"} width={"300px"} borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" />
                        <Text sx={{fontSize:"19px",paddingTop:"27px",fontFamily:"bold",cursor:"pointer"}}>Carpentrs</Text>
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
         
          
           
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1624344861242-558286.png" />
                
                
         
           </Flex>

           <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>

           
      <Flex sx={{marginTop:"10px",marginBottom:"10px"}}>
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/categories/category_v2/category_3cffdf20.png" /></Flex>
           
         

        </div>
    )
}
export default Middle;