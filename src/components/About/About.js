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
        fetchFailure: true
      })
    })
      .catch((error) => {
        this.setState({
          isLoading: false,
          fetchFailure: true,
          errorMessage: error
        })
      })

    octokit.users.getByUsername({
      username: 'Solomon7and7',
    }).then(({data}) => {
      this.setState({
        name: data.name,
        bio: data.bio,
        avatar: data.avatar_url,
        login: data.login
      })
    })
      .catch((error) => {
        this.setState({
          isLoading: false,
          fetchFailure: true,
          errorMessage: error
        })
       })
  }

  render() {
    const { isLoading, repoList, avatar, bio, name, login, } = this.state;

    return (
      <CardContent>
          <h1>
            { isLoading
            ? <div> <LinearProgress color="secondary" /> <LinearProgress color="secondary" /> </div>
            : name }</h1>
        {!isLoading && <ol>
          <div>
            <img src={avatar} alt="avatar" width={'30%'} height={'30%'} />
            <p>{ bio }</p>
          </div>
          <h2> Мои репозитории: </h2>
          {repoList === undefined
            ? 'неизвестно'
            : repoList.map(repo => (<li key={repo.id}>
            <a target="_blank" rel = "noreferrer" href={repo.html_url}>{repo.name}</a>
            <a target="_blank" rel = "noreferrer" href={`https://${login}.github.io/${repo.name}/`}> ------> холдинг репозитория </a>
          </li>))}
        </ol>}
      </CardContent>
  );
  }
}

export default About;
