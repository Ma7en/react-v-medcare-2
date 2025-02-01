/* eslint-disable no-unused-vars */
import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// utils
import { App_Admin, App_User } from "../utils/constants";

// =================================================================
// layout
import HomepageLayout from "../components/layouts/Homepagelayout";
// const HomepageLayout = lazy(() =>
//     import("../components/layouts/Homepagelayout")
// );
// import AuthLayout from "../components/layouts/AuthLayout";

// Admin
// import ProtectedRouteAdmin from "../services/auth/ProtectedRouteAdmin";
// import AppAdminLayout from "../components/layouts/AppAdminLayout";
// import AppAdmin from "../pages/admin/appadmin/AppAdmin";

// User
// import ProtectedRouteUser from "../services/auth/ProtectedRouteUser";
// import AppUserLayout from "../components/layouts/AppUserLayout";
// import AppUser from "../pages/user/appuser/AppUser";
// import UpdateProfile from "../pages/user/updateprofile/UpdateProfile";

// =================================================================
// pages
// import HomePage from "../pages/app/home/HomePage";
// import AboutPage from "../pages/app/aboutpage/AboutPage";
// import ServicesPage from "../pages/app/servicespage/ServicesPage";
// // import PortfolioPage from "../pages/app/portfoliopage/PortfolioPage";
// import SkillsPage from "../pages/app/skills/SkillsPage";
// import MyWorkPage from "../pages/app/myworkpage/MyWorkPage";
// import ContactPage from "../pages/app/contactpage/ContactPage";
// import NotFoundPage from "../pages/app/notfoundpage/NotFoundPage";

// pages lazy
// const HomePage = lazy(() => import("../pages/app/homepage/Homepage"));
// const AboutPage = lazy(() => import("../pages/app/aboutpage/AboutPage"));
// const PortfolioPage = lazy(() =>
//     import("../pages/app/portfoliopage/PortfolioPage")
// );
// const ContactPage = lazy(() => import("../pages/app/contactpage/ContactPage"));
// const NotFoundPage = lazy(() =>
//     import("../pages/app/notfoundpage/NotFoundPage")
// );

// =================================================================
//  Verify user
// import Login from "../ui/login/Login";
// import Signup from "../ui/signup/Signup";
// import SocialLoginAuth from "../ui/socialloginauth/SocialLoginAuth";
// import SignupSuccess from "../ui/signupsuccess/SignupSuccess";
// import ResendMail from "../ui/resendmail/ResendMail";
// import ActivateMail from "../ui/activatemail/ActivateMail";
// import PasswordReset from "../ui/passwordreset/PasswordReset";
// import PasswordResetConfirm from "../ui/passwordresetconfirm/PasswordResetConfirm";
// import Logout from "../ui/logout/Logout";

// about me
// import CreateAboutMe from "../components/admin/aboutme/createabout/CreateAboutMe";
// import UpdateAboutMe from "../components/admin/aboutme/updateabout/UpdateAboutMe";
// import DetailsAbout from "../components/admin/aboutme/detailsabout/DetailsAbout";

// skills
// import CreateSkill from "../components/admin/skills/createskill/CreateSkill";
// import UpdateSkill from "../components/admin/skills/updateskill/UpdateSkill";
// import DetailsSkill from "../components/admin/skills/detailsskill/DetailsSkill";
// import ListSkills from "../components/admin/skills/listskills/ListSkills";

// Experience
// import CreateExperience from "../components/admin/experience/createexperience/CreateExperience";
// import UpdateExperience from "../components/admin/experience/updateexperience/UpdateExperience";
// import DetailsExperience from "../components/admin/experience/detailsexperience/DetailsExperience";
// import ListExperiences from "../components/admin/experience/listexperiences/ListExperiences";

// Work
// import CreateWork from "../components/admin/mywork/creatework/CreateWork";
// import UpdateWork from "../components/admin/mywork/updatework/UpdateWork";
// import DetailsWork from "../components/admin/mywork/detailswork/DetailsWork";
// import WorkDetailsView from "../components/mywork/workdetailsview/WorkDetailsView";
// import ListWorks from "../components/admin/mywork/listwork/ListWork";

