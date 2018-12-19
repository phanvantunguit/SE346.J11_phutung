import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Dimensions} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class SlideShow extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
            banners: [
               {
                    image: require('../resources/poster/venom.jpg')
               }, {
                    image: require('../resources/poster/a-star-is-born.jpg')
               }, {
                    image: require('../resources/poster/rampant.jpg')
               }
            ]
          };
      }

    _renderItem ({item, index}) {
        return (
            <TouchableOpacity style={styles.bannerContainer}>
                 <Image source={item.image} style={styles.bannerStyle} />
            </TouchableOpacity>
        );
    }

    render () {
        let {width} = Dimensions.get('window');
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.banners}
              layout={'default'}
              loop={true}
              autoplay={true}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={300}
              style={styles.carouselStyle}
            />
        );
    }
}

const styles = StyleSheet.create({
    carouselStyle:{
        marginTop: 10
    },
    bannerStyle:{
        width: 300,
        height: 225,
        resizeMode: 'stretch',
        borderRadius: 5
    }
});
