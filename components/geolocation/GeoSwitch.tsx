import React from 'react';
import {Switch, Text, View} from 'react-native';
import ResponseView from './components/ResponseView';
import {BgMode} from './hook/BgMode';
import {geolocationStyles} from './styles/geolocationStyles';
import {GeoSwitchParams} from './types/locationTypes';

const GeoSwitch = ({
  label,
  thumbColor,
  trackColorFalse,
  trackColorTrue,
  endPoint,
}: GeoSwitchParams) => {
  const {enabled, count, location, response, setEnabled} = BgMode({
    endPoint,
  });

  // console.log('location', location);

  return (
    <View style={geolocationStyles.contentSwitch}>
      <View style={geolocationStyles.containerSwitch}>
        <Text>{label}</Text>
        <Switch
          value={enabled}
          onValueChange={setEnabled}
          thumbColor={thumbColor}
          trackColor={{false: trackColorFalse, true: trackColorTrue}}
        />
      </View>
      <View style={geolocationStyles.responseViewContainer}>
        {location && response && (
          <ResponseView
            count={count}
            myLocation={location}
            response={response}
          />
        )}
      </View>
    </View>
  );
};

export default GeoSwitch;
