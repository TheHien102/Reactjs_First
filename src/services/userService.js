
const url = 'http://localhost:8080';


export const getUserArea = () => {
    fetch(`${url}/Welcome/userArea`)
        .then(res => res.json())
        .then((result) => {
                return result;
            }
        )
}