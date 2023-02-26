import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';


export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    

  return (
    <section className='flex flex-col items-center justify-center py-32 lg:py-0 lg:h-screen contact'
    style={{
        backgroundImage: "url('/images/contact/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover"
    }}
    >
        <div className='container px-10 py-10 mx-auto'>
            <div className='grid grid-cols-12 place-items-center'>
            <div className='col-span-12 lg:col-span-5'>
                <p className="pb-2 !text-sm font-semibold uppercase tracking-px">firma adı</p>
                <h2 className="pt-2 pb-10 text-6xl custom-shadow">İletişim</h2>
                <p>Bizimle iletişim formundan veya discord <br/> üzerinden iletişime geçebilirsiniz.</p>
                <div className='flex flex-col gap-6 py-10'>
                    <div className='flex items-center justify-start gap-4'>
                        <Image src='/images/contact/discord.png' width={30} height={30} />
                        <p className='!text-white uppercase font-bold'>@semihkesepara</p>
                        <Link href='/' className='bg-[#ffca01] font-bold rounded-3xl px-3 py-2.5 text-black hover:bg-black text-xs transition-all hover:text-[#ffca01]'>Sohbete Başla</Link>
                    </div>
                    <div className='flex items-center justify-start gap-4'>
                        <Image src='/images/contact/discord.png' width={30} height={30} />
                        <p className='!text-white uppercase font-bold'>@furkanbeydemir</p>
                        <Link href='/' className='bg-[#ffca01] font-bold rounded-3xl px-3 py-2.5 text-black hover:bg-black text-xs transition-all hover:text-[#ffca01]'>Sohbete Başla</Link>
                    </div>
                </div>
            </div>
                <div className='col-span-12 lg:col-span-6'>
                    <div className='contact-form w-[420px] max-w-full' style={{
                        backgroundImage: '-webkit-linear-gradient( 90deg, rgb(47,35,52) 2%, rgb(53,44,58) 100%)',
                        borderRadius: '44px',
                    }}>
                    <div className='px-10 pt-10'>
                        <h3 className='pb-5 text-2xl'>İletişim Formu</h3>
                        <hr className='opacity-50'/>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-4 px-10 py-10'>
                            <div className='flex flex-col gap-2'>
                                <label className='!text-white text-sm font-semibold'>Adınız</label>
                                <input type='text' className='w-full px-4 py-3 rounded-md bg-[#615269] text-white' {...register('name', { required: true })} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='!text-white text-sm font-semibold'>E-posta Adresiniz</label>
                                <input type='email' className='w-full px-4 py-3 rounded-md bg-[#615269] text-white' {...register('email', { required: true })} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='!text-white text-sm font-semibold'>Konu</label>
                                <input type='text' className='w-full px-4 py-3 rounded-md bg-[#615269] text-white' {...register('subject', { required: true })} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='!text-white text-sm font-semibold'>Mesajınız</label>
                                <textarea type='text' className='w-full px-4 py-3 rounded-md bg-[#615269] text-white' {...register('message', { required: true })} />
                            </div>
                            <div className='flex flex-col gap-2 pt-3'>
                                <button type='submit' className='w-[200px] max-w-full font-semibold mx-auto px-4 py-3 rounded-3xl bg-[#ffca01] text-black hover:bg-black text-sm transition-all hover:text-[#ffca01]'>Gönder</button>
                            </div>
                        </div>
                    </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


  