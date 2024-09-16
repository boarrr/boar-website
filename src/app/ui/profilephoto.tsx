import Image from "next/image";

export default function ProfilePhoto() {
    return (
        <div className="mr-10">
            <Image
                src="/profile_photo.png"
                width={800}
                height={800}
                className="rounded-full object-cover"
                alt="A photo of Ryan"
            />
        </div>
    );
}