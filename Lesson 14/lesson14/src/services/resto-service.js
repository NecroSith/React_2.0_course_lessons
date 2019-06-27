export default class RestoService {
    getMenuItems() {
        const url = 'http://localhost:3001/menu';
        const result = fetch(url)
            .then(res => res.json())
            .then(res => JSON.stringify(res))
        return result;
    }
}