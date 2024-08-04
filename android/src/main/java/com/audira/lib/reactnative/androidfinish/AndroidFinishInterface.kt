package com.audira.lib.reactnative.androidfinish

interface AndroidFinishInterface {

	companion object {
		const val NAME = "RNAndroidFinish"
	}

	fun finish()
	fun finishAffinity()
	fun finishAndRemoveTask()
	fun unstable_restart()

}