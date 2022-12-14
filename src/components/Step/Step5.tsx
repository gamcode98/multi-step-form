import ThankYouIcon from './../../assets/images/icon-thank-you.svg'

function Step5() {
  return (
    <div className='w-full'>
      <div className='bg-white text-center rounded-lg w-[95%] mx-auto p-6 py-16 -translate-y-16 md:w-8/12 lg:translate-y-0 lg:px-0 lg:w-2/3 lg:py-32'>
        <img
          src={ThankYouIcon}
          alt='thank you'
          className='block mx-auto mb-4 w-16'
        />
        <h2 className='font-bold text-marine-blue text-2xl mb-2 '>
          Thank you!
        </h2>
        <p className='text-cool-gray mb-4'>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  )
}

export default Step5
