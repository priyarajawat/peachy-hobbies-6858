import { Button, Radio, RadioGroup, Stack ,Drawer,DrawerOverlay,DrawerBody,DrawerContent, useDisclosure, DrawerHeader} from "@chakra-ui/react";
import { useState } from "react";

function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
          
       
           
          </Stack>
        </RadioGroup>
        <Button colorScheme='white' onClick={onOpen}>
          Learn more
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>UC Guarantee</DrawerHeader>
            <DrawerBody>
              <h3 className="div"> 
               We share our service partner's commitment to delivering superlative customer experience, ever single time.</h3>
              <br/>
              <h3 className="div">To honour this commitment, we have launched The UC Insurance Protection Program. This program protects UC users against any damages caused during the delivery of a service booked on UC, upto a maximum of INR 10,000.</h3>
              <br/>
              <h3 className="div">In the unlikely event of any damages during service delivery, you can reach us by using the 'Need Help' button located in your project, or through Helpcenter in the app.</h3>
              <br/>
              <h3 className="div">The insurance coverage is only applicable for services paid online (either before or after the service delivery). It is not applicable for cash payments.</h3>
              <br/>
              <h3 className="div">The UC Insurance Protection Program is applicable on the following services - Salon &amp; Spa at Home; Electrician, Plumbers &amp; Carpenters; Home and Car Cleaning; Appliance Repair; Dry Cleaning; Pest Control</h3>
              <br/>
              <h3 className="div">In all other service categories, like Photographers, Interior Designers, Packers and Movers etc., where the service is more complex, we give choice to our customers, to choose amongst different service professionals interested in their request. We do not extend the insurance protection program for all these services.</h3>
              <br/>
              <h3 className="div">Insurance coverage is not applicable on requests that have been cancelled.</h3>
              <br/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default PlacementExample;