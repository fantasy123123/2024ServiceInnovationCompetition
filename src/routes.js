import MainPage from "./Pages/MainPage/MainPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import ApplyForJobPage from "./Pages/MainPage/components/home/ApplyForJobPage";
import HomePage from "./Pages/MainPage/components/home/HomePage";
import ProfessionConsultPage from "./Pages/MainPage/components/home/ProfessionConsultPage";
import RecruitPage from "./Pages/MainPage/components/home/RecruitPage";
import PersonalInformationPage from "./Pages/MainPage/components/person/PersonalInformationPage";
import EditInformation from "./Pages/MainPage/components/person/EditInformation";
import GuidePage from "./Pages/GuidePage/GuidePage";
import FirstGuidePage from "./Pages/GuidePage/components/FirstGuidePage";
import StudentGuidePage from "./Pages/GuidePage/components/StudentGuidePage";
import FirmGuidePage from "./Pages/GuidePage/components/FirmGuidePage";

const routes=[
    {
        path:'/main',
        element:<MainPage />,
        children:[
            {
                path:'/main/home',
                element:<HomePage/>
            },
            {
                path: '/main/job',
                element: <ApplyForJobPage/>
            },
            {
                path: '/main/recruit',
                element: <RecruitPage/>
            },
            {
                path: '/main/consult',
                element: <ProfessionConsultPage/>
            },
            {
                path: '/main/personal',
                element: <PersonalInformationPage/>,
                children:[
                    {
                        path:'/main/personal/edit',
                        element:<EditInformation/>
                    }
                ]
            }
        ]
    },
    {
        path: '/signIn',
        element: <SignInPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '/guide',
        element: <GuidePage />,
        children:[
            {
                path:'/guide/identity',
                element:<FirstGuidePage/>
            },
            {
                path:'/guide/student',
                element:<StudentGuidePage/>
            },
            {
                path:'/guide/firm',
                element:<FirmGuidePage/>
            },
        ]
    },
]

export default routes