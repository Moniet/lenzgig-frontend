import { User } from '../containers/appAction'

export const handleSignUp = event => {
  event.preventDefault()
  const target = event.target
  let formValue = {}

  for (let i = 0; i < target.elements.length - 1; i++) {
    let id = target.elements[i].id,
      value = target.elements[i].value
    formValue[id] = value
  }
  return formValue
}

export const handleStartSurvey = async (userObject = {}) => {
  const userData = await User.signUp(userObject)
  return userData
}
