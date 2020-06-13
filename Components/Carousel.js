import React from 'react'
import Carousel from 'react-native-snap-carousel';
import {View} from 'react-native'

export class MyCarousel extends Component {

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel layout={'default'}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}
// J'avais commencé a essayer de le faire mais comme je perdais du temps je suis passé a autre chose