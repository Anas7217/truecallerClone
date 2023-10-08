
import { Box, ChakraProvider, Stack } from '@chakra-ui/react';
import Navbar from "./NavScrollExample"
import ControlledCarousel from './ControlledCarousel';
import ExploreDesign from './ExploreDesign';
import Generate from './Generate';
import ManageDaily from './ManageDaily';
import TechCrunch from './components/TechCrunch';
import WhatWe from './components/WhatWe';
import TrustYour from './components/TrustYour';
import Iphone from './components/Iphone';
import Impact from './components/Impact';
import LatestArticles from './components/LatestArticles';
import DownloadToday from './components/DownloadToday';
import Footer from './components/Footer';



function App() {
  return (
    // <ChakraProvider>
      <Box>
        <Stack>
          <Navbar />
          <ControlledCarousel />
          {/* <ExploreDesign />
          <Generate />
          <ManageDaily/> */}
          <TechCrunch />
          <WhatWe />
          <TrustYour />
          <Iphone />
          <Impact />
          <LatestArticles/>
          <DownloadToday />
          <Footer />
         
        </Stack> 
      </Box>
    // </ChakraProvider>

  );
}

export default App;
