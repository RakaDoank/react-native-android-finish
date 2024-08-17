import {
	NativeModules,
} from 'react-native'

const LINKING_ERROR =
	`The package 'react-native-android-finish' doesn't seem to be linked. Make sure: \n\n` +
	'- You rebuilt the app after installing the package\n' +
	'- You are not using Expo Go\n'

// @ts-expect-error - Not an error. See this reference: https://github.com/react-native-community/RNNewArchitectureLibraries/blob/feat/back-turbomodule/example-library/src/index.js
const isTurboModuleEnabled = global.__turboModuleProxy != null

const Module_ = isTurboModuleEnabled
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	? require('./NativeAndroidFinish').default
	: NativeModules.RNAndroidFinish

const Module = Module_
	? Module_
	: new Proxy(
		{},
		{
			get() {
				throw new Error(LINKING_ERROR);
			},
		}
	)

/**
 * Close current RN activity  
 *   
 * Reference: https://developer.android.com/reference/android/app/Activity#finish()
 */
export function finish() {
	Module.finish()
}

/**
 * Similar to the `finish()`, but it closes all the activities present.  
 * Mostly, RN apps only need the `finish()`  
 *   
 * Reference: https://developer.android.com/reference/android/app/Activity#finishActivity(int)
 */
export function finishAffinity() {
	Module.finishAffinity()
}

/**
 * Mostly, RN apps only need the {@link finish()}  
 * Reverses the Activity Scene entry Transition and triggers the calling Activity to reverse its exit Transition.  
 * When the exit Transition completes, {@link finish()} is called.  
 * If no entry Transition was used, {@link finish()} is called immediately and the Activity exit Transition is run.  
 * Required: Android API level >= 21  
 *   
 * Reference: https://developer.android.com/reference/android/app/Activity#finishAfterTransition()
 */
export function finishAfterTransition() {
	Module.finishAfterTransition()
}

/**
 * Close RN activity along with the Recent Screens/Tasks  
 * If you don't know what the Recent Screens/Tasks is: https://developer.android.com/guide/components/activities/recents  
 * Required: Android API level >= 21  
 *   
 * Reference: https://developer.android.com/reference/android/app/Activity#finishAndRemoveTask()
 */
export function finishAndRemoveTask() {
	Module.finishAndRemoveTask()
}

/**
 * There is no official way to restart Android app  
 * This is method is copied from this answer https://stackoverflow.com/a/46848226  
 * You can see the `AndroidFinish.kt` at
 * {@link file://./../android/src/main/java/com/audira/lib/reactnative/androidfinish/AndroidFinish.kt}  
 * 
 * Need to be tested on other Android SDKs (and various devices?)
 */
export function unstable_restart() {
	Module.unstable_restart()
}