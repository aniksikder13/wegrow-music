
export default function Header() {
  return (
    <header className='bg-white p-3 border-b-[1px]'>
        <nav className='flex justify-between w-[1600px] m-auto'>
        <h2 className='font-bold'>WeGrow Music</h2>
        <ul className='flex space-x-5'>
            <li>
                <a href="/trending-music" className="hover:text-green-600">
                    Trending music
                </a>
            </li>
            <li>
                <a href="/recommendation-music" className="hover:text-green-600">
                    Recommendation music
                </a>
            </li>
            <li>
                <a href="/auth" className="hover:text-green-600">Sign in</a>
            </li>
        </ul>
        </nav>
    </header>
  )
}
