package com.audira.lib.reactnative.androidfinish

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod

class AndroidFinish (
	private val reactContext: ReactApplicationContext,
) : AndroidFinishSpec(reactContext), AndroidFinishInterface {

	override fun getName(): String = AndroidFinishInterface.NAME

	@ReactMethod
	override fun finish() {
		reactContext.currentActivity?.finish()
	}

	@ReactMethod
	override fun finishAffinity() {
		reactContext.currentActivity?.finishAffinity()
	}

	@ReactMethod
	override fun finishAfterTransition() {
		reactContext.currentActivity?.finishAfterTransition()
	}

	@ReactMethod
	override fun finishAndRemoveTask() {
		reactContext.currentActivity?.finishAndRemoveTask()
	}

	/**
	 * There is no official way to do this.
	 * Need to be tested on another SDK version (and various devices?)  
	 * Tested on SDKs:
	 * - 34 (Android 14)
	 * - 33 (Android 13)
	 * https://stackoverflow.com/a/46848226
	 */
	@ReactMethod
	override fun unstable_restart() {
		val pm = reactContext.packageManager
		val packageName = reactContext.packageName
		val intent = pm.getLaunchIntentForPackage(packageName)
		val componentName = intent?.component
		if(componentName != null) {
			val mainIntent = Intent.makeRestartActivityTask(componentName)
			mainIntent.setPackage(packageName)
			reactContext.startActivity(mainIntent)
			Runtime.getRuntime().exit(0)
		}
	}

}