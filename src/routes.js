import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
  MdShoppingCart, 
  MdInsertDriveFile, 
  MdShowChart,
  MdPerson
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import Analytics from "views/admin/Analytics";
import MyNft from "views/admin/MyNfts";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdShoppingCart} // Zmienione na bardziej odpowiednią ikonę
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "My Nfts",
    layout: "/admin",
    icon: <Icon as={MdInsertDriveFile} width='20px' height='20px' color='inherit' />, // Zmienione na ikonę dokumentu
    path: "/MyNft",
    component: MyNft,
  },
  {
    name: "Analytics",
    layout: "/admin",
    icon: <Icon as={MdShowChart} width='20px' height='20px' color='inherit' />, // Zmienione na ikonę wykresu
    path: "/Analytics",
    component: Analytics,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
];

export default routes;