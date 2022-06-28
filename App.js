import * as React from 'react' 


import { NativeBaseProvider, Root} from 'native-base';
import Navigator from './src/AppNavigator';



function App() {
  return (
        <NativeBaseProvider>
            <Navigator/>
        </NativeBaseProvider>
  );
}

export default App;
