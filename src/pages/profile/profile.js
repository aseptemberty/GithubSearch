import React, {useContext,useEffect,Fragment} from "react";
import {GithubContext} from "../../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../../components/Repos";

export const Profile =({match})=> {
    const {getRepos,getUser,loading,user,repos}=useContext(GithubContext)
    const urlName=match.params.name



    useEffect(()=>{
        getUser(urlName)
        getRepos(urlName)
            // eslint-disable-next-line
    },
        [])
    const {
        name,company, avatar_url,
        location,bio,blog, following,
        login,html_url,followers,
        public_repos,public_gists
    } = user

    if (loading){
        return <p className='text-xl-center'> Загрузка</p>
    }
    return (
        <Fragment>
            <Link to='/' className='btn btn-link'>На главную</Link>
            <div className='card mb-4'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm-3 text-center'>
                            <img src={avatar_url} alt={name} style = {{width:'150px'}}/>
                            <h1>{name}</h1>
                            {location&&<p>Местоположение: {location}</p>}
                        </div>
                            <div className='col'>
                                {bio&&<Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment>}

                            <a
                                href={html_url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn btn-dark'>
                                Открыть профиль
                            </a>
                            <ul>
                                {login&&<li>
                                    Username : {login}
                                </li>}
                                {company&&<li>
                                    Компания : {company}
                                </li>}
                                {blog&&<li>
                                    Website : {blog}
                                </li>}
                            </ul>
                            <div className='badge badge-primary'>Подписчики: {followers}</div>
                            <div className='badge badge-success'>Подисан: {following}</div>
                            <div className='badge badge-info'>Репозитории: {public_repos}</div>
                            <div className='badge badge-danger'>Gists: {public_gists}</div>
                            </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    )
}