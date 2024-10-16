"use client"
// import { useTranslations } from 'next-intl';

const handleExit = () => {
  window.location.href = 'https://www.google.com';
}
const ExitButton = () => {
  // const t = useTranslations();
  return (
    <button 
      className='py-2 px-4 text-white font-bold btn-secondary rounded'
      onClick={handleExit}
      >
        <span></span>
        <span>{'EXIT WEBSITE'}</span>
    </button>
  )
}

export default ExitButton