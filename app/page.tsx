import Image from "next/image";
import Navbar from "@/components/Header/Navbar";


export default function Home() {
  return (
    <>
        <header
            style={{
                backgroundImage: `
                linear-gradient(
                    360deg,
                    rgba(0, 0, 0, 0.8500) 8.000%,
                    rgba(0, 0, 0, 0.8465) 15.67%,
                    rgba(0, 0, 0, 0.8361) 23.33%,
                    rgba(0, 0, 0, 0.8187) 31.00%,
                    rgba(0, 0, 0, 0.7944) 38.67%,
                    rgba(0, 0, 0, 0.7632) 46.33%,
                    rgba(0, 0, 0, 0.7250) 54.00%,
                    rgba(0, 0, 0, 0.6868) 61.67%,
                    rgba(0, 0, 0, 0.6556) 69.33%,
                    rgba(0, 0, 0, 0.6312) 77.00%,
                    rgba(0, 0, 0, 0.6139) 84.67%,
                    rgba(0, 0, 0, 0.6035) 92.33%,
                    rgba(0, 0, 0, 0.6000) 100.0%
                ),
                url('/bgImg.jpg')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
            }}
            >
            <Navbar />
            <div className="hero min-h-[92vh]">
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                    <h1 className="mb-5 text-6xl font-extrabold">Unlimited movies, TV shows, and more</h1>
                    <h4 className="mb-5 text-xl font-medium">
                        Starts at USD 2.99. Cancel anytime.
                    </h4>
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded">Get Started</button>
                    </div>
                </div>
            </div>
        </header>
        <div className="overflow-hidden relative h-[6.25rem] z-10 -mt-24">
            <div className="custom-bg-radial"></div>
        </div>
        <main>

            <section className="-mt-20 relative z-20">
                <div className="container mx-auto py-10 px-2">
                    <h2 className="text-3xl font-medium text-white mb-6">Trending Now</h2>

                    <div className="grid grid-cols-4 gap-4">
                        <div className="card">
                            <div className="card-image">
                                <Image
                                    src="/Netflix_Logo_RGB.png"
                                    alt="Netflix Logo"
                                    width={150}
                                    height={80}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">Welcome to Netflix Clone</h2>
                                <p className="text-sm">This is a simple Netflix clone built with Next.js, Clerk for authentication, and ImageKit for image uploads.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <Image
                                    src="/Netflix_Logo_RGB.png"
                                    alt="Netflix Logo"
                                    width={150}
                                    height={80}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">Welcome to Netflix Clone</h2>
                                <p className="text-sm">This is a simple Netflix clone built with Next.js, Clerk for authentication, and ImageKit for image uploads.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <Image
                                    src="/Netflix_Logo_RGB.png"
                                    alt="Netflix Logo"
                                    width={150}
                                    height={80}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">Welcome to Netflix Clone</h2>
                                <p className="text-sm">This is a simple Netflix clone built with Next.js, Clerk for authentication, and ImageKit for image uploads.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <Image
                                    src="/Netflix_Logo_RGB.png"
                                    alt="Netflix Logo"
                                    width={150}
                                    height={80}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">Welcome to Netflix Clone</h2>
                                <p className="text-sm">This is a simple Netflix clone built with Next.js, Clerk for authentication, and ImageKit for image uploads.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
}
