import React from 'react'

const Home = ({ user }) => {

    return <div>
        {
            user.firstname === "" ? <p> please log in!!!! </p>
                :
                <h1> you are already logged in as {user.username}</h1>

        }

    </div>

}

export default Home