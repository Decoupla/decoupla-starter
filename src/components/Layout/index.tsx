import React from 'react';

const Layout: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <header className="bg-[#212121] text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Decoupla Starter</h1>
            </header>
            <main className="flex flex-col flex-grow">
                <div className="container mx-auto p-4">
                    {children}
                </div>
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                © {new Date().getFullYear()} Decoupla Starter
            </footer>
        </div>
    );
};

export default Layout;