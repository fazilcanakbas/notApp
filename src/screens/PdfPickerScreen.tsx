import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";

export default function PdfPickerScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const pickPdf = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "application/pdf" });
    if (result.assets && result.assets.length > 0) {
      navigation.navigate("Drawing", { pdfUri: result.assets[0].uri });
    } else {
      Alert.alert("Seçim iptal edildi");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={pickPdf} style={{ padding: 20, backgroundColor: "#5561fa", borderRadius: 12 }}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>PDF Seç ve Üzerine Not Al</Text>
      </TouchableOpacity>
    </View>
  );
}