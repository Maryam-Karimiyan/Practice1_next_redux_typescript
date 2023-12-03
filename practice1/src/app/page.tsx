"use client"
import styles from './page.module.css'
import { Login } from '@/components/log_in'
import { useAppSelector } from '../redux/store'
export default function Home() {
  const userName=useAppSelector((state)=>state.authReducer.value.userName)
  const isModerator=useAppSelector((state)=>state.authReducer.value.isModerator)
  return (
    <main className={styles.main}>
      <Login/>

      <h1>UserName: {userName}</h1>
      {isModerator && <h1>this user is a Moderator</h1>}
    </main>
  )
}
