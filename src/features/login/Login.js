import React from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from './loginSlice'
import { useHistory, useLocation } from 'react-router-dom'
import { Notification } from '../../components/Notification/Notification'
import { NOTIFICATION_TYPE } from '../../constants/common'
import { selectTranslation } from '../language/languageSlice'

const Login = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const translation = useSelector(selectTranslation)

  const { from } = location.state || { from: { pathname: '/' } }

  const loginHandler = () => {
    localStorage.setItem('access_token', 'abc')
    localStorage.setItem('expired', new Date())
    dispatch(
      loginSuccess({ userInfo: { displayName: 'Admin', role: 'admin' } })
    )
    history.replace(from)
    Notification({
      type: NOTIFICATION_TYPE.SUCCESS,
      message: translation.NOTI_LOGIN_SUCCESS
    })
  }

  return (
    <div>
      <Button onClick={loginHandler}>login</Button>
    </div>
  )
}

export default Login
