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
import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import musicnft1 from 'assets/img/nfts/musicnft1.png';
import musicnft2 from 'assets/img/nfts/musicnft2.png';
import musicnft3 from 'assets/img/nfts/musicnft3.png';
import artnft1 from 'assets/img/nfts/artnft1.png';
import artnft2 from 'assets/img/nfts/artnft2.png';
import artnft3 from 'assets/img/nfts/artnft3.png';
import artnft4 from 'assets/img/nfts/artnft4.png';

import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

import eth from 'assets/img/icons/eth.png';
import btc from 'assets/img/icons/btc1.jpg';
import ada from 'assets/img/icons/ada.png';
import usdt from 'assets/img/icons/USDT.png';

const currencyOptions = [
  { value: 'ETH', label: 'ETH' },
  { value: 'BTC', label: 'BTC' },
  { value: 'ADA', label: 'ADA' },
  { value: 'USDT', label: 'USDT' }
];

const getTokenIcon = (token) => {
  switch (token) {
    case 'ETH':
      return eth;
    case 'BTC':
      return btc;
    case 'ADA':
      return ada;
    case 'USDT':
      return usdt;
    default:
      return null;
  }
};

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
                Trending NFTs
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
            <Flex mb='20px' justifyContent='flex-end'>
              <Select
                placeholder='Select currency'
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                width='200px'
              >
                {currencyOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Flex>
            <Button colorScheme='teal' onClick={onOpen} mb='20px'>
              Add NFT
            </Button>
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
                image={musicnft1}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
                tokenIcon={getTokenIcon(selectedCurrency)} // Pass token icon
              />
              <NFT
                name='Symphony of Dreams'
                author='By Liam Thompson'
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
                image={musicnft2}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
                tokenIcon={getTokenIcon(selectedCurrency)} // Pass token icon
              />
              <NFT
                name='Harmonic Waves'
                author='By Ava Johnson'
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
                image={musicnft3}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
                tokenIcon={getTokenIcon(selectedCurrency)} // Pass token icon
              />
            </SimpleGrid>
            <Text
              mt='45px'
              mb='36px'
              color={textColor}
              fontSize='2xl'
              ms='24px'
              fontWeight='700'>
              Recently Added
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
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
                image={artnft1}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
                tokenIcon={getTokenIcon(selectedCurrency)} // Pass token icon
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
                image={artnft2}
                currentbid={`${selectedCurrency} 0.91`}
                download='#'
                tokenIcon={getTokenIcon(selectedCurrency)} // Pass token icon
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
                tokenIcon={getTokenIcon(selectedCurrency)} // Pass token icon
              />
            </SimpleGrid>

            {/* My Listings Section */}
            <Text
              mt='45px'
              mb='36px'
              color={textColor}
              fontSize='2xl'
              ms='24px'
              fontWeight='700'>
              My Listings
            </Text>
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
                  tokenIcon={getTokenIcon(selectedCurrency)} // Pass token icon
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <TableTopCreators
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card p='0px'>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                History
              </Text>
              <Button variant='action'>See all</Button>
            </Flex>

            <HistoryItem
              name='Symphony of Dreams'
              author='By Liam Thompson'
              date='30s ago'
              image={musicnft2}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Echoes of the Past'
              author='By Sofia Martinez'
              date='58s ago'
              image={musicnft1}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Harmonic Waves'
              author='By Ava Johnson'
              date='1m ago'
              image={musicnft3}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Abstract Reflections'
              author='By Emily Clark'
              date='1m ago'
              image={artnft1}
              price={`${selectedCurrency} 0.91`}
            />
            <HistoryItem
              name='Vivid Impressions'
              author='By Noah Adams'
              date='2m ago'
              image={artnft2}
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

      {/* Add NFT Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New NFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb='4'>
              <FormLabel>Name</FormLabel>
              <Input
                name='name'
                value={nftData.name}
                onChange={handleInputChange}
                placeholder='NFT Name'
              />
            </FormControl>
            <FormControl mb='4'>
              <FormLabel>Author</FormLabel>
              <Input
                name='author'
                value={nftData.author}
                onChange={handleInputChange}
                placeholder='Author'
              />
            </FormControl>
            <FormControl mb='4'>
              <FormLabel>Image</FormLabel>
              <Input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
              />
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt='Image preview'
                  mt='4'
                  boxSize='200px'
                  objectFit='cover'
                />
              )}
            </FormControl>
            <FormControl mb='4'>
              <FormLabel>Description</FormLabel>
              <Textarea
                name='description'
                value={nftData.description}
                onChange={handleInputChange}
                placeholder='Description'
              />
            </FormControl>
            <FormControl mb='4'>
              <FormLabel>Current Bid</FormLabel>
              <Input
                name='currentBid'
                value={nftData.currentBid}
                onChange={handleInputChange}
                placeholder='Current Bid'
              />
            </FormControl>
            <Button colorScheme='teal' onClick={handleSubmit}>
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
