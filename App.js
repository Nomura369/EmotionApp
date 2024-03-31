import 'react-native-gesture-handler';

//字體尚未引入

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import Navigation from "./src/navigation/index";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <GluestackUIProvider config={config}>
          <StatusBar />
          <Navigation />
        </GluestackUIProvider>         
      </SafeAreaView>  
    </SafeAreaProvider>
  );
};

export default App;
