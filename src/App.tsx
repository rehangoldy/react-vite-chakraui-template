import { Box, AbsoluteCenter, Center } from '@chakra-ui/react'


function App() {

  return (
    <>
    <AbsoluteCenter>
      <Box background="blue.900" width="100%" padding="4" color="white">
        This fist feature, Enjoy...
      </Box>
    </AbsoluteCenter>
    <Center>
      <Box background="red.900" width="100%" padding="4" color="white">
        This is the Center
      </Box>
    </Center>
    </>
  )
}

export default App
