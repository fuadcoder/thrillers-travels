import Link from 'next/link';

export default function NavbarItem({title, address, Icon}) {
  return (
    <div className="flex flex-wrap w-full mb-6 border justify-center text-slate-500 bg-white space-x-1 rounded hover:bg-green-500 hover:text-white hover:shadow-xl focus:bg-green-600 focus:shadow-lg transition duration-150 ease-in-out">
      <Link href={address} className="px-8 py-3">
        <Icon className=" mx-auto"/>
        <p className="text-sm">{title}</p>
      </Link>
    </div>
  )
}


