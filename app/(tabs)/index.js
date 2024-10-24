// Exercise 1
// import React from 'react';
// import {View, Text} from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome6";
// const Movie = ({title, year})=> {
//     return (
//         <View>
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name="skull" size={20} color="#B23B23" />
//         </View>
//     );};
//
// const Showing = () => {
//     return (
//         <View>
//             <Movie title="Doctor Sleep" year="2019" color="B23B23"/>
//         </View>
//     );
// };



// export default Showing;

// Exercise 2
//
// import React from 'react';
// import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const Movie = ({title, year, icon_name}) => {
//     return (
//         <View>
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name}/>
//         </View>
//     );
// };
//
// class MovieInfo extends React.Component {
//     render() {
//         return (
//             <View>
//                 <Text>
//                     Current Movie Listings:
//                 </Text>
//                 <Movie title="Doctor Sleep" year="2019" icon_name="star"></Movie>
//             </View>
//
//         );
//     };
// };
//
// export default MovieInfo;

// Exercise 3
// import React from 'react';
// import {View, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const Movie = ({title, year, icon_name}) => {
//     return (
//         <View>
//             <Image
//                 source={require('./img/doctor-sleep.jpg')}
//                 style={{width: 400, height: 500}}
//             />
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} />
//         </View>
//     );
// };
//
// class MovieInfo extends React.Component {
//     render() {
//         return (
//             <View>
//                 <Text>
//                     Current Movie Listings:
//                 </Text>
//                 <Movie title="Doctor Sleep" year="2019" icon_name="star"></Movie>
//             </View>
//         );
//     }
// };


// Exercise 4
// import React from 'react';
// import {View, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const Movie = ({title, year, icon_name, poster}) => {
//     return (
//         <View>
//             <Image
//                 source={poster}
//                 style={{width: 400, height: 500}}
//             />
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} />
//         </View>
//     );
// };
//
// class MovieInfo extends React.Component {
//     render() {
//         return (
//             <View>
//                 <Text>
//                     Current Movie Listings:
//                 </Text>
//                 <Movie
//                     title="Doctor Sleep"
//                     year="2019"
//                     icon_name="star"
//                     poster={require('./img/doctor-sleep.jpg')}
//                 />
//             </View>
//         );
//     }
// };
//
// export default MovieInfo;


// Exercise 5
// import React from 'react';
// import {View, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const Movie = ({title, year, icon_name, poster}) => {
//     return (
//         <View>
//             <Image
//                 source={poster}
//                 style={{width: 400, height: 500}}
//             />
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} />
//         </View>
//     );
// };
//
// const AllMovies = () => {
//     return (
//         <View>
//             <Text>All Movie Listings:</Text>
//             <Movie
//                 title="Doctor Sleep"
//                 year="2019"
//                 icon_name="skull"
//                 poster={require('./img/doctor-sleep.jpg')}
//             />
//             <Movie
//                 title="Midway"
//                 year="2020"
//                 icon_name="person-rifle"
//                 poster={require('./img/midway.jpg')}
//             />
//         </View>
//     );
// };
// export default AllMovies;


// Exercise 6
// import React from 'react';
// import {ScrollView, View, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const Movie = ({title, year, icon_name, poster}) => {
//     return (
//         <View>
//             <Image
//                 source={poster}
//                 style={{width: 400, height: 500}}
//             />
//             <Text>
//                 {title} {year}
//             </Text>
//             <Icon name={icon_name} />
//         </View>
//     );
// };
//
// const AllMovies = () => {
//     return (
//         <ScrollView>
//             <View>
//                 <Text>All Movie Listings:</Text>
//                 <Movie
//                     title="Doctor Sleep"
//                     year="2019"
//                     icon_name="skull"
//                     poster={require('./img/doctor-sleep.jpg')}
//                 />
//                 <Movie
//                     title="Midway"
//                     year="2020"
//                     icon_name="person-rifle"
//                     poster={require('./img/midway.jpg')}
//                 />
//             </View>
//         </ScrollView>
//     );
// };
// export default AllMovies;


// Exercise 7 app.js
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Boat from './boat';

const AllBoats = () => {

    return (
        <ScrollView>
            <View>
                <Text style = {{color: 'grey'}}>GetABoat - For Sale</Text>
                <Text> </Text>
                <Boat
                    icon_name = "sailboat"
                    name = "Sea Ray 500 Sundancer"
                    description = "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    picture = {require('./img/sea_ray.jpg')}
                />
                <Boat
                    icon_name = "sailboat"
                    name = "Four Winns Horizon 180"
                    description = "A sporty look and refined details truly set the Horizon 180 above all others."
                    picture = {require('./img/four_winns.jpg')}
                />
                <Boat
                    icon_name = "sailboat"
                    name = "Flipper 640 ST"
                    description = "A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    picture = {require('./img/flipper.jpg')}

                />
                <Boat
                    icon_name = "sailboat"
                    name = "Princess V48"
                    description = "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                    picture = {require('./img/princess.jpg')}

                />
                <Boat
                    icon_name = "sailboat"
                    name = "Bayliner 175 Bowrider"
                    description = "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    picture = {require('./img/bayliner.jpg')}

                />
                <Boat
                    icon_name = "sailboat"
                    name = "Fairline Targa 47"
                    description = "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    picture = {require('./img/fairline.jpg')}

                />
            </View>
        </ScrollView>
    );
};

export default AllBoats;




