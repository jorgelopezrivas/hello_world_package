import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class HelloWorld extends React.PureComponent {
    static propTypes = {
      name: PropTypes.string
    }

    static defaultProps = {
      name: 'World'
    }

    render() {
      const { name } = this.props;
      return (
        <View>
          <Text>
            Hello
            { name }
          </Text>
        </View>
      );
    }
}
