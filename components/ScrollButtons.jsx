import { View, Text, TouchableOpacity, ScrollView,Image } from "react-native"
import {
	clip,
	dislikOutline,
	dislike,
	download,
	flag,
	foward,
	like,
	likeOutline,
	save,
	shorts,
} from "../constants/icons";
import { buttonColor, fieldColor} from "../constants/colors";
import React, { useState } from 'react'

const ScrollButtons = () => {
	const [likeClicked, setLikeClicked] = useState(false);
	const [dislikeClicked, setDislikeClicked] = useState(false);
	function addLike() {
		if (!likeClicked) {
			setLikeClicked(true);
			setDislikeClicked(false);
		} else setLikeClicked(false);
	}

	function addDislike() {
		if (!dislikeClicked) {
			// console.log("dislike");
			setLikeClicked(false);
			setDislikeClicked(true);
		} else setDislikeClicked(false);
	}
  return (
		<ScrollView
			horizontal
			decelerationRate={"fast"}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				gap: 5,
				margin: 6,
				justifyContent: "space-between",
			}}
		>
			<View
				style={{
					// gap: 5,
					height: 35,
					borderRadius: "50%",
					backgroundColor: fieldColor,
					alignItems: "center",

					flexDirection: "row",
				}}
			>
				<TouchableOpacity
					onPress={addLike}
					style={{
						flexDirection: "row",
						alignItems: "center",
						margin: 14,
						height: "70%",
					}}
				>
					<Image
						source={likeClicked ? like : likeOutline}
						tintColor={likeClicked ? buttonColor : "#fff"}
						style={{ width: 22, height: 22 }}
						resizeMode="contain"
					/>
					<Text
						style={{
							color: "white",
							fontSize: 14,
							fontFamily: "Montserrat_300Light",
						}}
					>
						{" "}
						53K
					</Text>
				</TouchableOpacity>
				<Text style={{ color: "#fff", fontSize: 18 }}>|</Text>
				<TouchableOpacity
					onPress={addDislike}
					style={{
						flexDirection: "row",
						alignItems: "center",
						margin: 14,
						height: "70%",
					}}
				>
					<Image
						source={dislikeClicked ? dislike : dislikOutline}
						tintColor={dislikeClicked ? buttonColor : "#fff"}
						style={{ width: 22, height: 22 }}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>

			<TouchableOpacity
				style={{
					height: 35,
					gap: 3,
					borderRadius: "50%",
					backgroundColor: fieldColor,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Image
					source={foward}
					style={{ width: 22, height: 22, marginLeft: 14 }}
					resizeMode="contain"
				/>
				<Text
					style={{
						color: "white",
						marginRight: 14,
						fontSize: 14,
						fontFamily: "Montserrat_300Light",
					}}
				>
					share
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					height: 35,
					gap: 3,
					borderRadius: "50%",
					backgroundColor: fieldColor,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Image
					source={shorts}
					style={{ width: 22, height: 22, marginLeft: 14 }}
					resizeMode="contain"
					tintColor={"#fff"}
				/>
				<Text
					style={{
						color: "white",
						marginRight: 14,
						fontSize: 14,
						fontFamily: "Montserrat_300Light",
					}}
				>
					remix
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					height: 35,
					gap: 3,
					borderRadius: "50%",
					backgroundColor: fieldColor,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Image
					source={download}
					style={{ width: 22, height: 22, marginLeft: 14 }}
					resizeMode="contain"
				/>
				<Text
					style={{
						color: "white",
						marginRight: 14,
						fontSize: 14,
						fontFamily: "Montserrat_300Light",
					}}
				>
					download
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					height: 35,
					gap: 3,
					borderRadius: "50%",
					backgroundColor: fieldColor,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Image
					source={clip}
					style={{ width: 22, height: 22, marginLeft: 14 }}
					resizeMode="contain"
				/>
				<Text
					style={{
						color: "white",
						marginRight: 14,
						fontSize: 14,
						fontFamily: "Montserrat_300Light",
					}}
				>
					clip
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					height: 35,
					gap: 3,
					borderRadius: "50%",
					backgroundColor: fieldColor,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Image
					source={save}
					style={{ width: 22, height: 22, marginLeft: 14 }}
					resizeMode="contain"
				/>
				<Text
					style={{
						color: "white",
						marginRight: 14,
						fontSize: 14,
						fontFamily: "Montserrat_300Light",
					}}
				>
					save
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					height: 35,
					gap: 3,
					borderRadius: "50%",
					backgroundColor: fieldColor,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "row",
				}}
			>
				<Image
					source={flag}
					style={{ width: 22, height: 22, marginLeft: 14 }}
					resizeMode="contain"
				/>
				<Text
					style={{
						color: "white",
						marginRight: 14,
						fontSize: 14,
						fontFamily: "Montserrat_300Light",
					}}
				>
					report
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

export default ScrollButtons