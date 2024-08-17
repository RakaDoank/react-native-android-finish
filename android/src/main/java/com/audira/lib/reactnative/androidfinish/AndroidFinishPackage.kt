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
		return if(name == AndroidFinishInterface.NAME) {
			AndroidFinish(reactContext)
		} else {
			null
		}
	}

	override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
		return ReactModuleInfoProvider {
			mapOf(
				AndroidFinishInterface.NAME to ReactModuleInfo(
					name = AndroidFinishInterface.NAME,
					className = AndroidFinishInterface.NAME,
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