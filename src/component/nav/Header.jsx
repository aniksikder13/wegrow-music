import { useCookies } from 'react-cookie'

export default function Header() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const user = cookies?.user;
    const isAuthenticated = !!user;

    const authText= !isAuthenticated ? <a href="/auth" className="hover:text-green-600">
                                            Sign in
                                        </a> :
                                        <span 
                                            className="hover:text-green-600 cursor-pointer" 
                                            onClick={() => {
                                                removeCookie(['user'])
                                                window.location.replace('/auth')
                                            }}
                                        > 
                                            Sign Out
                                        </span>

  return (
    <header className='bg-white p-3 border-b-[1px]'>
        <nav className='flex justify-between w-[1600px] m-auto'>
        <h2 className='font-bold'>WeGrow Music</h2>
        <ul className='flex space-x-5'>
            <li>
                <a href="/" className="hover:text-green-600">
                    Trending music
                </a>
            </li>
            <li>
                <a href="/recommendation-music" className="hover:text-green-600">
                    Recommendation music
                </a>
            </li>
            <li>
                {authText}
            </li>
        </ul>
        </nav>
    </header>
  )
}
