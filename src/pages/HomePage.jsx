import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Search from "../components/Search/Search.jsx";
import CategorySection from "../components/CategorySection/CategorySection.jsx";
import FilterButton from "../components/FilterButton/FilterButton.jsx";


const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <Search/>
            <CategorySection/>
            <FilterButton/>
        </main>
    );
};

export default HomePage;
