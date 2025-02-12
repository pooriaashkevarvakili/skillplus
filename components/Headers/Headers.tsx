import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header(){
    return(
<>
<div className="xl:block xlg:block laptop:block  hidden">
<HeaderDesktop/>
  </div>
  <div className="xl:hidden lg:block   relative tab:hidden ">
    <HeaderMobile/>
  </div>
</>
    )
}