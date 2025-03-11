import Home from '../feature/home/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../feature/details/Details';

export default function RouteNavigations() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
