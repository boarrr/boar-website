import Image from "next/image";

export default function ProfilePhoto() {
    return (
        <div className="mr-28">
            <Image
                src="/profile_photo.png"
                width={600}
                height={600}
                className="rounded-full object-cover"
                alt="A photo of Ryan"
            />
        </div>
    );
}