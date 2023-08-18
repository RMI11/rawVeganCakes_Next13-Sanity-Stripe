'use client'
 
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import React from 'react'

const Search = () => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const defaultSearchQuery = searchParams.get('search') ?? ""

    function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const searchQuery = formData.get("search")
        router.replace(`/products/?search=${searchQuery}`)
    }

  return (
    <div>
        <form onSubmit={onSubmit} className="">
            <input
                id="search"
                name="search"
                type="search"
                autoComplete="off"
                placeholder="🔎Search products..."
                className="h-6 md:w-[200px] border border-green-500 rounded-lg p-2 mt-6"
                defaultValue={defaultSearchQuery}
            />
        </form>
  </div>
  )
}

export default Search