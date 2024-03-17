export default function Search({onSearch}) {

    const formHandler= e => {
        e.preventDefault()
        onSearch(e.target['search'].value)
    }

  return (
    <form className='flex justify-center w-[50%] items-center my-5' onSubmit={formHandler}>
        <input 
            type='text' 
            placeholder='Please Search here...' 
            name='search'
            className="border-[1px] rounded-sm p-2 w-full"
        />
        <button className="px-5 py-2 bg-green-600 text-white hover:bg-green-[400]">
            Search
        </button>
    </form>
  )
}
