import { Component } from 'react';
import UserCard from './components/UserCard';
import NewUserCard from './components/NewUserCard';

// PROPS ARE ONE-WAY: FROM PARENT TO CHILD
// PROPS ARE READ-ONLY

export class App extends Component {
  render() {
    return (
      <fieldset>
        <legend>App</legend>
        <NewUserCard
          fullName="Kermit the Frog"
          occupation="Variety Show Host"
          appearances={126}
        />
        <NewUserCard
          fullName="Miss Piggy"
          occupation="Full Time Diva"
          appearances={135}
        />
        <UserCard
          fullName="Fozzie Bear"
          occupation="Comedian"
          appearances={114}
        />
      </fieldset>
    );
  }
}

export default App;
