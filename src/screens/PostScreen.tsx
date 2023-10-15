import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  Platform,
} from "react-native";
import {
  IconButton,
  TextInput,
  Text,
  useTheme,
  Surface,
  Searchbar,
  Button,
  Snackbar,
} from "react-native-paper";
import { HeaderComponent } from "../components/HeaderComponent";
import { InputComponent } from "../components/InputComponent";
import { ImageComponent } from "react-native/Libraries/Image/Image";
import { ImagePickerComponent } from "../components/ImagePickerComponent";
import { ToastComponent } from "../components/ToastComponent";
import { CustomBottomSheet } from "../components/CustomBottomSheet";

const PostScreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  
  const { height } = Dimensions.get("screen");
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const closeLocationBottomSheet = () => bottomSheetModalRef.current?.close();
  const closeFeedBottomSheet = () => bottomSheetRef.current?.close();
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []); // callbacks

  const locationData = useMemo(() => ["Melbourne", "Sydney", "Brisbane"], []);
  const feedData = useMemo(() => ["Painting", "Indigenous", "Tattooing"], []);
  const snapPoints = useMemo(() => ["25%", "75%"], []);
  const snapPointsDetachable = useMemo(
    () => [Platform.OS === "android" ? "70%" : "60%"],
    []
  );

  useEffect(() => {
    const words = text.split(" ");
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        openCamera={() => setShowCamera(true)}
        openLocationBottomSheet={() => bottomSheetModalRef.current?.present()}
        openFeedBottomSheet={() => bottomSheetRef.current?.present()}
        submit={onToggleSnackBar}
      />
      <InputComponent
        wordCount={wordCount}
        text={text}
        onTextChange={(text) => {
          setText(text);
        }}
      />
      <ImagePickerComponent showCamera={showCamera} />
      <CustomBottomSheet
        bottomSheetRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        handleSheetChanges={handleSheetChanges}
        close={closeLocationBottomSheet}
        index={1}
        bottomInset={0}
        detached={false}
        backgroundStyle={{ backgroundColor: "#e5e5e5" }}
        children={
          <View style={{ marginHorizontal: 10 }}>
            <Pressable onPress={() => bottomSheetModalRef.current?.close()}>
              <Text style={{ alignSelf: "center", marginBottom: 20 }}>
                Close
              </Text>
            </Pressable>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{ backgroundColor: "#f2f2f2", marginBottom: 10 }}
              icon={"map-search"}
            />
            {locationData.map((item: string, key: any) => (
              <Text key={key} style={{ marginVertical: 5 }}>
                {item}
              </Text>
            ))}
          </View>
        }
      />
      {/* <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        index={1}
        backgroundStyle={{ backgroundColor: "#e5e5e5" }}
        onChange={handleSheetChanges}
      >
        <View style={{ marginHorizontal: 10 }}>
          <Pressable onPress={() => bottomSheetModalRef.current?.close()}>
            <Text style={{ alignSelf: "center", marginBottom: 20 }}>Close</Text>
          </Pressable>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ backgroundColor: "#f2f2f2", marginBottom: 10 }}
            icon={"map-search"}
          />
          {locationData.map((item: string, key: any) => (
            <Text key={key} style={{ marginVertical: 5 }}>
              {item}
            </Text>
          ))}
        </View>
      </BottomSheetModal> */}

      {/* <BottomSheetModal
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPointsDetachable}
        // add bottom inset to elevate the sheet
        bottomInset={height / 1.5}
        index={0}
        style={{
          marginHorizontal: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -1,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        }}
        backgroundStyle={{ borderRadius: 30 }}
        // set `detached` to true
        detached={true}
      >
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ alignSelf: "center" }}>Choose feed category</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 15,
            }}
          >
            {feedData.map((item: string, key: any) => (
              <View
                key={key}
                style={{
                  borderWidth: 1,
                  borderColor: "#909090",
                  borderRadius: 50,
                  padding: 8,
                }}
              >
                <Text key={key} style={{ marginVertical: 5 }}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
          <Button
            mode="contained"
            buttonColor="#36C0D8"
            style={{ marginHorizontal: 50 }}
            onPress={() => bottomSheetRef.current?.close()}
          >
            Close
          </Button>
        </View>
      </BottomSheetModal> */}
      <CustomBottomSheet
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPointsDetachable}
        handleSheetChanges={handleSheetChanges}
        close={closeFeedBottomSheet}
        index={0}
        bottomInset={height / 1.5}
        detached={true}
        backgroundStyle={{ borderRadius: 30 }}
        children={
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ alignSelf: "center" }}>Choose feed category</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 15,
              }}
            >
              {feedData.map((item: string, key: any) => (
                <View
                  key={key}
                  style={{
                    borderWidth: 1,
                    borderColor: "#909090",
                    borderRadius: 50,
                    padding: 8,
                  }}
                >
                  <Text key={key} style={{ marginVertical: 5 }}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
            <Button
              mode="contained"
              buttonColor="#36C0D8"
              style={{ marginHorizontal: 50 }}
              onPress={() => bottomSheetRef.current?.close()}
            >
              Close
            </Button>
          </View>
        }
      />

      <ToastComponent visible={visible} onDismiss={onDismissSnackBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  surface: {
    padding: 8,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
export default PostScreen;
