import Button from '@/components/Button'

export default function MembershipCard({ content }) {
  return (
    <div className='flex-1 px-4 text-white-custom-700 first:pl-0 last:pr-0'>
      <a href='#' className='aspect-h-9 aspect-w-16 block w-full rounded-lg object-cover shadow-lg-yellow-700'>
        <img src={content.src} alt='Image' className='rounded-lg' />
      </a>
      <h2 className='mt-8 text-3xl font-semibold uppercase'>{content.title}</h2>
      <p className='text-md mt-2 font-normal'>{content.desc}</p>
      <Button title={content.btnTitle} extraClass='max-w-[50%] mt-6' />
    </div>
  )
}
