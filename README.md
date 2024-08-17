# react-native-android-finish

A simple module to gracefully finish the React Native android app programatically.  
It is better to finish the app with its transition/animation rather than force kill the app process.

## Installation
    npm install react-native-android-finish
🚀 This library is supported in New Architecture (Turbo Module)

## Usage
### - finish()
Close current RN activity
```ts
import {
    Button,
} from 'react-native'
import {
    finish,
} from 'react-native-android-finish'

export default function App(): React.JSX.Element {
    return (
        <Button title="Close App" onPress={ finish }/>
    )
}
```
Reference: https://developer.android.com/reference/android/app/Activity#finish()  

### - finishAffinity()
Similar to the `finish()`, but it closes all the activities present.  
Mostly, RN apps only need the `finish()`
```ts
import {
    Button,
} from 'react-native'
import {
    finishAffinity,
} from 'react-native-android-finish'

export default function App(): React.JSX.Element {
    return (
        <Button title="Close App" onPress={ finishAffinity }/>
    )
}
```
Reference: https://developer.android.com/reference/android/app/Activity#finishAffinity()  

### - finishAfterTransition() 
Reverses the Activity Scene entry Transition, triggers the calling Activity to reverse its exit Transition, and calls the `finish()` when the exit Transition completes  
Mostly, RN apps only need the `finish()` 
```ts
import {
    Button,
} from 'react-native'
import {
    finishAfterTransition,
} from 'react-native-android-finish'

export default function App(): React.JSX.Element {
    return (
        <Button title="Close App" onPress={ finishAfterTransition }/>
    )
}
```
Reference: https://developer.android.com/reference/android/app/Activity#finishAffinity()  

### - finishAndRemoveTask()
Close RN activity along with the Recent Screen/Task of the app
```ts
import {
    Button,
} from 'react-native'
import {
    finishAndRemoveTask,
} from 'react-native-android-finish'

export default function App(): React.JSX.Element {
    return (
        <Button title="Close App" onPress={ finishAndRemoveTask }/>
    )
}
```
If you don't know what the Recent Screens/Tasks is: https://developer.android.com/guide/components/activities/recents  
Reference: https://developer.android.com/reference/android/app/Activity#finishAndRemoveTask()

### - unstable_restart()
There is no official way to restart Android app.  
This method is an abstraction method that copied from https://stackoverflow.com/a/46848226  
Need to be tested on other Android SDKs (and various devices?)
```ts
import {
    Button,
} from 'react-native'
import {
    unstable_restart,
} from 'react-native-android-finish'

export default function App(): React.JSX.Element {
    return (
        <Button title="Restart App" onPress={ unstable_restart }/>
    )
}
```
You can see the [AndroidFinish.kt](https://github.com/RakaDoank/react-native-android-finish/blob/main/android/src/main/java/com/audira/lib/reactnative/androidfinish/AndroidFinish.kt)

### About BackHandler API
This is not the same as [BackHandler.exitApp()](https://reactnative.dev/docs/backhandler) which simply minimizes the application.

## For iOS
There is no behaviour on iOS to finish the app like this module in Android. It's their own guideline and should've be done by the user manually by remove the app in their recent apps.
Probably, you can use this alternative https://www.npmjs.com/package/react-native-exit-app.