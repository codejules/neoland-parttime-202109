import { authenticateUser } from '../logic'

function AuthenticateUser() {

    const auth = event => {
        event.preventDefault()
        const { target: { email: { value: email }, password: { value: password } } } = event //extraer los campos
        try {
            authenticateUser(email, password)
                .then(() => alert('User Authenticate'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }



    return (
        <>
            <div className="bg-cover h-screen bg-right bg-slate-200">
                <header className="w-full container mx-auto p-6">
                    <a href="/">
                        <nav className="flex justify-between items-center">
                            <div className="flex items-center hover:text-indigo-300 text-indigo-400 text-4xl font-bold"><svg class="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path>
                            </svg>AppNote</div>
                            <div className="gap-10 flex text-violet-700 text-xl">
                                <span><a className="hover:underline hover:underline-offset-8" href="/Login">Auth</a></span>
                                <span><a className="hover:underline hover:underline-offset-8" href="/Register">Register</a></span>
                            </div>
                        </nav>
                    </a>
                </header>

                <section className="container w-full mx-auto pt-24 px-6">
                    <div>
                        <p className="text-2xl font-bold text-center pb-8">Sign in to NoteApp</p>
                        <form className="grid gap-6 w-1/4 mx-auto" onSubmit={auth}>
                            <label>
                                <input className="w-full" type="email" class="mt-1 w-full" name="email" placeholder="email" />
                            </label>
                            <label className="text-right">
                                <input className="w-full" type="password" class="mt-1 w-full" name="password" placeholder="password" />
                                <span className="font-bold">Forgot password?</span>
                            </label>
                            <button className='w-full bg-transparent hover:bg-indigo-400 text-indigo-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Submit</button>

                        </form>
                    </div>
                </section>

            </div>
        </>
    )
}

export default AuthenticateUser