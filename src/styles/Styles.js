import { StyleSheet } from 'react-native';
import CustomButton2 from "../components/CustomButton2";

const backgroundColor = '#c3d7d9';


export default styles = StyleSheet.create({

    components: {
        layout: {
            baseView: {
                container: {
                    flex: 1,
                    backgroundColor: backgroundColor,
                },
                safeArea: {
                    flexDirection: 'column',
                    flex: 1,
                    backgroundColor: backgroundColor,
                },
                unsafeBottomArea: {
                    backgroundColor: "#e3e3e3",
                    bottom: 0,
                },
            },
            content: {
                flex: 20,
                backgroundColor: "#e3e3e3",
            },
            mast: {
                flex: 2,
                backgroundColor: backgroundColor,
                justifyContent: 'flex-end',
            },
            topButtonStrip: {
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: "1%",
                paddingRight: "5%",
                marginTop: "8%",
            },
        },
        detail: {
            borderColor: '#757575',
            borderWidth: 0.5,
            borderRightWidth: 3,
            borderBottomWidth: 3,
            margin: "2%",
            backgroundColor: "#e0e0e0",
            borderRadius: 4,
            flexDirection: 'row',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: "3%",
            height: "75%",
            infoTextHeader: {
                fontSize: 14,
                fontWeight: 'bold',
            },
            infoTextSubtitle: {
                fontSize: 14,
            },
        },
        customButton1: {
            container: {
                margin: 3,
                height: 40,
                borderColor: '#445c5e',
                borderWidth: 1,
                backgroundColor: '#759a9e',
                width: '90%',
                justifyContent: 'center',
                borderRadius: 2.5,
                alignSelf: 'center',
            },
            content: {
                alignSelf: 'center',
                padding: 5,
                fontSize: 14,
                fontWeight: "bold",
                color: 'white',
            },
        },
        customButton2: {
            container: {
                margin: 3,
                height: 40,
                borderColor: 'grey',
                borderWidth: 1,
                backgroundColor: 'white',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 2.5,
                flex: 1,
                alignItems: 'flex-start',
            },
            content: {
                paddingLeft: 15,
                padding: 5,
                fontSize: 14,
                flexWrap: 'wrap',
                flex: 1,
                textAlign: 'left',
            },
        },
        customButton3: {
            width: "40%",
            height: "8%",
            backgroundColor: '#f5ab33',
            zIndex: 0,
            bottom: "0%",
            right: "2%",
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderRightWidth: 3,
            borderBottomWidth: 3,
            borderColor: '#875300',
            text: {
                color: "white",
                fontWeight: "bold"
            },
        },
        customButton4: {
            container: {
                flexDirection: 'row',
                paddingLeft: "4%",
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            },
            content: {
                fontWeight: "bold",
                fontSize: 16,
                color: "#545454",
            },
        },
        customTextInput: {
            container: {
                margin: 3,
                height: 40,
                borderColor: 'grey',
                borderWidth: 1,
                backgroundColor: 'white',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 2.5,
                flex: 1,
                alignItems: 'flex-start',
            },
            content: {
                paddingLeft: 15,
                padding: 5,
                fontSize: 14,
                flexWrap: 'wrap',
                flex: 1,
                textAlign: 'left',
            },
        },
        header: {
            container: {
                margin: 3,
                height: 30,
                borderColor: '#445c5e',
                borderWidth: 1,
                backgroundColor: '#759a9e',
                width: '95%',
                justifyContent: 'center',
                borderRadius: 2.5,
                alignSelf: 'center',

            },
            content: {
                alignSelf: 'center',
                padding: 5,
                fontSize: 14,
                fontWeight: "bold",
                color: 'white',
            }
        },
        listItem: {
            container: {
                padding: 7,
                marginVertical: 4,
                marginHorizontal: 16,
                backgroundColor: '#d1d1d1',
                borderRadius: 2,
            },
            content: {
                paddingLeft: 5,
                fontSize: 14,
                textColor: 'black',
            },
        },
        radioButton: {
            container: {
                flexDirection: 'row',
                flex: 1,
                marginTop: '1.5%',
                marginBottom: '1%',
            },
            option: {
                fontSize: 12,
                color: 'black',
                textAlign: 'center',
                paddingBottom: '1%',
            },
            unselected: {
                justifyContent: 'center',
                backgroundColor: 'red',
                borderRadius: 2,
                borderColor: '#c2c2c2',
                borderRadius: 2,
                borderWidth: 1,
                backgroundColor: '#d4d4d4',
                flex: 1,
            },
            selected: {
                justifyContent: 'center',

                backgroundColor: '#828282',
                margin: 1.5,
                borderRadius: 2,
                borderColor: '#575757',
                borderRadius: 2,
                borderWidth: 1,
                flex: 1,
            }
        },
        renderFooter: {
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: '#CED0CE',
        },
        separator: {
            height: 1,
            backgroundColor: '#e3e3e3',
            margin: '1%',
        },
        searchBar: {
            box: {
                margin: 3,
                height: 30,
                borderColor: 'grey',
                borderWidth: 1,
                backgroundColor: 'white',
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'center',
            },
            input: {
                paddingLeft: 15,
                paddingRight: 10,
            },
        },
    },
    modals: {
        checkIn: {
            header: {
                fontSize: 22,
                fontWeight: 'bold',
                alignSelf: 'center',
                marginTop: 30,
            },
        },
    },
    screens: {
        addFriend: {},
        editFriend: {},
        friend: {
            checkinItem: {},
            checkinList: {
                container: {
                    backgroundColor: 'white',
                    borderColor: '#b0b0b0',
                    borderWidth: 2,
                    borderRadius: 3,
                    margin: "4%",
                    flex: 1,
                    padding: "0.5%",
                    marginTop: "0%",
                    paddingRight: "0.5%",
                },
                list: {
                    height: '95%',
                    zIndex: 1,
                    position: 'absolute',
                    width: "100%",
                    bottom: "4%"
                },
            },
            content: {
                flex: 11,
                paddingBottom: "3%",
            },
            information: {
                backgroundColor: 'white',
                borderColor: '#b0b0b0',
                borderWidth: 2,
                borderRadius: 3,
                margin: "4%",
                padding: "0.5%",
                flexDirection: 'row',
                flex: 2,
                paddingRight: "0.5%",
                marginBottom: "2%"
            },
            mast: {
                flexDirection: 'row',
                alignSelf: 'flex-start',
                paddingLeft: "10%",
                bottom: "5%",
                heading: {
                    fontSize: 25,
                    fontWeight: 'bold',
                    paddingLeft: "5%"
                },
                text: {
                    justifyContent: 'center'
                },
            },
            image: {
                borderRadius: 35,
                width: 70,
                height: 70,
            },
        },
        friends: {
            friendsList: {
                margin: 10,
                paddingTop: 10,
                borderColor: '#b0b0b0',
                borderWidth: 1,
                borderRadius: 3,
                flex: 1,
            },
            header: {
                fontSize: 25,
                fontWeight: 'bold',
                paddingLeft: "5%",
                paddingBottom: "1%",
            },
        },
        home: {
            prompt: {
                container: {
                    borderColor: '#757575',
                    borderWidth: 0.5,
                    borderRightWidth: 3,
                    borderBottomWidth: 3,
                    margin: "2%",
                    backgroundColor: "#e0e0e0",
                    borderRadius: 4,
                    flexDirection: 'row',
                    flex: 1,
                    height: 70,
                },
                urgency: {
                    flex: 1,
                    paddingLeft: "4%",
                },
                text: {
                    flex: 13,
                    flexDirection: 'column',

                    heading: {
                        fontSize: 16,
                        fontWeight: "bold",
                        paddingTop: "4.5%",
                        paddingLeft: "4%",
                        flex: 1,
                    },
                    subtitle: {
                        fontSize: 14,
                        paddingLeft: "4%",
                        paddingBottom: "3.5%",
                        flex: 1,
                        color: '#707070',
                    },
                },
            },
            promptList: {
                backgroundColor: 'white',
                borderColor: '#b0b0b0',
                borderWidth: 2,
                borderRadius: 3,
                margin: "4%",
                flex: 1,
                padding: "2%",
                paddingBottom: "17%"
            },
            mastSubtitle: {
                fontSize: 12,
                color: 'grey',
                flexDirection: 'column',
                paddingLeft: "5%",
            },
            mastHeading: {
                fontSize: 25,
                fontWeight: 'bold',
                paddingLeft: "5%",
                paddingBottom: "5%",
            },
        },
        login: {
            signUp: {
                text: {
                    height: 30,
                    width: '90%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 2.5,
                    paddingLeft: '10%',
                    bottom: 20,
                    position: 'absolute',
                },
                link: {
                    fontWeight: "bold",
                    textDecorationLine: 'underline',
                    paddingLeft: '2%'
                }
            },
        },
        settings: {},
    },









    layout: {
        span: {
            flex: 1,
            backgroundColor: backgroundColor,
        },
        safeArea: {
            flexDirection: 'column',
            flex: 1,
            backgroundColor: backgroundColor,
        },
        topButtonArea: {
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: "1%",
            paddingRight: "5%",
            marginTop: "8%",
        },
        mast: {
            flex: 2,
            backgroundColor: backgroundColor,
            justifyContent: 'flex-end',
        },
        contentArea: {
            flex: 20,
            backgroundColor: "#e3e3e3",
        },
        unsafeBottomArea: {
            backgroundColor: "#e3e3e3",
            bottom: 0,
        },
    },

    mast: {
        buttons: {
            flexDirection: 'row',
            paddingLeft: "4%",
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',

            text: {
                fontWeight: "bold",
                fontSize: 16,
                color: "#545454",
            },
        },
        text: {
            heading: {
                fontSize: 25,
                fontWeight: 'bold',
                paddingLeft: "5%"
            },
            subtitle: {
                fontSize: 12,
                color: 'grey',
                flexDirection: 'column',
                paddingLeft: "5%"
            },
        },
        search: {
            box: {
                margin: 3,
                height: 30,
                borderColor: 'grey',
                borderWidth: 1,
                backgroundColor: 'white',
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'center',
            },
            input: {
                paddingLeft: 15,
                paddingRight: 10,
            },
        },
    },

    home: {
        promptListContainer: {
            backgroundColor: 'white',
            borderColor: '#b0b0b0',
            borderWidth: 2,
            borderRadius: 3,
            margin: "4%",
            flex: 1,
            paddingRight: "10%",
            padding: "0.5%",
        },
        promptContainer: {
            borderColor: '#757575',
            borderWidth: 0.5,
            borderRightWidth: 3,
            borderBottomWidth: 3,
            margin: "2%",
            backgroundColor: "#e0e0e0",
            borderRadius: 4,
            flexDirection: 'row',
            flex: 1,
        },
        promptText: {
            flex: 13,
            flexDirection: 'column',
        },
        promptHeading: {
            fontSize: 16,
            fontWeight: "bold",
            paddingTop: "4.5%",
            paddingLeft: "4%",
            flex: 1,
        },
        promptSubtitle: {
            fontSize: 14,
            paddingLeft: "4%",
            paddingBottom: "3.5%",
            flex: 1,
            color: '#707070',
        },
        promptUrgency: {
            flex: 1,
            paddingLeft: "4%",
        },
        promptShadow: {
            backgroundColor: 'black',
            position: 'absolute',
            marginTop: -100,
        },
        promptDivider: {
            backgroundColor: '#8d9899',
            alignItems: 'center',
            margin: "2%",
            padding: "1%",
            borderRadius: 3,
        },
        promptDividerText: {
            color: 'white',
            fontWeight: "bold",
        },
    },

    list: {
        container: {
            margin: 10,
            paddingTop: 10,
            borderColor: '#b0b0b0',
            borderWidth: 1,
            borderRadius: 3,
            flex: 1,

        },
        separator: {
            height: 1,
            backgroundColor: '#e3e3e3',
            margin: '1%',
        },
        footer: {
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: '#CED0CE',
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
    friend: {
        image: {
            borderRadius: 35,
            width: 70,
            height: 70,
        },
        mast: {
            flexDirection: 'row',
            alignSelf: 'flex-start',
            paddingLeft: "10%",
            bottom: "5%",
        },
        infoContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: "3%",
            height: "75%",
        },
        infoDetail: {
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
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
        addCheckinButton: {},
        checkins: {
            flex: 6,
            backgroundColor: '#b3b3b3',

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
    checkins: {
        listContainer: {
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
        title: {
            fontSize: 10,
            fontWeight: "bold",
            paddingLeft: "2%",
        },
        subtitle: {
            fontSize: 14,
            fontWeight: "bold",
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
        searchInput: {
                paddingLeft: 15,
                paddingRight: 10,
        },
    },
});
