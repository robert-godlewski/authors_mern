import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const CreateAuthor = (props) => {
    const {authorList, setAuthorList} = props;
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {name})
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthorList([...authorList, res.data]);
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        });
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
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
}

export default CreateAuthor;
