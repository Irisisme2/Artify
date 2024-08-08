import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from 'components/card/Card';

// Przykładowe dane do wykresu
const salesData = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 2210 },
  { name: 'Mar', sales: 2000, revenue: 2290 },
  { name: 'Apr', sales: 2780, revenue: 2000 },
  { name: 'May', sales: 1890, revenue: 2181 },
  { name: 'Jun', sales: 2390, revenue: 2500 },
  { name: 'Jul', sales: 3490, revenue: 2100 },
];

const SalesTrends = () => {
  return (
    <Box p='4'>
      <Card p='4'>
        <Text fontSize='lg' fontWeight='bold' mb='4'>Sales Trends 📈</Text>
        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='sales' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='revenue' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
};

export default SalesTrends;
