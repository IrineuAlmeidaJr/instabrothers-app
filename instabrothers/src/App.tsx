import { 
  useFonts, 
  Inter_400Regular,  
  Inter_600SemiBold,  
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';


import { Loading } from './components/Loading';
import { Routes } from './routes';
import { StatusBar } from 'expo-status-bar';

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

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
    
  );
}


