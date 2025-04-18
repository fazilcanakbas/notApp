import React, { useEffect, useState } from "react";
import DrawingPad from "../../src/components/DrawingPad";
import { getNote } from "../../utils/storage";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  NoteDetail: { noteId: string };
};

type NoteDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'NoteDetail'>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function NoteDetailScreen({ route, navigation }: NoteDetailScreenProps) {
  const { noteId } = route.params;
  const [note, setNote] = useState<any>(null);

  useEffect(() => {
    getNote(noteId).then(setNote);
  }, [noteId]);

  if (!note) return null;

  // note.pdfUri varsa o pdf, yoksa sadece çizim
  return (
    <DrawingPad
      noteId={note.id}
      pdfUri={note.pdfUri}
      initialImageUri={note.imageUri}
      navigation={navigation}
      isEditing
    />
  );
}