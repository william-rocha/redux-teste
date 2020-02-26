import React from 'react';
import { connect } from 'react-redux';

// import { Container } from './styles';

const Video = ({ activeModule, activeLesson }) => (<div><strong>modulo: {activeModule.title}</strong><span>lesson: {activeLesson.title}</span></div>);

export default connect(state => ({ activeModule: state.course.activeModule, activeLesson: state.course.activeLesson }))(Video);
// export default connect(state => ({ activeModule: state.activeModule, activeLesson: state.activeLesson }))(Video);



// import React, { Component } from 'react';

// // import { Container } from './styles';

// export default class Video extends Component {
//     render() {
//         return <><div><strong>modulo x</strong><span>aula x</span></div></>;
//     }
// }
