import { Flex,Box,Image, Spacer,Heading,Input, SimpleGrid ,Text} from "@chakra-ui/react";
export default function Swipe(){
    return(
        <div>
   <Box sx={{ height:"20px",backgroundColor:"lightgrey"}}></Box>
            <Box sx={{width:"86%",margin:"auto"}}> 
              
               
                <SimpleGrid className="grid" columns={4} spacingX='40px'>
                    
                    <Box>
                    <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660311850637-a2896d.jpeg" />
                    
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1661165058628-e5e183.jpeg" />
                   
                    </Box>
                    <Box>
                    <Image className="sur" borderRadius={"12px"}  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1661165004424-53bb8d.jpeg" />
                    
                    </Box>
                    <Box>
                        <Image className="sur" borderRadius={"12px"} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1660825272844-85d4fb.png" />
                      
                    </Box>
                </SimpleGrid>
            </Box>

        </div>

    )
}
