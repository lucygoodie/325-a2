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
    modals: {
        checkIn: {
            fullScreen: {
                width: "100%",
                height: "100%"
            },
            container: {
                width: "100%",
                height: "80%",
                backgroundColor: "white",
                borderWidth: 1,
                bottom: "-4%",
                position: "absolute",
                borderRadius: 10,
                alignItems: 'center',
            },
            content: {
                height: '76%',
                width: '95%',
                top: '4%',
                alignSelf: "center",
                backgroundColor: 'white',
                justifySelf: 'center',
            },
            form: {
                width: "95%",
                flex: 1,
                flexDirection: 'column',
                alignItems:'flex-start',
                justifyContent: 'space-between',
                padding: '5%'
            },
            header: {
                fontSize: 22,
                fontWeight: 'bold',
                alignSelf: 'center',
                marginTop: '10%',
                padding: 0
            },
            spacer: {
                height: "2%"
            },
        },
    },

    screens: {
        friend: {
            checkinItem: {
                container: {
                    flexDirection: 'row'
                },
                bubble: {
                    flex: 3,
                    flexDirection: 'column',
                    content: {
                        backgroundColor: '#e0e0e0',
                        borderRadius: 5,
                        paddingLeft: '5%',
                        paddingBottom:'5%',
                        padding: '3%',
                        flex: 1
                    },
                    subtitle: {
                        fontSize: 14,
                        fontWeight: "bold",
                    },
                    notes: {
                        flex: 1,
                        paddingLeft: "13%",
                        fontSize: 12
                    },
                },
                spacer: {
                    flex: 0.2,
                },
                spacer1: {
                    flex: 1,
                },
                container1: {
                    flex:3,
                },
                container2: {
                    flex: 1,
                    flexDirection: 'row',
                    paddingTop: '4%'
                },
                date: {
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundColor: 'grey',
                    color: 'white',
                    fontSize: 10,
                },
                circle: {
                    container: {
                        flex:1,
                        paddingLeft: '1%',
                    },
                    backgroundColor: '#cccccc',
                    borderRadius: 50,
                    width: 12,
                    height: 12,
                    left: 1.5,
                    top: 1.5
                },
                triangle: {
                    width: 0,
                    height: 0,
                    backgroundColor: "transparent",
                    borderStyle: "solid",
                    borderLeftWidth: 7,
                    borderRightWidth: 7,
                    borderBottomWidth: 14,
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    borderBottomColor: "#e0e0e0",
                    transform: [{ rotate: "-90deg" }],
                    alignSelf: 'center',
                },
            },
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
            spacer1: {
                flex: 2,
            },
            spacer2: {
                flex: 3,
            },
            spacer3: {
                height: 30,
            },
            content: {
                justifyContent: 'center',
                alignItems: 'center',
                flexBasis: 50,
                flex:2.5,
                flexDirection: 'column'
            },
            text: {
                fontSize: 40,
                marginBottom: 10,
                fontWeight: 'bold'
            },
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
        settings: {
            mastText: {
                fontSize: 25,
                fontWeight: 'bold',
                paddingLeft: "10%",
                paddingBottom: "5%",
            },
            spacer1: {
                height: '5%'
            },
            spacer2: {
                height: '3%'
            },
            notifications: {
                container: {
                    backgroundColor: 'white',
                    borderRadius: 3,
                    borderWidth: 0.2,
                    height: '25%',
                    width: '90%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    paddingTop: '5%',
                    paddingBottom: '5%',
                },
                text: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingLeft: "10%",
                    paddingBottom: "5%",
                },
                radioButton: {
                    width: '90%',
                    height: '50%',
                    paddingLeft: '5%'
                },
            },
            login: {
                container: {
                    backgroundColor: 'white',
                    borderRadius: 3,
                    borderWidth: 0.2,
                    height: '20%',
                    width: '90%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    paddingTop: '5%',
                    paddingBottom: '5%'
                },
                text: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingLeft: "10%",
                    paddingBottom: "5%",
                },
            },
        },
        addEditFriend: {
            mastText: {
                fontSize: 25,
                fontWeight: 'bold',
                paddingBottom: "5%",
                alignSelf: 'center',
            },
            content: {
                flexDirection: 'column',
                flex: 1,
            },
            imageSection: {
                justifyContent: 'center',
                alignItems: 'center',
                height: '25%',
            },
            image: {
                borderRadius: 50,
                width: 100,
                height: 100,
                borderColor: 'grey',
                borderWidth: 0.5,
                marginBottom: 0,
            },
            spacer1: {
                flexGrow:1,
            },
            spacer2: {
                flexGrow:3,
            },
            spacer3: {
                flex:2,
            },
            container1: {
                flexBasis: 75,
                flex:1,
            },
            container2: {
                flexBasis: 75,
                flex:0.1,
                flexDirection: 'row',
                marginLeft: '2.5%',
                marginRight: '2.5%',
                justifyContent: 'center',
            },
            container3: {
                flexBasis: 75,
                flex:0.1,
            },
            container4: {
                flexBasis: 75,
                flex:0.1,
                marginLeft: '5%',
                marginRight: '5%',
            },
            name: {
              container: {
                  flexGrow: 1,
                  flex:0.1,
                  flexDirection: 'column'
              },
                content: {
                    paddingLeft: '5%'
                },
            },
        },
    },
});
