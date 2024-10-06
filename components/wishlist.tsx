import useLocalStorage from "@/lib/useLocalStorage";
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid'
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline'

const Wishlist = ({ imdbID }: { imdbID: string }) => {
    const [wishlist, setWishlist] = useLocalStorage("wishlist", new Set());

    const addToWishlist = () => {
        const newWishlist = new Set(wishlist);
        newWishlist.add(imdbID)
        setWishlist(newWishlist)
    }

    const removeFromWishlist = () => {
        const newWishlist = new Set(wishlist);
        newWishlist.delete(imdbID)
        setWishlist(newWishlist)
    }

    let button = <button className="bg-none border-none" onClick={() => addToWishlist()}>
        <BookmarkIconOutline width={20} height={20} />
    </button>

    if (Object.hasOwn(wishlist, 'has') && wishlist.has(imdbID)) {
        button = <button className="bg-none" onClick={() => removeFromWishlist()}>
            <BookmarkIconSolid width={20} height={20} />
        </button>
    }

    return <div data-testid="wishlist absolute right-0 top-0">
        {button}
    </div>


}

export default Wishlist
