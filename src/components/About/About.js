import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Octokit } from '@octokit/rest';
import classNames from "classnames";
import styles from '../About/About.module.css'
import arrow from '../About/arrow.png'

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    infoAboutUser: [],
    isErrorUser: false,
    isErrorRepo: false,
    errorMessage: '',
    firstRepo: 0,
    lastRepo: 4
  }

  prevPage = () => {
    this.setState({
        firstRepo: this.state.firstRepo - 4,
        lastRepo: this.state.lastRepo - 4
    });
};

  nextPage = () => {
    this.setState({
        firstRepo: this.state.firstRepo + 4,
        lastRepo: this.state.lastRepo + 4
    });
};

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'Solomon7and7',
    }).then(({data}) => {
      console.log(data)
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
    const { isLoading, repoList, infoUser, errorMessage, isError, firstRepo, lastRepo } = this.state;
    const repoListPage = repoList.slice(firstRepo, lastRepo);

    return (
        <div>
          {isLoading ?
            <div> <LinearProgress color="secondary" /> <LinearProgress color="secondary" /> </div>
           :
            <div>
              {isError ?
                'Упс! Что-то пошло не так: ' + errorMessage
               :
                <div>
                  <div className={styles.About}>
                    {infoUser === undefined ?
                      'Информация не найдена'
                     :
                      <img
                        src={infoUser.avatar_url}
                        alt="Avatar"
                        className={styles.Avatar}
                      />
                    }
                    <div className={styles.AboutInfo}>
                      <div>
                        <h2 className={styles.title}>
                          {infoUser === undefined ? ' Информация не найдена' : infoUser.name}
                        </h2>
                        <p className={styles.subTitle}>
                          {infoUser === undefined ? ' Информация не найдена' : infoUser.bio}
                        </p>
                        <div className={styles.Contacts}>
                          <a className={styles.ContactsMail} target="_blank" rel = "noreferrer" href="mailto:solomon7and@gmail.com">solomon7and@gmail.com</a>
                          <a className={styles.ContactsTel} target="_blank" rel = "noreferrer" href="https://t.me/solomonzaxar">+7 (905) 677 62 84</a>
                        </div>
                      </div>
                      <div className={styles.iconsBox}>
                        <div className={styles.icons}>
                          <a className={styles.github} target="_blank" rel = "noreferrer" href="https://github.com/Solomon7and7"> </a>
                          <a className={styles.instagram} target="_blank" rel = "noreferrer" href="https://www.instagram.com/solomonzaxar/"> </a>
                          <a className={styles.vk} target="_blank" rel = "noreferrer" href="https://vk.com/solomon_7and7"> </a>
                          <a className={styles.facebook} target="_blank" rel = "noreferrer" href="https://www.facebook.com/profile.php?id=100001036793367"> </a>
                          <a className={styles.linkedin} target="_blank" rel = "noreferrer" href="https://github.com/Solomon7and7"> </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.content}>
                    <div>
                      <div className={styles.repoHeader}>
                        <h3>Мои работы на github.com:</h3>
                        <div className={styles.arrows}>
                          <button onClick={this.prevPage} disabled={firstRepo < 4}>
                              <img className={styles.arrow_left} src={arrow} alt='scroll-left'/>
                          </button>
                          <button onClick={this.nextPage} disabled={repoList.length <= lastRepo}>
                            <img className={styles.arrow_right} src={arrow} alt='scroll-right'/>
                          </button>
                         </div>
                      </div>
                      <ol>
                        {repoList === undefined
                          ? 'Информация не найдена'
                          : repoListPage.map((repo) => (
                            <li className={styles.repoList} key={repo.id}>
                              <a className={styles.repoLinks} target="_blank" rel = "noreferrer" href={repo.html_url}>
                                <span>{repo.name}</span>
                                <span>
                                  {repo.description}
                                </span>
                                <div className={styles.repo__info}>
                                  <span className={
                                    repo.language === null
                                    ? repo.language = 'CSS'
                                      :
                                    classNames({
                                      [styles.language]: true,
                                      [styles.html]: repo.language === 'HTML',
                                      [styles.css]: repo.language === 'CSS',
                                      [styles.js]: repo.language === 'JavaScript',
                                    })}>
                                  {repo.language}
                                  </span>
                                  <span
                                    className={styles.star}>{repo.stargazers_count}</span>
                                  <span
                                    className={styles.fork}>{repo.forks_count}</span>
                                  <span> Updated on {new Date(repo.updated_at).toLocaleString('en-US', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                  })}</span>
                                </div>
                              </a>
                              <a className={styles.repoHold}
                                target="_blank" rel = "noreferrer"
                                href={repo.name === 'todoSolomon' ? `https://todo-solomon-psi.vercel.app/` : `https://Solomon7and7.github.io/${repo.name}`}>
                                холдинг</a>
                            </li>
                          ))}
                      </ol>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      );
    }
}

export default About;