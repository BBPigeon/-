import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages

const ProfilePage = ({navigation}) => {
  const navigateToDetailProfile = () => {
    navigation.navigate('DetailProfile');
  };
  return (
    <View style={Profilestyles.profileContainer}>
      <View style={Profilestyles.bigSquare}>
        <View style={Profilestyles.profileInfo}>
        <AntDesign name="user" size={60} color="black" />
          <View style={Profilestyles.textContainer}>
            <Text style={Profilestyles.bigSquareText}>Profile 1</Text>
            <Text style={Profilestyles.smallText}>Sungho Jun</Text>
          </View>
        </View>
      </View>
      <View style={Profilestyles.smallSquaresContainer}>
        <View style={Profilestyles.smallSquare}>
          <Text style={Profilestyles.smallSquareText2}>Current Profile</Text>
        </View>
        <TouchableOpacity style={Profilestyles.smallSquare} onPress={navigateToDetailProfile}>
          <Text style={Profilestyles.smallSquareText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailProfilePage() {
  return <Text>Will be updated ASAP...</Text>
}

const AnalyzePage = () => {
  return (
    <View style={Analyzestyles.container}>
      <Text style={Analyzestyles.pageTitle}>오늘의 운동</Text>
      <View style={Analyzestyles.thinBox}>
        <Text style={Analyzestyles.boxText}>스쿼트</Text>
      </View>
      <View style={Analyzestyles.thinBox}>
        <Text style={Analyzestyles.boxText}>벤치프레스</Text>
      </View>
      <View style={Analyzestyles.thinBox}>
        <Text style={Analyzestyles.boxText}>데드리프트</Text>
      </View>
    </View>
  );
};

function CustomRoutinePage() {
  return <Text>Will be updated ASAP...</Text>;
}

const RecommendationPage = () => {
  return (
    <View style={Recomstyles.container}>
      <Text style={Recomstyles.pageTitle}>운동 추천</Text>
      <View Style={Recomstyles.thinBoxAlt}>
        <Text style={Recomstyles.boxTextAlt}>유산소 운동이 부족합니다!</Text>
      </View>
      <View style={Recomstyles.thinBox}>
        <Text style={Recomstyles.boxText}>달리기</Text>
      </View>
      <View style={Recomstyles.thinBox}>
        <Text style={Recomstyles.boxText}>자전거 타기</Text>
      </View>
      <View style={Recomstyles.thinBox}>
        <Text style={Recomstyles.boxText}>등산</Text>
      </View>
    </View>
  );
};

function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bigSquare} onPress={() => navigation.navigate('Profile')}>
        <View style={styles.profileContainer}>
         <AntDesign name="user" size={100} color="black" />
          <Text style={styles.bigSquareText}>Sungho Jun</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.thinSquare}>
        {[18, 19, 20, 21, 22, 23, 24].map((number, i) => (
          <Text key={i} style={styles.thinSquareText}>{number}</Text>
        ))}
      </View>
      <View style={styles.thinSquare2}>
        <Text style={styles.thinSquareText}>무산소</Text>
        <Text style={styles.thinSquareText}>유산소</Text>
      </View>
      <View style={styles.circlesContainer}>
      <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Analyze')}>
          <MaterialCommunityIcons name="chart-line" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Custom Routine')}>
          <FontAwesome name="calendar-check-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate('Recommendation')}>
          <FontAwesome5 name="dumbbell" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Analyze" component={AnalyzePage} />
        <Stack.Screen name="Custom Routine" component={CustomRoutinePage} />
        <Stack.Screen name="Recommendation" component={RecommendationPage} />
        <Stack.Screen name="Details" component={DetailProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor:'#FEF9F0',
  },
  profileContainer: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  bigSquare: {
    width: 310,
    height: 300,
    backgroundColor: '#E3F2C1',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 20, 
    borderRadius: 20,
  },
  bigSquareText: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  thinSquare: {
    width: 310,
    height: 70,
    backgroundColor: '#C9DBB2',
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thinSquare2: {
    width: 310,
    height: 70,
    backgroundColor: '#AAC8A7',
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thinSquareText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Profilestyles = StyleSheet.create({
  profileContainer: {
    width: 360,
    height: 800,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#FEF9F0'
  },
  bigSquare: {
    width: 310,
    height: 100,
    backgroundColor: '#E3F2C1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 50,
    marginBottom: 10,
  },
  bigSquareText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  smallText: {
    fontSize: 14,
  },
  smallSquaresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 310,
  },
  smallSquare: {
    width: 145,
    height: 54,
    backgroundColor: '#E3F2C1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  smallSquareText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallSquareText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BBBBBB'
  },
});


const Analyzestyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#FEF9F0'
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  thinBox: {
    width: 310,
    height: 50,
    backgroundColor: '#E3F2C1',
    marginTop: 10,
    justifyContent: 'center', // This is to center the text vertically
    alignItems: 'center',     // This is to center the text horizontally
    borderRadius: 20,
  },
  boxText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000'
  },
});

const Recomstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#FEF9F0'
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  thinBox: {
    width: 310,
    height: 50,
    backgroundColor: '#E3F2C1',
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center', // This is to center the text vertically
    alignItems: 'center',     // This is to center the text horizontally
  },
  thinBoxAlt: {
    width: 310,
    height: 50,
    backgroundColor: '#FF3636',
    opacity: 0.8,
    marginTop: 10,
    justifyContent: 'center', // This is to center the text vertically
    alignItems: 'center',     // This is to center the text horizontally
  },

  boxText: {
    fontSize: 16,
    color: '#000'
  },
  boxTextAlt: {
    fontSize: 16,
    color: '#FF3636',
    marginTop: -10,
    marginBottom: 40,
  },
});

