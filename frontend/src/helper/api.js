const baseURL = 'http://localhost:5000/api';

const API = {
  lists: {
    async getListsOfBoard () {
        const ApiResponse = await fetch(`${baseURL}/list`)
        const json = await ApiResponse.json();

        console.log('getListOfBoard', json)

        return json;
    },
    async getTasksOfList (id){
        const ApiResponse = await fetch(`${baseURL}/list/${id}/tasks`)
        const json = await ApiResponse.json();
        console.log('getTasksOfList', json)

        return json;
    },
    async createList (list){
        const ApiResponse = await fetch(`${baseURL}/list`, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(list)}
        );

        const json = await ApiResponse.json();
        console.log('createList', json)

        return json;
    }
  },
  tasks: {
    async createTask (task){
        console.log('CREATE TASK', task);
        const ApiResponse = await fetch(`${baseURL}/task`, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)}
        );

        const json = await ApiResponse.json();
        console.log('createTask', json)

        return json;
    },
    }
};

export default API;
