import React from 'react';
import { Box, Text, Image, } from "@chakra-ui/react";


const Plans = () => {


	const PlansArray = [
		{
			"title": "Alquileres por temporada",
		
			"image": "https://static.tokkobroker.com/pictures/100869109573421096691403352410436248331866738365882689953219675635361980763786.jpg"
		},
		{
			"title": "Alquileres Mensual",
		
			"image": "https://static.tokkobroker.com/pictures/36809659805436191465254680047166702744391374224974230360077623954020430831870.jpg"

		},
		{
			"title": "Alquileres Anual",
		
			"image": "https://static1.sosiva451.com/34162821/ec5badd5-6431-43c2-a089-559204115f8c_u_small.jpg"
			
		},
	]

	return <>
		<Box
			backgroundAttachment="fixed"
			bgImage="url('https://images.unsplash.com/photo-1658143289468-6c5ecd2c39e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
			bgSize="cover"
			bgRepeat="no-repeat"
			height="100%"
			paddingY={32}
		>
			<Box
				maxW="1440px"
				margin="0 auto"
				textAlign={{ base: "left", md: "center" }}
				paddingY={12}
				paddingX={2}
			>

				<Box width="100%" margin={"0 auto"} borderRadius="9px" bgColor={"rgba(255, 255, 255, 0.8 )"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"} paddingY={8} >
					{
						PlansArray.map((plan, idx) => (
							<Box key={idx} width={"80%"} display={"flex"} flexDirection={{ base: "column-reverse", md: "row-reverse" }} alignItems={"center"} justifyContent={"space-between"} padding={6} gap={4} borderBottom={"1px solid #BDCDD6"}>
								<Image width={"120px"} height={'80px'} objectFit={'cover'} borderRadius={"md"} src={plan.image} />
								<Box textAlign={"left"}>
									<Text fontSize={{ base: "20px", md: "32px" }} fontFamily={"Poppins"} fontWeight={600} textAlign={{ base: "center", md: "left" }} color={"black"}>{plan.title}</Text>
									<Text fontSize={{ base: "18px", md: "22px" }} fontFamily={"Poppins"} color={"gray"} textAlign={{ base: "center", md: "left" }}   > {plan.text}</Text>
								</Box>
							</Box>
						))
					}
				</Box>
			</Box>
		</Box>
	</>;
};

export default Plans;
