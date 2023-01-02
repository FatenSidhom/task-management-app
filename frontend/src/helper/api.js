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
    },
    async updateList (listId, updatedList){
        const ApiResponse = await fetch(`${baseURL}/list/${listId}`, {
            method: 'PUT', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedList)}
        );

        const json = await ApiResponse.json();
        console.log('updateList', json)

        return json;
    },
    async deleteList (listId){
        const ApiResponse = await fetch(`${baseURL}/list/${listId}`, {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
      
        const json = await ApiResponse.json();
        console.log('deleteList', json)
      
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
    async updateTask (taskId, updatedTask){
        const ApiResponse = await fetch(`${baseURL}/task/${taskId}`, {
            method: 'PUT', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)}
        );

        const json = await ApiResponse.json();
        console.log('updateTask', json)

        return json;
    },
    async deleteTask (taskId){
        const ApiResponse = await fetch(`${baseURL}/task/${taskId}`, {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        const json = await ApiResponse.json();
        console.log('deleteTask', json)

        return json;
    }
    }
};

export default API;
