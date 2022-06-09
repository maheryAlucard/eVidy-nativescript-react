import { NativeBaseProvider } from 'native-base'
import { mainStackNavigator as AppContainer } from './components/Navigator'

export const Providers = () => {
    return (
        <NativeBaseProvider>
            <AppContainer />
        </NativeBaseProvider>
    )
}