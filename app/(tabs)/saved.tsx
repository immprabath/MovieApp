import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const saved = () => {
  return (
    <View className="flex-1 bg-primary">
      <View className="flex flex-col items-center justify-center mt-20 px-5 gap-2">
        <Image source={icons.save} className="w-[40px] h-[40px]" />
        <Text className="text-white">Saved</Text>
      </View>
    </View>
  );
};

export default saved;

const styles = StyleSheet.create({});
