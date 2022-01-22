import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Image } from '@aws-amplify/ui-react'

 
function Profile({ setUiState }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    checkUser()
  }, [])
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user)
    console.log(user)
  }
  if (!user) return null
  return (
    <>
     <p className="text-xl font-black">Welcome, {user.attributes.name}</p>
     <div className='flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
     <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={user.attributes.picture} alt="" width="384" height="512" />
     </div>
    
     {/* <Image src={user.picture} width='50px' height='50px'/> */}
     <button
        onClick={() => { Auth.signOut(); setUiState('signIn') }}
        className="text-white w-full mt-10 bg-pink-600 p-3 rounded">Sign Out
      </button>
    </> 
  )
}

export default Profile