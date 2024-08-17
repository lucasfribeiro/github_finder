import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from './User.module.css'

const User = ({avatar_url, login, location, followers, following}: UserProps) => {
  return (
    <div className={styles.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>

      {location && (
        <p className={styles.location}>
        <MdLocationPin className={styles.icon}/>
        <span>{location}</span>
      </p>
      )}
        <div className={styles.status}>
            <div className={styles.status_container}>
                <p>Segidores:</p>
                <p>{followers}</p>
            </div>
            <div className={styles.status_container}>
                <p>Seguindo:</p>
                <p>{following}</p>
            </div>
        </div>
        <Link to={`https://github.com/${login}?tab=repositories`} className={styles.link}>
            Ver repositórios
        </Link>
    </div>
  )
}

export default User
