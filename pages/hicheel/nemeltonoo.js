import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="w-full h-20 bg-white fixed flex items-center justify-between px-24 z-10">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="61" viewBox="0 0 54 61" fill="none">
                        <g clip-path="url(#clip0_2723_46555)">
                            <path d="M42.5104 39.1798L27.3672 48.1756L12.2186 39.1798V34.7942C12.2187 33.8768 11.9696 32.9765 11.498 32.1896C11.0264 31.4026 10.35 30.7585 9.54088 30.3259L0.7229 25.6152V40.4819C0.72319 42.0793 1.13889 43.6492 1.92919 45.0374C2.71948 46.4256 3.85721 47.5844 5.23066 48.4001L22.6655 58.7518C24.0881 59.5973 25.7123 60.0436 27.3672 60.0436C29.0221 60.0436 30.6464 59.5973 32.0689 58.7518L49.5056 48.4001C50.8788 47.5843 52.0163 46.4254 52.8063 45.0372C53.5963 43.649 54.0116 42.0792 54.0115 40.4819V40.2484L42.5176 34.1082L42.5104 39.1798Z" fill="#3A2C81" />
                            <path d="M16.7335 22.6554L28.258 28.7454L38.2846 23.0308L27.5091 17.2964L16.7335 22.6554Z" fill="#6F5ADD" />
                            <path d="M27.5091 29.8231V43.2225L16.0314 36.899V23.4062L27.5091 29.8231Z" fill="#A99CEB" />
                            <path d="M28.4933 29.7783V42.8311L38.2847 36.5705V24.1553L28.4933 29.7783Z" fill="#7D6AE0" />
                            <path d="M49.4984 11.6878L32.0618 1.33427C30.6389 0.489667 29.0147 0.0439453 27.36 0.0439453C25.7053 0.0439453 24.0812 0.489667 22.6583 1.33427L5.22347 11.6878C3.84992 12.5029 2.71207 13.6613 1.92173 15.0493C1.1314 16.4373 0.715767 18.007 0.715698 19.6042V19.9149L12.2096 26.0569V20.9062L27.3672 11.9123L42.5176 20.9062V25.3691C42.5175 26.2868 42.7668 27.1872 43.2387 27.9742C43.7107 28.7612 44.3876 29.4052 45.1971 29.8374L54.0115 34.5481V19.6042C54.0111 18.0064 53.5947 16.4363 52.8034 15.0483C52.0121 13.6602 50.873 12.5021 49.4984 11.6878Z" fill="#6F5ADD" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2723_46555">
                                <rect width="53.2886" height="60" fill="white" transform="translate(0.715698 0.0449219)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className="text-[#4334b4] font-black text-lg ml-4">Буухиа Элч</h1>
                </div>
                <div className="flex items-center space-x-6 w-3/5">
                    <p className="text-sm font-semibold text-indigo-600">Нүүр </p>
                    <p className="text-sm font-semibold text-indigo-600">Үйлчилгээ </p>
                    <p className="text-sm font-semibold text-indigo-600">Бидний Тухай </p>
                    <p className="text-sm font-semibold text-indigo-600">Үйл Ажиллагаа </p>
                    <p className="text-sm font-semibold text-indigo-600">Аппликэйшн </p>
                    <p className="text-sm font-semibold text-indigo-600">Бүсчлэл </p>
                    <p className="text-sm font-semibold text-indigo-600">Коммик </p>
                </div>
                <div className="flex items-center">
                    <p className="text-sm font-semibold text-indigo-600 mr-6">Бүртгүүлэх</p>
                    <div className="w-28 h-11 bg-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">Нэвтрэх</div>
                </div>
            </div>
            <Image className="absolute" src="/home-bg.webp" width={1512} height={790} />
            <div className="pt-20">
                <div className="w-full h-[695px] relative z-10 from-50% bg-gradient-to-l from-[#e5e7ea] to-transparent">
                    <Image className="absolute right-28 top-12" src="/frame.png" width={600} height={500} />
                    <p className="absolute top-44 left-28 text-3xl text-black font-black">ХҮРГЭЛТИЙН<br></br> <span className="text-indigo-600"> АСУУДЛАА</span> БИДЭНД<span className="text-indigo-600"> ДААТГА</span></p>
                    <p className="absolute left-28 top-64 mt-4 text-lg text-black">Та дараах товч дээр дарж хүргэлтээ хаана
                        байгааг шалгах боломжтой.</p>
                    <div className="absolute left-28 bottom-64 w-[220px] h-[45px] bg-indigo-600 rounded-full flex items-center px-6 justify-between">
                        <p className="text-white text-sm font-medium">Хүргэлт шалгах</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="14" viewBox="0 0 48 14" fill="none">
                            <path d="M1 7H47M47 7L41 1M47 7L41 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full h-48 bg-white absolute bottom-0 z-10 flex justify-center">
                <div className="absolute w-[700px] -top-16 h-32 bg-white drop-shadow-lg rounded-xl flex items-center justify-between px-20">
                    <div className="flex items-center">
                        <Image src="/user.png" width={48} height={48} />
                        <p className="text-black text-sm ml-4"><span className="font-semibold text-lg">10 000+</span><br></br>Харилцагч</p>
                    </div>
                    <div className="flex items-center">
                        <Image src="/map.png" width={48} height={48} />
                        <p className="text-black text-sm ml-4"><span className="font-semibold text-lg">30+</span><br></br>Бүсчлэл</p>
                    </div>
                    <div className="flex items-center">
                        <Image src="/send.png" width={48} height={48} />
                        <p className="text-black text-sm ml-4"><span className="font-semibold text-lg">1 000+</span><br></br>Хүргэлт</p>
                    </div>
                </div>
            </div>
        </div>
    );
}