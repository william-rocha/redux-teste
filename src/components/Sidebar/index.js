import React from 'react';
import { connect } from 'react-redux';
//  add
import * as CourseActions from '../../store/actions/course'

// import { Container } from './styles';

// por enquanto fazer action aqui

// VAI PARA PASTA ACTIONS

// function toggleLesson(module, lesson) {
//     return {
//         type: 'TOGGLE_LESSON',
//         module,
//         lesson,
//     }
// }

const Sidebar = ({ modules, toggleLesson }) => <aside>{modules.map(module => (
    <div>
        <strong>{module.title}</strong>
        <ul>
            {module.lessons.map(lesson => (
                <li key={lesson.id}>{lesson.title}
                    {/* add btn */}
                    {console.log('sidebar modulo', module)}
                    {console.log('sidebar lesson', lesson)}
                    {/*  add */}
                    <button onClick={() => toggleLesson()} >selecionar</button>
                    {/* <button onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))} >selecionar</button> */}
                </li>
            ))}
        </ul>
    </div>
))}</aside>

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
// export default connect(state => ({ modules: state.modules }))(Sidebar);
// export default connect(state => ({ modules: state }))(Sidebar);



// import React, { Component } from 'react';

// class Sidebar extends Component {
//     // state = {
//     //     modules: [
//     //         {
//     //             id: 1, title: 'iniciando', lessons: [
//     //                 { id: 1, title: 'primeir aula' },
//     //                 { id: 2, title: 'segunda aula' },
//     //             ]
//     //         },
//     //         {
//     //             id: 2, title: 'iniciando redyx', lessons: [
//     //                 { id: 3, title: 'primeir aula' },
//     //                 { id: 4, title: 'segunda aula' },
//     //             ]
//     //         }
//     //     ]
//     // }
//     render() {
//         const { modules } = this.state
//         return (
//             <aside>{modules.map(module => (
//                 <div>
//                     <strong>{module.title}</strong>
//                     <ul>
//                         {module.lessons.map(lesson => (
//                             <li key={lesson.id}>{lesson.title}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}</aside>);
//     }
// }

// export default Sidebar;