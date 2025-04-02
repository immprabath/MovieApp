import { View, Image, ScrollView } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  console.log("Index");
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for a movie"
        />
      </ScrollView>
    </View>
  );
};

export default Index;
