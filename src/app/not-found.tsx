// 404 Page

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4"> 404 | Page Not Found</h1>
            <p className="text-lg mb-6">Sorry, we couldn't find the page you're looking for.</p>
            <a href="/" className="text-red-400 font-bold underline">
                Go back to Home
            </a>
        </div>
    );
}