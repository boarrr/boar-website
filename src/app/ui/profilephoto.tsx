import Image from "next/image";

export default function ProfilePhoto() {
    return (
        <div className="max-w-sm xl:max-w-xl mx-10 mb-10 h-sm:mt-5 lg:mb-14 xl:mr-20">
            <Image
                src="/profile_photo.png"
                width={700}
                height={700}
                className="rounded-full object-contain"
                alt="A photo of Ryan"
                priority
            />
        </div>
    );
}