// services
// import CreateService from "../components/admin/services/createservice/CreateService";
// import UpdateService from "../components/admin/services/updateservice/UpdateService";
// import DetailsService from "../components/admin/services/detailsservice/DetailsService";
// import ServiceDetailsView from "../components/services/servicedetailsview/ServiceDetailsView";
// import ListServices from "../components/admin/services/listservices/ListService";

// =================================================================
// ui components
import Loader from "../ui/loader/Loader";
import HomePage from "../pages/app/homepage/HomePage";
import ScrollToTop from "../hooks/ScrollToTop";
import ContactPage from "../pages/app/contact/ContactPage";
import Login from "../pages/user/auth/login/Login";
import Signup from "../pages/user/auth/signup/Signup";
import ResetPassword from "../pages/user/auth/resetpassword/ResetPassword";
import AboutUs from "../pages/app/aboutus/AboutUs";
import Book from "../pages/app/book/Book";
import Blogs from "../pages/app/blogs/Blogs";
import Blog from "../ui/blogs/Blog";
import VerifyAccount from "../pages/user/auth/verifyaccount/VerifyAccount";
import ChangePassword from "../pages/user/auth/changepassword/ChangePassword";
import ConfirmResetPassword from "../pages/user/auth/confirmresetpassword/ConfirmResetPassword";
import PageNotFound from "../pages/error/PageNotFound";
import ProtectedRouteUser from "../components/auth/ProtectedRouteUser";
import AppLayoutUser from "../components/layouts/AppLayoutUser";
import AppUser from "../pages/user/AppUser";
import AccountUser from "../pages/user/account/AccountUser";
import ContactUser from "../pages/user/contact/ContactUser";
import ReviewUser from "../pages/user/review/ReviewUser";
import BookUser from "../pages/user/book/BookUser";
// import ProtectedRouteAdmin from "../components/auth/ProtectedRouteAdmin";
// import AppLayoutAdmin from "../components/layouts/AppLayoutAdmin";
// import AppAdmin from "../pages/admin/AppAdmin";
// const Loader = lazy(() => import("../ui/loader/Loader"));
// import Carrefour from "../pages/app/spam/Carrefour";

