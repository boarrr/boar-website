import Image from "next/image";

export default function ProfilePhoto() {
    return (
        <div className="w-80 md:w-96 lg:w-auto mb-10 lg:mb-14 xl:mr-20">
            <Image
                src="/profile_photo.png"
                width={600}
                height={600}
                className="rounded-full object-contain"
                alt="A photo of Ryan"
                priority
            />
        </div>
    );
}