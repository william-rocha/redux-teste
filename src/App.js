import React from 'react';
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  // state = {
  //   activeLesson: {},
  //   modules: [
  //     {
  //       id: 1, title: 'iniciando', lessons: [
  //         { id: 1, title: 'primeir aula' },
  //         { id: 2, title: 'segunda aula' },
  //       ]
  //     },
  //     {
  //       id: 2, title: 'iniciando redyx', lessons: [
  //         { id: 3, title: 'primeir aula' },
  //         { id: 4, title: 'segunda aula' },
  //       ]
  //     }
  //   ]
  // }
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Video activeLesson={this.state.activeLesson}></Video>
        <Sidebar modules={this.state.modules}></Sidebar> */}
        <Video ></Video>
        <Sidebar ></Sidebar>
      </Provider>
    </div>
  );
}

export default App;
