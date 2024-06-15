import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoPlayer: {
        width: '100%',
        aspectRatio: 16/9
    },
    VideoInfoContainer: {
        margin: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    tags: {
        color: '#0094e3',
        fontSize: 12,
        fontWeight: '500',
    },
    views: {
        color: '#606060',
    },
    actionListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    actionListItem: {
        width: 70,
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    actionText: {
        color: 'black'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userContainer: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'darkgrey',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    channelName: {
        fontSize: 18,
    },
    channelSubscribers: {
        fontSize: 15
    },
    subscribeBtn: {
        color: 'red',
        padding: 15
    },
    commentContainer: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'darkgrey',
    },
    commentAvatar: {
        width: 35,
        height: 35,
        borderRadius: 20
    },
})

export default styles