import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NotesListScreen from "../../src/screens/NotesListScreen";
import DrawingScreen from "../../src/screens/DrawingScreen";
import NoteDetailScreen from "../../src/screens/NoteDetailScreen";
import PdfPickerScreen from "../../src/screens/PdfPickerScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NotesList">
        <Stack.Screen name="NotesList" component={NotesListScreen} />
        <Stack.Screen name="Drawing" component={DrawingScreen} />
        <Stack.Screen name="NoteDetail" component={NoteDetailScreen} />
        <Stack.Screen name="PdfPicker" component={PdfPickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}