import FreeGift from '@/components/free-gift';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface WelcomePageProps {
  params: {
    userId: string;
  };
}

const SERVER_URL = process.env.SERVER_URL;

export default async function WelcomePage({
  params: { userId },
}: WelcomePageProps) {
  const res = await fetch(`${SERVER_URL}/comms/your-next-delivery/${userId}`);

  if (res.status !== 200) {
    return notFound();
  }

  const { title, message, totalPrice, freeGift } = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-neutral-50">
      <div className="rounded-lg border border-neutral-200 bg-white mt-16 relative flex flex-col md:flex-row gap-x-4 md:max-w-3xl">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:hidden">
          <Image
            src="/images/cat.png"
            alt="cat illustration"
            width={54}
            height={54}
            className="object-cover aspect-square rounded-full"
          />
        </div>
        <div className="hidden md:block min-w-[340px] h-auto relative">
          <Image
            fill
            src="/images/cat.png"
            alt="cat illustration"
            className="object-cover rounded-s-lg"
          />
        </div>
        <div className="pr-4 pl-4 py-12 md:pl-0">
          <div className="mx-auto">
            <h1 className="text-center text-xl font-semibold text-green-700 mb-5 md:mb-2 font-sans tracking-tight md:text-left">
              {title}
            </h1>
            <p className="text-center mx-auto text-neutral-500 mb-7 md:mb-4 md:text-left">
              {message}
            </p>
            <p className="text-center mx-auto text-lg font-semibold text-neutral-600 md:text-left">
              <span>{'Total price: '}</span>
              <span>{totalPrice}</span>
            </p>
          </div>
          <div className="flex gap-x-4 mt-6 md:mt-12">
            <Link
              className="border border-transparent flex-1 text-center rounded bg-green-700 text-white font-medium p-2.5 uppercase text-sm"
              href={`/welcome/${userId}/edit`}
            >
              {'See Details'}
            </Link>
            <button className="border border-green-700 flex-1 text-center rounded text-green-700 font-medium p-2.5 uppercase text-sm">
              {'Edit Delivery'}
            </button>
          </div>
        </div>
        {freeGift && (
          <FreeGift className="-bottom-5 left-1/2 -translate-x-1/2 -rotate-6 md:-top-3 md:bottom-auto md:left-auto md:right-0 md:translate-x-2 md:rotate-6" />
        )}
      </div>
    </main>
  );
}
