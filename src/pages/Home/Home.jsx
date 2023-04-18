import { Box, Text } from "@chakra-ui/react";

// components
import WhatsApp from "../../components/WhatsApp/WhatsApp";
import { FAQ, Services, Plans, Propiedades, Contact, Empresa, Opinions } from "../index";



const Home = () => {
  return (
    <>
      <Box
        position="relative"
        bgImage={`url('https://images.unsplash.com/photo-1564657619769-5089a5877f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')`}
        backgroundSize="cover"
        height={"100vh"}>
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          bgColor={"rgba(0,0,0,0.6)"}
          display={"grid"}
          placeItems={"center"}
        >
          <Text
            fontWeight={300}
            fontSize={{ base: "26px", md: "42px" }}
            color={"white.300"}
            textAlign={"center"}
            fontFamily="Poppins"

          >
            Descubre el paraíso en nuestros departamentos en el corazón de la naturaleza
          </Text>
        </Box>
      </Box>
      <Propiedades />
      <Plans />
      <Empresa />
      <Services />
      <Opinions />
      <FAQ />
      <Contact />
      <WhatsApp />
    </>
  );
};

export default Home;
