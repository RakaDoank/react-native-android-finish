import {
	useEffect,
	useRef,
} from 'react'

import {
	BackHandler,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	ToastAndroid,
	useColorScheme,
	View,
	type PressableProps,
	type ViewProps,
} from 'react-native'

import {
	finish,
	finishAffinity,
	finishAfterTransition,
	finishAndRemoveTask,
	unstable_restart,
} from 'react-native-android-finish'

export default function App() {

	const
		ref =
			useRef<{
				backHandlerCount: number,
				backHandlerTimeout: ReturnType<typeof setTimeout> | null,
			}>({
				backHandlerCount: 0,
				backHandlerTimeout: null,
			}),

		isDarkMode =
			useColorScheme() === 'dark',

		finishHandler: ButtonProps['onPress'] =
			() => {
				finish()
			},

		finishAffinityHandler: ButtonProps['onPress'] =
			() => {
				finishAffinity()
			},

		finishAfterTransitionHandler: ButtonProps['onPress'] =
			() => {
				finishAfterTransition()
			},

		finishAndRemoveTaskHandler: ButtonProps['onPress'] =
			() => {
				finishAndRemoveTask()
			},

		unstableRestartHandler: ButtonProps['onPress'] =
			() => {
				unstable_restart()
			}

	useEffect(() => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
			ref.current.backHandlerCount++

			if(!ref.current.backHandlerTimeout) {
				ref.current.backHandlerTimeout = setTimeout(() => {
					ref.current.backHandlerCount = 0
				}, 2500)
			}

			if(ref.current.backHandlerCount == 1) {
				ToastAndroid.show(
					'Press again to exit',
					ToastAndroid.SHORT,
				)
			} else if(ref.current.backHandlerCount == 2) {
				if(ref.current.backHandlerTimeout) {
					clearTimeout(ref.current.backHandlerTimeout)
				}
				finish()
			}

			return true
		})

		return () => {
			if(ref.current.backHandlerTimeout) {
				clearTimeout(ref.current.backHandlerTimeout)
			}
			backHandler.remove()
		}
	}, [])

	return (
		<View style={ styles.container }>
			<StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' }/>

			<View
				style={ styles.buttonContainer }
			>
				<Button
					text="finish()"
					onPress={ finishHandler }
				/>
				<Button
					text="finishAffinity()"
					onPress={ finishAffinityHandler }
				/>
				<Button
					text="finishAfterTransition()"
					onPress={ finishAfterTransitionHandler }
				/>
				<Button
					text="finishAndRemoveTask()"
					onPress={ finishAndRemoveTaskHandler }
				/>
				<Button
					text="unstable_restart()"
					onPress={ unstableRestartHandler }
				/>

				<Text>
					Try to use back button (or back swipe gesture) of your android emulator or device as an example to finish the app by <Text style={ styles.textBold }>double press back button confirmation</Text>
				</Text>
			</View>
		</View>
	)

}

const
	styles =
		StyleSheet.create({
			container: {
				flex: 1,
				paddingVertical: '10%',
			},
			textBold: {
				fontWeight: 'bold',
			},
			buttonContainer: {
				rowGap: 12,
				padding: 16,
			},
			button: {
				paddingHorizontal: 8,
				paddingVertical: 6,
				backgroundColor: 'purple',
				borderRadius: 6,
			},
			buttonText: {
				textAlign: 'center',
				color: 'white',
			},
		})

interface ButtonProps extends Omit<PressableProps, 'children'> {
	text: string,
	style?: ViewProps['style'],
}
function Button({
	text,
	style,
	...props
}: ButtonProps) {

	return (
		<Pressable
			{ ...props }
			style={ [
				styles.button,
				style,
			] }
		>
			<Text
				style={ styles.buttonText }
			>
				{ text }
			</Text>
		</Pressable>
	)

}
