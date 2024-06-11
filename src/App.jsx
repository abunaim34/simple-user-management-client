
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
  const loadedUser = useLoaderData()

  const handleAddUser = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const prof = form.prof.value
    const age = form.age.value
    const users = { name, prof, age }
    console.log(users);

    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div className='mx-16'>
      <h1 className='text-4xl font-extrabold'>User Management</h1>
      <div className='mt-14'>
        <h1 className="text-2xl font-extrabold">Add User</h1>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleAddUser} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="name" name='name' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Proffesion</span>
                  </label>
                  <input type="text" name='prof' placeholder="Proffesion" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Age</span>
                  </label>
                  <input type="text" name='age' placeholder="Age" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <h1 className="text-3xl font-extrabold">Show Users</h1>
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            {
              loadedUser.map(user => <tbody key={user._id}>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>{user.name}</td>
                  <td>{user.prof}</td>
                  <td>{user.age}</td>
                  <td><button className='btn'>dlt</button></td>
                  <td><button className='btn'>edit</button></td>
                </tr>
              </tbody>)
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
