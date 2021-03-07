import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ImagePickerExample() {
    const [image, setImage] = useState("https://i.imgur.com/Mss2HGx.png");

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    // alert(
                    //     "Sorry, we need camera roll permissions to make this work!"
                    // );
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
            }}
        >
            <View
                style={{
                    width: 100,
                    height: 100,
                    borderWidth: 3,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity onPress={pickImage}>
                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: 100,
                                height: 100,
                                borderColor: "#aaced7",
                                borderWidth: 3,
                                borderRadius: 20,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}
