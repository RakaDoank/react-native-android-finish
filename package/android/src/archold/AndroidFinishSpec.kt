package com.audira.lib.reactnative.androidfinish

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

abstract class AndroidFinishSpec internal constructor(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

	companion object {
		const val NAME = "RNAndroidFinish"
	}

	override fun getName() = NAME

	abstract fun finish()

	abstract fun finishAffinity()

	abstract fun finishAfterTransition()

	abstract fun finishAndRemoveTask()

	abstract fun unstable_restart()

}