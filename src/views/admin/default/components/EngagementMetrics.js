import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from 'components/card/Card';

// Przykładowe dane do wykresu z rzeczywistymi nazwami dzieł
const engagementData = [
  { name: 'Celestial Harmony', views: 5000, likes: 3000 },
  { name: 'Mystic Dawn', views: 4200, likes: 2700 },
  { name: 'Ethereal Symphony', views: 3500, likes: 2500 },
  { name: 'Quantum Leap', views: 4700, likes: 2200 },
  { name: 'Galactic Echoes', views: 3900, likes: 2300 },
  { name: 'Aurora Lights', views: 3100, likes: 2100 },
  { name: 'Stellar Voyage', views: 4500, likes: 2800 },
];

const EngagementMetrics = () => {
  return (
    <Box p='4'>
      <Card p='4'>
        <Text fontSize='lg' fontWeight='bold' mb='4'>Engagement Metrics 📊</Text>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='views' fill='#8884d8' />
            <Bar dataKey='likes' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
};

export default EngagementMetrics;
