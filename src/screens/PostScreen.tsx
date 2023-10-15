import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SafeAreaView, StyleSheet, Dimensions, Platform } from "react-native";
import { HeaderComponent } from "../components/HeaderComponent";
import { InputComponent } from "../components/InputComponent";
import { ImagePickerComponent } from "../components/ImagePickerComponent";
import { ToastComponent } from "../components/ToastComponent";
import { CustomBottomSheet } from "../components/CustomBottomSheet";
import { FeedItem } from "../components/FeedItem";
import { LocationItemData } from "../components/LocationItemData";
import { CustomChip } from "../components/CustomChip";
import * as ImagePicker from "expo-image-picker";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const PostScreen = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [text, setText] = useState("");
  const [place, setPlace] = useState("");
  const [feed, setFeed] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const { height } = Dimensions.get("screen"); //get screen height
  const bottomSheetRef = useRef<BottomSheetModal>(null); // set ref for feed bottom sheet
  const bottomSheetModalRef = useRef<BottomSheetModal>(null); // set ref for location bottom sheet

  const closeLocationBottomSheet = () => bottomSheetModalRef.current?.close(); // close location bottom sheet
  const closeFeedBottomSheet = () => bottomSheetRef.current?.close(); //close feed bottom sheet
  const onDismissSnackBar = () => setVisible(false); // close snack bar
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const handleSheetChanges = useCallback((index: number) => {}, []);
  const submit = () => {
    if (text && selectedImage && place && feed) {
      setVisible(!visible);
      setFeed("")
      setPlace("")
      setSelectedImage("")
      setText("");
      setShowCamera(false);
    }
  }; // submit data if all 

  const snapPoints = useMemo(() => ["25%", "75%"], []); // Points for the bottom sheet to snap to, points should be sorted from bottom to top
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

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  }; // function to handle image picker

  return (
    <SafeAreaView style={styles.container}>
      {/* row view of header items */}
      <HeaderComponent
        openCamera={() => setShowCamera(true)}
        openLocationBottomSheet={() => bottomSheetModalRef.current?.present()}
        openFeedBottomSheet={() => bottomSheetRef.current?.present()}
        submit={submit}
      />

      {/* hold view for text input and word count */}
      <InputComponent
        wordCount={wordCount}
        text={text}
        onTextChange={(text) => {
          setText(text);
        }}
      />

      {/* hold view for image picker */}
      <ImagePickerComponent
        showCamera={showCamera}
        img={selectedImage}
        handleImageUpload={handleImagePicker}
      />

      {/* show selected place if it's value isn't empty */}
      {place && (
        <CustomChip
          text={place}
          icon="map-marker"
          extraStyles={{ marginVertical: 20 }}
        />
      )}

      {/* show selected feed if it's value isn't empty */}
      {feed && <CustomChip text={feed} icon="pound" />}

      {/* bottom sheet view for locations */}
      <CustomBottomSheet
        bottomSheetRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        handleSheetChanges={handleSheetChanges}
        index={1}
        bottomInset={0}
        detached={false}
        backgroundStyle={{ backgroundColor: "#E5E5E5" }}
        children={
          <LocationItemData
            close={closeLocationBottomSheet}
            onChangeSearch={onChangeSearch}
            searchQuery={searchQuery}
            handleLocationCallBack={(place) => setPlace(place)}
          />
        }
      />

      {/* bottom sheet view for feeds */}
      <CustomBottomSheet
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPointsDetachable}
        handleSheetChanges={handleSheetChanges}
        index={0}
        bottomInset={height / 1.5}
        detached={true}
        backgroundStyle={{ borderRadius: 30, backgroundColor: "#E5E5E5" }}
        children={
          <FeedItem
            close={closeFeedBottomSheet}
            handleFeedCallBack={(feed) => setFeed(feed)}
          />
        }
      />
      {/* snack bar view */}
      <ToastComponent visible={visible} onDismiss={onDismissSnackBar} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
export default PostScreen;
