export default function Footer() {
    return (
        <footer className="pt-14 text-center">
            <p className="text-sm md:text-base">
                &copy; {new Date().getFullYear()} Ryan Pitman. All rights reserved.
            </p>
        </footer>
    );
}
