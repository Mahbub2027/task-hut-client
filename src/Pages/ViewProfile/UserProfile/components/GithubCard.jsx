import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GithubCard = ({ github }) => {

    // const githubUser = github.split('/')[length + 1];
    // console.log(githubUser)

    // const [githubProfile, setGithubProfile] = useState();


    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${githubUser}`)
    //         .then(res => res.json())
    //         .then(res => console.log(res.data))
    // }, []);

    // const { login, name, following, followers, avatar_url, public_repos, updated_at, created_at } = githubProfile;

    return (
        <div className='w-full rounded-3xl border-2 p-4 text-end'>
            <h2 className='font-bold text-2xl text-start pb-2'>Github Profile</h2>
            <hr className="my-3 dark:opacity-50" />
            <div className='flex flex-col lg:flex-row lg:gap-4 p-2 gap-2'>
                <div className='border rounded-xl w-32 h-32'>
                    <img src={"avatar_url"} alt="" />
                </div>
                <div className='flex flex-col justify-between grow'>
                    <div className='flex flex-col lg:flex-row justify-between items-start'>
                        <div className='text-start'>
                            <p className='text-xl font-semibold text-slate-700'>{"name"}</p>
                            <p className='font-medium text-slate-500 italic'>{"login"}</p>
                        </div>
                        <div className=''>
                            <p>{"updated_at"}</p>
                            <p>{"created_at"}</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-around'>
                        <p>{"public_repos"}</p>
                        <p>{"followers"}</p>
                        <p>{"following"}</p>
                    </div>
                </div>
            </div>
            <hr className="my-3 dark:opacity-50" />
            <button type="button" className="primary-btn"><Link to={github} target='_blank'>Goto Github</Link></button>
        </div>
    );
};

export default GithubCard;