import { StackNavigationTypes } from './stack.routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackNavigationTypes {}
  }
}
