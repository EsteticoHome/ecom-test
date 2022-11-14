import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCircleUser, faBars, faHome, faSearch, faStore, faClose, faReceipt, faHeart, faStar, faStoreAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white py-5">
        <div className="px-4 mx-auto flex items-center">

            <div class="flex-none w-14">
                <a href={() => false} role="button" className="font-bold text-xl text-indigo-600">FWR</a>
            </div>
            <div class="grow">
                <div className={`nav-left`}>
                    <form className='flex flex-row w-full'>
                        <input class="appearance-none block w-full text-gray-700 border border-gray-200 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm rounded-l-lg" id="grid-last-name" type="text" placeholder="Search" />
                        {/* <input
                            class="h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 w-full px-2 outline-none text-lg text-gray-600"
                            type="text" placeholder="What do you want to learn?" /> */}
                        <span
                            class="flex items-center bg-primary rounded rounded-l-none border-0 px-4 text-grey-100">
                            <button
                                class="bg-gredient-dark hover:bg-gredient-light text-sm text-white py-2 rounded-lg">
                                    <FontAwesomeIcon className='text-[14px]' icon={faSearch} />
                                </button>
                        </span>
                    </form>
                </div>
            </div>
            <div class="flex-none">
                <button className={`border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden`} onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                
                <div className='layer-btn-nav'>
                    <a href={() => false} role="button" className="btn-nav-mobile md:hidden"><FontAwesomeIcon className='text-[20px]' icon={faHome} /> <label className='text-for-btn-nav-mobile'>Home</label></a>
                    
                    <a href={() => false} role="button" className="btn-nav-mobile md:hidden"><FontAwesomeIcon className='text-[20px]' icon={faSearch} /> <label className='text-for-btn-nav-mobile'>Find</label></a>
                    
                    <a href={() => false} role="button" className="btn-nav-mobile btn-nav-mobile-active md:hidden"><FontAwesomeIcon className='text-[20px]' icon={faStore} /> <label className='text-for-btn-nav-mobile'>Catalog</label></a>
                    
                    <a href={() => false} role="button" className="btn-nav-mobile"><FontAwesomeIcon className='text-[20px]' icon={faShoppingCart} /> <label className='text-for-btn-nav-mobile md:hidden'>Cart</label></a> 
                    
                    <label className='hidden md:flex md:items-center'>|</label>
                    
                    <a href={() => false} role="button" className="btn-nav-mobile md:hidden"><FontAwesomeIcon className='text-[20px]' icon={faCircleUser} /> <label className='text-for-btn-nav-mobile md:hidden'>Account</label></a>
                    
                    <button class="hidden bg-transparent hover:bg-primary text-primary hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded ml-5 text-xs font-normal md:block">
                        Sign in
                    </button>
                    <button class="hidden bg-primary text-white py-2 px-4 border border-primary rounded ml-2 text-xs font-normal md:block">
                        Sign up
                    </button>
                </div>
            </div>

            <div className={`right-0 bottom-0 fixed bg-white h-full w-full p-5 ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-all ease-in-out duration-300 z-10`}>

                <div class="flex flex-col">
                    <div class="flex flex-row items-center">
                        <button className='text-gray-400 text-xl' onClick={() => setIsOpen(!isOpen)}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                        <h2 className='text-sm ml-3 font-bold'>Main Menu</h2>
                    </div>
                    <div class="flex flex-row mt-4">
                        <button class="bg-transparent hover:bg-primary text-primary hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded text-xs font-normal w-full">
                            Sign in
                        </button>

                        <button class="bg-primary text-white py-2 px-4 border border-primary rounded ml-2 text-xs font-normal w-full">
                            Sign up
                        </button>
                    </div>
                    <div className='line-mobile-menu mt-4'></div>
                    <div class="flex flex-col mt-2">

                        <label className='text-md font-bold mb-4'>My Activity</label>

                        <div class="flex">
                            <div className='flex-none w-6 text-center'>
                                <FontAwesomeIcon className='text-[20px]' icon={faReceipt} />
                            </div>
                            <div className='grow'>
                                <label className=' text-[14px] font-extralight ml-5'>Transaction</label>
                            </div>
                        </div>

                        <div class="flex mt-3">
                            <div className='flex-none w-6 text-center'>
                                <FontAwesomeIcon className='text-[20px]' icon={faHeart} />
                            </div>
                            <div className='grow'>
                                <label className='text-[14px] font-extralight ml-5'>Wishlist</label>
                            </div>
                        </div>

                        <div class="flex mt-3">
                            <div className='flex-none w-6 text-center'>
                                <FontAwesomeIcon className='text-[20px]' icon={faStar} />
                            </div>
                            <div className='grow'>
                                <label className='text-[14px] font-extralight ml-5'>Review</label>
                            </div>
                        </div>

                        <div class="flex mt-3">
                            <div className='flex-none w-6 text-center'>
                                <FontAwesomeIcon className='text-[20px]' icon={faStoreAlt} />
                            </div>
                            <div className='grow'>
                                <label className='text-[14px] font-extralight ml-5'>Favorite Store</label>
                            </div>
                        </div>

                    </div>
                </div> 

            </div>
        </div>
    </nav>
  )
}

export default Header