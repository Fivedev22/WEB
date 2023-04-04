import { Box, Text, Grid, GridItem, Image, Container } from "@chakra-ui/react";
import React from "react";
import Search from "../../components/Search/Search";
import { Opinions, Services } from "../../data/Home/Home";
import Propiedades from "../Propiedades/Propiedades";
import Contact from "../Contact/Contact";
import Empresa from "../Empresa/Empresa";
import { useState } from "react";
import Plans from "../Plans/Plans";

const Home = () => {


  return (
    <>
      <Box padding={{ base: "0", lg: "6" }}>
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          as="header"
          height={"500px"}
          bgImage="url('https://images.unsplash.com/photo-1519852476561-ec618b0183ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80')"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          borderRadius={{ base: "0", lg: "9px" }}
          objectFit="cover"
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
      <Box id="propiedades" as="section">
        <Box
          maxW="1440px"
          margin="0 auto"
          textAlign={{ base: "left", md: "center" }}
          paddingY={8}
        >

          <Propiedades />
        </Box>
      </Box>
      <Box
        backgroundAttachment="fixed"
        bgColor={"red.300"}
        bgImage="url('https://images.unsplash.com/photo-1658143289468-6c5ecd2c39e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
        bgSize="cover"
        bgRepeat="no-repeat"
        height="100%"
      >
        <Box
          maxW="1440px"
          margin="0 auto"
          textAlign={{ base: "left", md: "center" }}
          paddingY={12}
        >

          <Plans />
        </Box>
      </Box>
      <Box id="empresa" as="section" paddingY={12} paddingX={6}>
        <Box
          maxW="1440px"
          margin="0 auto"
          textAlign={{ base: "left", md: "center" }}
          paddingY={12}
        >
          <Empresa />
        </Box>
      </Box>
      <Box as="section" bgColor="green.300" paddingY={12} paddingX={6}>
        <Box
          maxW="1440px"
          margin="0 auto"
          textAlign={{ base: "left", md: "center" }}
        >
          <Text fontSize={{ base: "22px", md: "28px" }} color="white.300">
            Te ofrecemos el mejor lugar para alojarte
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            paddingY={12}
            justifyContent="space-between"
            gap={4}
          >
            <Box>
              <Image
                src="https://www.villacarlospaz.com/imgs/productos/foto_1037946111.jpg"
                alt="Dan Abramov"
                borderRadius={{ base: "2xl", md: "3xl" }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              padding={2}
            >
              <Text color="white.300" fontSize={{ base: "22px", md: "26px" }}>
                Apartamentos equipados para 2/4 personas.{" "}
              </Text>
              <Box display="flex" gap={4} paddingX={4} paddingY={6}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <Text color="white.300" fontSize={{ base: "18px", md: "26px" }}>
                  Mascotas.
                </Text>
              </Box>
              <Box display="flex" gap={4} padding={4}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <Text color="white.300" fontSize={{ base: "18px", md: "26px" }}>
                  Temporal/mensual/anual.
                </Text>
              </Box>
              <Box display="flex" gap={4} padding={4}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <Text color="white.300" fontSize={{ base: "18px", md: "26px" }}>
                  Seguridad.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box id="servicios" as="section" height="100%" paddingY={12} paddingX={6}>
        <Box
          maxW="1440px"
          margin="0 auto"
          textAlign={{ base: "left", md: "center" }}
          paddingY={8}
        >
          <Text
            color="green.600"
            fontFamily="Domine"
            fontWeight={600}
            fontSize={{ base: "26px", md: "42px" }}
          >
            Servicios
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={6}
            paddingY={6}
          >
            {Services.map((service, idx) => (
              <GridItem
                key={idx}
                padding={2}
                display="grid"
                placeItems="center"
                gap={4}
              >
                <Image
                  boxSize={{ base: "50px", md: "120px" }}
                  src={service.image}
                />
                <Text fontSize={{ base: "16px", md: "26px" }} fontWeight={600}>
                  {service.title}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        height={{ base: "100%", xl: "100vh" }}
        display="flex"
        alignItems="center"
        bgColor="#E6FFDA"
        paddingY={8}
        paddingX={6}
        id="reseñas"

      >
        <Box

          maxW="1440px"
          margin="0 auto"
          textAlign={{ base: "left", md: "center" }}
          paddingY={12}

        >
          <Text
            color="green.900"
            fontFamily="Domine" fontWeight={600}
            fontSize={{ base: "26px", md: "42px" }}
          >
            ¡Nuestra experiencia con clientes!
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
            paddingY={12}
          >
            {Opinions.map((op, idx) => (
              <GridItem
                key={idx}
                padding={2}
                display="grid"
                placeItems="center"
                gap={4}
              >
                <Box
                  width={{ base: "100%", sm: "350px", md: "380px" }}
                  height={{ base: "100%", md: "330px" }}
                  bgColor={"white.300"}
                  display="grid"
                  placeItems="center"
                  gap={2}
                  borderRadius="3xl"
                  padding={"56px"}
                  textAlign="center"
                  key={idx}
                >
                  <Text fontSize={{ base: "22px", md: "32px" }}>
                    {op.author}
                  </Text>
                  <Text fontSize={{ base: "18px", md: "20px" }}>{op.date}</Text>
                  <Text fontSize={{ base: "18px", md: "24px" }}>
                    {op.comment}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={{ base: "column", md: "row" }}
            gap={4}
            padding={4}
            paddingY={8}
          ></Box>
        </Box>
      </Box>
      <Box id="contacto" as="section" paddingY={12} paddingX={6}>
        <Box
          maxW="1440px"
          margin="0 auto"
          textAlign={{ base: "left", md: "center" }}
          paddingY={12}
        >
          <Contact />

        </Box>
      </Box>

    </>
  );
};

export default Home;
