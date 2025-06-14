import NativeModule from './native-module'

/**
 * Close current RN activity  
 *   
 * Reference: https://developer.android.com/reference/android/app/Activity#finish()
 */
export function finish() {
	NativeModule.finish()
}

/**
 * Similar to the `finish()`, but it closes all the activities present.  
 * Mostly, RN apps only need the `finish()`  
 *   
 * Reference: https://developer.android.com/reference/android/app/Activity#finishActivity(int)
 */
export function finishAffinity() {
	NativeModule.finishAffinity()
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
	NativeModule.finishAfterTransition()
}

/**
 * Close RN activity along with the Recent Screens/Tasks  
 * If you don't know what the Recent Screens/Tasks is: https://developer.android.com/guide/components/activities/recents  
 * Required: Android API level >= 21  
 *   
 * Reference: https://developer.android.com/reference/android/app/Activity#finishAndRemoveTask()
 */
export function finishAndRemoveTask() {
	NativeModule.finishAndRemoveTask()
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
	NativeModule.unstable_restart()
}
