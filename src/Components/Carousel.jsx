import React, { useState } from 'react';
import { Box, IconButton, Image, useBreakpointValue, Button, Text, Link } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import {FcLikePlaceholder } from 'react-icons/fc';
import { Grid, GridItem } from '@chakra-ui/react'


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = useState()
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  const cards = [
    'https://cdn.dribbble.com/users/452635/screenshots/15401046/media/e7ab70366beabf615812a61553deb62b.png?compress=1&resize=1200x900&vertical=top',
    'https://cdn.dribbble.com/users/452635/screenshots/15401046/media/e7ab70366beabf615812a61553deb62b.png?compress=1&resize=1200x900&vertical=top',
  ];

  return (
    <Box>
      <Box 
      margin={"auto"}
      width={'60%'}
      display={"flex"}
      marginBottom={"60px"}
      marginTop={"60px"}
      gap={"20px"}
      >
       <Box >
        <Image src="https://cdn.dribbble.com/users/452635/avatars/normal/0d0c64fb18ea7f5ff00e3591598f9b1d.png?1556368088" 
        
        borderRadius={"50%"}
        height={"70px"}
        width={"70px"}
        />
       </Box>
       <Box fontSize={"20px"} width={"63%"}>
        <Text>Landing page exploration for Trad3r mobile app</Text>
        <Link>Prakhar Neel Sharma</Link> <Link color={"gray"}>Follow</Link> <Link color={"#EA4C89"}>Hire me</Link>
       </Box>
       <Box display={"flex"} gap={"15px"}> 
        <Button padding={"30px"}>Save</Button>
       <Button backgroundColor={"#EA4C89"} padding={"30px"}><FcLikePlaceholder fontSize={"30px"} gap={"10px"}/> Like</Button>
       </Box>
      </Box>
      <Box
      position={'relative'}
      margin={"auto"}
      height={'700px'}
      width={'60%'}
      overflow={'hidden'}
      marginBottom={"40px"}
      >
        
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'700px'}
            borderRadius={"25px"}
            width={"80%"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat" 
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
      <Box fontSize={"22px"} margin={"auto"} width={"60%"} marginBottom={"60px"}>
        <Text>For more interesting creation, please visit:</Text>
        <Text>1. <Link color={"#EA4C89"}>BEHANCE</Link></Text>
        <Text>2. <Link color={"#EA4C89"}>MEDIUM</Link></Text>
        <Text>3. <Link color={"#EA4C89"}>LINKEDIN</Link></Text>
      </Box>
      <Box display={"flex"} margin={"auto"} width={"60%"} marginBottom={"100px"} gap={"55%"} backgroundColor={"#F8F8F8"} padding={"30px"}>
        <Text display={"flex"} gap={"5px"} fontSize={"20px"}>475.3.landing_page.png <Text color={"gray"}>3 MB</Text></Text>
        <Button backgroundColor={"white"}>Download</Button>
      </Box>

      <Box borderTop={"1px solid gray"} margin={"auto"} width={"80%"}>
        <Image src="https://cdn.dribbble.com/users/452635/avatars/normal/0d0c64fb18ea7f5ff00e3591598f9b1d.png?1556368088" borderRadius={"50%"} 
        width={"100px"}
        height={"100px"}
        margin={"auto"}
        marginTop={"-50px"}
        />
        <Text fontSize={"30px"} textAlign={"center"} marginTop={"30px"}>Prakhar Neel Sharma</Text>
        <Text textAlign={"center"}>God is in the details. ✉️prakharsharma800@gmail.com</Text>
        <Button marginLeft={"45%"} marginTop={"20px"} backgroundColor={"#EA4C89"} marginBottom={"60px"} padding={"20px"}>✉️ Hire Me</Button>
      </Box>

      <Box display={"flex"} fontSize={"25px"} margin={"auto"} width={"80%"} gap={"60%"} marginBottom={"20px"}>
        <Text>More by Prakhar Neel Sharma</Text>
        <Link color={"#EA4C89"}>View Profile</Link>
      </Box>

      <Box display={"flex"} margin={"auto"} width={"80%"} gap={"20px"} paddingBottom={"70px"} borderBottom={"1px solid gray"}>
        <Link><Image width={"100%"} height={"250px"}
         src="https://cdn.dribbble.com/userupload/2776573/file/original-262bb2ce7921b4e90af9ed35ace4ac26.png?compress=1&resize=450x338&vertical=top"/></Link>
        <Link>
           <Image width={"100%"} height={"250px"}
            src="https://cdn.dribbble.com/userupload/2799136/file/original-c1d2dfd2a39a53a32fdc225261c7afd2.png?compress=1&resize=450x338&vertical=top"/>
        </Link>
        <Link>
        <Image width={"100%"} height={"250px"}
         src="https://cdn.dribbble.com/users/452635/screenshots/17245573/media/a2d1becdfdb42b3a10151bdf163d8296.png?compress=1&resize=400x300&vertical=top"/>
        </Link>
        <Link>
        <Image width={"100%"} height={"250px"}
         src="https://cdn.dribbble.com/users/452635/screenshots/14995224/media/c9ef93a572a21a8f75f8ade82e87a3e4.png?compress=1&resize=320x240&vertical=top"/>
        </Link>
      </Box>

      <Box margin={"auto"} marginTop={"100px"} width={"80%"} marginBottom={"20px"}>
        <Text fontSize={"25px"}>You might also like</Text>
      </Box>

      <Grid templateColumns='repeat(3, 1fr)' gap={10} margin={"auto"} width={"80%"} marginBottom={"150px"}>
          <Link>
           <Image borderRadius={"20px"}
           src="https://cdn.dribbble.com/userupload/2774029/file/still-521dfbeae6f8ea936d23bfee61bed917.png?compress=1&resize=450x338&vertical=top"/>
           <Text fontSize={"20px"}> Netguru TEAM</Text>
          </Link>
          <Link>
          <Image borderRadius={"20px"}
          src="https://cdn.dribbble.com/userupload/2948385/file/original-0c2f1b6cd60d4f8933fac510bf0aeb3c.png?compress=1&resize=450x338&vertical=top"/>
          <Text fontSize={"20px"}> Netguru TEAM</Text>
          </Link>
          <Link>
          <Image borderRadius={"20px"} 
          src="https://cdn.dribbble.com/userupload/3570930/file/original-17d547b683109db25bf745ed56141287.png?compress=1&crop=0x0-1600x1200&resize=450x338&vertical=top"/>
          <Text fontSize={"20px"}> Netguru TEAM</Text>
          </Link>
          <Link>
          <Image borderRadius={"20px"}
           src="https://cdn.dribbble.com/userupload/3023701/file/original-7572817793e71b48d884d69caee2a31f.png?compress=1&resize=450x338&vertical=top"/>
          <Text fontSize={"20px"}> Netguru TEAM</Text>
          </Link>
          <Link>
          <Image borderRadius={"20px"}
           src="https://cdn.dribbble.com/users/6395846/screenshots/17962680/comp_75.png?compress=1&resize=450x338&vertical=top"/>
          <Text fontSize={"20px"}> Netguru TEAM</Text>
          </Link>
          <Link>
          <Image borderRadius={"20px"}
           src="https://cdn.dribbble.com/userupload/3490112/file/original-682fbbfe024bb38817df799a19f1444a.png?compress=1&resize=450x338&vertical=top"/>
          <Text fontSize={"20px"}> Netguru TEAM</Text>
          </Link>
      </Grid>

      <Box margin={"auto"} width={"10%"} marginBottom={"100px"} display="flex" gap={3}>    
      <Box border={"2px solid gray"} padding={"3px 10px 3px 10px"}>L</Box>
      <Box border={"2px solid gray"} padding={"3px 10px 3px 10px"}>F</Box>
      <Box>Like</Box>
      </Box>
      <Box height={"20px"} backgroundColor={"#F1F1F1"}></Box>


      {/* Footer starts from here */}
    </Box>
  );
}