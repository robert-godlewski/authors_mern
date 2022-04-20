// Libraries
import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


const DisplayAll = (props) => {
    const {authorList, setAuthorList} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err) => {console.log(err)});
    }, []);

    return (
        <div>
            <Link to={'/author/new'}>Add in Author</Link>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.map((author, index) => (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <button onClick={() => navigate(`/author/edit/${author._id}`)}>
                                        Edit
                                    </button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAll;
