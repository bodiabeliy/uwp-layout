import LogoMobile from "@/public/assets/logo-mobile.png"
const MainInfoScreenContent = () => {
    return ( 
        <>
        <div className="flex  md:hidden h-screen text-center items-center justify-center ">
            <img className="mb-72" src={LogoMobile.src} alt={"logo"} />
        </div>
        </>
    );
}
 
export default MainInfoScreenContent;