import React from 'react';
import { connect } from 'react-redux';


// import { Container } from './styles';

// por enquanto fazer action aqui

function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    }
}

const Sidebar = ({ modules, dispatch }) => <aside>{modules.map(module => (
    <div>
        <strong>{module.title}</strong>
        <ul>
            {module.lessons.map(lesson => (
                <li key={lesson.id}>{lesson.title}
                    {/* add btn */}
                    <button onClick={() => dispatch(toggleLesson(module, lesson))} >selecionar</button>
                </li>
            ))}
        </ul>
    </div>
))}</aside>

export default connect(state => ({ modules: state.modules }))(Sidebar);
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