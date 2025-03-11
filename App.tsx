import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import RouteNavigations from './src/route/Route';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <GestureHandlerRootView>
          <RouteNavigations />
        </GestureHandlerRootView>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
