

export const createUser = (fields) => {

    const url = 'http://localhost:3004/users';

    const raw = {
        id: fields.id,
        firstName: fields.firstName,
        lastName: fields.lastName,
        phone: fields.phone,
        email: fields.email,
        position: fields.position,
        user: "",
        state: "",
        number_of_doses: "",
        type: "",
        date: "",
        date_of_birth: "",
        address: "",
        password: ""
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(raw)
    };

    return({url,requestOptions});
}

export const deleteUser = (id) => {

    const url = `http://localhost:3004/users/${id}`;

    const raw = {};

    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(raw)
    };

    return({url,requestOptions});
}

export const updateUser = (id,fields) => {

    const url = `http://localhost:3004/users/${id}`;

    const raw = {
        id: fields.id,
        firstName: fields.firstName,
        lastName: fields.lastName,
        phone: fields.phone,
        email: fields.email,
        position: fields.position,
        user: "",
        state: "",
        number_of_doses: "",
        type: "",
        date: "",
        date_of_birth: "",
        address: "",
        password: ""
    };

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(raw)
    };

    return({url,requestOptions});
}
