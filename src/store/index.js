import { createStore } from "redux";

function reducer() {
    console.log('teste');

    return {
        activeLesson: null,
        activeModule: null,
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