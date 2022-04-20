import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const UpdateAuthor = (props) => {
    const {authorList, setAuthorList} = props;
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                console.log(res.data[0]);
                console.log(res.data[0].name);
                setName(res.data[0].name);
            })
            .catch((err) => console.log(err))
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, {name})
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthorList([...authorList, res.data]);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        });
    }

    return (
        <div>
            <form onSubmit={updateAuthor}>
                <div>
                    <label>Name: </label>
                    <input 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        name="name"
                        type="text"
                    />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <div>
                    <button onClick={() => navigate('/')}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default UpdateAuthor;
