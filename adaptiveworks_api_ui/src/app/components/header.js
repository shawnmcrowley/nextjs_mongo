import {Image} from "next/image"

function Header () {
    return (
        <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="../LycraLogo.png"
          alt="The Lycra Company Logo"
          width={100}
          height={100}
          priority
        />
        Integration via API UserInterface
        </div>
    )
}
export default Header;