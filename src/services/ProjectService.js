const API_URL = 'http://localhost:8000/api/projects/';

async function fetchProjects() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

export { fetchProjects };
