import React from 'react';
// No need to import Tabs if you are removing it entirely
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabNavigations from '@/Apps/Navigations/TabNavigations';
// Import your custom navigation here if needed

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    // <NavigationContainer>
      <TabNavigations/>
    // </NavigationContainer>
  );
}
