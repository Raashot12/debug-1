import Head from 'next/head'
import Image from 'next/image';
import FrequentlyAsked from '../src/components/FAQ/FrequentlyAsked';
import HeroSection from '../src/components/HeroSection';
import HowItWorks from '../src/components/HowItWorks';
import MainLayout from '../src/components/MainLayout';
import PropertyList from '../src/components/PropertyList';

function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <PropertyList />
      <FrequentlyAsked />
    </>
  );
}
Home.getLayout = MainLayout;

export default Home;