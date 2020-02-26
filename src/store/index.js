import { createStore } from "redux";

const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [{
        id: 1, title: 'iniciando', lessons: [
            { id: 1, title: 'primeir aula' },
            { id: 2, title: 'segunda aula' },
        ]
    },
    {
        id: 2, title: 'iniciando redyx', lessons: [
            { id: 3, title: 'primeir aula' },
            { id: 4, title: 'segunda aula' },
        ]
    }]
}


function reducer(state = INITIAL_STATE, action) {
    console.log(action);
    console.log('teste');

    if (action.type === 'TOGGLE_LESSON') {
        return { ...state, activeLesson: action.lesson, activeModule: action.module }
    }

    return state
    // {
    //     id: 1, title: 'iniciando', lessons: [
    //         { id: 1, title: 'primeir aula' },
    //         { id: 2, title: 'segunda aula' },
    //     ]
    // },
    // {
    //     id: 2, title: 'iniciando redyx', lessons: [
    //         { id: 3, title: 'primeir aula' },
    //         { id: 4, title: 'segunda aula' },
    //     ]
    // }

}

const store = createStore(reducer)

export default store;

// yarn add redux react-redux