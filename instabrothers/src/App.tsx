import { 
  useFonts, 
  Inter_400Regular,  
  Inter_600SemiBold,  
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';


import { Loading } from './components/loadings/Loading';
import { Routes } from './routes';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ 
    Inter_400Regular,  
    Inter_600SemiBold,  
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded) {
    return (
      <Loading/>
    );
  }

  if(Platform.OS === 'android') { 
    require('intl'); 
    require('intl/locale-data/jsonp/pt-BR'); 
  }

  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
    
  );
}


