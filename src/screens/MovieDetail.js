import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, StatusBar, SafeAreaView, useWindowDimensions, ImageBackground, ScrollView, Animated } from 'react-native';
import { SIZES, COLORS, FONTS } from '../constant/themes';
import { menu, search, movie1, movie2, movie3, smallStar, arrowLeft, largeStar, emptyStar, plus } from '../constant/images';

function MovieDetail({ navigation, route }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const [movieDetail, setMovieDetail] = useState(route.params.selectedMovie);

  const renderTopNavigation = () => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: SIZES.padding * 2,
      }}>
        <TouchableOpacity style={{
          alignItems: 'center',
          width: 24,
          height: 24,
        }} onPress={() => navigation.goBack()}>
          <Image source={arrowLeft} resizeMode="cover" style={{
            width: 24,
            height: 24,
          }} />
        </TouchableOpacity>
      </View>
    );
  }

  const renderInfoMovie = () => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        backgroundColor: COLORS.white,
        width: windowWidth / 1.1,
        shadowColor: COLORS.grey,
        shadowOffset: {
          width: 1,
          height: 20,
        },
        shadowRadius: 12,
        shadowOpacity: 0.5,
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        marginTop: windowHeight / 4.5,
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 20,
        elevation: 20,
      }}>
        {/* Rating */}
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          alignSelf: 'flex-start'

        }}>
          <Image source={largeStar} style={{
            width: 32,
            height: 32,
          }} />

          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 2,
          }}>
            <Text style={{
              color: COLORS.darkBlue,
              fontSize: 16,
              fontWeight: 'bold',
            }}>{movieDetail.rating}</Text>
            <Text style={{
              color: COLORS.grey,
              fontWeight: 'bold',
              fontSize: 12,
            }}>/10</Text>
          </View>

          <Text style={{
            color: COLORS.lightGrey,
            fontSize: 12,
          }}>{movieDetail.viewer}</Text>
        </View>

        {/* Give Rating */}
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start'
        }}>
          <TouchableOpacity style={{
            width: 32,
            height: 32,
            marginVertical: 2,
          }}
          onPress={() => console.log('rate movice')}>
            <Image source={emptyStar} style={{
              width: 32,
              height: 32,
            }} />
          </TouchableOpacity>
          <Text style={{
              color: COLORS.darkBlue,
              fontSize: 14,
              fontWeight: 'bold',
            }}>Rate This</Text>
        </View>

        {/* Meta Score */}
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start'
        }}>
          {/* Score */}
          <View style={{
            backgroundColor: COLORS.green,
            width: 30,
            height: 26,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
            <Text style={{
              color: COLORS.white,
            }}>{movieDetail.metaScore}</Text>
          </View>

          {/* Text score */}
          <Text style={{
              color: COLORS.darkBlue,
              fontSize: 14,
              fontWeight: 'bold',
            }}>Metascore</Text>

          <Text style={{
              color: COLORS.lightGrey,
              fontSize: 12,
              marginTop: 2,
            }}>62 critic reviews</Text>
        </View>
      </View>
    );
  }

  const renderTitleMovie = () => {
    return (
      <View style={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: SIZES.padding2 * 2,
        paddingLeft: SIZES.padding * 2,
        paddingRight: SIZES.padding * 2,
      }}>
        {/* title */}
        <View style={{
          flexDirection: 'column',
        }}>
          <Text style={{
            ...FONTS.h1,
            color: COLORS.darkBlue,
            fontWeight: 'bold',
            marginBottom: SIZES.padding,
          }}>{movieDetail.title}</Text>

          <View style={{
            flexDirection: 'row',
          }}>
            <Text style={{
              color: COLORS.lightGrey,
              fontSize: 14,
              marginHorizontal: 6,
            }}>2019</Text>
            <Text style={{
              color: COLORS.lightGrey,
              fontSize: 14,
              marginHorizontal: 6,
            }}>PG-13</Text>
            <Text style={{
              color: COLORS.lightGrey,
              fontSize: 14,
              marginHorizontal: 6,
            }}>2h 32min</Text>
          </View>
        </View>

        {/* Button Plus */}
        <TouchableOpacity style={{
          width: 64,
          height: 64,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.pink,
          borderRadius: 10,
        }}
        onPress={() => console.log('add movie')}>
          <Image source={plus} style={{
            width: 28,
            height: 28,
          }} />
        </TouchableOpacity>
      </View>
    );
  }

  const renderTagsMovie = () => {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginLeft: SIZES.padding * 2,
      }}>
        <View style={{
          borderWidth: 2,
          borderColor: COLORS.lightGrey,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 6,
          paddingBottom: 6,
          borderRadius: 50,
          marginLeft: 0,
          marginHorizontal: 8,
        }}>
          <Text style={{
            color: COLORS.darkBlue,
            fontSize: 14,
          }}>Action</Text>
        </View>
        <View style={{
          borderWidth: 2,
          borderColor: COLORS.lightGrey,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 6,
          paddingBottom: 6,
          borderRadius: 50,
          marginHorizontal: 8,
        }}>
          <Text style={{
            color: COLORS.darkBlue,
            fontSize: 14,
          }}>Biography</Text>
        </View>
        <View style={{
          borderWidth: 2,
          borderColor: COLORS.lightGrey,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 6,
          paddingBottom: 6,
          borderRadius: 50,
          marginHorizontal: 8,
        }}>
          <Text style={{
            color: COLORS.darkBlue,
            fontSize: 14,
          }}>Drama</Text>
        </View>
      </View>
    )
  }

  const renderPlotSummary = () => {
    return (
      <View style={{
        marginVertical: 30,
        marginLeft: SIZES.padding * 2,
        marginRight: SIZES.padding * 2,
      }}>
        <View style={{
          flexDirection: 'row',
          marginBottom: 18
        }}>
          <Text style={{
            ...FONTS.h2,
          }}>Plot Summary</Text>
        </View>

        <View style={{
          flexDirection: 'row'
        }}>
          <Text style={{
            color: COLORS.grey,
            fontSize: 16,
            lineHeight: 20,
          }}>
          American car designer Carroll Shelby and driver Kn Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order.
          </Text>
        </View>
      </View>
    )
  }

  const renderCast = () => {
    return (
      <View style={{
        marginLeft: SIZES.padding * 2,
      }}>
        <View style={{
          flexDirection: 'row',
          marginBottom: 18
        }}>
          <Text style={{
            ...FONTS.h2,
          }}>Cast & Crew</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
          flexDirection: 'row',
        }}>
          
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            textAlign: 'center',
            marginHorizontal: 10,
            marginLeft: 0,
          }}>
            <Image source={{ uri: 'https://via.placeholder.com/80' }} resizeMode="contain" style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              marginBottom: 8,
            }} />
            <Text style={{
              color: COLORS.darkBlue,
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 6,
            }}>James Mangold</Text>
            <Text style={{
              color: COLORS.lightGrey,
              textAlign: 'center',
            }}>Director</Text>
          </View>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            textAlign: 'center',
            marginHorizontal: 10,
          }}>
            <Image source={{ uri: 'https://via.placeholder.com/80' }} resizeMode="contain" style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              marginBottom: 8,
            }} />
            <Text style={{
              color: COLORS.darkBlue,
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 6,
            }}>Matt Damon</Text>
            <Text style={{
              color: COLORS.lightGrey,
              textAlign: 'center',
            }}>Carroll</Text>
          </View>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            textAlign: 'center',
            marginHorizontal: 10,
          }}>
            <Image source={{ uri: 'https://via.placeholder.com/80' }} resizeMode="contain" style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              marginBottom: 8,
            }} />
            <Text style={{
              color: COLORS.darkBlue,
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 6,
            }}>Chirsitan Bale</Text>
            <Text style={{
              color: COLORS.lightGrey,
              textAlign: 'center',
            }}>Ken Miles</Text>
          </View>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            textAlign: 'center',
            marginHorizontal: 10,
            marginRight: 0,
          }}>
            <Image source={{ uri: 'https://via.placeholder.com/80' }} resizeMode="contain" style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              marginBottom: 8,
            }} />
            <Text style={{
              color: COLORS.darkBlue,
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 6,
            }}>Caitriona Balfe</Text>
            <Text style={{
              color: COLORS.lightGrey,
              textAlign: 'center',
            }}>Mollie</Text>
          </View>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            textAlign: 'center',
            marginHorizontal: 10,
            marginRight: 0,
          }}>
            <Image source={{ uri: 'https://via.placeholder.com/80' }} resizeMode="contain" style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              marginBottom: 8,
            }} />
            <Text style={{
              color: COLORS.darkBlue,
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 6,
            }}>Caitriona Balfe</Text>
            <Text style={{
              color: COLORS.lightGrey,
              textAlign: 'center',
            }}>Mollie</Text>
          </View>

        </ScrollView>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={{
      backgroundColor: COLORS.white,
      paddingBottom: SIZES.padding * 2,
    }}>
      <SafeAreaView style={{
        paddingTop: Platform.OS !== 'ios' ? StatusBar.currentHeight + SIZES.padding2 : SIZES.padding2,
        backgroundColor: COLORS.white,
      }}>
        <ImageBackground source={{ uri: movieDetail.image }} style={{
            width: '100%',
            height: windowHeight / 2.5,
            top: 0,
            position: 'absolute',
            resizeMode: 'cover',
            borderBottomLeftRadius: 60,
            overflow: 'hidden',
          }}>
          </ImageBackground>

          <View>
            {renderTopNavigation()}
          </View>

          <View style={{
            alignItems: 'flex-end'
          }}>
            {renderInfoMovie()}
          </View>

          <View>
            {renderTitleMovie()}
          </View>

          <View>
            {renderTagsMovie()}
          </View>

          <View>
            {renderPlotSummary()}
          </View>

          <View>
            {renderCast()}
          </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default MovieDetail;
