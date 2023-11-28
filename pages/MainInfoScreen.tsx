
"use client"

import MainInfoScreenContent from "@/features/MainScreenContent/MainScreenContent";
import RightBlurContainer from "@/features/RightBlurContainer/RightBlurContainer";
import Navbar from "@/widgets/Navbar/Navbar";


const MainInfoScreen = () => {

    return ( 
       <div className="bg-neutral-900 h-screen	">
            <Navbar />
            <RightBlurContainer />
            <MainInfoScreenContent />
        </div>
      
     );
}
 
export default MainInfoScreen;
