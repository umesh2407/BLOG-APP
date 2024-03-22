import {useState} from "react";

const RegisterPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function register(ev){
ev.preventDefault();

  const response = await fetch('https://blog-app-server-roan.vercel.app/register',{
  method:'POST',
  body: JSON.stringify({username,password}),
  headers: {'Content-Type':'application/json'},
});
if(response.status === 200){
  alert('Registration successful');
}else{
  alert('Registration failed. Try again later..');
};
};
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
     <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
     <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
     <button>Register</button>
   </form>
  )
}

export default RegisterPage;