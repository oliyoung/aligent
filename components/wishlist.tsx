import useLocalStorage from "@/lib/useLocalStorage";
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid'
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline'
import { useCallback } from "react";

const Wishlist = ({ imdbID }: Required<Pick<Media, 'imdbID'>>) => {
    const [wishlistArray, setWishlist] = useLocalStorage<string[]>("wishlist", []);
    const wishlist = new Set(wishlistArray)

    const addToWishlist = useCallback(() => {
        wishlist.add(imdbID)
        setWishlist(Array.from(wishlist.values()))
    }, [])

    const removeFromWishlist = useCallback(() => {
        wishlist.delete(imdbID)
        setWishlist(Array.from(wishlist.values()))
    }, [])

    if (!imdbID) {
        return <></>
    }

    let button = <button className="add-wishlist bg-none border-none" onClick={() => addToWishlist()}>
        <BookmarkIconOutline width={20} height={20} />
    </button>

    if (wishlist.has(imdbID)) {
        button = <button className="remove-wishlist bg-none" onClick={() => removeFromWishlist()}>
            <BookmarkIconSolid width={20} height={20} />
        </button>
    }

    return <div data-testid="wishlist" className="absolute right-2 top-2">
        {button}
    </div>
}

export default Wishlist
