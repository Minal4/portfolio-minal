import InnerBannerImage from '../assets/images/hero.jpg';

const InnerBanner = ({ pageTitle }) => {
    return (
        <div className='lg:py-52 md:py-40 py-24 inner-banner relative flex justify-center items-center'>
            <h2 className='heading lg:text-6xl md:text-3xl sm:text-2xl relative text-color-light z-10'>{pageTitle}</h2>
            <img className='absolute top-0 left-0 h-full w-full' src={InnerBannerImage} alt={'inner banner'} />
        </div>
    )
}

export default InnerBanner
