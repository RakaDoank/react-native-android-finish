package com.audira.lib.reactnative.androidfinish

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class AndroidFinishPackage : TurboReactPackage() {

	override fun getModule(
		name: String,
		reactContext: ReactApplicationContext,
	): NativeModule? {
		return if(name == AndroidFinishSpec.NAME) {
			AndroidFinish(reactContext)
		} else {
			null
		}
	}

	override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
		return ReactModuleInfoProvider {
			mapOf(
				AndroidFinishSpec.NAME to ReactModuleInfo(
					name = AndroidFinishSpec.NAME,
					className = AndroidFinishSpec.NAME,
					canOverrideExistingModule = false,
					needsEagerInit = false,
					hasConstants = true,
					isCxxModule = false,
					isTurboModule = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
				)
			)
		}
	}

}