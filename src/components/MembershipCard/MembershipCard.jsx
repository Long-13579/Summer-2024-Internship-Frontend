import Button from '@/components/Button'

export default function MembershipCard({ content }) {
  return (
    <div className='text-white-custom-700 flex-1 px-4 first:pl-0 last:pr-0'>
      <a href='#' className='block aspect-w-16 aspect-h-9 shadow-lg-yellow-700 w-full rounded-lg object-cover'>
        <img src={content.src} alt='Image' className='rounded-lg' />
      </a>
      <h2 className='mt-8 text-3xl font-semibold uppercase'>{content.title}</h2>
      <p className='text-md mt-2 font-normal'>{content.desc}</p>
      <Button title={content.btnTitle} extraClass='max-w-[50%] mt-6' />
    </div>
  )
}
