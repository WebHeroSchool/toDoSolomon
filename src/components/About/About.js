import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'Solomon7and7',
    }).then(({data}) => {
      this.setState({
        repoList: data,
        isLoading: false,
      })
    })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true,
          errorMessage: error
        })
      })

    octokit.users.getByUsername({
      username: 'Solomon7and7',
    }).then(({data}) => {
      this.setState({
        infoUser: data
        // name: infoUser.name,
        // bio: infoUser.bio,
        // avatar: infoUser.avatar_url,
        // login: infoUser.login
      })
    })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true,
          errorMessage: error
        })
       })
  }

  render() {
    const { isLoading, repoList, infoUser, errorMessage, isError } = this.state;

    return (
      <CardContent>
        {isLoading ?
          <div> <LinearProgress color="secondary" /> <LinearProgress color="secondary" /> </div>
         :
          <div>
            <h1> Обо мне</h1>
            {isError ?
              'Упс! Что-то пошло не так: ' + errorMessage
             :
              <div>
                <div>
                  {infoUser === undefined ?
                    'Информация не найдена'
                   :
                    <img
                      src={infoUser.avatar_url}
                      alt="Avatar"
                      width={'30%'}
                      height={'30%'}
                    />
                  }
                  <h2>
                    {infoUser === undefined ? ' Информация не найдена' : infoUser.name}
                  </h2>
                  <p>
                    {infoUser === undefined ? ' Информация не найдена' : infoUser.bio}
                  </p>
                </div>

                <h3>Мои репозитории:</h3>
                <ol>
                  {repoList === undefined
                    ? 'Информация не найдена'
                    : repoList.map((repo) => (
                      <li key={repo.id}>
                        <a target="_blank" rel = "noreferrer" href={repo.html_url}>{repo.name}</a>
                        <a target="_blank" rel = "noreferrer" href={`https://${infoUser.login}.github.io/${repo.name}/`}> ------> холдинг репозитория </a>
                      </li>
                    ))}
                </ol>
              </div>
            }
          </div>
        }
      </CardContent>
    );
  }
}

export default About;