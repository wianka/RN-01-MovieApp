import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, StatusBar, Platform, ScrollView, Animated, useWindowDimensions } from 'react-native';
import { SIZES, COLORS, FONTS } from '../constant/themes';
import { menu, search, movie1, movie2, movie3, smallStar } from '../constant/images';


const listTypeMovies = [
  {
    id: 1,
    title: 'In Theater',
    movies: [
      {
        id: 1,
        title: 'The Call Of Wild',
        image: 'https://placeimg.com/310/548/any',
        rating: '7.0',
        viewer: '150.212',
        metaScore: '86',
      },
      {
        id: 2,
        title: 'Ford v Ferrari',
        image: 'https://placeimg.com/310/548/people',
        rating: '8.2',
        viewer: '150.212',
        metaScore: '86',
      },
      {
        id: 3,
        title: 'Down Hill',
        image: 'https://placeimg.com/310/548/nature',
        rating: '8.7',
        viewer: '150.212',
        metaScore: '86',
      },
    ]
  },
  {
    id: 2,
    title: 'Box Office',
    movies: [
      {
        id: 4,
        title: 'Ford v Ferrari',
        image: 'https://placeimg.com/310/548/any',
        rating: '8.2',
        viewer: '150.212',
        metaScore: '86',
      },
      {
        id: 5,
        title: 'The Call Of Wild',
        image: 'https://placeimg.com/310/548/people',
        rating: '7.0',
        viewer: '150.212',
        metaScore: '86',
      },
      {
        id: 6,
        title: 'Down Hill',
        image: 'https://placeimg.com/310/548/nature',
        rating: '8.7',
        viewer: '150.212',
        metaScore: '86',
      },
    ]
  },
  {
    id: 3,
    title: 'Coming Soon',
    movies: [
      {
        id: 7,
        title: 'Down Hill',
        image: 'https://placeimg.com/310/548/any',
        rating: '8.7',
        viewer: '150.212',
        metaScore: '86',
      },
      {
        id: 8,
        title: 'Ford v Ferrari',
        image: 'https://placeimg.com/310/548/animals',
        rating: '8.2',
        viewer: '150.212',
        metaScore: '86',
      },
      
      {
        id: 9,
        title: 'The Call Of Wild',
        image: 'https://placeimg.com/310/548/nature',
        rating: '7.0',
        viewer: '150.212',
        metaScore: '86',
      },
    ]
  },
];

