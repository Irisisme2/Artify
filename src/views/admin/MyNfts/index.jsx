import React, { useState } from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Image
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/MyNfts/components/Banner";
import HistoryItem from "views/admin/MyNfts/components/HistoryItem";
import NFT from "components/card/NFT1";
import Card from "components/card/Card.js";

// Assets
import vangogh from 'assets/img/nfts/vangogh.png';
import vangogh2 from 'assets/img/nfts/vangogh2.png';
import vangogh3 from 'assets/img/nfts/vangogh3.png';
import beksinski1 from 'assets/img/nfts/beksinski1.png';
import beksinski2 from 'assets/img/nfts/beksinski2.png';
import artnft3 from 'assets/img/nfts/artnft3.png';
import artnft4 from 'assets/img/nfts/artnft4.png';

import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  const [selectedCurrency, setSelectedCurrency] = useState('ETH');
  const [myListings, setMyListings] = useState([]); // State to store user-added NFTs
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nftData, setNftData] = useState({
    name: '',
    author: '',
    image: '',
    description: '',
    currentBid: ''
  });
  const [imagePreview, setImagePreview] = useState(''); // State for image preview

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNftData({
      ...nftData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNftData({
          ...nftData,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Add new NFT to the list of my listings
    setMyListings([
      ...myListings,
      {
        ...nftData,
        image: nftData.image || 'default_image_url' // Fallback image URL
      }
    ]);
    setNftData({
      name: '',
      author: '',
      image: '',
      description: '',
      currentBid: ''
    });
    setImagePreview('');
    onClose();
  };

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                My Nfts
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  Art
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#music'>
                  Music
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#collectibles'>
                  Collectibles
                </Link>
                <Link color={textColorBrand} fontWeight='500' to='#sports'>
                  Sports
                </Link>
              </Flex>
            </Flex>
          
        
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <NFT
                name='Echoes of the Past'
                author='By Sofia Martinez'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={artnft4}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
              />
              <NFT
                name='Symphony of Dreams'
                author='By Van gogh'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={vangogh2}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
              />
              <NFT
                name='Dark days'
                author='By Beksinski'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={beksinski1}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
              />

              <NFT
                name='Abstract Reflections'
                author='By Emily Clark'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={beksinski2}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
              />
              <NFT
                name='Vivid Impressions'
                author='By Noah Adams'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={vangogh3}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
              />
              <NFT
                name='Cosmic Expressions'
                author='By Mia Roberts'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={artnft3}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
              />
            </SimpleGrid>

            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
              {myListings.map((nft, index) => (
                <NFT
                  key={index}
                  name={nft.name}
                  author={nft.author}
                  bidders={[
                    Avatar1,
                    Avatar2,
                    Avatar3,
                    Avatar4,
                    Avatar1,
                    Avatar1,
                    Avatar1,
                    Avatar1,
                  ]}
                  image={nft.image}
                  currentbid={`${selectedCurrency} ${nft.currentBid}`}
                  download='#'
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>

          <Card p='0px'>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
                           <Text color={textColor} fontSize='xl' fontWeight='600'>
                My Sales📈
              </Text>
              <Button variant='action'>See all</Button>
            </Flex>

            <HistoryItem
              name='Symphony of Dreams'
              author='By Liam Thompson'
              date='30s ago'
              image={vangogh2}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Echoes of the Past'
              author='By Sofia Martinez'
              date='58s ago'
              image={artnft4}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Dark Days'
              author='By Beksinski'
              date='1m ago'
              image={beksinski1}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Abstract Reflections'
              author='By Beksinski'
              date='1m ago'
              image={beksinski2}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Vivid Impressions'
              author='By Van Gogh'
              date='2m ago'
              image={vangogh3}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Cosmic Expressions'
              author='By Mia Roberts'
              date='3m ago'
              image={artnft3}
              price={`${selectedCurrency} 0.91`}
            />

          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}