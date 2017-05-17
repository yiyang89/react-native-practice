import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  // title, artist, thumbnail_image load from props item album by name.
  const { title, artist, url, image, thumbnail_image } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.albumStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button buttonText='Buy Now' pressFunc={() => Linking.openURL(url)}/>
      </CardSection>
    </Card>
  );
};

const styles = {
  // Flex: 1 and width: null make the image span the width of the container
  albumStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
}

export default AlbumDetail;
