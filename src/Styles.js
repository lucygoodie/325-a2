import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    mast: {
        container: {
            borderColor: 'black',
            borderWidth: 0.1,
            width: "100%",
            flexDirection: 'column',
            height: "20%",
            backgroundColor: '#c3d7d9',
            paddingTop: 50,
            paddingBottom: 20,
            justifyContent: 'space-between',
        },
        content: {
            height: 80,
            flexDirection: 'row',
            fontColor: 'black',
            alignItems: 'center',
            paddingLeft: 30,
            paddingRight: 30,
        },
        contentCol: {
            height: 80,
            flexDirection: 'column',
            fontColor: 'black',
            paddingLeft: 30,
            paddingRight: 30,
        },
        text: {
            flexDirection: 'column',
            marginLeft: 20,
        },
        header: {
            fontSize: 25,
            fontWeight: 'bold',
        },
        subtitle: {
            fontSize: 12,
            color: 'grey',
        },
        contactImage: {
            borderRadius: 35,
            width: 70,
            height: 70,
        },
        buttonStrip: {
            width: "100%",
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center',
        },
        friendsButtonStrip: {
            width: "100%",
            height: 30,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center',
        },
    },
    search: {
        box: {
            margin: 3,
            height: 30,
            borderColor: 'grey',
            borderWidth: 1,
            backgroundColor: 'white',
            width: '100%',
        },
        input: {
            paddingLeft: 15,
            paddingRight: 10,
        },
    },
    button: {
        // backgroundColor: 'light grey',
        flexDirection: 'row',
        // fontColor: 'black',
        // borderColor: 'black',
        // borderWidth: 1,
        width: 60,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',

        text: {
            fontWeight: "bold",
            fontSize: 16,
            color: "#545454",
        },
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    screen: {
        flex: 5
    },
    list: {
        container: {
            bottom: 0,
            height: 500,
        },
        item: {
            padding: 7,
            marginVertical: 4,
            marginHorizontal: 16,
            backgroundColor: '#d1d1d1',
            borderRadius: 2,
        },
        name: {
            paddingLeft: 5,
            fontSize: 14,
            textColor: 'black',
        },
    },
    home: {
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#e8e8e8',
        },
        screen: {
            backgroundColor: 'white',
            borderColor: 'light blue',
            borderWidth: 0.5,
            borderRadius: 3,
            margin: 12,
            height: '30%',
        },
    },

    friend: {
        infoContainer: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#cfcfcf',
        },
        infoDetail: {
            flex: 1,
            backgroundColor: '#f2f2f2',
            justifyContent: 'center',
            // alignItems: 'center',
            borderRadius: 5,
            margin: 15,
            paddingLeft: 15,
        },
        infoTextHeader: {
            fontSize: 14,
            fontWeight: 'bold',
        },
        infoTextSubtitle: {
            fontSize: 14,
        },
        checkins: {
            flex: 6,
            backgroundColor: '#b3b3b3',

        },
        addCheckinButton: {

        }
    },
    prompt: {
        container: {
            padding: 10,
            marginVertical: 10,
            marginHorizontal: 10,
            backgroundColor: "#e0e0e0",
            borderRadius: 10,
        },
        text:{
            paddingLeft: "10%",
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
        },
        subtitle: {
            fontSize: 14,
            fontWeight: "bold",
        },
    },
    checkin: {
        container: {
            padding: 10,
            marginVertical: 10,
            marginHorizontal: 10,
            backgroundColor: "#e0e0e0",
            borderRadius: 10,
            flexDirection: 'column'
        },
        date: {
            flex: 1,
            backgroundColor: "black",
            borderRadius: 10,
        },
        text:{
            paddingLeft: "10%",
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
        },
        subtitle: {
            fontSize: 14,
            fontWeight: "bold",
        },
    },
    render: {
        separator: {
            height: 1,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '5%',
        },
        footer: {
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: '#CED0CE',
        },
    },
    navigation: {
        bottomTabs: {
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#ffffff',
                height: '10%',
            },
            tabScreen: {
                alignItems: 'center',
                justifyContent: 'center',
                top: 5,
            },
        },
    },
    editFriend: {
        image: {
            borderRadius: 50,
            width: 100,
            height: 100,
            borderColor: 'grey',
            borderWidth: 0.5,
            marginBottom: 0,
        },
        text: {
            alignSelf: 'center',
        },
    },
});

export default styles;