function Home ({ navigation }){
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const scrollXTypeMovies = useRef(new Animated.Value(0)).current;
  const scrollXMovies = useRef(new Animated.Value(0)).current;

  const [dataTypeMovies, setDataTypeMovies] = useState([...listTypeMovies, { id: -2 }]);
  const [movies, setMovies] = useState([{id: -1}, ...listTypeMovies[0].movies, { id: -2 }]);
  const [moviesDetail, setMoviesDetail] = useState({});

  const TYPE_MOVIES_WIDTH = windowWidth / 2;
  const MOVIES_WIDTH = windowWidth / 1.25;
  const EMPTY_MOVIES_WIDTH = (windowWidth - MOVIES_WIDTH) / 2;

  const handleMoviesDetail = item => {
    navigation.navigate('MovieDetail', { selectedMovie: item });
  };

  const renderTopNavigation = () => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.padding * 2,
      }}>
        <TouchableOpacity style={{
          alignItems: 'center',
          width: 24,
          height: 24,
        }} onPress={() => console.log('menu')}>
          <Image source={menu} resizeMode="cover" style={{
            width: 24,
            height: 24,
          }} />
        </TouchableOpacity>

        <TouchableOpacity style={{
          width: 24,
          height: 24,
          alignItems: 'center',
        }} onPress={() => console.log('menu')}>
          <Image source={search} resizeMode="contain" style={{
            width: 24,
            height: 24,
          }} />
        </TouchableOpacity>
      </View>
    );
  }

  const renderTypeMovie = () => {
    return (
      <Animated.FlatList
        horizontal
        paginationEnabled
        snapToAlignment="start"
        declarationRate={0}
        scrollEventThrottle={16}
        data={dataTypeMovies}
        snapToInterval={TYPE_MOVIES_WIDTH}
        keyExtractor={item => `tmk-${item.id}`}
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding * 2,
          marginVertical: SIZES.padding * 2,
        }}
        onMomentumScrollEnd={(event) => {
          const position = (event.nativeEvent.contentOffset.x / TYPE_MOVIES_WIDTH).toFixed(0);
          setMovies([
            {id: -1},
            ...dataTypeMovies[position].movies,
            {id: -2}
          ]);
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollXTypeMovies }}}
        ], {
          useNativeDriver: false
        })}
        renderItem={({ item, index }) => {
          const opacity = scrollXTypeMovies.interpolate({
            inputRange: [TYPE_MOVIES_WIDTH * (index - 2), TYPE_MOVIES_WIDTH * (index - 1), TYPE_MOVIES_WIDTH * index],
            outputRange: [1, 0.3, 1],
            extrapolate: 'clamp',
          });

          if (index === dataTypeMovies.length - 1) {
            return (
              <View key={`tme-${index}`} style={{ width: TYPE_MOVIES_WIDTH }} />
            )
          } else {
            return (
              <Animated.View key={`tm-${index}`} style={{
                width: TYPE_MOVIES_WIDTH,
              }}
              opacity={opacity}>
                <Animated.Text style={{
                  ...FONTS.h1,
                  color: COLORS.darkBlue,
                }}>{item.title}</Animated.Text>
              </Animated.View>
            )
          }
        }}
      />
    )
  }

  const renderMovies = () => {
    return (
      <Animated.FlatList
        pagingEnabled
        horizontal
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        data={movies}
        keyExtractor={item => `mk-${item.id}`}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        snapToInterval={Platform.OS === 'ios' ? MOVIES_WIDTH + 28 : MOVIES_WIDTH}
        onScroll={Animated.event([ { nativeEvent: { contentOffset: { x: scrollXMovies }}}], { useNativeDriver: false })}
        renderItem={({ item, index}) => {
          const opacityImage = scrollXMovies.interpolate({
            inputRange: [MOVIES_WIDTH * (index - 2), MOVIES_WIDTH * (index - 1), MOVIES_WIDTH * index],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const rotateImage = scrollXMovies.interpolate({
            inputRange: [MOVIES_WIDTH * (index - 2), MOVIES_WIDTH * (index - 1), MOVIES_WIDTH * index],
            outputRange: ['30deg', '0deg', '30deg'],
            extrapolate: 'clamp',
          })

          if (index === 0 || index === movies.length - 1) {
            return <View key={`mve-${index}`} style={{ width: EMPTY_MOVIES_WIDTH }} />
          } else {
            return (
              <Animated.View key={`mv-${index}`} opacity={opacityImage} style={{
                width: MOVIES_WIDTH,
                padding: SIZES.padding * 1.5,
              }}>
                <TouchableOpacity style={{
                    alignItems: 'center'
                  }} onPress={() => handleMoviesDetail(item)}>
                  <Animated.Image source={{ uri: item.image }} resizeMode="cover" style={{
                    width: '100%',
                    height: windowHeight / 1.6,
                    borderRadius: 40,
                    transform: [
                      { rotateX: rotateImage }
                    ]
                  }} />
                </TouchableOpacity>

                  <Animated.View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: SIZES.padding2 * 2,
                  }}>
                    <Animated.Text style={{
                      ...FONTS.h2,
                      fontWeight: 'bold',
                      color: COLORS.darkBlue,
                    }}>{item.title}</Animated.Text>

                    <Animated.View style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: SIZES.padding,
                    }}>
                      <Animated.Image source={smallStar} style={{
                        width: 20,
                        height: 20,
                      }} />
                      <Animated.Text style={{
                        color: COLORS.grey
                      }}>{item.rating}</Animated.Text>
                    </Animated.View>
                  </Animated.View>
              </Animated.View>
            );
          }
        }}
      />
    )
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS !== 'ios' ? StatusBar.currentHeight + SIZES.padding2 : SIZES.padding2,
      backgroundColor: COLORS.white,
    }}>
      <View>
        {renderTopNavigation()}
      </View>
      <View>
        {renderTypeMovie()}
      </View>
      <View>
        {renderMovies()}
      </View>
    </SafeAreaView>
  );
}

export default Home;
