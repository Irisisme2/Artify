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
  Select
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

const currencyOptions = [
  { value: 'ETH', label: 'ETH' },
  { value: 'BTC', label: 'BTC' },
  { value: 'ADA', label: 'ADA' },
  { value: 'SOL', label: 'SOL' }
];

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  const [selectedCurrency, setSelectedCurrency] = useState('ETH');

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
      {/* Delete Product */}
    </Box>
  );
}
