
import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insta from "./components/Insta";
import ProductForm from "./components/ProductForm";
import ProductGrid from "./components/ProductGrid";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Types from "./components/Types";

export default function Home() {

    return (
        <>
        <Header />
        <Hero />
        <Category />
        <Types />
        <Services />
        <ProductGrid />
        <Banner />
        <Reviews />
        <Insta />
        <Footer />
        
        
        </>
    )
}