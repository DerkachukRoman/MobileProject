import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopUp from './MoviePopUp';


export default class Movies extends Component {
  
    static navigationOptions = {
      title: 'Movies'
    };

    state = {
        popupIsOpen: false,
        // Day chosen by user
        chosenDay: 0,       // choose first day by default
        // Time chosen by user
        chosenTime: null,
      }
    
      openMovie = (movie) => {
        this.setState({
          popupIsOpen: true,
          movie,	
        });
      }
    
      closeMovie = () => {
        this.setState({
          popupIsOpen: false,
          // Reset values to default ones
          chosenDay: 0,
          chosenTime: null,
        });
      }

      chooseDay = (day) => {
        this.setState({
          chosenDay: day,
        });
      }
    
      chooseTime = (time) => {
        this.setState({
          chosenTime: time,
        });
      }

      bookTicket = () => {
        // Make sure they selected time 
        if (this.state.chosenTime == null) {
          alert('Please select show time');
        } else {
          // Close popup
          this.closeMovie();
          // Navigate away to Confirmation route
         Actions.Confirmation({ code: Math.random().toString(36).substring(6).toUpperCase() })
        }
      }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {movies.map((movie, index) => <MoviePoster
            movie={movie}
            onOpen={this.openMovie}
            key={index}
          />)}
        </ScrollView>

        <MoviePopUp
            movie={this.state.movie}
            isOpen={this.state.popupIsOpen}
            onClose={this.closeMovie}
            chosenDay={this.state.chosenDay}
            chosenTime={this.state.chosenTime}
            onChooseDay={this.chooseDay}
            onChooseTime={this.chooseTime}
            onBook={this.bookTicket}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});