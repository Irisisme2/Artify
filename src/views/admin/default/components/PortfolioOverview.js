import React, { useState } from 'react';
import { Box, Text, Flex, Image, Button, VStack, HStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Select, FormControl, FormLabel } from '@chakra-ui/react';
import Card from 'components/card/Card';

// Import obrazów NFT
import musicnft1 from 'assets/img/nfts/musicnft1.png';
import musicnft2 from 'assets/img/nfts/musicnft2.png';
import musicnft3 from 'assets/img/nfts/musicnft3.png';
import artnft1 from 'assets/img/nfts/artnft1.png';
import artnft2 from 'assets/img/nfts/artnft2.png';
import artnft3 from 'assets/img/nfts/artnft3.png';
import artnft4 from 'assets/img/nfts/artnft4.png';

// Ikony kryptowalut
import eth from 'assets/img/icons/eth.png';
import btc from 'assets/img/icons/btc1.jpg';
import ADA from 'assets/img/icons/ada.png';
import usdt from 'assets/img/icons/USDT.png';

// Przykładowe dane
const featuredArtworks = [
  { title: 'Celestial Melody', img: musicnft1, description: 'A stunning visual representation of celestial music.', artist: 'John Doe', category: 'Music', year: '2024' },
  { title: 'Ethereal Beauty', img: artnft2, description: 'An ethereal piece that captures the beauty of the unknown.', artist: 'Jane Smith', category: 'Art', year: '2023' },
  { title: 'Mystic Waves', img: artnft3, description: 'A mesmerizing artwork that evokes the power of the ocean.', artist: 'Alice Brown', category: 'Art', year: '2024' }
];

const upcomingAuctions = [
  { title: 'Galactic Artifacts', date: '2024-09-01', img: artnft4, description: 'A collection of rare artifacts from across the galaxy.', currentBid: '$500', startingPrice: '$300', endDate: '2024-09-01', artist: 'Liam Johnson', category: 'Art' },
  { title: 'Future Visions', date: '2024-09-15', img: musicnft2, description: 'A glimpse into the future through imaginative digital art.', currentBid: '$700', startingPrice: '$400', endDate: '2024-09-15', artist: 'Sophia Lee', category: 'Music' },
  { title: 'Dreamscapes', date: '2024-10-01', img: musicnft3, description: 'A series of dreamlike landscapes that push the boundaries of reality.', currentBid: '$600', startingPrice: '$350', endDate: '2024-10-01', artist: 'Ethan Davis', category: 'Art' }
];

const PortfolioOverview = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState('');

  const handleDetailsClick = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
    onOpen();
  };

  return (
    <Box p='4'>
      {/* Featured Artworks */}
      <Card p='2' mb='4'>
        <Text fontSize='lg' fontWeight='bold' mb='2'>Featured Artworks 🌟</Text>
        <Flex wrap='wrap' gap='2'>
          {featuredArtworks.map((artwork, index) => (
            <Card key={index} p='2' shadow='sm' borderRadius='md' maxW='150px'>
              <Image src={artwork.img} alt={artwork.title} borderRadius='md' mb='1' />
              <Text fontSize='sm' textAlign='center'>{artwork.title}</Text>
              <Button mt='2' colorScheme='teal' size='sm' onClick={() => handleDetailsClick(artwork, 'featured')}>
                View Details
              </Button>
            </Card>
          ))}
        </Flex>
      </Card>

      {/* Upcoming Auctions */}
      <Card p='2'>
        <Text fontSize='lg' fontWeight='bold' mb='2'>Upcoming Auctions 🏷️</Text>
        {upcomingAuctions.map((auction, index) => (
          <Card key={index} p='2' shadow='sm' borderRadius='md' mb='2'>
            <HStack spacing='2'>
              <Image src={auction.img} alt={auction.title} boxSize='80px' objectFit='cover' borderRadius='md' />
              <VStack align='start' spacing='1'>
                <Text fontSize='sm' fontWeight='bold'>{auction.title}</Text>
                <Text fontSize='xs' color='gray.500'>{auction.date}</Text>
              </VStack>
            </HStack>
            <Button mt='2' colorScheme='teal' size='sm' variant='outline' onClick={() => handleDetailsClick(auction, 'auction')}>
              View Details
            </Button>
          </Card>
        ))}
      </Card>

      {/* Modal for Details */}
      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedItem ? selectedItem.title : ''}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedItem && (
              <>
                <Image src={selectedItem.img} alt={selectedItem.title} mb='4' borderRadius='md' />
                <Text mb='4'>{selectedItem.description}</Text>
                {modalType === 'auction' ? (
                  <>
                    <VStack align='start' spacing='2' mb='4'>
                      <Text fontWeight='bold'>Current Bid: {selectedItem.currentBid}</Text>
                      <Text fontWeight='bold'>Starting Price: {selectedItem.startingPrice}</Text>
                      <Text fontWeight='bold'>End Date: {selectedItem.endDate}</Text>
                      <Text fontWeight='bold'>Artist: {selectedItem.artist}</Text>
                      <Text fontWeight='bold'>Category: {selectedItem.category}</Text>
                    </VStack>
                    <FormControl mb='4'>
                      <FormLabel>Bid Price</FormLabel>
                      <Select placeholder='Select currency'>
                        <option value='usd'><Image src={usdt} boxSize='20px' display='inline-block' mr='2' /> USD</option>
                        <option value='eth'><Image src={eth} boxSize='20px' display='inline-block' mr='2' /> ETH</option>
                        <option value='btc'><Image src={btc} boxSize='20px' display='inline-block' mr='2' /> BTC</option>
                        <option value='ada'><Image src={ADA} boxSize='20px' display='inline-block' mr='2' /> ADA</option>
                      </Select>
                    </FormControl>
                  </>
                ) : (
                  <VStack align='start' spacing='2'>
                    <Text fontWeight='bold'>Artist: {selectedItem.artist}</Text>
                    <Text fontWeight='bold'>Category: {selectedItem.category}</Text>
                    <Text fontWeight='bold'>Year: {selectedItem.year}</Text>
                  </VStack>
                )}
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PortfolioOverview;