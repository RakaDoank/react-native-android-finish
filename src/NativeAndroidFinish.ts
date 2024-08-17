import {
	TurboModuleRegistry,
	type TurboModule,
} from 'react-native'

export interface Spec extends TurboModule {
	finish: () => void,
	finishAffinity: () => void,
	finishAfterTransition: () => void,
	finishAndRemoveTask: () => void,
	unstable_restart: () => void,
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNAndroidFinish')