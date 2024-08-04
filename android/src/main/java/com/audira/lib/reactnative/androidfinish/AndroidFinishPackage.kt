package com.audira.lib.reactnative.androidfinish

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class AndroidFinishPackage : TurboReactPackage() {
	override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
		if(name == AndroidFinishInterface.NAME) {
			AndroidFinish(reactContext)
		} else {
			null
		}

	override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
		val isTurboModule: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
		return ReactModuleInfoProvider {
			mapOf(
				AndroidFinishInterface.NAME to ReactModuleInfo(
					AndroidFinishInterface.NAME,
					AndroidFinishInterface.NAME,
					false, // canOverrideExistingModule
					false, // needsEagerInit
					true, // hasConstants
					false, // isCxxModule
					isTurboModule, // isTurboModule
				)
			)
		}
	}
}