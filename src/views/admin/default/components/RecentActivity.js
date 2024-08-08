import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Divider,
  HStack,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
  Avatar
} from '@chakra-ui/react';
import { MdAttachMoney, MdImage, MdInfo } from 'react-icons/md';
import Card from 'components/card/Card'; // Zakładając, że komponent Card jest zaimportowany z odpowiedniego miejsca

// Import ikon NFT
import musicnft1 from 'assets/img/nfts/musicnft1.png';
import musicnft2 from 'assets/img/nfts/musicnft2.png';
import musicnft3 from 'assets/img/nfts/musicnft3.png';
import artnft1 from 'assets/img/nfts/artnft1.png';
import artnft2 from 'assets/img/nfts/artnft2.png';
import artnft3 from 'assets/img/nfts/artnft3.png';
import artnft4 from 'assets/img/nfts/artnft4.png';

// Import ikon kryptowalut
import eth from 'assets/img/icons/eth.png';
import btc from 'assets/img/icons/btc1.jpg';
import ada from 'assets/img/icons/ada.png';
import usdt from 'assets/img/icons/USDT.png';

// Przykładowe dane
const recentSales = [
  { date: '2024-08-01', amount: '$150.00' },
  { date: '2024-08-05', amount: '$200.00' },
  { date: '2024-08-07', amount: '$350.00' }
];

const recentListings = [
  {
    title: 'Cosmic Journey',
    date: '2024-08-03',
    img: artnft1,
    description: 'A beautiful cosmic-themed artwork.',
    bidPrice: {
      usd: '$500.00',
      eth: '0.3 ETH',
      btc: '0.015 BTC',
      usdt: '$500.00',
      ada: '750 ADA'
    }
  },
  {
    title: 'Mystic Forest',
    date: '2024-08-06',
    img: musicnft2,
    description: 'An enchanting forest with mystical elements.',
    bidPrice: {
      usd: '$350.00',
      eth: '0.2 ETH',
      btc: '0.01 BTC',
      usdt: '$350.00',
      ada: '500 ADA'
    }
  },
  {
    title: 'Digital Dreamscape',
    date: '2024-08-08',
    img: artnft3,
    description: 'A surreal digital dreamscape of vibrant colors.',
    bidPrice: {
      usd: '$400.00',
      eth: '0.25 ETH',
      btc: '0.012 BTC',
      usdt: '$400.00',
      ada: '600 ADA'
    }
  }
];

const currencyIcons = {
  usd: null,   // USD nie ma ikony, można dodać tekst lub inny symbol, jeśli potrzebny
  eth: eth,
  btc: btc,
  usdt: usdt,
  ada: ada
};

const RecentActivity = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedListing, setSelectedListing] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('usd');

  const handleOpenModal = (listing) => {
    setSelectedListing(listing);
    setSelectedCurrency('usd'); // Domyślna waluta to USD
    onOpen();
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <Box p='4'>
      <Flex direction='column' gap='4'>
        {/* Recent Sales Card */}
        <Card>
          <Flex align='center' mb='4'>
            <MdAttachMoney size='24px' color='green.500' />
            <Text ml='2' fontWeight='bold'>Recent Sales</Text>
          </Flex>
          {recentSales.map((sale, index) => (
            <Box key={index} mb='2'>
              <HStack justify='space-between'>
                <Text>{sale.date}</Text>
                <Text color='green.500'>{sale.amount}</Text>
              </HStack>
            </Box>
          ))}
        </Card>

        <Divider my='4' />

        {/* Recent Listings Card */}
        <Card>
          <Flex align='center' mb='4'>
            <MdImage size='24px' color='blue.500' />
            <Text ml='2' fontWeight='bold'>Recent Listings</Text>
          </Flex>
          {recentListings.map((listing, index) => (
            <Box key={index} mb='2'>
              <HStack spacing='4'>
                <Image src={listing.img} alt={listing.title} boxSize='50px' objectFit='cover' borderRadius='md' />
                <Flex direction='column' flex='1'>
                  <Text fontWeight='bold'>{listing.title}</Text>
                  <Text>{listing.date}</Text>
                </Flex>
                <Button
                  size='sm'
                  colorScheme='teal'
                  variant='solid'
                  leftIcon={<MdInfo />}
                  _hover={{ bg: 'teal.600', transform: 'scale(1.05)' }}
                  _focus={{ boxShadow: 'outline' }}
                  transition='all 0.2s'
                  onClick={() => handleOpenModal(listing)}
                >
                  View Details
                </Button>
              </HStack>
            </Box>
          ))}
        </Card>

        {/* Modal for Listing Details */}
        {selectedListing && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedListing.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image src={selectedListing.img} alt={selectedListing.title} boxSize='100%' objectFit='cover' borderRadius='md' mb='4' />
                <Text fontWeight='bold'>Description:</Text>
                <Text>{selectedListing.description}</Text>
                <Text fontWeight='bold' mt='4'>Bid Price:</Text>
                <Flex align='center'>
                  <Select
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    size='sm'
                    width='auto'
                    mr='4'
                    bg='gray.100'
                    borderRadius='md'
                  >
                    <option value='usd'>USD</option>
                    <option value='eth'>ETH</option>
                    <option value='btc'>BTC</option>
                    <option value='usdt'>USDT</option>
                    <option value='ada'>ADA</option>
                  </Select>
                  <HStack spacing='2'>
                    {currencyIcons[selectedCurrency] && (
                      <Avatar src={currencyIcons[selectedCurrency]} size='sm' />
                    )}
                    <Text fontSize='lg' fontWeight='bold'>
                      {selectedListing.bidPrice[selectedCurrency]}
                    </Text>
                  </HStack>
                </Flex>
                <Text mt='4' color='gray.500'>Date Listed: {selectedListing.date}</Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Flex>
    </Box>
  );
};

export default RecentActivity;