function Router() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <BrowserRouter>
                    <ScrollToTop />

                    <Routes>
                        {/* ===================================================================================== */}
                        {/* Admin */}
                        {/* <Route
                            path={`/${App_Admin}`}
                            element={
                                <ProtectedRouteAdmin>
                                    <AppLayoutAdmin />
                                </ProtectedRouteAdmin>
                            }
                        >
                            <Route
                                index
                                element={
                                    <Navigate
                                        replace
                                        to={`${App_Admin}/profile`}
                                    />
                                }
                            />
                            <Route
                                exact
                                path={`${App_Admin}`}
                                component={Router}
                            />
                            <Route
                                path={`${App_Admin}`}
                                element={<AppAdmin />}
                            />
                            <Route
                                path={`/${App_Admin}`}
                                element={<AppAdmin />}
                            />
                            <Route path={`/admin`} element={<AppAdmin />} />
                            <Route
                                path={`/${App_Admin}/profile`}
                                element={<AppAdmin />}
                            />
                            <Route
                                path={`/${App_Admin}/${App_Admin}/profile`}
                                element={<AppAdmin />}
                            />
                            <Route
                                path={`/${App_Admin}profile`}
                                element={<AppAdmin />}
                            />
                            <Route
                                path={`/${App_Admin}-profile`}
                                element={<AppAdmin />}
                            />
                            <Route
                                path={`/${App_Admin}/${App_Admin}profile`}
                                element={<AppAdmin />}
                            />
                            <Route
                                path={`/${App_Admin}/${App_Admin}-profile`}
                                element={<AppAdmin />}
                            />
                            <Route
                                path={`/${App_Admin}/profile${App_Admin}`}
                                element={<AppAdmin />}
                            />
                            <Route
                                path={`/${App_Admin}/profile-${App_Admin}`}
                                element={<AppAdmin />}
                            />
                        </Route> */}

                        {/* ===================================================================================== */}
                        {/* user */}
                        <Route
                            path={`/${App_User}`}
                            element={
                                <ProtectedRouteUser>
                                    <AppLayoutUser />
                                </ProtectedRouteUser>
                            }
                        >
                            <Route
                                index
                                element={
                                    <Navigate
                                        replace
                                        to={`/${App_User}/profile`}
                                    />
                                }
                            />
                            <Route
                                exact
                                path={`/${App_User}`}
                                component={Router}
                            />
                            <Route
                                path={`/${App_User}`}
                                element={<AppUser />}
                            />
                            <Route path={`${App_User}`} element={<AppUser />} />
                            <Route
                                path={`${App_User}/`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/`}
                                element={<AppUser />}
                            />
                            <Route path={`/user`} element={<AppUser />} />
                            <Route
                                path={`/${App_User}/profile/:id`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/${App_User}/profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/${App_User}-profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}-${App_User}/profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/${App_User}/profile/:id`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}profile/:id`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}-profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}-profile/:id`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/${App_User}profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}-${App_User}profile`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/${App_User}profile/:id`}
                                element={<AppUser />}
                            />
                            <Route
                                path={`/${App_User}/home`}
                                element={<AppUser />}
                            />

                            {/* Account */}
                            <Route
                                path={`/${App_User}/account/:id`}
                                element={<AccountUser />}
                            />
                            <Route
                                path={`/${App_User}/account`}
                                element={<AccountUser />}
                            />
                            {/* 
                            <Route
                                path={`/${App_User}/updateprofile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/update/profile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/update-profile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/profile/update/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/profile-update/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/editprofile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/edit-profile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/edit/profile/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/profileedit/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/profile-edit/:id`}
                                element={<UpdateProfile />}
                            />
                            <Route
                                path={`/${App_User}/profile/edit/:id`}
                                element={<UpdateProfile />}
                            /> */}

                            {/* book */}
                            <Route
                                path={`/${App_User}/book`}
                                element={<BookUser />}
                            />

                            {/* contact */}
                            <Route
                                path={`/${App_User}/contact`}
                                element={<ContactUser />}
                            />

                            {/* review */}
                            <Route
                                path={`/${App_User}/review`}
                                element={<ReviewUser />}
                            />
                        </Route>

                        {/* ===================================================================================== */}
                        {/*  <Route
                                // path="app"
                                element={
                                    <ProtectedRoute>
                                        <AppLayout />
                                    </ProtectedRoute>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <Navigate
                                            replace
                                            to={`${App_Url}/home`}
                                        />
                                    }
                                />
                                <Route exact path="/app" component={App} />
                                <Route
                                    path={`${App_Url}/home`}
                                    element={<AppHome />}
                                />
                                <Route
                                    path={`${App_Url}/blogs`}
                                    element={<AppBlogs />}
                                />
                                <Route
                                    path={`${App_Url}/services`}
                                    element={<AppServices />}
                                />
                                <Route
                                    path={`${App_Url}/book`}
                                    element={<AppBook />}
                                />
                                <Route
                                    path={`${App_Url}/components`}
                                    element={<AppComponents />}
                                />
                                <Route
                                    path={`${App_Url}/landing`}
                                    element={<AppLanding />}
                                />
                                <Route
                                    path={`${App_Url}/iconsnumber`}
                                    element={<AppIconsNumber />}
                                />
                                <Route
                                    path={`${App_Url}/aboutus`}
                                    element={<AppAboutUs />}
                                />
                                <Route
                                    path={`${App_Url}/doctors`}
                                    element={<AppDoctors />}
                                />
                                <Route
                                    path={`${App_Url}/reviews`}
                                    element={<AppReviews />}
                                />

                                <Route
                                    path={`${App_Url}/account`}
                                    element={<Account />}
                                />
                            </Route> */}

                        {/* ======================================================================== */}
                        {/* web site */}
                        <Route path="/" element={<HomepageLayout />}>
                            {/* home page */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/home/page" element={<HomePage />} />
                            <Route path="/home-page" element={<HomePage />} />
                            <Route path="/pagehome" element={<HomePage />} />
                            <Route path="/page-home" element={<HomePage />} />
                            <Route path="/page/home" element={<HomePage />} />
                            {/* 
                            <Route
                                path={`/services/:serviceId`}
                                element={<Service />}
                            />

                            <Route path="/book" element={<Book />} />

                            <Route path="/blogs" element={<Blogs />} />
                            <Route path="/blogs/:blogId" element={<Blog />} />

                            <Route path="/aboutus" element={<AboutUs />} />

                            <Route path="/admins" element={<Admins />} />
                            <Route
                                path="/admins/:adminId"
                                element={<Admin />}
                            />

                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<Signup />} />
                            <Route
                                path="resetpassword"
                                element={<ResetPassword />}
                            />

                            <Route path="/edit" element={<Edit />} />
                            <Route path="*" element={<PageNotFound />} /> */}

                            {/* ======================================================================== */}
                            {/* About page */}
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/aboutpage" element={<AboutUs />} />
                            <Route path="/about/page" element={<AboutUs />} />
                            <Route path="/about-page" element={<AboutUs />} />
                            <Route path="/pageabout" element={<AboutUs />} />
                            <Route path="/page-about" element={<AboutUs />} />
                            <Route path="/page/about" element={<AboutUs />} />
                            <Route path="/aboutus" element={<AboutUs />} />
                            <Route path="/about/us" element={<AboutUs />} />
                            <Route path="/about-us" element={<AboutUs />} />

                            {/* ======================================================================== */}
                            {/* book page */}
                            <Route path="/book" element={<Book />} />

                            {/* ======================================================================== */}
                            {/* blogs page */}
                            <Route path="/blogs" element={<Blogs />} />
                            <Route path="/blogs/:id" element={<Blog />} />

                            {/* ======================================================================== */}
                            {/* contact page */}
                            <Route path="/contact" element={<ContactPage />} />
                            <Route
                                path="/contactpage"
                                element={<ContactPage />}
                            />
                            <Route
                                path="/contact/page"
                                element={<ContactPage />}
                            />
                            <Route
                                path="/contact-page"
                                element={<ContactPage />}
                            />
                            <Route
                                path="/pagecontact"
                                element={<ContactPage />}
                            />
                            <Route
                                path="/page-contact"
                                element={<ContactPage />}
                            />
                            <Route
                                path="/page/contact"
                                element={<ContactPage />}
                            />
                            <Route
                                path="/contactus"
                                element={<ContactPage />}
                            />
                            <Route
                                path="/contact/us"
                                element={<ContactPage />}
                            />
                            <Route
                                path="/contact-us"
                                element={<ContactPage />}
                            />

                            {/* ======================================================================== */}
                            {/* page components */}

                            {/* ======================================================================== */}
                            {/* spam */}
                            {/* <Route path="/carrefour" element={<Carrefour />} /> */}

                            {/* ===================================================================================== */}
                            {/* Verify user | patient */}
                            {/* signup */}
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/register" element={<Signup />} />
                            <Route
                                path="/signupregister"
                                element={<Signup />}
                            />
                            <Route
                                path="/signup/register"
                                element={<Signup />}
                            />
                            <Route
                                path="/signup-register"
                                element={<Signup />}
                            />
                            <Route
                                path="/registersignup"
                                element={<Signup />}
                            />
                            <Route
                                path="/register/signup"
                                element={<Signup />}
                            />
                            <Route
                                path="/register-signup"
                                element={<Signup />}
                            />

                            {/* Verify Account */}
                            <Route
                                path="/verifyaccount"
                                element={<VerifyAccount />}
                            />
                            <Route
                                path="/verify-account"
                                element={<VerifyAccount />}
                            />
                            <Route
                                path="/verify/account"
                                element={<VerifyAccount />}
                            />
                            <Route
                                path="/verify/account/user"
                                element={<VerifyAccount />}
                            />
                            <Route
                                path="/verify/account-user"
                                element={<VerifyAccount />}
                            />
                            <Route
                                path="/verify/account/patient"
                                element={<VerifyAccount />}
                            />
                            <Route
                                path="/verify/account-patient"
                                element={<VerifyAccount />}
                            />

                            {/* login */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/log/in" element={<Login />} />
                            <Route path="/log-in" element={<Login />} />
                            <Route path="/signin" element={<Login />} />
                            <Route path="/sign/in" element={<Login />} />
                            <Route path="/sign-in" element={<Login />} />

                            {/* change password */}
                            {/* <Route
                                path="/changepassword"
                                element={<ChangePassword />}
                            /> */}

                            {/*  */}
                            {/* <Route
                                path="/social/complete/:provider"
                                element={<SocialLoginAuth />}
                            /> */}

                            {/*  */}
                            {/* <Route
                                path="/signupsuccess"
                                element={<SignupSuccess />}
                            />
                            <Route
                                path="/signup/success"
                                element={<SignupSuccess />}
                            />
                            <Route
                                path="/signup-success"
                                element={<SignupSuccess />}
                            /> */}

                            {/*  */}
                            {/* <Route
                                path="/signupresendmail"
                                element={<ResendMail />}
                            />
                            <Route
                                path="/signup/resendmail"
                                element={<ResendMail />}
                            />
                            <Route
                                path="/signup-resendmail"
                                element={<ResendMail />}
                            /> */}

                            {/*  */}
                            {/* <Route
                                path="/activate/:uid/:token"
                                element={<ActivateMail />}
                            /> */}

                            {/* Reset Password */}
                            <Route
                                path="/resetpassword"
                                element={<ResetPassword />}
                            />
                            <Route
                                path="/passwordreset"
                                element={<ResetPassword />}
                            />
                            <Route
                                path="/password/reset"
                                element={<ResetPassword />}
                            />
                            <Route
                                path="/password-reset"
                                element={<ResetPassword />}
                            />
                            <Route
                                path="/reset/password"
                                element={<ResetPassword />}
                            />
                            <Route
                                path="/reset-password"
                                element={<ResetPassword />}
                            />

                            {/* confirm reset password */}
                            <Route
                                path="/confirmresetpassword"
                                element={<ConfirmResetPassword />}
                            />

                            {/*  */}
                            {/* <Route
                                path="/password-reset/:uid/:token"
                                element={<PasswordResetConfirm />}
                            />*/}

                            {/*  */}
                            {/* <Route path="/logout" element={<Logout />} /> */}
                        </Route>

                        {/* ======================================================================== */}
                        {/* NotFound or 404 Error pages */}
                        <Route
                            path="/notfoundpage"
                            element={<PageNotFound />}
                        />
                        <Route
                            path="/not/foundpage"
                            element={<PageNotFound />}
                        />
                        <Route
                            path="/not-foundpage"
                            element={<PageNotFound />}
                        />
                        <Route
                            path="/notfound/page"
                            element={<PageNotFound />}
                        />
                        <Route
                            path="/notfound-page"
                            element={<PageNotFound />}
                        />
                        <Route
                            path="/not/found-page"
                            element={<PageNotFound />}
                        />
                        <Route
                            path="/not-found/page"
                            element={<PageNotFound />}
                        />
                        <Route
                            path="/not/found/page"
                            element={<PageNotFound />}
                        />
                        <Route
                            path="/not-found-page"
                            element={<PageNotFound />}
                        />
                        <Route path="/notfound" element={<PageNotFound />} />
                        <Route path="/not/found" element={<PageNotFound />} />
                        <Route path="/not-found" element={<PageNotFound />} />
                        <Route path="/error" element={<PageNotFound />} />
                        <Route path="/errors" element={<PageNotFound />} />
                        <Route path="/404" element={<PageNotFound />} />
                        <Route path="/error404" element={<PageNotFound />} />
                        <Route path="/error-404" element={<PageNotFound />} />
                        <Route path="/error/404" element={<PageNotFound />} />
                        <Route path="/400error" element={<PageNotFound />} />
                        <Route path="/404-error" element={<PageNotFound />} />
                        <Route path="/404/error" element={<PageNotFound />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default Router;
