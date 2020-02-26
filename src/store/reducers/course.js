
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

// add export e nomei course
export default function course(state = INITIAL_STATE, action) {
    console.log(action);
    console.log('teste');

    if (action.type === 'TOGGLE_LESSON') {
        return { ...state, activeLesson: action.lesson, activeModule: action.module }
    }

    return state
}
