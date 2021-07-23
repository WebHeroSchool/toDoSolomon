import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Octokit } from '@octokit/rest';
import styles from '../About/About.module.css'

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
                      <h2 className={styles.title}>
                        {infoUser === undefined ? ' Информация не найдена' : infoUser.name}
                      </h2>
                      <p className={styles.subTitle}>
                        {infoUser === undefined ? ' Информация не найдена' : infoUser.bio}
                      </p>
                      <div className={styles.Contacts}>
                        <a className={styles.ContactsMail} href="mailto:solomon7and@gmail.com">solomon7and@gmail.com</a>
                        <a className={styles.ContactsTel} href="tel:+998909934038">+998 (90) 993 - 4038</a>
                      </div>
                      <div className={styles.icons}>
                        <a className={styles.github} href="https://github.com/Solomon7and7"> </a>
                        <a className={styles.instagram} href="https://www.instagram.com/solomonzaxar/"> </a>
                        <a className={styles.vk} href="https://vk.com/solomon_7and7"> </a>
                        <a className={styles.facebook} href="https://www.facebook.com/profile.php?id=100001036793367"> </a>
                        <a className={styles.linkedin} href="https://github.com/Solomon7and7"> </a>
                      </div>
                    </div>

                  </div>

                  <div className={styles.content}>
                    <h3>Мои репозитории:</h3>
                    <ol>
                      {repoList === undefined
                        ? 'Информация не найдена'
                        : repoList.map((repo) => (
                          <li className={styles.repoList} key={repo.id}>
                            <a className={styles.repoLinks} target="_blank" rel = "noreferrer" href={repo.html_url}>{repo.name}</a>
                            <a className={styles.repoLinks}
                               target="_blank" rel = "noreferrer"
                               href={repo.name === 'todoSolomon' ? `https://todo-solomon-theta.vercel.app//` : `https://Solomon7and7.github.io/${repo.name}`}>
                              холдинг репозитория </a>
                          </li>
                        ))}
                    </ol>
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